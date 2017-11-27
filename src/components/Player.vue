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
    animation: axe-warrior-idle .65s steps(7) infinite;
    background: url('../assets/images/players/axe-warrior/idle.png');
    height: 100px;
    width: 114px;
  }

  &.spear-warrior {
    animation: spear-warrior-idle .65s steps(7) infinite;
    background: url('../assets/images/players/spear-warrior/idle.png');
    height: 103px;
    width: 146px;
  }

  &.sword-warrior {
    animation: sword-warrior-idle .65s steps(7) infinite;
    background: url('../assets/images/players/sword-warrior/idle.png');
    height: 100px;
    width: 120px;
  }
}

@keyframes axe-warrior-idle {
  100% {
    background-position: -833px;
  }
}

@keyframes spear-warrior-idle {
  100% {
    background-position: -1022px;
  }
}

@keyframes sword-warrior-idle {
  100% {
    background-position: -833px;
  }
}

.walk {
  &.axe-warrior {
    animation: axe-warrior-walk .65s steps(7) infinite;
    background: url('../assets/images/players/axe-warrior/walk.png');
    height: 100px;
    width: 115px;
  }

  &.spear-warrior {
    animation: spear-warrior-walk .65s steps(7) infinite;
    background: url('../assets/images/players/spear-warrior/walk.png');
    height: 106px;
    width: 148px;
  }

  &.sword-warrior {
    animation: sword-warrior-walk .65s steps(7) infinite;
    background: url('../assets/images/players/sword-warrior/walk.png');
    height: 100px;
    width: 118px;
  }
}

@keyframes axe-warrior-walk {
  100% {
    background-position: -847px;
  }
}

@keyframes spear-warrior-walk {
  100% {
    background-position: -1036px;
  }
}

@keyframes sword-warrior-walk {
  100% {
    background-position: -839px;
  }
}

.attack {
  &.axe-warrior {
    animation: axe-warrior-attack .65s steps(7) infinite;
    background: url('../assets/images/players/axe-warrior/attack.png');
    height: 100px;
    width: 100px;
  }

  &.spear-warrior {
    animation: spear-warrior-attack .65s steps(8) infinite;
    background: url('../assets/images/players/spear-warrior/attack.png');
    height: 110px;
    width: 164px;
  }

  &.sword-warrior {
    animation: sword-warrior-attack .65s steps(7) infinite;
    background: url('../assets/images/players/sword-warrior/attack.png');
    height: 100px;
    width: 116px;
  }
}

@keyframes axe-warrior-attack {
  100% {
    background-position: -707px;
  }
}

@keyframes spear-warrior-attack {
  100% {
    background-position: -1312px;
  }
}

@keyframes sword-warrior-attack {
  100% {
    background-position: -812px;
  }
}
</style>
