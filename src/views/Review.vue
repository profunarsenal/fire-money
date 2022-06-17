<template>
  <header-section />
  <main class="main">
    <div class="review-page"></div>
  </main>
  <footer-secton />
</template>

<script>
import HeaderSection from "@/components/header/HeaderSection.vue";
import FooterSecton from "@/components/footer/FooterSection.vue";

export default {
  name: "review",

  components: {
    FooterSecton,
    HeaderSection,
  },
};
</script>