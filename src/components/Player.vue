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
  display: inline-block;
  height: 50px;
  position: absolute;
  top: 245px;
  width: 20px;
  // background-color: green;
}

.undead {
  background-image: url('../assets/player-1.png');
  background-repeat: no-repeat;
}

.left {
  background-position: -115px -495px;
  height: 100px;
  width: 50px;
}

.right {
  background-position: -115px -495px;
  height: 100px;
  transform: scaleX(-1);
  width: 50px;
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
