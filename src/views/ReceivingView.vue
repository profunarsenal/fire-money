<template>
  <header-pages :width="width" />
  <main class="main">
    <receiving-page />
  </main>
  <footer-secton />
</template>

<script>
import HeaderPages from "@/components/sections/header/HeaderPages.vue";
import FooterSecton from "@/components/sections/footer/FooterSection.vue";
import ReceivingPage from "@/components/page/ReceivingPage.vue";

export default {
  name: "receiving-view",

  components: {
    HeaderPages,
    FooterSecton,
    ReceivingPage,
  },

  mounted() {
    window.scrollTo(0, 0);
  },

  props: ["width"],
};
</script>