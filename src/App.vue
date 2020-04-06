<template>
  <div id="app">
    <pageHeader />
    <router-view />
  </div>
</template>

<script>
import pageHeader from "./components/pageHeader.vue";
import { mapActions } from "vuex";

import axios from "axios";
export default {
  name: "App",
  components: {
    pageHeader
  },
  mounted() {
    this.updateMissions();
  },
  computed: {},
  methods: {
    ...mapActions(["setField"]),
    async updateMissions() {
      await axios
        .get("http://localhost:3000/missions")
        .then(response => {
          this.setField({ field: "missions", value: response.data });
        })
        .catch(error => {
          console.log("error home", error);
        });
    }
  }
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
