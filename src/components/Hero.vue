<template>
  <div class='hero-component'>
    <div id='hero' :style='{ marginLeft: `${x}px` }'></div>
  </div>
</template>

<script>
export default {
  name: 'hello',
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
      this.x -= 3
    },
    moveRight () {
      // console.log('moveRight')
      this.x += 3
    },
    fire () {
      // console.log('fire')
    }
  }
}
</script>

<style scoped>
.hero-component #hero {
  width: 20px;
  height: 50px;
  background-color: red;
}
</style>
