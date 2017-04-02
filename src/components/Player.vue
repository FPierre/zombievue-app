<template>
  <div class='player-component' :style='{ marginLeft: `${params.x}px`, backgroundColor: params.color }'></div>
</template>

<script>
export default {
  props: ['params']
}
</script>

<style scoped>
.player-component {
	position:absolute;
	bottom: 45px;
  width: 20px;
  height: 50px;
  z-index: 9999;
}
</style>
