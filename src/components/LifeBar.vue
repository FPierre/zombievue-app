<template>
  <div class='life-bar-component' :style='{ width: `${health}px` }'>{{ health }}</div>
</template>

<script>
export default {
  props: ['health']
}
</script>

<style scoped>
.life-bar-component {
  height: 11px;
  text-align: center;
  font-size: .7em;
  background-color: #cc0000;
  border: 1px solid #990000;
  border-radius: .2em;
}
</style>
