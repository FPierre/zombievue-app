<template>
  <div class='hero-component' :style='{ marginLeft: `${x}px` }'></div>
</template>

<script>
export default {
  name: 'hero',
  sockets: {
    moved: (xPosition) => {
      console.log(this)
      console.log('xPosition: ', xPosition)
      console.log('this.x: ', this.x)
      this.x = xPosition
      console.log('this.x: ', this.x)
    }
  },
  data () {
    return {
      x: 100
    }
  },
  mounted () {
    window.addEventListener('keydown', this.action)
  },
  methods: {
    action (e) {
      // console.log(e)

      switch (e.code) {
        case 'ArrowLeft':
          this.moveLeft()
          break
        case 'ArrowRight':
          this.moveRight()
          break
        case 'Space':
          this.fire()
          break
      }
    },
    moveLeft () {
      // console.log('moveLeft')
      const x = this.x + 3
      this.$socket.emit('move', x)
    },
    moveRight () {
      // console.log('moveRight')
      const x = this.x - 3
      console.log('moveRight: ', x)
      this.$socket.emit('move', x)
    },
    attack () {
      // console.log('attack')
    }
  }
}
</script>

<style scoped>
.hero-component {
  position: absolute;
  display: inline-block;
  width: 20px;
  height: 50px;
  background-color: red;
}
</style>
