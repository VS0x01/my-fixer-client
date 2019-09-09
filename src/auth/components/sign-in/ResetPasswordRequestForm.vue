<template>
  <form @submit.prevent="resetPassword" class="auth-form">
    <h1>Enter your e-mail to reset your password</h1>
    <input
        v-model="email"
        class="auth-form__input"
        type="email"
        placeholder="example@domain.com"
    />
    <button class="auth-form__submit" type="submit">Send</button>
  </form>
</template>

<script>
  export default {
    name: "ResetPasswordResetForm",
    data() {
      return {
        email: ''
      }
    },
    methods: {
      resetPassword() {

      }
    }
  };
</script>

<style scoped></style>
