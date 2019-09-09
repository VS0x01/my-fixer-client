<template>
  <form @submit.prevent="resetPassword" class="auth-form">
    <h1>Reset your password</h1>
    <input class="auth-form__input" type="text" placeholder="New password" />
    <input
      class="auth-form__input"
      type="text"
      placeholder="Confirm password"
    />
    <button class="auth-form__submit" type="submit">Reset</button>
  </form>
</template>

<script>
export default {
  name: "ResetPasswordForm",
  data() {
    return {
      email: ""
    };
  },
  methods: {
    resetPassword() {}
  }
};
</script>

<style scoped></style>
