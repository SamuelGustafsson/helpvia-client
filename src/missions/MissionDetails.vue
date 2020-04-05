<template>
  <confirmTakeMission :takenMission="takenMission" />
</template>

<script>
import confirmTakeMission from "../components/confirmTakeMission";
export default {
  name: "mission",
  components: {
    confirmTakeMission
  },
  data() {
    return {
      missionId: this.$router.history.current.params.id
    };
  },
  computed: {
    takenMission() {
      return (
        this.$store.state.missions.find(a => a.id === this.missionId) || {}
      );
    }
  }
};
</script>

<style lang="scss" scoped></style>
