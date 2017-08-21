<template>
  <div id='app'>
    <h1>Zombie Vue</h1>

    <div class='controls'>
      <span>Connected: {{ connected }}</span>
      <span>Joined: {{ joined }}</span>
      <button @click='join'>Join</button>
    </div>

    <div id='game'>
      <div class='moon'></div>
      <div v-for='i in 10' class='star' :class='`twinkle-star-${i}`'></div>
      <div class='grass'></div>
      <div class='ground'></div>

      <template v-if='joined'>
        <player v-for='params in players' :params='params' :key='params.id'></player>
        <undead v-for='params in undeads' :params='params' :key='params.id'></undead>
      </template>

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
      'undeads'
    ])
  },
  mounted () {
    window.addEventListener('keydown', this.action)
    window.addEventListener('keyup', this.inaction)
  },
  methods: {
    join () {
      if (!this.joined) {
        this.$socket.emit('join')
      }
    },
    action (e) {
      switch (e.code) {
        case 'ArrowLeft':
          this.$socket.emit('left', this.id)
          break
        case 'ArrowRight':
          this.$socket.emit('right', this.id)
          break
        case 'Space':
          this.$socket.emit('attack', this.id)
          break
      }
    },
    inaction (e) {
      // OPTMIZE
      if (e.code === 'ArrowLeft' ||
          e.code === 'ArrowRight' ||
          e.code === 'Space') {
        this.$socket.emit('idle', this.id)
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
  background-color: #111122;
  color: #fff;
  margin: 0;
  padding: 0;
}

@font-face {
  font: {
    family: 'DeadFontWalking';
    style: normal;
    weight: normal;
  };
  src: url('./assets/fonts/DeadFontWalking.eot');
  src: url('./assets/fonts/DeadFontWalking.woff2') format('woff2'),
       url('./assets/fonts/DeadFontWalking.ttf') format('truetype'),
       url('./assets/fonts/DeadFontWalking.eot?#iefix') format('embedded-opentype');
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
  font-size: 1.2em;
  margin: 0 auto;
  width: 240px;

  button {
    color: #fff;
    background: none;
    border: 2px solid #fff;
    border-radius: .1em;
    font-size: 1em;
    margin: .5em;
    padding: .4em 1.5em;
    outline: none;

    &:hover {
      background-color: #fff;
      color: #111122;
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
  box-shadow: 0 0 50px rgba(255, 255, 255, .7);
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

.ground {
  background-color: #ba8657;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 75px;
  box-shadow: 0 1px 16px rgba(111, 35, 51, .4) inset;
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
