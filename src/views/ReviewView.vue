<template>
  <header-pages :width="width" />
  <main class="main">
    <review-page />
  </main>
  <footer-secton />
</template>

<script>
import HeaderPages from "@/components/header/HeaderPages.vue";
import FooterSecton from "@/components/footer/FooterSection.vue";
import ReviewPage from "@/components/pages/review/ReviewPage.vue";

export default {
  name: "review-view",

  components: {
    HeaderPages,
    FooterSecton,
    ReviewPage,
  },

  props: ["width"],
};
</script>