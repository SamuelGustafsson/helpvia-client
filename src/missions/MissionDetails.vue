<template>
  <div>MISSION</div>
</template>

<script>
export default {
  name: "mission",
  data: function() {
    return {
      missionId: this.$router.history.current.params.id,
    };
  },
};
</script>

<style lang="scss" scoped></style>
