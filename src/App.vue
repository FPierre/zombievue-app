<template>
  <div id='app'>
    <div class='sky'></div>

    <div class='street'>
      <hero></hero>
      <undead v-for='direction in undeads' :direction='direction' :key='undead'></undead>
    </div>

    <div class='floor'></div>
  </div>
</template>

<script>
import Hero from './components/Hero'
import Undead from './components/Undead'

export default {
  name: 'app',
  data () {
    return {
      undeads: []
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      const directions = ['left', 'right']

      setInterval(() => this.loop(directions), 100000)
    },
    loop (directions) {
      // console.log('loop')
      const direction = directions[Math.floor(Math.random() * 2)]
      this.undeads.push({ direction: direction })
    }
  },
  components: {
    Hero,
    Undead
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 800px;
  border: 1px solid black;
}

.sky {
  flex-grow: 1;
  background-color: blue;
}

.street {
  flex-grow: 2;
}

.floor {
  flex-grow: 1;
  background-color: #ccc;
}
</style>
