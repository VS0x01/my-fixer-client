<template>
  <form @submit.prevent="login" class="auth-form">
    <h1>Sign In</h1>
    <input
      v-model="email"
      class="auth-form__input"
      type="email"
      placeholder="example@domain.com"
    />
    <input
      v-model="password"
      class="auth-form__input"
      type="password"
      placeholder="password"
    />
    <router-link
      :to="{ name: 'reset-password-request' }"
      class="link auth-form__link"
      href=""
    >
      Forgot password?
    </router-link>
    <button class="auth-form__submit" type="submit">Sign in</button>
  </form>
</template>

<script>
export default {
  name: "SignInForm",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      this.$http
        .post("/accounts/sign-in", {
          email: this.email,
          password: this.password
        })
        .then(
          response => {
            const { accessToken, refreshToken } = response.data;
            this.$store
              .dispatch("login", {
                account: response.data.user,
                tokens: {
                  access: accessToken,
                  refresh: refreshToken
                }
              })
              .then(() =>
                this.$router.replace(this.$route.query.redirect || "/")
              );
          },
          err => {
            this.$store.commit("pushErrors", err);
          }
        );
    }
  }
};
</script>

<style scoped></style>
