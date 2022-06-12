<template>
  <div class="form-credit">
    <div class="container">
      <div class="form-credit-wrapper">
        <title-page v-if="isTimeStatus" title="Для получения займа под 0%*" />
        <title-page v-if="!isTimeStatus" title="Для получения займа" />
        <title-page class="subtitle" title="Заполните заявку" />
        <form class="form">
          <p v-if="isTimeStatus" class="form-message">
            Поторопитесь, до окончания акционного предложения осталось
          </p>
          <div v-if="isTimeStatus" class="form-timer">
            <timer-component />
          </div>
          <calculator-money />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import TitlePage from "@/components/common/TitlePage.vue";
import TimerComponent from "@/components/page/TimerComponent.vue";
import CalculatorMoney from "@/components/common/CalculatorMoney.vue";

export default {
  components: {
    TitlePage,
    TimerComponent,
    CalculatorMoney,
  },

  data() {
    return {
      actionTime: true,
    };
  },

  computed: {
    isTimeStatus() {
      return this.$store.getters["getStatus"];
    },
  },
};
</script>

<style lang="scss" scoped>
.subtitle {
  color: #ff7b00;
}

.form-credit {
  background-image: url("@/assets/images/page-bg.png");
  background-size: cover;
  background-position: center;
}

.form-credit-wrapper {
  padding: 40px 0 70px;
}

.form {
  margin-top: 32px;
  padding: 38px;
  background: #fff;
  box-shadow: 0px 4px 44px rgba(130, 141, 150, 0.15);
  border-radius: 22px;

  @media (max-width: 576.98px) {
    padding: 20px;
  }
}

.form-message {
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #45515f;
}

.form-timer {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
</style>
