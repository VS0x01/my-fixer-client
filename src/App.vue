<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
  computed: {
    accessToken() {
      return this.$store.state.tokens.access;
    },
    refreshToken() {
      return this.$store.state.tokens.refresh;
    }
  },
  watch: {
    accessToken: function(newVal) {
      this.$http.setAccessToken(newVal);
    },
    refreshToken(newVal, oldVal) {
      if(!newVal) {
        this.$http.delete("/accounts/token", { refreshToken: oldVal });
        this.$router.push("/");
      }
    }
  }
};
</script>

<style lang="sass">
@import "./shared/sass/mixins"
@import "./shared/sass/date-range-picker"

body
  margin: 0
  padding: 0
  background: #F9FAFC

button,
input[type="reset"],
input[type="button"],
input[type="submit"],
input[type="file"] > input[type="button"]
  &::-moz-focus-inner
    border: 0

a
  outline: 0

button
  &:active
    box-shadow: 0 1px 7px rgba(204, 202, 212, 0.58)

#auth
  display: flex
  flex-direction: column

  .header
    display: flex
    justify-content: space-between

    .logo svg
      width: 138px
      margin: 2px 0 0 141px

      +phones
        width: 75%
        margin-left: 20px

    .link-question
      margin: 28px 137px 0 0
      .link
        margin: 0
        font-weight: 600
        color: #2A74DB

  .link
    text-decoration: none
    margin: 0 137px 0 0
    +superscription(Roboto, 300, 16px, 19px, 0.28px, #222428)

    a
      color: #2A74DB

  .content
    display: flex
    align-self: center
    flex-direction: column
    width: 400px
    margin: 130px auto 0 auto
    padding: 72px 116px 80px 116px
    background: #FFF
    box-shadow: 0 5px 40px rgba(0, 45, 113, 0.06)
    border-radius: 10px
    +phones
      padding: 16px
      margin: auto
      width: auto

  h1
    +superscription('Exo 2', 600, 28px, 34px, 0.4px, #002396)

  .auth-form
    display: flex
    flex-direction: column

  .auth-form__input-group
    display: flex
    justify-content: space-between

    .auth-form__input
      width: 190px

  .auth-form__input
    box-sizing: border-box
    height: 40px
    margin: 12px 0
    padding: 13px
    background: #FCFCFC
    border: 2px solid #F2F2F2
    border-radius: 2px
    outline: none

    +superscription(Roboto, normal, 14px, 16px, 0.28px, #222428)

    &::placeholder
      +superscription(Roboto, normal, 14px, 16px, 0.28px, rgba(135, 144, 167, 0.57))

    &:focus
      background: #FFF
      border-left-color: #2A74DB
    &.invalid:focus
      border-left-color: red
    &.warn
      border-color: red

  .auth-form__link
    align-self: flex-end
    margin: 0

  .auth-form__submit
    align-self: flex-end
    width: 188px
    height: 43px
    margin: 14px 0
    background: #0AD69C
    border: none
    border-radius: 2px
    outline: none
    cursor: pointer

    +superscription('Exo 2', 600, 16px, 19px, 0.4px, #FFF)
</style>
