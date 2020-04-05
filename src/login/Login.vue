<template>
  <div>
    <div class="page-holder">
      <div>
        <div class="input-section">
          <div class="input-fields">
            <div class="header-text">
              Logga in
            </div>
            <div class="input-field">
              <b> Email </b>
              <hInput
                placeholder="Email.."
                size="large"
                @onInput="handleEmailInputOnChange"
              />
            </div>
            <div class="input-field">
              <b> Lösenord </b>
              <hInput
                placeholder="Lösenord.."
                size="large"
                type="password"
                @onInput="handlePasswordInputOnChange"
              />
              <div class="align-right">
                Glömt lösenord?
              </div>
            </div>
          </div>
          <div class="login-button-holder">
            <hButton
              text="Logga in"
              size="large"
              color="dusk"
              @onClick="login"
            />
          </div>
        </div>
        <div class="register-section">
          <span class="no-account-text"> Har du inget konto?</span>
          <span class="register-text"> Registrera </span>
        </div>
      </div>
      <div class="image-section"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";

import hInput from "../components/elements/hInput";
import hButton from "../components/elements/hButton";

export default {
  name: "Login",
  components: {
    hInput,
    hButton
  },
  data: function() {
    return {
      email: "",
      password: "",
      error: null
    };
  },
  methods: {
    ...mapActions(["setField"]),
    async login() {
      console.log("ONCLICK LOGIN");

      const users = await axios
        .get("http://localhost:3000/users")
        .then(response => response.data)
        .catch(error => console.log("Fail to fetch users"));

      const isAuthenticated = users.some(user => {
        console.log("USER", user);

        return user.email === this.email && user.password === this.password
          ? true
          : false;
      });

      if (!isAuthenticated) {
        this.error =
          "Det gick inte att logga in, vänligen kontrollera din email och lösenord";
      }
      const user = users.find(user => user.email);

      const authenticatedUser = {
        isAuthenticated,
        userId: user.id,
        email: user.email
      };

      this.setField({ field: "user", value: authenticatedUser });
      if (authenticatedUser) this.$router.push("/");
    },
    handleEmailInputOnChange(event) {
      this.email = event;
    },
    handlePasswordInputOnChange(event) {
      this.password = event;
    }
  }
};
</script>

<style lang="scss" scoped>
.page-holder {
  display: grid;
  grid-template-columns: 1fr;
  @media screen and (min-width: 1170px) {
    grid-template-columns: 1fr 1fr;
  }
}
.input-section {
  padding-top: 50px;
  margin: 0 auto;
}
.header-text {
  display: grid;
  justify-content: center;
  font-family: Montserrat;
  font-size: 36px;
  font-weight: 500;
  padding-bottom: 20px;
}
.input-fields {
  display: grid;
  grid-gap: 20px;
}
.input-field {
  display: grid;
  justify-content: center;
  text-align: left;
}
.align-right {
  text-align: right;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  padding-top: 5px;
}
.login-button-holder {
  padding-top: 40px;
  padding-bottom: 200px;
}
.register-section {
  border-top: 1px solid lightgray;
  padding-top: 20px;
  width: 100%;
}
.register-text {
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 600;
  color: #d95988;
}
.no-account-text {
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 600;
  color: #6e6d7a;
}
.image-section {
  display: none;

  @media screen and (min-width: 1170px) {
    display: block;
    background: url("../assets/login.svg");
    height: 100vh;
    background-size: cover;
  }
}
</style>
