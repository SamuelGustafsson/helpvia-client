<template>
  <div class="page-holder">
    <div class="button-holder">
      <div class="add-mission-holder">
        <div class="mobile-add-button" @click="addMission">
          <img :src="plusCircleSolid" width="40px;" />
        </div>
        <div class="desktop-add-button">
          <hButton text="Lägg till uppdrag" color="pink" @onClick="addMission" />
        </div>
      </div>

      <div class="filter-items">
        <div class="filter-item">
          <span class="filter-text">Filtrera:</span>
          <hDropdown label="Kategori" :items="categories" @onChange="onChangeCategory" />
        </div>
        <div class="filter-item">
          <span class="filter-text">Filtrera:</span>
          <hDropdown label="Stad" :items="municipalityOptions" @onChange="onChangeMunicipality" />
        </div>
      </div>
    </div>
    <div v-if="expandAddMission">
      <addMissionCard />
    </div>
    <div
      v-else-if="invalidUser"
      class="user-not-logged-in"
    >Du måste logga in för att lägga till uppdrag</div>
    <missionList :filterCategory="selectedCategory" :filterMunicipality="selectedMunicipality" />
  </div>
</template>
<script>
import hDropdown from "../components/elements/hDropdown.vue";
import hButton from "../components/elements/hButton.vue";
import missionList from "./missionList.vue";
import addMissionCard from "../components/AddMissionCard.vue";
import municipalities from "../lib/municipalities.json";
import plusCircleSolid from "../assets/plus-circle-solid.svg";

export default {
  name: "Missions",
  components: {
    hDropdown,
    hButton,
    addMissionCard,
    missionList
  },
  data() {
    return {
      categories: [
        { id: "GROCERIES", value: "Köp av matvaror" },
        { id: "MAIL", value: "Hämta post" },
        { id: "CUTTHELAWN", value: "Klippa gräsmatta" },
        { id: "OTHER", value: "Annat" }
      ],
      selectedCategory: null,
      selectedMunicipality: null,
      expandAddMission: false,
      municipalities,
      plusCircleSolid,
      invalidUser: null
    };
  },
  computed: {
    municipalityOptions() {
      return Object.keys(this.municipalities)
        .map(key => ({
          value: this.municipalities[key],
          label: this.municipalities[key]
        }))
        .sort((a, b) => (a.value < b.value ? -1 : 1));
    }
  },
  methods: {
    onChangeCategory(event) {
      this.selectedCategory = this.categories.find(a => a.value === event);
    },
    onChangeMunicipality(event) {
      this.selectedMunicipality = this.municipalityOptions.find(
        a => a.value === event
      );
    },
    addMission() {
      if (this.$store.state.user && this.$store.state.user.isAuthenticated) {
        this.expandAddMission = !this.expandAddMission;
        this.invalidUser = false;
      } else {
        this.invalidUser = true;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.page-holder {
  padding-top: 10px;
  @media screen and (min-width: 480px) {
    padding: 40px;
  }
}
.button-holder {
  padding-top: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  @media screen and (min-width: 480px) {
    grid-template-columns: max-content 1fr;
    grid-gap: 40px;
  }
}
.add-mission-holder {
  display: grid;
  justify-content: end;
  order: 2;
  align-items: end;
  @media screen and (min-width: 600px) {
    border-bottom: none;
    justify-content: start;
    order: 1;
  }
}
.filter-holder {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: end;
}
.filter-text {
  display: grid;
  align-items: center;
  display: none;
}
.filter-items {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  justify-content: end;
  order: 1;
  @media screen and (min-width: 600px) {
    grid-template-columns: max-content max-content;
    order: 2;
  }
}
.filter-item {
  display: grid;

  grid-template-columns: max-content 1fr;
  grid-gap: 10px;
  text-align: left;
  @media screen and (min-width: 480px) {
    grid-gap: 10px;
    grid-template-columns: max-content max-content;
  }
}
.mobile-add-button {
  display: block;
  @media screen and (min-width: 750px) {
    display: none;
  }
}
.desktop-add-button {
  display: none;
  @media screen and (min-width: 750px) {
    display: block;
  }
}
.user-not-logged-in {
  text-align: left;
  padding-top: 5px;
}
</style>
