<template>
  <div>
    <div class="main-content-holder">
      <div class="text-holder">
        <div class="header-text">Vi finns till för att hjälpa er att hjälpa varandra genom krisen</div>
        <div class="sub-text">
          Personer i riskgrupp kan nu få hjälp med vardagliga sysslor så de kan
          hålla sig hemma och i säkerhet från Covid-19.
          <br />Tillsammans kan vi rädda liv.
        </div>

        <div class="menu-buttons">
          <hButton text="Visa uppdrag" color="pink" size="small" @onClick="showMissions" />
          <hButton text="Skapa uppdrag" color="white" size="small" @onClick="createMission" />
        </div>
      </div>
      <div class="image-holder">
        <img
          src="https://www.digitalartsonline.co.uk/cmsdata/features/3785691/free-black-illustrations.jpg"
          width="350px"
        />
      </div>
    </div>
  </div>
</template>
<script>
import hButton from "../components/elements/hButton";
import { mapActions } from "vuex";
export default {
  name: "home",
  components: {
    hButton
  },
  computed: {
    userIsAuthenticated() {
      return this.$store.state.user && this.$store.state.user.isAuthenticated;
    }
  },
  methods: {
    ...mapActions(["setField"]),
    showMissions() {
      this.$router.push("missions");
    },
    createMission() {
      return this.userIsAuthenticated
        ? this.$router.push("createMission")
        : this.$router.push("login");
    }
  }
};
</script>
<style lang="scss" scoped>
.main-content-holder {
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr;
  border-bottom: 2px solid #f3f3f4;
  @media screen and (min-width: 480px) {
    padding: 70px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-bottom: 2px solid #f3f3f4;
  }
}

.header-text {
  text-align: left;
  font-family: Montserrat;
  font-size: 36px;
  font-weight: 500;
  color: #000000;
  padding-bottom: 10px;
}
.sub-text {
  text-align: left;
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.6;
  color: #000000;
}

.image-holder {
  display: none;
  @media screen and (min-width: 480px) {
    display: block;
    width: 300px;
  }
}
.menu-buttons {
  display: grid;
  grid-gap: 10px;
  width: 300px;
  padding-top: 20px;
  grid-template-columns: 1fr 1fr;
  justify-content: left;
  @media screen and (min-width: 480px) {
  }
}
</style>
