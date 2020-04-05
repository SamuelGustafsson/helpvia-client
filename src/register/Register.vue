<template>
  <div>
    <div class="page-holder">
      <div>
        <div class="input-section">
          <div class="input-fields">
            <div class="header-text">
              Registrera
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
              <b> Telefonnummer </b>
              <hInput
                placeholder="Email.."
                size="large"
                @onInput="handlePhoneNumberInputOnChange"
              />
            </div>
            <div class="input-field">
              <b> Lösenord </b>
              <hInput
                placeholder="Telefonnummer.."
                size="large"
                type="password"
                @onInput="handlePhonePasswordInputOnChange"
              />
            </div>
            <div class="input-field">
              <b> Bekräfta lösenord </b>
              <hInput
                placeholder="Bekräfta lösenord.."
                size="large"
                type="password"
              />
            </div>
          </div>
          <div class="login-button-holder">
            <hButton text="Registrera" size="large" color="dusk" />
          </div>
        </div>
        <div class="register-section">
          <span class="no-account-text"> Har du konto?</span>
          <span class="register-text"> Logga in </span>
        </div>
      </div>
      <div class="image-section"></div>
    </div>
  </div>
</template>

<script>
import hInput from "../components/elements/hInput";
import hButton from "../components/elements/hButton";
export default {
  name: "Login",
  components: {
    hInput,
    hButton,
  },
  data: function() {
    return {
      email: "",
      phoneNumber: "",
      password: "",
      passwordConfirmation: "",
    };
  },
  methods: {
    handleEmailInputOnChange(event) {
      this.email = event;
    },
    handlePhoneNumberInputOnChange(event) {
      this.phoneNumber = event;
    },
    handlePhonePasswordInputOnChange(event) {
      this.password = event;
    },
  },
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
