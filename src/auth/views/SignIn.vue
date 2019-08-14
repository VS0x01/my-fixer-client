<template>
  <div>
    <auth-header-component
      question="Do not have an account?"
      :link="{ URL: '/sign-up', text: 'Sing up'}"
    ></auth-header-component>
    <main class="content">
      <form class="auth-form">
        <h1>Sign In</h1>
        <input class="auth-form__input" type="email" placeholder="example@domain.com">
        <input class="auth-form__input" type="password" placeholder="password">
        <a class="link auth-form__link" href="">Forgot password?</a>
        <button class="auth-form__submit" type="submit">Sign in</button>
      </form>
    </main>
  </div>
</template>

<script>
  import AuthHeaderComponent from "@/auth/components/AuthHeaderComponent";
  export default {
    name: "SignIn",
    components: {AuthHeaderComponent}
  }
</script>

<style lang="sass" scoped>
  @import "sass/auth"
</style>