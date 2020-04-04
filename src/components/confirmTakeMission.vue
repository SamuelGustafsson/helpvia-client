<template>
  <div class="confirm-mission-holder ">
    <h3>
      Du har valt att ta uppdraget
    </h3>
    <div class="mission-card">
      <div class="mission-card-item">
        <span class="category-label"
          >{{ mapCategory(takenMission.category) }}
        </span>
        <span class="Municipality-label">
          <div class="location-icon-image">
            <img :src="locationIcon" width="15px" />
          </div>

          {{ takenMission.municipality }}
        </span>
      </div>
      <div>
        {{ takenMission.freeText }}
      </div>

      <div><span class="label">Donation </span>{{ takenMission.donation }}</div>
    </div>
    <div class="button-holder">
      <hButton text="Bekräfta" color="pink" />
      <hButton text="Avbryt" color="white" />
    </div>
  </div>
</template>
<script>
import hButton from "../components/elements/hButton";
import locationIcon from "../assets/locationIcon.svg";
export default {
  name: "missionList",
  components: {
    hButton
  },
  props: {
    takenMission: {
      type: Object
    }
  },
  data() {
    return {
      locationIcon,
      categories: [
        { id: "GROCERIES", value: "Köp av matvaror" },
        { id: "MAIL", value: "Hämta post" },
        { id: "CUTTHELAWN", value: "Klippa gräsmatta" },
        { id: "OTHER", value: "Annat" }
      ]
    };
  },
  methods: {
    mapCategory(category) {
      return this.categories.find(a => a.id === category).value;
    }
  }
};
</script>
<style lang="scss" scoped>
.confirm-mission-holder {
  display: grid;
  margin: 50px;
  padding: 20px;
  border: 1px solid lightgray;
}
.mission-card {
  display: grid;
  grid-gap: 10px;
  text-align: left;
  padding: 30px;
  background-color: #f9f9f9;
}
.mission-card-item {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.category-label {
  font-family: Montserrat;
  font-weight: 600;
}
.Municipality-label {
  display: grid;
  align-items: center;
  grid-template-columns: 1fr max-content;
  grid-gap: 10px;
  font-family: Montserrat;
  font-weight: 600;
  text-align: right;
}
.location-icon-image {
  align-items: right;
}
.button-holder {
  padding-top: 20px;
  display: grid;
  grid-template-columns: max-content max-content;
  grid-gap: 20px;
  justify-content: center;
}
</style>
