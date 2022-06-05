<template>
  <div class="App">
    <header-block />
    <main>
      <main-screen />
      <suggestions-section />
      <receiving-section />
      <payment-section />
    </main>
  </div>
</template>

<script>
import HeaderBlock from "@/components/HeaderBlock.vue";
import MainScreen from "@/components/MainScreen.vue";
import SuggestionsSection from "@/components/SuggestionsSection.vue";
import ReceivingSection from "@/components/ReceivingSection.vue";
import PaymentSection from "@/components/PaymentSection.vue";

export default {
  name: "App",

  components: {
    HeaderBlock,
    MainScreen,
    SuggestionsSection,
    ReceivingSection,
    PaymentSection,
  },
};
</script>

<style>
</style>
