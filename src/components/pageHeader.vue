<template>
  <div class="header">
    <div class="account-cta">
      <div class="logo-text">Helpvia</div>
      <div class="button-holder">
        <hButton
          text="Logga in"
          color="white"
          size="small"
          @onClick="toggleLogin = !toggleLogin"
        />
        <hButton
          text="Registrera"
          color="pink"
          size="small"
          @onClick="toggleLogin = !toggleLogin"
        />
      </div>
    </div>
    <div v-if="toggleLogin">
      Logga in
    </div>
  </div>
</template>
<script>
import hButton from "../components/elements/hButton";
export default {
  name: "pageHeader",
  components: {
    hButton
  },
  data() {
    return { toggleLogin: false };
  }
};
</script>
<style lang="scss" scoped>
.header {
  height: 50px;
  padding: 10px;
  border-bottom: 2px solid #f3f3f4;
}
.logo-text {
  display: grid;
  align-items: center;
  font-family: Montserrat;
  font-size: 28px;
}
.account-cta {
  display: grid;
  width: 100%;
  grid-template-columns: max-content max-content;
  justify-content: space-between;
}
.button-holder {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
}
</style>
