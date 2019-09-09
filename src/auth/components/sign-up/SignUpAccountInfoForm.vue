<template>
  <form class="auth-form">
    <h1>Sign up</h1>
    <div class="auth-form__input-group">
      <input class="auth-form__input" type="text" placeholder="First name" />
      <input class="auth-form__input" type="text" placeholder="Last name" />
    </div>
    <input class="auth-form__input" type="text" placeholder="Username" />
    <input class="auth-form__input" type="email" placeholder="E-mail" />
    <button class="auth-form__submit" type="submit">Get started</button>
  </form>
</template>

<script>
export default {
  name: "SignUpAccountInfoForm"
};
</script>

<style scoped></style>
