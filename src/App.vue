<template>
  <div id='app'>
    <hero></hero>
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
  border-bottom: 50px solid #ccc;
}
</style>
