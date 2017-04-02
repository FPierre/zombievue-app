<template>
  <div class='undead-component' :style='{ marginLeft: `${params.x}px` }'></div>
</template>

<script>
export default {
  props: ['params']
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
