<template>
  <section class="input-password-wrapper">
    <input
      class="auth-form__input"
      type="text"
      placeholder="Create password"
      v-model="password"
    />
    <section class="password-strength">
      <span></span><span></span><span></span>
    </section>
    <input
      class="auth-form__input"
      type="text"
      placeholder="Confirm password"
      v-model="confirmPassword"
    />
  </section>
</template>

<script>
export default {
  name: "SetPasswordForm",
  model: {},
  data() {
    return {
      password: "",
      confirmPassword: ""
    };
  },
  watch: {
    password: function(value) {
      this.$emit("inputPassword", value);
    },
    confirmPassword: function(value) {
      this.$emit("inputConfirmPassword", value);
    }
  }
};
</script>

<style lang="sass" scoped>
.input-password-wrapper
  display: flex
  flex-flow: column nowrap
.password-strength
  display: flex
  flex-flow: row nowrap
  height: 6px
</style>
