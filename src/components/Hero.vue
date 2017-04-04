<template>
  <div class='hero-component' :style='{ marginLeft: `${x}px`,  backgroundColor: color }'></div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      id: 'id',
      x: 'x',
      health: 'health',
      color: 'color'
    })
  },
  mounted () {
    window.addEventListener('keydown', this.action)
  },
  methods: {
    action (e) {
      switch (e.code) {
        case 'ArrowLeft':
          this.$socket.emit('moveLeft', { id: this.id, x: this.x })
          break
        case 'ArrowRight':
          this.$socket.emit('moveRight', { id: this.id, x: this.x })
          break
        case 'Space':
          break
      }
    }
  }
}
</script>

<style scoped>
.hero-component {
	position: absolute;
	bottom: 45px;
  width: 20px;
  height: 50px;
  z-index: 9999;
}
</style>
