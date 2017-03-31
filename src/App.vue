<template>
  <div id='app'>
    Connected: {{ connected }}
    <!-- <div class='sky'></div> -->

    <div id='game'>
      <div class='street'>
        <hero></hero>
        <undead v-for='params in undeads' :params='params' :key='params'></undead>
      </div>
    </div>

    <!-- <div class='floor'></div> -->
  </div>
</template>

<script>
import bus from './bus'

import Hero from './components/Hero'
import Undead from './components/Undead'

export default {
  name: 'app',
  sockets: {
    connected: () => {
      this.connected = true
    },
    hello: (val) => {
      console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
    }
  },
  data () {
    return {
      connected: false,
      undeads: []
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.$socket.emit('connect')

      // const directions = ['left', 'right']

      // setInterval(() => this.loop(directions), 300)
    },
    // Main game loop
    // Manage undeads actions only
    loop (directions) {
      // console.log('loop')

      // 1 chance in 2
      if (Math.floor(Math.random() * 2)) {
        // 1 chance in 2
        const direction = directions[Math.floor(Math.random() * 2)]

        this.undeads.push({
          direction: direction
        })
      }

      bus.$emit('move')
    }
  },
  components: {
    Hero,
    Undead
  }
}
</script>

<style>
#game {
  /*display: flex;*/
  /*flex-direction: column;*/
  /*height: 300px;*/
  width: 800px;
  border: 1px solid black;
}

.sky {
  flex-grow: 1;
  background-color: blue;
}

.street {
  /*display: flex;*/
  /*flex-direction: row;*/
  /*flex-wrap: wrap;*/
  /*align-items: flex-end;*/
  height: 200px;
}

.floor {
  flex-grow: 1;
  background-color: #ccc;
}
</style>
