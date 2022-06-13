<template>
  <header-pages :width="width" />
  <main class="main">
    <form-component />
  </main>
  <footer-secton />
</template>

<script>
import HeaderPages from "@/components/sections/header/HeaderPages.vue";
import FooterSecton from "@/components/sections/footer/FooterSection.vue";
import BannerSection from "@/components/sections/banner/BannerSection.vue";
import FormComponent from "@/components/page/FormComponent.vue";

export default {
  name: "form-view",

  components: {
    HeaderPages,
    BannerSection,
    FormComponent,
    FooterSecton,
  },

  props: ["width"],
};
</script>

<style lang="scss" scoped>
</style>