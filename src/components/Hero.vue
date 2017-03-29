<template>
  <div class='hello-component'>
  </div>
</template>

<script>
export default {
  name: 'hello',
  mounted () {
    window.addEventListener('keyup', this.action)
  },
  methods: {
    action (e) {
      // console.log(e)

      switch (e.code) {
        case 'ArrowLeft': this.moveLeft()
          break
        case 'ArrowRight': this.moveRight()
          break
        case 'Space': this.fire()
          break
      }
    },
    moveLeft () {
      console.log('moveLeft')
    },
    moveRight () {
      console.log('moveRight')
    },
    fire () {
      console.log('fire')
    }
  }
}
</script>

<style scoped>
.hello-component {
  width: 20px;
  height: 50px;
  background-color: red;
}
</style>
