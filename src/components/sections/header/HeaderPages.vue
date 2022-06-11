<template>
  <header class="header-pages">
    <div class="container">
      <div class="header-pages-wrapper">
        <logo-component />
        <button-login :width="width" />
      </div>
    </div>
  </header>
</template>

<script>
import LogoComponent from "@/components/common/LogoComponent.vue";
import ButtonLogin from "@/components/common/ButtonLogin.vue";

export default {
  components: {
    LogoComponent,
    ButtonLogin,
  },

  props: ["width"],
};
</script>

<style lang="scss" scoped>
.header-pages {
  background: linear-gradient(278.04deg, #ffc83e 31.99%, #ff9f47 81.27%);
}

.header-pages-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 122px;

  @media (max-width: 767.98px) {
    min-height: 80px;
  }
}
</style>