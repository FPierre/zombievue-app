<template>
  <div id='app'>
    <h1 :class='{ "hit": hit }'>Zombie Vue</h1>

    <div id='game'>
      <template v-if='joined'>
        <div class='moon'></div>
        <div v-for='i in 10' class='star' :class='`twinkle-star-${i}`'></div>
        <div class='grass'></div>
        <div class='ground'></div>

        <template v-if='joined'>
          <player v-for='params in players' :params='params' :key='params.id'></player>
          <undead v-for='params in undeads' :params='params' :key='params.id'></undead>
        </template>

        <div class='hill'></div>
      </template>

      <template v-else>
        <div class='controls'>
          <span>Connected: {{ connected }}</span>
          <span>Joined: {{ joined }}</span>

          <choose-player></choose-player>

          <button class='btn' @click='join'>Join</button>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ChoosePlayer from '@/components/ChoosePlayer'
import Player from '@/components/Player'
import Undead from '@/components/Undead'

export default {
  name: 'app',
  computed: mapState([
    'client',
    'connected',
    'hit',
    'id',
    'joined',
    'players',
    'undeads'
  ]),
  created () {
    this.client.onerror = () => {
      console.log('Client: connection error')
    }

    this.client.onopen = () => {
      console.log('Client: websocket client connected')
      this.$store.dispatch('connected')
    }

    this.client.onclose = () => {
      console.log('Client: echo-protocol client closed')
      this.$store.dispatch('disconnected')
    }

    this.client.onmessage = e => {
      if (typeof e.data === 'string') {
        // console.log(`Client: received: '${e.data}'`)

        const { event, data } = JSON.parse(e.data)
        console.log(event)

        this.$store.dispatch(event, data)
      }
    }
  },
  mounted () {
    window.addEventListener('keydown', this.action)
    window.addEventListener('keyup', this.inaction)
  },
  methods: {
    join () {
      if (this.connected && !this.joined) {
        this.$store.dispatch('join')
      }
    },
    action (e) {
      switch (e.code) {
        case 'ArrowLeft':
          this.$store.dispatch('moveLeft', this.id)
          break
        case 'ArrowRight':
          this.$store.dispatch('moveRight', this.id)
          break
        case 'Space':
          this.$store.dispatch('attack', this.id)
          break
      }
    },
    inaction (e) {
      const { code } = e

      // OPTMIZE: with `includes`
      if (code === 'ArrowLeft' ||
          code === 'ArrowRight' ||
          code === 'Space') {
        this.$store.dispatch('idle', this.id)
      }
    }
  },
  components: {
    ChoosePlayer,
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
  color: #fff;
  font: {
    family: 'DeadFontWalking', arial;
    size: 4.6em;
    weight: normal;
  }
  text-align: center;

  &.hit {
    animation: color-change .3s;
  }
}

@keyframes color-change {
  0% {
    color: #fff;
  }

  100% {
    color: red;
  }
}

.controls {
  font-size: 1.2em;
}

.btn {
  background: none;
  border-radius: .1em;
  border: 2px solid #fff;
  color: #fff;
  font-size: 1em;
  margin: .5em;
  outline: none;
  padding: .3em 1.3em;

  &:hover {
    background-color: #fff;
    color: #111122;
  }
}

#game {
  border: 1px solid #fff;
  height: 400px;
  margin: 40px auto 0;
  overflow: hidden;
  position: relative;
  width: 800px;
}

.moon {
  background: #fff;
  border-radius: 50%;
  bottom: 330px;
  box-shadow: 0 0 50px rgba(255, 255, 255, .7);
  height: 40px;
  left: 70%;
  position: absolute;
  width: 40px;
}

.star {
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 0 3px #fff;
  height: 2px;
  left: 50%;
  position: absolute;
  top: 50%;
  width: 2px;
}

@for $i from 1 through 10 {
  $left: random(100);
  $top: random(30);
  $size: random(2) + 1;
  $animationDelay: ($top / $left);
  $animationDuration: ($size / 4);

  .twinkle-star-#{$i} {
    animation-delay: $animationDelay+s;
    animation: twinkle #{$animationDuration}s alternate infinite;
    height: $size + px;
    left: percentage($left / 100);
    top: percentage($top / 100);
    width: $size + px;
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
  bottom: 0;
  box-shadow: 0 1px 16px rgba(111, 35, 51, .4) inset;
  height: 75px;
  position: absolute;
  width: 100%;
}

.hill {
  background-color: darken(#adde60, 30%);
  border-top-left-radius: 100%;
  border-top-right-radius: 0%;
  bottom: 0;
  box-shadow: 10px 0 10px #cbf191 inset;
  height: 250px;
  position: absolute;
  right: 0;
  width: 100%;
  z-index:-1;

  &:before {
    background-color: darken(#93cc3a, 22%);
    border-top-left-radius: 0;
    border-top-right-radius: 100%;
    bottom: -70px;
    box-shadow: 0 0 25px #cbf191 inset;
    content: "";
    height: 110%;
    left: -54px;
    position: absolute;
    transform: rotate(4deg);
    width: 120%;
  }

  &:after {
    -moz-transform: rotate(-12deg);
    -webkit-transform: rotate(-12deg);
    background-color: darken(#94c943, 20%);
    border-top-left-radius: 0%;
    border-top-right-radius: 100%;
    bottom: -100px;
    box-shadow: 0 0 25px #cbf191 inset;
    content: '';
    height: 110%;
    position: absolute;
    right: -400px;
    width: 120%;
  }
}
</style>
