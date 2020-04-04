<template>
  <div id="app">
    <pageHeader />
     <router-view />
  </div>
</template>

<script>
import pageHeader from "./components/pageHeader.vue";


export default {
  name: "App",
  components: {
    pageHeader,
  },
  computed: {},
  methods: {}
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
