<template>
  <div>
    <div class="main-content-holder">
      <div class="text-holder">
        <div class="header-text">
          Vi finns till för att hjälpa er att hjälpa varandra genom krisen
        </div>
        <div class="sub-text">
          Tail beef shankle biltong, kevin chislic shank pork meatball. Salami
          capicola pork kevin buffalo drumstick turkey pork loin filet mignon
          sausage short ribs.
        </div>

        <div class="menu-buttons">
          <hButton
            text="Visa uppdrag"
            color="pink"
            size="small"
            @onClick="showMissions"
          />
          <hButton text="Skapa uppdrag" color="white" size="small" />
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
  name: "startpage",
  components: {
    hButton
  },
  methods: {
    ...mapActions(["setField"]),
    showMissions() {
      this.$router.push("missions");
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
