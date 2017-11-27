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
  background-color: #cc0000;
  border-radius: .2em;
  border: 1px solid #990000;
  font-size: .9em;
  line-height: 12px;
  text-align: center;
}
</style>
