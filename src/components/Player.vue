<template>
  <div class='player-component' :style='{ marginLeft: `${params.x}px` }'>
    <div class='player' :class='[params.direction, params.state]'></div>
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
  // display: inline-block;
  // height: 50px;
  // position: absolute;
  // top: 245px;
  // width: 20px;
  // background-color: green;
}

.player {

}

.left {
  transform: scaleX(-1);
}

.right {
  transform: scaleX(1);
}

.idle {
  animation: idle .65s steps(7) infinite;
  background: url('../assets/player-idle.png') -10px -10px;
  height: 103px;
  width: 146px;
}

@keyframes idle {
  100% {
    background-position: -1162px;
  }
}

.walk {
  animation: walk .65s steps(7) infinite;
  background: url('../assets/player-walk.png') -10px -10px;
  height: 106px;
  width: 148px;
}
@keyframes walk {
  100% {
    background-position: -1176px;
  }
}


/*
.player-component {
  position: absolute;
  bottom: 45px;
  width: 20px;
  height: 50px;
  z-index: 9999;
}
*/

.player-component .life-bar {
  position: absolute;
  bottom: -40px;
  left: -40px;
}
</style>
