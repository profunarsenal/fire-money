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
import FormComponent from "@/components/page/FormComponent.vue";

export default {
  name: "form-view",

  components: {
    HeaderPages,
    FormComponent,
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