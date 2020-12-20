<template>
  <div id="app">
    <router-view/>
    <parse-token/>
  </div>
</template>

<script>
import ParseToken from './views/develop/components/token.vue';

export default {
  name: 'App',
  components: {
  ParseToken,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
