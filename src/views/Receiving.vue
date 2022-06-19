<template>
  <header-section />
  <main class="main">
    <div class="receiving-page">
      <div class="container">
        <div class="receiving-page-wrapper">
          <div class="receiving-load">
            <v-title v-if="!verification" :title="userTitle" />
            <v-title v-if="verification" title="Ваша заявка принята!" />
            <h6 v-if="!verification" class="receiving-subtitle">
              Мы проверяем введенные вами данные
            </h6>
            <h6 v-if="verification" class="receiving-subtitle">
              Наш специалист свяжется с вами в ближайшее время, для
              подтверждения заявки. Спасибо!
            </h6>
            <p v-if="!verification" class="receiving-message">
              Наши алгоритмы проверяют информацию введенную вами на предыдущих
              формах, это займет не более минуты. Пожалуйста не закрывайте
              страницу.
            </p>
            <router-link v-if="verification" class="receiving-link" to="/"
              >Вернуться на главную</router-link
            >
            <div v-if="!verification" class="receiving-image">
              <img src="@/assets/images/man.png" alt="man" />
              <span class="receiving-counter">{{ counter }}%</span>
              <v-preloader class="receiving-loader" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <footer-secton />
</template>

<script>
import VTitle from "@/components/common/VTitle.vue";
import VPreloader from "@/components/common/VPreloader.vue";

export default {
  name: "receiving",

  components: {
    VTitle,
    VPreloader,
  },

  data() {
    return {
      userInfo: this.$store.getters["getUser"],
      userTitle: "",
      counter: 0,
      counterInterval: null,
      verification: false,
    };
  },

  mounted() {
    this.userTitle = `${this.userInfo.surName} ${this.userInfo.name} ${this.userInfo.patronymic}`;
    this.verifyData();
  },

  methods: {
    verifyData() {
      this.counterInterval = setInterval(() => {
        this.counter++;
        if (this.counter >= 100) {
          clearInterval(this.counterInterval);
          this.verification = true;
        }
      }, 100);
    },
  },
};
</script>

<style lang="scss" scoped>
.receiving-page-wrapper {
  max-width: 768px;
  margin: 122px auto 50px;
  padding: 50px 0;
  background: #ffffff;
  box-shadow: 0px 4px 44px rgba(130, 141, 150, 0.15);
  border-radius: 22px;
  border: 2px solid #ffc83e;

  @media (max-width: 480px) {
    padding: 20px 0;
    margin: 20px auto;
  }
}

.receiving-subtitle {
  max-width: 300px;
  margin: 10px auto 0;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
}

.receiving-message {
  margin: 15px auto;
  padding: 0 10px;
  max-width: 600px;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
}

.receiving-image {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 480px) {
    img {
      width: 280px;
    }
  }
}

.receiving-counter {
  position: absolute;
  z-index: 1;
  top: 60%;
  left: 50%;
  font-weight: 500;
  font-size: 54px;
  line-height: 64px;
  color: #fff;
  transform: translate(-50%, -60%);

  @media (max-width: 480px) {
    font-size: 34px;
    line-height: 35px;
  }
}

.receiving-loader {
  position: absolute;
  z-index: 1;
  top: 62%;
  left: 49%;
  color: #fff;
  transform: translate(-49%, -62%);
}

.receiving-link {
  display: block;
  margin-top: 15px;
  padding: 0 10px;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  color: #45515f;
  text-align: center;
  text-decoration: underline;
}
</style>