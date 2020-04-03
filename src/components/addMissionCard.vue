<template>
  <div>
    <div class="add-mission-holder">
      <div class="header-text">
        <h2>Lägg till nytt uppdrag</h2>
      </div>
      <div class="input-fields">
        <div class="input-field-item">
          <span class="input-field-item-label"> Kategori</span>
          <hDropdown :items="categories" @onChange="onChangeCategory" />
        </div>
        <div class="input-field-item">
          <span class="input-field-item-label"> Telefonnummer</span>
          <hInput placeholder="07X XX XX XXX" @onInput="onInputPhone" />
        </div>
        <div class="input-field-item">
          <span class="input-field-item-label"> Stad</span>
          <hDropdown :items="municipalityOptions" @onChange="onChangeCity" />
        </div>
        <div class="input-field-item">
          <span class="input-field-item-label"> Fritext</span>
          <hTextArea
            placeholder="Fyll i det som krävs för att utföra uppdraget."
            @onInput="onInputFreeText"
          />
        </div>
        <div class="input-field-item">
          <span class="input-field-item-label"> Donation (valfri)</span>
          <hInput placeholder="X kr" @onInput="onInputDonation" />
        </div>
        <div class="input-field-button">
          <hButton text="Lägg till uppdrag" color="pink" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import hDropdown from "../components/elements/hDropdown.vue";
import hButton from "../components/elements/hButton.vue";
import hInput from "../components/elements/hInput.vue";
import hTextArea from "../components/elements/hTextArea.vue";
import municipalities from "../lib/municipalities.json";
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
        { id: "CUTHELAWN", value: "Klippa gräsmatta" },
        { id: "OTHER", value: "Annat" }
      ],
      municipalities,
      selectedCategory: null,
      selectedCity: null,
      phoneNumber: null,
      freeText: null,
      donation: null
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
    },
    onInputPhone(value) {
      this.phoneNumber = value;
    },
    onInputFreeText(value) {
      this.freeText = value;
    },
    onInputDonation(value) {
      this.donation = value;
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
  width: 400px;
  display: grid;
  grid-template-columns: 1fr;
}
.header-text {
  text-align: left;
}
.input-field-item {
  display: grid;
  grid-template-columns: 1fr 1fr;
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
</style>
