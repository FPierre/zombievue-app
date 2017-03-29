<template>
  <div id='app'>
    <div class='sky'></div>

    <div class='street'>
      <hero></hero>
    </div>

    <div class='floor'></div>
  </div>
</template>

<script>
import Hero from './components/Hero'

export default {
  name: 'app',
  components: {
    Hero
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 800px;
  border: 1px solid black;
}

.sky {
  flex-grow: 1;
  background-color: blue;
}

.street {
  flex-grow: 2;
}

.floor {
  flex-grow: 1;
  background-color: #ccc;
}
</style>
