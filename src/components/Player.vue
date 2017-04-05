<template>
  <div class='player-component' :style='{ marginLeft: `${params.x}px`, backgroundColor: params.color }'>
    <life-bar class='life-bar' :health='params.health'></life-bar>
  </div>
</template>

<script>
import LifeBar from './LifeBar'

export default {
  props: ['params'],
  components: { LifeBar }
}
</script>

<style scoped>
.player-component {
	position: absolute;
	bottom: 45px;
  width: 20px;
  height: 50px;
  z-index: 9999;
}

.player-component .life-bar {
  position: absolute;
  bottom: -40px;
  left: -40px;
}
</style>
