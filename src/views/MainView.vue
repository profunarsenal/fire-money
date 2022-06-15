<template>
  <header-section @scrollTo="scrollToSection" :width="width" />
  <main class="main">
    <main-screen />
    <suggestions-section />
    <receiving-section />
    <payment-section />
    <reviews-section />
    <clients-section :width="width" />
    <about-section />
    <questions-section />
    <banner-section />
  </main>
  <footer-section @scrollTo="scrollToSection" :width="width" />
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
  name: "main-view",

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

  props: ["width"],

    mounted() {
    window.scrollTo(0, 0);
  },

  methods: {
    scrollToSection(id) {
      const section = document.querySelector(id);

      section.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
    },
  },
};
</script>