<template>
  <div class='undead-component' :style='{ marginLeft: `${params.x}px` }'>
    <div class='undead' :class='[params.direction, params.state]'></div>
  </div>
</template>

<script>
export default {
  props: ['params']
}
</script>

<style scoped>
.undead-component {
  position: absolute;
  bottom: 74px;
}

.right {
  transform: rotateY(-180deg);
  /*transform-origin: 100px;*/
}

.walk {
  animation: undead-walk .65s steps(6) infinite;
  background: url('../assets/images/undeads/standard-undead/walk.png');
  height: 106px;
  width: 55px;
}

@keyframes undead-walk {
  100% {
    background-position: -342px;
  }
}
</style>
