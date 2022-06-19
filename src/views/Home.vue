<template>
  <main class="main">
    <main-screen />
    <suggestions-section />
    <receiving-section />
    <payment-section />
    <reviews-section />
    <clients-section />
    <about-section />
    <questions-section />
    <banner-section />
  </main>
</template>

<script>
import MainScreen from "@/components/home/MainScreen.vue";
import SuggestionsSection from "@/components/home/sections/suggestions/SuggestionsSection.vue";
import ReceivingSection from "@/components/home/sections/receiving/ReceivingSection.vue";
import PaymentSection from "@/components/home/sections/payments/PaymentSection.vue";
import ReviewsSection from "@/components/home/sections/review/ReviewsSection.vue";
import ClientsSection from "@/components/home/sections/clients/ClientsSection.vue";
import AboutSection from "@/components/home/sections/about/AboutSection.vue";
import QuestionsSection from "@/components/home/sections/questions/QuestionsSection.vue";
import BannerSection from "@/components/home/sections/banner/BannerSection.vue";

export default {
  name: "home",

  components: {
    MainScreen,
    SuggestionsSection,
    ReceivingSection,
    PaymentSection,
    ReviewsSection,
    ClientsSection,
    AboutSection,
    QuestionsSection,
    BannerSection,
  },
};
</script>