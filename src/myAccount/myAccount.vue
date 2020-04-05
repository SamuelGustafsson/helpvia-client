<template>
  <div>
    <div class="page-holder">
      <div class="card-holder">
        <span class="my-account-text"> Mitt konto</span>
        <p>
          Epostadress <b> {{ user.email }}</b> <br />
          Telefonnummer <b> {{ user.phone }}</b>
        </p>
      </div>

      <div v-if="createdMissions.length > 0" class="card-holder">
        <h3>Uppskapade ärenden</h3>
        <div v-for="(mission, index) in createdMissions" :key="index">
          <b>{{ mapCategory(mission.category) }} - {{ mission.municipality }}</b
          ><br />
          <em>{{ mission.freeText }}</em>
        </div>
      </div>
      <div v-if="inprogressMissions.length > 0" class="card-holder">
        <h3>Pågående ärenden</h3>
        <div v-for="(mission, index) in inprogressMissions" :key="index">
          <b>{{ mapCategory(mission.category) }} - {{ mission.municipality }}</b
          ><br />
          <em>{{ mission.freeText }}</em>
        </div>
      </div>
      <div v-if="completedMissions.length > 0" class="card-holder">
        <h3>Slutförda ärenden</h3>
        <div v-for="(mission, index) in completedMissions" :key="index">
          <b>{{ mapCategory(mission.category) }} - {{ mission.municipality }}</b
          ><br />
          <em>{{ mission.freeText }}</em>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "myAccount",
  data() {
    return {
      categories: [
        { id: "GROCERIES", value: "Köp av matvaror" },
        { id: "MAIL", value: "Hämta post" },
        { id: "CUTTHELAWN", value: "Klippa gräsmatta" },
        { id: "OTHER", value: "Annat" }
      ]
    };
  },
  mounted() {
    if (!this.userExist) this.$router.push("/");
  },
  computed: {
    userExist() {
      return this.$store.state.user && this.$store.state.user.isAuthenticated;
    },
    user() {
      return this.$store.state.user;
    },
    createdMissions() {
      return (
        this.$store.state.missions.filter(
          a => a.status === "MISSION_CREATED"
        ) || []
      );
    },
    inprogressMissions() {
      return (
        this.$store.state.missions.filter(
          a => a.status === "MISSION_AWAITING_CONFIRMATION"
        ) || []
      );
    },
    completedMissions() {
      return (
        this.$store.state.missions.filter(
          a => a.status === "MISSION_COMPLETED"
        ) || []
      );
    }
  },
  methods: {
    mapCategory(category) {
      return this.categories.find(a => a.id === category).value;
    }
  }
};
</script>

<style lang="scss" scoped>
.page-holder {
  display: grid;
  grid-template-columns: 1fr;
  @media screen and (min-width: 1170px) {
    grid-template-columns: 1fr 1fr;
  }
}
.card-holder {
  text-align: left;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  border-radius: 8px;
  padding: 20px;
  background-color: #f9f9f9;
  margin-bottom: 20px;
}
.my-account-text {
  font-family: Montserrat;
  font-size: 24px;
  font-weight: 500px;
}
</style>
