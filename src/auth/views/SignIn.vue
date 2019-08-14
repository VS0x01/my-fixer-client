<template>
  <div>
    <auth-header-component
        question="Do not have an account? "
        :link="{ URL: '/sign-up', text: 'Sign up'}"
    ></auth-header-component>
    <main class="content">
      <form
          @submit.prevent="login"
          class="auth-form">
        <h1>Sign In</h1>
        <input
            v-model="email"
            class="auth-form__input"
            type="email"
            placeholder="example@domain.com">
        <input
            v-model="password"
            class="auth-form__input"
            type="password"
            placeholder="password">
        <a class="link auth-form__link" href="">Forgot password?</a>
        <button class="auth-form__submit" type="submit">Sign in</button>
      </form>
    </main>
  </div>
</template>

<script>
  import AuthHeaderComponent from '@/auth/components/AuthHeaderComponent';

  export default {
    name: 'SignIn',
    components: {AuthHeaderComponent},
    data() {
      return {
        email: '',
        password: '',
        tokens: {},
        error: '',
      }
    },
    methods: {
      login() {
        this.$http
          .post('http://localhost:4567/accounts/sign-in', {
            'email': this.email,
            'password': this.password,
          })
          .then(
            (response) => {
              this.error = '';
              this.tokens.access = response.data.accessToken;
              this.tokens.refresh = response.data.refreshToken;
            },
            (error) => {
              this.error = error.toString();
            }
          );
      },
    },
  }
</script>

<style lang="sass" scoped>
  @import 'sass/auth'
</style>