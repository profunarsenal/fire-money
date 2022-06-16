<template>
  <main class="main">
    <auth-form />
  </main>
  <footer-secton />
</template>

<script>
import FooterSecton from "@/components/footer/FooterSection.vue";
import AuthForm from "@/components/pages/auth/AuthForm.vue";

export default {
  name: "auth-view",

  components: {
    FooterSecton,
    AuthForm,
  },
};
</script>
