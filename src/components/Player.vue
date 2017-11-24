<template>
  <div class='player-component' :style='{ marginLeft: `${params.x}px` }'>
    <div class='player' :class='[params.direction, params.state, params.type]'></div>
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

<style lang='scss' scoped>
.player-component {
  position: absolute;
  bottom: 74px;
}

.life-bar {
  position: absolute;
  bottom: -30px;
}

.left {
  transform: rotateY(180deg);
  transform-origin: 45px;
}

.right {
  /*transform: rotateY(-180deg);*/
  /*transform-origin: 100px;*/
}

.idle {
  &.axe-warrior {
    animation: player-idle .65s steps(7) infinite;
    background: url('../assets/images/players/axe-warrior/idle.png');
    height: 103px;
    width: 146px;
  }

  &.spear-warrior {
    animation: player-idle .65s steps(7) infinite;
    background: url('../assets/images/players/spear-warrior/idle.png');
    height: 103px;
    width: 146px;
  }

  &.sword-warrior {
    animation: player-idle .65s steps(7) infinite;
    background: url('../assets/images/players/sword-warrior/idle.png');
    height: 103px;
    width: 146px;
  }
}

@keyframes player-idle {
  100% {
    background-position: -1022px;
  }
}

.walk {
  animation: player-walk .65s steps(7) infinite;
  background: url('../assets/images/players/spear-warrior/walk.png');
  height: 106px;
  width: 148px;
}

@keyframes player-walk {
  100% {
    background-position: -1036px;
  }
}

.attack {
  animation: player-attack .65s steps(8) infinite;
  background: url('../assets/images/players/spear-warrior/attack.png');
  height: 110px;
  width: 164px;
}

@keyframes player-attack {
  100% {
    background-position: -1312px;
  }
}
</style>
