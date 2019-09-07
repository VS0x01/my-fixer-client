<template>
  <div id="auth">
    <auth-header-component
      question="Do not have an account? "
      :link="{ URL: '/sign-up', text: 'Sign up' }"
    />
    <main class="content">
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
        <a class="link auth-form__link" href="">Forgot password?</a>
        <button class="auth-form__submit" type="submit">Sign in</button>
      </form>
    </main>
  </div>
</template>

<script>
import AuthHeaderComponent from "@/auth/components/AuthHeader";

export default {
  name: "SignIn",
  components: { AuthHeaderComponent },
  data() {
    return {
      email: "",
      password: ""
    };
  },

  methods: {
    login() {
      this.$http.get('/accounts')

      this.$http
        .post("/accounts/sign-in", {
          email: this.email,
          password: this.password
        })
        .then(
          response => {
            localStorage.setItem("accessToken", response.data.accessToken);
            localStorage.setItem("refreshToken", response.data.refreshToken);
            this.$store.commit("pushErrors", []);
            this.$store.commit("updateAccountInfo", response.data.user);
            this.$router.replace(this.$route.query.redirect || "/");
          },
          err => {
            this.$store.commit("pushErrors", err.response.data.errors);
          }
        );
    }
  }
};
</script>

<style lang="sass" scoped></style>
