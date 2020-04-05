<template>
  <div>
    <div v-if="!succesfulPost" class="add-mission-holder">
      <div class="header-text">
        <h2>Lägg till nytt uppdrag</h2>
      </div>
      <div class="input-fields">
        <div class="input-field-item">
          <hDropdown
            label="Kategori"
            :items="categories"
            @onChange="onChangeCategory"
            size="large"
          />
        </div>
        <div class="input-field-item">
          <hInput
            placeholder="Telefonnummer.."
            @onInput="onInputPhone"
            size="large"
          />
        </div>
        <div class="input-field-item">
          <hDropdown
            label="Stad"
            :items="municipalityOptions"
            @onChange="onChangeMunicipality"
            size="large"
          />
        </div>
        <div class="input-field-item">
          <hTextArea
            placeholder="Fyll i det som krävs för att utföra uppdraget."
            @onInput="onInputFreeText"
            size="large"
          />
        </div>
        <div class="input-field-item">
          <hInput
            placeholder="Donation SEK (valfri)"
            @onInput="onInputDonation"
            size="large"
          />
        </div>
        <div class="input-field-button">
          <hButton
            text="Lägg till uppdrag"
            color="pink"
            size="large"
            @onClick="addMission"
          />
        </div>
      </div>
    </div>
    <div v-else-if="succesfulPost" class="succesful-post">
      <h2>Klart!</h2>
      Ärendet är upplagt<br />
      När någon väljer ditt ärende kontaktar hen dig för mer information <br />
      Tack för att du stannar hemma i coronakrisen!
    </div>
  </div>
</template>
<script>
import hDropdown from "../components/elements/hDropdown.vue";
import hButton from "../components/elements/hButton.vue";
import hInput from "../components/elements/hInput.vue";
import hTextArea from "../components/elements/hTextArea.vue";
import municipalities from "../lib/municipalities.json";
import missionList from "../lib/missionList.json";
import axios from "axios";
import { mapActions } from "vuex";

export default {
  name: "addMissionCard",
  components: {
    hDropdown,
    hButton,
    hInput,
    hTextArea
  },
  data() {
    return {
      categories: [
        { id: "GROCERIES", value: "Köp av matvaror" },
        { id: "MAIL", value: "Hämta post" },
        { id: "CUTTHELAWN", value: "Klippa gräsmatta" },
        { id: "OTHER", value: "Annat" }
      ],
      municipalities,
      selectedCategory: null,
      selectedMunicipality: null,
      phoneNumber: null,
      freeText: null,
      donation: null,
      missionList,
      succesfulPost: null
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
    ...mapActions(["setField"]),
    onChangeCategory(event) {
      this.selectedCategory = this.categories.find(a => a.value === event);
    },
    onChangeMunicipality(event) {
      this.selectedMunicipality = this.municipalityOptions.find(
        a => a.value === event
      );
    },
    onInputPhone(value) {
      console.log("phone", value);
      this.phoneNumber = value;
    },
    onInputFreeText(value) {
      this.freeText = value;
    },
    onInputDonation(value) {
      this.donation = value;
    },
    async saveMission(mission) {
      await axios
        .post("http://localhost:3000/missions", {
          ...mission
        })
        .then(() => {
          this.succesfulPost = true;
        })
        .catch(() => {
          this.succesfulPost = false;
        });
    },
    addMission() {
      const missionObject = {
        category: this.selectedCategory.id,
        phone: this.phoneNumber,
        municipality: this.selectedMunicipality.value,
        donation: this.donation,
        freeText: this.freeText,
        status: "MISSION_CREATED"
      };
      this.saveMission(missionObject);
      this.updateMissions();
    },
    async updateMissions() {
      await axios
        .get("http://localhost:3000/missions")
        .then(response => {
          this.setField({ field: "missions", value: response.data });
        })
        .catch(error => {
          console.log("error occured addMissionCard", error);
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.add-mission-holder {
  margin: 50px;
  padding-top: 20px;
  padding-left: 50px;
  padding-right: 50px;
  border: 2px solid #f3f3f4;
  border-radius: 8px;
  width: 275px;
  display: grid;
  grid-template-columns: 1fr;
}
.header-text {
  text-align: center;
}
.input-field-item {
  display: grid;
  justify-content: left;
  padding-top: 20px;
}
.input-field-item-label {
  display: grid;
  align-items: center;
  text-align: left;
}
.input-field-button {
  display: grid;
  justify-content: left;
  padding-top: 20px;
  padding-bottom: 20px;
}
.button-holder {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-top: 50px;
}
.filter-holder {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 300px;
}
.filter-text {
  display: grid;
  align-items: center;
}
.succesful-post {
  padding: 40px;
  margin: 50px;
}
</style>
