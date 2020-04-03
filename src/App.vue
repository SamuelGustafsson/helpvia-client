<template>
  <div id="app">
    <pageHeader />
    <startpage v-if="!showMissions" />
    <missions v-else />
  </div>
</template>

<script>
import startpage from "./components/startpage.vue";
import pageHeader from "./components/pageHeader.vue";
import missions from "./components/missions.vue";

export default {
  name: "App",
  components: {
    startpage,
    pageHeader,
    missions
  },
  computed: {
    showMissions() {
      return this.$store.state.session.showMissions.value || null;
    }
  },
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
