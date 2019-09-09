<template>
  <div id="auth">
    <auth-header-component
      :question="link.question"
      :link="{ URL: link.URL, text: link.text }"
    />
    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<script>
import AuthHeaderComponent from "@/auth/components/AuthHeader";

export default {
  name: "SignIn",
  components: { AuthHeaderComponent },
  computed: {
    link() {
      return {
        question: this.$route.meta.question,
        URL: this.$route.meta.URL,
        text: this.$route.meta.text
      };
    }
  }
};
</script>

<style lang="sass" scoped></style>