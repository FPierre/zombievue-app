<template>
  <div class='undead-component undead' :class='params.direction' :style='{ marginLeft: `${params.x}px` }'></div>
</template>

<script>
export default {
  props: ['params'],
  created () {
    console.log('component Undead created')
  }
}
</script>

<style scoped>
.undead-component {
  display: inline-block;
  height: 50px;
  position: absolute;
  top: 245px;
  width: 20px;
  // background-color: green;
}

.undead {
  background-image: url('../assets/undead-1.png');
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
</style>
