<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Launches v-if="launches.length > 0" :launches="launches" />
  </div>
</template>

<script>
import Launches from './components/Launches.vue'
import { getLaunches } from './services/spacexService'

export default {
  name: 'App',
  components: {
    Launches
  },
  data: () => ({
    launches: [],
  }),
  mounted() {
    getLaunches().then(response => {
      this.launches = response
    });
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
