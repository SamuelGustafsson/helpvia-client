<template>
  <div>
    <div class="mission-holder">
      <div
        v-for="(mission, index) in missionListNotTakenMissions"
        :key="index"
        class="mission-card"
      >
        <div class="mission-card-item">
          <span class="category-label"
            >{{ mapCategory(mission.category) }}
          </span>
          <span class="Municipality-label">
            <div class="location-icon-image">
              <img :src="locationIcon" width="15px" />
            </div>

            {{ mission.municipality }}
          </span>
        </div>
        <div>
          {{ mission.freeText }}
        </div>

        <div><span class="label">Donation </span>{{ mission.donation }}</div>
        <div class="mission-card-item">
          <hButton
            text="Ta uppdrag"
            color="dusk"
            size="small"
            @onClick="takeMission(mission)"
          >
          </hButton>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import hButton from "../components/elements/hButton";
import locationIcon from "../assets/locationIcon.svg";
import confirmTakeMission from "../components/confirmTakeMission.vue";
import axios from "axios";
import { mapActions } from "vuex";
export default {
  name: "missionList",
  components: {
    hButton,
    confirmTakeMission
  },
  props: {
    filterCategory: {
      type: Object,
      default: null
    },
    filterMunicipality: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      locationIcon,
      missionList: [],
      takenMission: null,
      categories: [
        { id: "GROCERIES", value: "Köp av matvaror" },
        { id: "MAIL", value: "Hämta post" },
        { id: "CUTTHELAWN", value: "Klippa gräsmatta" },
        { id: "OTHER", value: "Annat" }
      ]
    };
  },
  mounted() {
    this.updateMissions();
    console.log("this.missionList", this.missionList);
  },
  computed: {
    missionListParsedByCategory() {
      return this.filterCategory
        ? this.missionList.filter(a => a.category === this.filterCategory.id)
        : this.missionList;
    },
    missionListParsedByMunicipality() {
      return this.filterMunicipality
        ? this.missionList.filter(
            a => a.municipality === this.filterMunicipality.value
          )
        : this.missionList;
    },
    missionListNotTakenMissions() {
      return this.missionListParsedByCategory
        .filter(
          value => -1 !== this.missionListParsedByMunicipality.indexOf(value)
        )
        .filter(a => a.status === "MISSION_CREATED");
    }
  },
  methods: {
    ...mapActions(["setField"]),
    mapCategory(category) {
      console.log("categoru", category);
      return this.categories.find(a => a.id === category).value;
    },
    takeMission(mission) {
      this.$router.push("missions/" + mission.id);
    },
    async updateMissions() {
      await axios
        .get("http://localhost:3000/missions")
        .then(response => {
          this.missionList = response.data;
          this.setField({ field: "missions", value: response.data });
        })
        .catch(error => {
          console.log("error missionList", error);
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.mission-holder {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  padding-top: 40px;
  @media screen and (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
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
</style>
