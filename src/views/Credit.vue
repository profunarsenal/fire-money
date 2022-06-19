<template>
  <main class="main">
    <div class="credit">
      <div class="container">
        <div class="credit-wrapper">
          <v-title title="Для получения займа">
            <span class="credit-subtitle">Заполните заявку</span>
          </v-title>
          <div class="credit-form">
            <calculator-money />
            <user-form />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import VTitle from "@/components/common/VTitle.vue";
import UserForm from "@/components/blocks/UserForm.vue";
import CalculatorMoney from "@/components/blocks/CalculatorMoney.vue";

export default {
  name: "credit",

  components: {
    VTitle,
    UserForm,
    CalculatorMoney,
  },
};
</script>

<style lang="scss" scoped>
.credit {
  background-image: url("@/assets/images/page-bg.png");
  background-size: cover;
  background-position: center;
}

.credit-subtitle {
  display: block;
  color: #ff7b00;
}

.credit-wrapper {
  padding: 122px 0 70px;
}

.credit-form {
  padding: 38px;
  margin-top: 32px;
  box-shadow: 0px 4px 44px rgba(130, 141, 150, 0.15);
  background: #fff;
  border-radius: 22px;

  @media (max-width: 576px) {
    padding: 20px;
  }
}
</style>