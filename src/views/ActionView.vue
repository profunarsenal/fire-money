<template>
  <header-pages :width="width" />
  <main class="main">
    <action-page />
  </main>
  <footer-secton />
</template>

<script>
import HeaderPages from "@/components/header/HeaderPages.vue";
import FooterSecton from "@/components/footer/FooterSection.vue";
import ActionPage from "@/components/pages/action/ActionPage.vue";

export default {
  name: "action-view",

  components: {
    HeaderPages,
    ActionPage,
    FooterSecton,
  },

  mounted() {
    window.scrollTo(0, 0);
  },

  props: ["width"],
};
</script>

<style lang="scss" scoped>
</style>