<template>
  <div>
    <auth-header-component
      question="Already have an account? "
      :link="{ URL: '/sign-in', text: 'Sign in' }"
    />
    <main class="content">
      <form class="auth-form">
        <h1>Sign up</h1>
        <div class="auth-form__input-group">
          <input
            class="auth-form__input"
            type="text"
            placeholder="First name"
          />
          <input class="auth-form__input" type="text" placeholder="Last name" />
        </div>
        <input class="auth-form__input" type="text" placeholder="Username" />
        <input class="auth-form__input" type="email" placeholder="E-mail" />
        <button class="auth-form__submit" type="submit">Sign up</button>
      </form>
    </main>
  </div>
</template>

<script>
import AuthHeaderComponent from "@/auth/components/AuthHeader";

export default {
  name: "SignUp",
  components: { AuthHeaderComponent }
};
</script>

<style lang="sass" scoped>
@import 'sass/auth'
</style>
