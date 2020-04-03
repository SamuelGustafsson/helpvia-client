<template>
  <div class="header">
    <div class="account-cta">
      <div class="logo-text">Helpvia</div>
      <hButton
        text="Logga in"
        color="pink"
        size="small"
        @onClick="toggleLogin = !toggleLogin"
      />
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
}
.logo-text {
  display: grid;
  align-items: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  text-align: left;
  font-size: 20px;
}
.account-cta {
  display: grid;
  width: 100%;
  grid-template-columns: max-content max-content;
  justify-content: space-between;
}
</style>
