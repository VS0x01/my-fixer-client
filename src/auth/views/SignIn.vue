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
      this.$http
        .post("/accounts/sign-in", {
          email: this.email,
          password: this.password
        })
        .then(
          response => {
            if (response.hasOwnProperty("errors")) {
              response.errors.forEach(err => {
                this.commitError(err);
              });
            } else if (response.hasOwnProperty("error")) {
              this.commitError(response.error);
            } else {
              localStorage.setItem("accessToken", response.data.accessToken);
              localStorage.setItem("refreshToken", response.data.refreshToken);
            }
          },
          err => {
            this.commitError(err);
          }
        );
    },
    commitError(error) {
      this.$store.commit("addError", {
        error
      });
    }
  }
};
</script>

<style lang="sass" scoped></style>
