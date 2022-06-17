<template>
  <main class="main">
    <div class="auth">
      <div class="container">
        <div class="auth-wrapper">
          <router-link class="auth-logo" to="/">
            <img src="@/assets/images/auth-logo.svg" alt="logo" />
          </router-link>
          <h2 class="auth-title">Авторизация</h2>
          <form class="auth-form">
            <label class="auth-label">
              <span class="auth-name">Телефон</span>
              <v-input-form
                class="auth-input"
                placeholder="+7 (9__) ___.__.__"
              />
              <img
                class="auth-icon"
                src="@/assets/images/icon-input-phone.svg"
                alt="phone"
              />
            </label>
            <label class="auth-label">
              <span class="auth-name">Пароль</span>
              <v-input-form
                class="auth-input"
                type="password"
                placeholder="123"
              />
              <img
                class="auth-icon"
                src="@/assets/images/icon-input-lock.svg"
                alt="phone"
              />
            </label>
            <div class="auth-btn">
              <v-button-primary
                @click="login"
                title="Войти"
                :disabled="false"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import VInputForm from "@/components/common/VInputForm.vue";
import VButtonPrimary from "@/components/common/VButtonPrimary.vue";

export default {
  name: "auth",

  components: {
    VInputForm,
    VButtonPrimary,
  },

  methods: {
    login() {
      this.$store.dispatch("changeStatus", true);
      localStorage.setItem("auth", JSON.stringify(true));
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
.auth {
  background-image: url("@/assets/images/auth-bg.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.auth-wrapper {
  padding: 25px 0;
}

.auth-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;

  img {
    width: 303px;
    height: 57px;
  }

  @media (max-width: 576px) {
    margin-top: 20px;

    img {
      width: 203px;
      height: 37px;
    }
  }
}

.auth-title {
  margin-bottom: 30px;
  font-weight: 600;
  font-size: 30px;
  line-height: 36px;
  text-align: center;
  text-transform: uppercase;

  @media (max-width: 576px) {
    margin-bottom: 20px;
    font-size: 24px;
    line-height: 29px;
  }
}

.auth-form {
  display: flex;
  flex-direction: column;
  max-width: 576px;
  margin: 0 auto;
  padding: 50px;
  background: #ffffff;
  box-shadow: 0px 4px 44px rgba(130, 141, 150, 0.15);
  border-radius: 22px;
  border: 2px solid #ffc83e;

  @media (max-width: 576px) {
    padding: 20px;
  }
}

.auth-label {
  position: relative;
  display: flex;
  flex-direction: column;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  @media (max-width: 576px) {
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
}

.auth-name {
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
}

.auth-btn {
  display: flex;
  align-items: center;
  justify-content: center;
}

.auth-icon {
  position: absolute;
  bottom: 15px;
  left: 15px;
  width: 18px;
  height: 18px;
}

.auth-input {
  padding-left: 45px;
}
</style>
