<template>
  <div class="auth">
    <header>
      <div class="container">
        <router-link class="auth-logo" to="/">
          <img src="@/assets/images/auth-logo.svg" alt="logo" />
        </router-link>
      </div>
    </header>
    <main class="main">
      <auth-form />
    </main>
    <footer-secton />
  </div>
</template>

<script>
import FooterSecton from "@/components/sections/footer/FooterSection.vue";
import AuthForm from "@/components/page/AuthForm.vue";

export default {
  name: "auth-view",

  components: {
    FooterSecton,
    AuthForm,
  },
};
</script>

<style lang="scss" scoped>
.auth-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;

  img {
    width: 303px;
    height: 57px;
  }

  @media (max-width: 576.98px) {
    margin-top: 20px;

    img {
      width: 203px;
      height: 37px;
    }
  }
}
</style>