<template>
  <header-pages :width="width" />
  <main class="main">
    <form-component />
  </main>
</template>

<script>
import HeaderPages from "@/components/sections/header/HeaderPages.vue";
import BannerSection from "@/components/sections/banner/BannerSection.vue";
import FormComponent from "@/components/page/FormComponent.vue";

export default {
  components: {
    HeaderPages,
    BannerSection,
    FormComponent,
  },

  props: ["width"],
};
</script>

<style lang="scss" scoped>
</style>