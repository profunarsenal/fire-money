<template>
  <section class="payment">
    <div class="container">
      <div class="payment-wrapper">
        <title-page class="payment-title" title="Способы получения" />
        <h5 class="payment-subtitle">На карту QIWI Yandex Деньги Наличные</h5>
        <div class="payment-methods">
          <payment-method
            v-for="payment in payments"
            :key="payment.id"
            :payment="payment"
          />
        </div>
        <div class="payment-btn">
          <button-primary @click="$router.push('/form')" :disabled="false" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PaymentMethod from "@/components/main/sections/payments/PaymentMethod.vue";
import TitlePage from "@/components/common/TitlePage.vue";
import ButtonPrimary from "@/components/common/ButtonPrimary.vue";

export default {
  name: "payment-section",

  components: {
    PaymentMethod,
    TitlePage,
    ButtonPrimary,
  },

  computed: {
    payments() {
      return this.$store.getters["getPayments"];
    },
  },
};
</script>

<style lang="scss" scoped>
.payment {
  padding: 50px 0;
  background: rgba(255, 255, 255, 0.95);

  @media (max-width: 767.98px) {
    padding: 30px 0;
  }
}

.payment-title {
  margin-bottom: 14px;
}

.payment-subtitle {
  margin-bottom: 14px;
  font-weight: 300;
  font-size: 13px;
  line-height: 145.5%;
  color: #45515f;
  text-align: center;
}

.payment-methods {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  padding: 30px 0 10px;
}

.payment-btn {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>