<template>
  <div class="layout">
    <Header @scrollTo="scrollToSection" />
    <router-view />
    <Footer @scrollTo="scrollToSection" />
  </div>
</template>

<script>
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";

export default {
  name: "MainLayout",

  components: {
    Header,
    Footer,
  },

  methods: {
    scrollToSection(id) {
      const section = document.querySelector(id);

      section.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
