<template>
  <div class="App">
    <header-block />
    <main>
      <main-screen />
    </main>
  </div>
</template>

<script>
import HeaderBlock from "@/components/HeaderBlock.vue";
import MainScreen from "@/components/MainScreen.vue";

export default {
  name: "App",

  components: {
    HeaderBlock,
    MainScreen,
  },
};
</script>

<style>
</style>
