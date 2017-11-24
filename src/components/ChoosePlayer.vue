<template>
  <div class='choose-player-component'>
    <p>Choose your player:</p>

    <button class='axe-warrior' @click='playerType("axe-warrior")'></button>
    <button class='spear-warrior' @click='playerType("spear-warrior")'></button>
    <button class='sword-warrior' @click='playerType("sword-warrior")'></button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      warrior: null
    }
  },
  methods: mapActions(['playerType'])
}
</script>

<style lang='scss' scoped>
button {
  border: none;
  cursor: pointer;
}

.axe-warrior {
  background: url('../assets/images/players/axe-warrior/idle.png');
  height: 103px;
  width: 106px;
}

.spear-warrior {
  background: url('../assets/images/players/spear-warrior/idle.png');
  height: 103px;
  width: 146px;
}

.sword-warrior {
  background: url('../assets/images/players/sword-warrior/idle.png');
  height: 103px;
  width: 114px;
}
</style>
