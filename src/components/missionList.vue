<template>
  <div class="mission-holder">
    <div
      v-for="(mission, index) in missionListParsed"
      :key="index"
      class="mission-card"
    >
      <div class="mission-card-item">
        <span class="label">Kategori </span>{{ mapCategory(mission.category) }}
      </div>
      <div class="mission-card-item">
        <span class="label">Telefonnummer </span> {{ mission.phone }}
      </div>
      <div class="mission-card-item">
        <span class="label">Stad </span> {{ mission.municipality }}
      </div>
      <div class="mission-card-item">
        <span class="label">Text </span> {{ mission.freeText }}
      </div>
      <div class="mission-card-item">
        <span class="label">Donation </span>{{ mission.donation }}
      </div>
    </div>
  </div>
</template>
<script>
import missionList from "./../lib/missionList.json";
export default {
  name: "missionList",
  props: {
    filterCategory: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      missionList,
      categories: [
        { id: "GROCERIES", value: "Köp av matvaror" },
        { id: "MAIL", value: "Hämta post" },
        { id: "CUTTHELAWN", value: "Klippa gräsmatta" },
        { id: "OTHER", value: "Annat" }
      ]
    };
  },
  computed: {
    missionListParsed() {
      return this.filterCategory
        ? this.missionList.filter(a => a.category === this.filterCategory.id)
        : this.missionList;
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
.mission-holder {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  padding-top: 40px;
}
.mission-card {
  display: grid;
  grid-gap: 10px;
  text-align: left;
  padding: 30px;
  border: 1px solid lightgray;
}
.mission-card-item {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>
