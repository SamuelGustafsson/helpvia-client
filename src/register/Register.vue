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
                placeholder="Telefonnummer.."
                size="large"
                @onInput="handlePhoneNumberInputOnChange"
              />
            </div>
            <div class="input-field">
              <b> Lösenord </b>
              <hInput
                placeholder="Lösenord.."
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
                @onInput="handlePhonePasswordConfirmationInputOnChange"
              />
            </div>
          </div>
          <div class="login-button-holder">
            <hButton
              text="Registrera"
              size="large"
              color="dusk"
              @onClick="registerAccount"
            />
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
import axios from "axios";
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
      phonenumber: "",
      password: "",
      passwordConfirmation: ""
    };
  },
  methods: {
    handleEmailInputOnChange(event) {
      this.email = event;
    },
    handlePhoneNumberInputOnChange(event) {
      this.phonenumber = event;
    },
    handlePhonePasswordInputOnChange(event) {
      this.password = event;
    },
    handlePhonePasswordConfirmationInputOnChange(event) {
      this.passwordConfirmation = event;
    },
    validatePassword() {
      return (
        this.password !== "" && this.password === this.passwordConfirmation
      );
    },
    validatePhonenumber() {
      return this.phonenumber !== "";
    },
    async checkIfEmailExist() {
      const users = await axios
        .get("http://localhost:3000/users")
        .then(response => response.data)
        .catch(error => console.log("Fail to fetch users", error));

      const isEmailOccupied = users.some(user =>
        user.email === this.email ? true : false
      );

      return isEmailOccupied;
    },
    async registerAccount() {
      const emailIsOccupied = await this.checkIfEmailExist();
      const passwordIsValid = await this.validatePassword();
      const isPhonenumberValid = this.validatePhonenumber();

      console.log({ emailIsOccupied, passwordIsValid, isPhonenumberValid });

      if (emailIsOccupied || !isPhonenumberValid || !passwordIsValid) return;

      const newUser = {
        email: this.email,
        password: this.password,
        phonenumber: this.phonenumber
      };

      await axios
        .post("http://localhost:3000/users", newUser)
        .then(response => console.log("REGISTER FULLFILLED", response))
        .catch(error => console.log("Failed to register new account", error));

      this.$router.push("/");
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
