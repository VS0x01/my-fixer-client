<template>
  <div id="auth">
    <auth-header-component
      question="Already have an account? "
      :link="{ URL: '/sign-in', text: 'Log in' }"
    />
    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<script>
import AuthHeaderComponent from "@/auth/components/AuthHeader";

export default {
  name: "SignUp",
  components: { AuthHeaderComponent },
  data() {
    return {};
  }
};
</script>

<style lang="sass" scoped></style>
