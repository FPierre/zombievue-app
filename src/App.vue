<template>
  <div id='app'>
    <h1>Zombie Vue</h1>

    <div class='controls'>
      <p>Connected: {{ connected }}</p>
      <p>Survivors: {{ playersCount }}</p>

      <button @click='join'>Join</button>
    </div>

    <div id='game'>
      <div class='moon'></div>
      <div v-for='i in 10' class='star' :class='"twinkle-star-" + i'></div>
      <div class='grass'></div>
      <div class='street'></div>

      <template v-if='joined'>
        <player v-for='params in players' :params='params' :key='params'></player>
        <undead v-for='params in undeads' :params='params' :key='params.id'></undead>
      </template>

      <div class='street-stripe'></div>
      <div class='hill'></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Player from '@/components/Player'
import Undead from '@/components/Undead'

export default {
  name: 'app',
  computed: {
    ...mapGetters([
      'connected',
      'joined',
      'id',
      'players',
      'undeads',
      'playersCount'
    ])
  },
  mounted () {
    window.addEventListener('keydown', this.action)
  },
  methods: {
    join () {
      // if (!this.connected) {
      this.$socket.emit('join')
      console.log('join')
      // }
    },
    action (e) {
      switch (e.code) {
        case 'ArrowLeft':
          this.$socket.emit('moveLeft', this.id)
          break
        case 'ArrowRight':
          this.$socket.emit('moveRight', this.id)
          break
        case 'Space':
          break
      }
    }
  },
  components: {
    Player,
    Undead
  }
}
</script>

<style lang='scss'>
body {
  margin: 0;
  padding: 0;
  color: #fff;
  background: #111122;
}

@font-face {
  font-family: 'DeadFontWalking';
  src: url('./assets/fonts/DeadFontWalking.eot');
  src: url('./assets/fonts/DeadFontWalking.woff2') format('woff2'),
       url('./assets/fonts/DeadFontWalking.ttf') format('truetype'),
       url('./assets/fonts/DeadFontWalking.eot?#iefix') format('embedded-opentype');
  font-weight: normal;
  font-style: normal;
}

h1 {
  font: {
    size: 4.6em;
    weight: normal;
    family: 'DeadFontWalking', arial;
  }
  text-align: center;
}

.controls {
  width: 240px;
  margin: 0 auto;
  font-size: 1.2em;

  button {
    margin: .5em;
    padding: .4em 1.5em;
    font-size: 1em;
    color: #fff;
    background: none;
    border: 2px solid #fff;
    border-radius: .1em;
    outline: none;

    &:hover {
      color: #111122;
      background-color: #fff;
    }
  }
}

#game {
  position: relative;
  width: 800px;
  height: 400px;
  margin: 40px auto 0;
  overflow: hidden;
}

.moon {
  position: absolute;
  bottom: 330px;
  left: 70%;
  width: 40px;
  height: 40px;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 0 50px rgba(255, 255, 255, 0.7);
}

.star {
  width: 2px;
  height: 2px;
  background: #fff;
  box-shadow: 0 0 3px #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  border-radius: 50%;
}

@for $i from 1 through 10 {
  $left: random(100);
  $top: random(30);
  $size: random(2) + 1;
  $animationDelay: ($top / $left);
  $animationDuration: ($size / 4);

  .twinkle-star-#{$i} {
    width: $size + px;
    height: $size + px;
    left: percentage($left / 100);
    top: percentage($top / 100);
    animation: twinkle #{$animationDuration}s alternate infinite;
    animation-delay: $animationDelay+s;
  }
}

@keyframes twinkle {
  0% {
    opacity: .5;
  }
  100% {
    opacity: 1;
  }
}

.street {
  background: #7a7a7a url(data:image/png;base64,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);
  position: absolute;
  bottom: 0;
  width: 102%;
  height: 80px;
  box-shadow: 0 1px 16px rgba(111, 35, 51, 0.4) inset;

  &:before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 7px;
    background: #c2a99d;
    bottom: -7px;
    z-index: 1;
  }

  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 10px;
    background: #cdbcb4;
    bottom: 0;
    border-bottom: 3px solid #72625a;
    z-index: 1;
  }
}

.street-stripe {
  background: #d4d4d4;
  height: 8px;
  width: 100px;
  position: absolute;
  bottom: 44px;
  border-radius: 2px;
  box-shadow: 200px 0 0 #d4d4d4, 400px 0 0 #d4d4d4, 600px 0 0 #d4d4d4, 800px 0 0 #d4d4d4, 1000px 0 0 #d4d4d4, 1200px 0 0 #d4d4d4, 1400px 0 0 #d4d4d4, 1600px 0 0 #d4d4d4, 1800px 0 0 #d4d4d4, 2000px 0 0 #d4d4d4;
}

.grass {
  height: 40px;
  width: 100%;
  background-color: #dbcac2;
  position:absolute;
  bottom:60px;

  &:before {
    position: absolute;
    content: '';
    top: 14px;
    left: 0;
    height: 8px;
    width: 100%;
    background-color: #b99f93;
  }
}

.hill {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 250px;
  border-top-right-radius: 0%;
  border-top-left-radius: 100%;
  background-color: darken(#adde60, 30%);
  z-index:-1;
  box-shadow: 10px 0 10px #cbf191 inset;

  &:before {
    background-color: darken(#93cc3a, 22%);
    border-top-left-radius: 0;
    border-top-right-radius: 100%;
    bottom: -70px;
    content: "";
    height: 110%;
    left: -54px;
    position: absolute;
    transform: rotate(4deg);
    width: 120%;
    box-shadow: 0 0 25px #cbf191 inset;
  }

  &:after {
    content: '';
    position: absolute;
    bottom: -100px;
    right: -400px;
    width: 120%;
    height: 110%;
    border-top-right-radius: 100%;
    border-top-left-radius: 0%;
    background-color: darken(#94c943, 20%);
    -moz-transform: rotate(-12deg);
    -webkit-transform: rotate(-12deg);
    box-shadow: 0 0 25px #cbf191 inset;
  }
}
</style>
