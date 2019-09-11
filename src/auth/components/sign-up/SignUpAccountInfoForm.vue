<template>
  <form @submit.prevent="submit" @click="warn = false" class="auth-form">
    <h1>Sign up</h1>
    <div class="auth-form__input-group">
      <input
        v-model="firstName"
        class="auth-form__input"
        :class="{
          invalid: $v.firstName.$invalid && !!firstName,
          warn: warn && $v.firstName.$invalid
        }"
        type="text"
        placeholder="First name"
      />
      <input
        v-model="lastName"
        class="auth-form__input"
        :class="{
          invalid: $v.lastName.$invalid && !!lastName,
          warn: warn && $v.lastName.$invalid
        }"
        type="text"
        placeholder="Last name"
      />
    </div>
    <input
      v-model="username"
      class="auth-form__input"
      :class="{
        invalid: $v.username.$invalid && !!username,
        warn: warn && $v.username.$invalid
      }"
      type="text"
      placeholder="Username"
    />
    <input
      v-model="email"
      class="auth-form__input"
      :class="{
        invalid: $v.email.$invalid && !!email,
        warn: warn && $v.email.$invalid
      }"
      type="email"
      placeholder="E-mail"
    />
    <button class="auth-form__submit" type="submit">Get started</button>
  </form>
</template>

<script>
import { required, minLength, maxLength } from "vuelidate/lib/validators";
import { isValidEmail } from "@/shared/validators/auth";

export default {
  name: "SignUpAccountInfoForm",
  data() {
    return {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      warn: false
    };
  },
  mounted() {
    const account = this.$store.getters.accountInfo;
    this.firstName = account.firstName;
    this.lastName = account.lastName;
    this.username = account.username;
    this.email = account.email;
  },
  validations: {
    firstName: {
      required,
      minLength: minLength(2),
      maxLength: maxLength(32)
    },
    lastName: {
      required,
      minLength: minLength(2),
      maxLength: maxLength(43)
    },
    username: {
      required,
      minLength: minLength(2)
    },
    email: {
      required,
      isValidEmail
    }
  },
  methods: {
    submit() {
      this.$v.$touch();
      if (this.$v.$error) {
        this.warn = true;
        return;
      }
      this.$store.commit("updateAccountInfo", {
        firstName: this.firstName,
        lastName: this.lastName,
        username: this.username,
        email: this.email
      });
      this.$router.push({
        name: "set-password"
      });
    }
  }
};
</script>

<style lang="sass" scoped></style>
