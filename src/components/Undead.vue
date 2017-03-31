<template>
  <div class='undead-component' :style='{ marginLeft: `${x}px` }'></div>
</template>

<script>
import bus from '../bus'

export default {
  props: ['params'],
  data () {
    return {
      x: this.params['direction'] === 'left' ? 800 : 0
    }
  },
  mounted () {
    bus.$on('move', () => {
      console.log('move')

      // TODO: extract condition from loop
      if (this.params['direction'] === 'left') {
        this.moveLeft()
      } else {
        this.moveRight()
      }
    })
  },
  methods: {
    moveLeft () {
      console.log('moveLeft')
      this.x -= 2
    },
    moveRight () {
      console.log('moveRight')
      this.x += 2
    },
    attack () {
      // console.log('attack')
    }
  }
}
</script>

<style scoped>
.undead-component {
  position: absolute;
  display: inline-block;
  width: 20px;
  height: 50px;
  background-color: green;
}
</style>
