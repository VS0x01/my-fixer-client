<template>
  <form @submit.prevent="" class="auth-form">
    <h1>Complete your account</h1>
    <set-password-form-component />
    <button class="auth-form__submit" type="submit">Done!</button>
    <label for="terms" class="agreement">
      <input type="checkbox" id="terms" name="agree" class="agree" value="terms" />
      <span class="link link-question">
        I agree to the myFixer.com&nbsp;
      </span>
      <router-link tag="span" class="link link-agreement" to="/">
        Terms of Service
      </router-link>
    </label>
    <label for="privacy" class="agreement">
      <input type="checkbox" id="privacy" name="agree" class="agree" value="privacy" />
      <span class="link link-question">
        I agree to the myFixer.com&nbsp;
      </span>
      <router-link tag="span" class="link link-agreement" to="/">
        Privacy Policy
      </router-link>
    </label>
    <img src="@/assets/recaptcha.png" class="recaptcha">
  </form>
</template>

<script>
import SetPasswordFormComponent from "@/auth/components/SetPasswordForm";

export default {
  name: "CompleteYourAccount",
  components: { SetPasswordFormComponent }
};
</script>

<style lang="sass" scoped>
h1
  color: #01134E !important
.agreement
  display: flex
  align-items: center
  .agree
    appearance: none
    width: 24px
    height: 24px
    border: 2px solid #F2F2F2
    border-radius: 2px
    margin: 8px 13px 8px 0

    &:focus
      outline: none

    &:focus
    outline: none

    &:checked
      background-clip: content-box
      padding: 2px
      &::after
        content: url("data:image/svg+xml,%3Csvg width='16' height='14' viewBox='0 0 16 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0.184615 7.70527C0.0615385 7.58219 0 7.39757 0 7.2745C0 7.15142 0.0615385 6.9668 0.184615 6.84373L1.04615 5.98219C1.29231 5.73603 1.66154 5.73603 1.90769 5.98219L1.96923 6.04373L5.35385 9.6745C5.47692 9.79757 5.66154 9.79757 5.78462 9.6745L14.0308 1.12065H14.0923C14.3385 0.874497 14.7077 0.874497 14.9538 1.12065L15.8154 1.98219C16.0615 2.22834 16.0615 2.59757 15.8154 2.84373L5.96923 13.0591C5.84615 13.1822 5.72308 13.2437 5.53846 13.2437C5.35385 13.2437 5.23077 13.1822 5.10769 13.0591L0.307692 7.88988L0.184615 7.70527Z' fill='%230AD69C'/%3E%3C/svg%3E%0A")

.link
  margin: 0 !important
  white-space: nowrap
  &.link-agreement
    color: #002396 !important
.recaptcha
  margin: 8px 0
  width: 210px
  height: 60px
</style>
