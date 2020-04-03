<template>
  <div class="page-holder">
    <div class="button-holder">
      <div class="add-mission-holder">
        <hButton
          text="Lägg till uppdrag"
          color="pink"
          @onClick="expandAddMission = !expandAddMission"
        />
      </div>

      <div class="filter-items">
        <div class="filter-item">
          <span class="filter-text">
            Kategori:
          </span>
          <hDropdown :items="categories" @onChange="onChangeCategory" />
        </div>
        <div class="filter-item">
          <span class="filter-text">
            Stad:
          </span>
          <hDropdown
            :items="municipalityOptions"
            @onChange="onChangeCategory"
          />
        </div>
      </div>
    </div>
    <div v-if="expandAddMission">
      <addMissionCard />
    </div>
    <missionList :filterCategory="selectedCategory" />
  </div>
</template>
<script>
import hDropdown from "../components/elements/hDropdown.vue";
import hButton from "../components/elements/hButton.vue";
import missionList from "../components/missionList.vue";
import addMissionCard from "../components/addMissionCard.vue";
import municipalities from "../lib/municipalities.json";
export default {
  name: "missions",
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
      selectedCity: null,
      expandAddMission: false,
      municipalities
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
    onChangeCity(event) {
      this.selectedCity = event;
    }
  }
};
</script>
<style lang="scss" scoped>
.page-holder {
  padding: 40px;
}
.button-holder {
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-gap: 40px;
}
.add-mission-holder {
  display: grid;
  justify-content: start;
}
.filter-holder {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: end;
}
.filter-text {
  display: grid;
  align-items: center;
}
.filter-items {
  display: grid;
  grid-template-columns: max-content max-content;
  grid-gap: 20px;
  justify-content: end;
}
.filter-item {
  display: grid;
  grid-template-columns: max-content max-content;
  grid-gap: 10px;
  text-align: left;
}
</style>
