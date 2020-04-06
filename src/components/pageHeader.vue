<template>
  <div class="header">
    <div class="account-cta">
      <div @click="goToRoute('/')" class="logo-text">Helpvia</div>
      <div v-if="!isLoggedIn" class="button-holder">
        <hButton
          text="Logga in"
          color="white"
          size="xsmall"
          @onClick="goToRoute('login')"
        />
        <hButton
          text="Registrera"
          color="pink"
          size="xsmall"
          @onClick="goToRoute('register')"
        />
      </div>
      <div v-else class="button-holder">
        <hButton
          text="Mitt konto"
          color="pink"
          size="xsmall"
          @onClick="goToRoute('myAccount')"
        />
        <hButton
          text="Logga ut"
          color="white"
          size="xsmall"
          @onClick="logout()"
        />
      </div>
    </div>
  </div>
</template>

<script>
import router from "../router";

import hButton from "../components/elements/hButton";

export default {
  name: "pageHeader",
  components: {
    hButton
  },
  data() {
    return { toggleLogin: false };
  },
  computed: {
    isLoggedIn() {
      console.log("user", this.$store.state.user);
      return (
        (this.$store.state.user &&
          this.$store.state.user.isAuthenticated === true) ||
        false
      );
    }
  },
  methods: {
    goToRoute(route) {
      router.history.current.path !== route && router.push(route);
    },
    logout() {
      router.push("/");
    }
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
  cursor: pointer;
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
