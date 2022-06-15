<template>
  <header class="header-pages">
    <div class="container">
      <div class="header-pages-wrapper">
        <logo-component />
        <button-login v-if="!statusLogin" :width="width" />
        <button-exit @click="exit" v-if="statusLogin" />
      </div>
    </div>
  </header>
</template>

<script>
import LogoComponent from "@/components/common/LogoComponent.vue";
import ButtonLogin from "@/components/common/ButtonLogin.vue";
import ButtonExit from "@/components/common/ButtonExit.vue";

export default {
  components: {
    LogoComponent,
    ButtonLogin,
    ButtonExit,
  },

  mounted() {
    if (localStorage.getItem("auth")) {
      this.statusLogin = JSON.parse(localStorage.getItem("auth"));
    } else {
      this.statusLogin = this.$store.getters["getAuthStatus"];
    }
  },

  data() {
    return {
      statusLogin: null,
    };
  },

  methods: {
    exit() {
      this.statusLogin = false;
      this.$store.dispatch("changeStatus", false);
      localStorage.setItem("auth", JSON.stringify(false));
    },
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