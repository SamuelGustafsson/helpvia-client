<template>
  <div>
    <h1>Välkommen</h1>
    <em> Någon text om samhällsnytta </em>
    <div class="menu-buttons">
      <hButton text="Visa ärenden" color="lightblue" :fullWidth="false" />
      <hButton text="Information" color="lightblue" :fullWidth="false" />
      <hButton text="Skapa konto" color="lightblue" :fullWidth="false" />
    </div>
  </div>
</template>
<script>
import hButton from "../components/elements/hButton";
export default {
  name: "startpage",
  components: {
    hButton
  }
};
</script>
<style lang="scss" scoped>
.menu-buttons {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  padding: 20px;
}
</style>
