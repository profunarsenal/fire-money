<template>
  <header-pages :width="width" />
  <main class="main">
    <action-component />
  </main>
  <footer-secton />
</template>

<script>
import HeaderPages from "@/components/sections/header/HeaderPages.vue";
import FooterSecton from "@/components/sections/footer/FooterSection.vue";
import ActionComponent from "@/components/page/ActionComponent.vue";

export default {
  name: "action-view",

  components: {
    HeaderPages,
    ActionComponent,
    FooterSecton,
  },

  props: ["width"],
};
</script>

<style lang="scss" scoped>
</style>