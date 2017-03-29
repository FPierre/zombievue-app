<template>
  <div class='undead-component'>
    <div :style='{ marginLeft: `${x}px` }'></div>
  </div>
</template>

<script>
export default {
  props: ['direction'],
  data () {
    return {
      x: this.direction === 'left' ? 800 : 0
    }
  },
  mounted () {
    if (this.direction === 'left') {
      this.moveLeft()
    } else {
      this.moveRight()
    }
  },
  methods: {
    moveLeft () {
      // console.log('moveLeft')
      this.x -= 2
    },
    moveRight () {
      // console.log('moveRight')
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
  width: 20px;
  height: 50px;
  background-color: green;
}
</style>
