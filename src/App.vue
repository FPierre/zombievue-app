<template>
  <div id='app'>
    Connected: {{ connected }}
    Players: {{ players }}
    <!-- <div class='sky'></div> -->

    <div id='game'>
      <div class='street'>
        <hero></hero>
        <undead v-for='params in undeads' :params='params' :key='params'></undead>
      </div>
    </div>

    <button @click='join'>Join</button>

    <!-- <div class='floor'></div> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import Hero from './components/Hero'
import Undead from './components/Undead'

export default {
  name: 'app',
  computed: {
    ...mapGetters({
      connected: 'connected',
      players: 'players',
      undeads: 'undeads'
    })
  },
  methods: {
    join () {
      this.$socket.emit('join')
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
  width: 800px;
  border: 1px solid black;
}

.sky {
  flex-grow: 1;
  background-color: blue;
}

.street {
  height: 200px;
}

.floor {
  flex-grow: 1;
  background-color: #ccc;
}
</style>
