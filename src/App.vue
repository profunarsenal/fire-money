<template>
  <div class="App">
    <header-section :width="width" />
    <main>
      <main-screen />
      <suggestions-section />
      <receiving-section />
      <payment-section />
      <reviews-section :width="width" />
      <clients-section :width="width" />
      <about-section />
      <questions-section />
      <banner-section />
      <footer-section :width="width" />
    </main>
  </div>
</template>

<script>
import HeaderSection from "@/components/sections/header/HeaderSection.vue";
import MainScreen from "@/components/sections/main/MainScreen.vue";
import SuggestionsSection from "@/components/sections/suggestions/SuggestionsSection.vue";
import ReceivingSection from "@/components/sections/receiving/ReceivingSection.vue";
import PaymentSection from "@/components/sections/payments/PaymentSection.vue";
import ReviewsSection from "@/components/sections/review/ReviewsSection.vue";
import ClientsSection from "@/components/sections/clients/ClientsSection.vue";
import AboutSection from "@/components/sections/about/AboutSection.vue";
import QuestionsSection from "@/components/sections/questions/QuestionsSection.vue";
import BannerSection from "@/components/sections/banner/BannerSection.vue";
import FooterSection from "@/components/sections/footer/FooterSection.vue";

export default {
  name: "App",

  components: {
    HeaderSection,
    MainScreen,
    SuggestionsSection,
    ReceivingSection,
    PaymentSection,
    ReviewsSection,
    ClientsSection,
    AboutSection,
    QuestionsSection,
    BannerSection,
    FooterSection,
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
