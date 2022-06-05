<template>
  <div class="App">
    <header-block :width="width" />
    <main>
      <main-screen />
      <suggestions-section />
      <receiving-section />
      <payment-section />
      <reviews-section :width="width" />
      <clients-section :width="width" />
    </main>
  </div>
</template>

<script>
import HeaderBlock from "@/components/HeaderBlock.vue";
import MainScreen from "@/components/MainScreen.vue";
import SuggestionsSection from "@/components/SuggestionsSection.vue";
import ReceivingSection from "@/components/ReceivingSection.vue";
import PaymentSection from "@/components/PaymentSection.vue";
import ReviewsSection from "@/components/ReviewsSection.vue";
import ClientsSection from "@/components/ClientsSection.vue";

export default {
  name: "App",

  components: {
    HeaderBlock,
    MainScreen,
    SuggestionsSection,
    ReceivingSection,
    PaymentSection,
    ReviewsSection,
    ClientsSection,
  },

  data: () => ({
    width: window.innerWidth,
  }),

  created() {
    window.addEventListener("resize", this.updateWidth);
  },

  methods: {
    updateWidth() {
      this.width = window.innerWidth;
    },
  },
};
</script>

<style>
</style>
