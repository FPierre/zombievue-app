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

/*.left {
  transform: scaleX(-1);
}

.right {
  transform: scaleX(1);
}*/

.left {
  transform: rotateY(180deg);
  transform-origin: 45px;
}

/*.right {
  transform: rotateY(-180deg);
  transform-origin: 100px;
}*/

.walk {
  animation: undead-walk .65s steps(6) infinite;
  background: url('../assets/undead-walk.png');
  height: 189px;
  width: 92px;
}

@keyframes undead-walk {
  100% {
    background-position: -617px;
  }
}
</style>
