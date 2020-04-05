<template>
  <div>
    <div v-if="!missionConfirmed" class="confirm-mission-holder ">
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

        <div>
          <span class="label">Donation </span>{{ takenMission.donation }}
        </div>
      </div>
      <div class="button-holder">
        <hButton
          text="Bekräfta"
          color="pink"
          @onClick="confirmMission(takenMission)"
        />
        <hButton text="Avbryt" color="white" @onClick="abortTakeMission" />
      </div>
    </div>
    <div v-else class="confirm-mission-holder ">
      <h3 style="text-align:left;">
        Tack för att du bidrar i coronakrisen!
      </h3>
      <p class="information-text">
        Kontakta uppdragsgivaren för mer information som t.ex. bostadsadress och
        betalning. <br />
        Telefonnummer:
        <a :href="phoneNumberLink" class="phone-number">{{ phoneNumber }}</a>
      </p>
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

        <div>
          <span class="label">Donation </span>{{ takenMission.donation }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import hButton from "../components/elements/hButton";
import locationIcon from "../assets/locationIcon.svg";
import axios from "axios";
import { mapActions } from "vuex";

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
      ],
      missionConfirmed: false
    };
  },
  computed: {
    phoneNumber() {
      return this.takenMission.phone;
    },
    phoneNumberLink() {
      return "tel:046" + this.phoneNumber.toString().slice(0, 1);
    }
  },
  methods: {
    ...mapActions(["setField"]),
    mapCategory(category) {
      return this.categories.find(a => a.id === category).value;
    },
    updateMission(takenMission) {
      const updatedMission = {
        ...takenMission,
        status: "MISSION_AWAITING_CONFIRMATION",
        userId: "UserId123"
      };
      return updatedMission;
    },
    confirmMission(takenMission) {
      const newMission = this.updateMission(takenMission);
      this.updateMissions(newMission);
      this.missionConfirmed = true;
    },
    async updateMissions(newMission) {
      await axios
        .put("http://localhost:3000/missions/" + newMission.id, {
          ...newMission
        })
        .catch(error => {
          console.log("error occured", error);
        });
    },
    abortTakeMission() {
      this.$router.go(-1);
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
.phone-number {
  font-family: Montserrat;
  color: #d95988;
  text-decoration: none;
}
.information-text {
  text-align: left;
}
</style>
