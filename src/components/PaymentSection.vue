<template>
  <section class="payment">
    <div class="container">
      <div class="payment-wrapper">
        <tittle-page class="payment-title" title="Способы получения" />
        <h5 class="payment-subtitle">На карту QIWI Yandex Деньги Наличные</h5>
        <div class="payment-methods">
          <a href="#" class="payment-method">
            <img
              class="payment-image"
              src="@/assets/images/payment-1.png"
              alt="payment"
            />
            <img
              class="payment-icon"
              src="@/assets/images/arrow.svg"
              alt="arrow"
            />
          </a>
          <a href="#" class="payment-method">
            <img
              class="payment-image"
              src="@/assets/images/payment-2.png"
              alt="payment"
            />
            <img
              class="payment-icon"
              src="@/assets/images/arrow.svg"
              alt="arrow"
            />
          </a>
          <a href="#" class="payment-method">
            <img
              class="payment-image"
              src="@/assets/images/payment-3.png"
              alt="payment"
            />
            <img
              class="payment-icon"
              src="@/assets/images/arrow.svg"
              alt="arrow"
            />
          </a>
          <a href="#" class="payment-method">
            <img
              class="payment-image"
              src="@/assets/images/payment-4.png"
              alt="payment"
            />
            <img
              class="payment-icon"
              src="@/assets/images/arrow.svg"
              alt="arrow"
            />
          </a>
          <a href="#" class="payment-method">
            <img
              class="payment-image"
              src="@/assets/images/payment-5.svg"
              alt="payment"
            />
            <img
              class="payment-icon"
              src="@/assets/images/arrow.svg"
              alt="arrow"
            />
          </a>
        </div>
        <div class="payment-btn">
          <button-primary />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TittlePage from "@/components/TittlePage.vue";
import ButtonPrimary from "@/components/ButtonPrimary.vue";

export default {
  components: {
    TittlePage,
    ButtonPrimary,
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

.payment-method {
  flex: 0 1 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 130px;
  padding: 40px 20px;
  margin-bottom: 20px;
  background: #f6f9fc;
  border-radius: 22px;

  &:not(:last-child) {
    margin-right: 30px;
  }

  @media (max-width: 767.98px) {
    flex: 0 1 120px;
    height: 110px;

    &:not(:last-child) {
      margin-right: 20px;
    }
  }

  @media (max-width: 576.98px) {
    flex: 0 1 90px;
    height: 90px;
    margin-bottom: 10px;

    &:not(:last-child) {
      margin-right: 10px;
    }
  }
}

.payment-image {
  width: 100px;
  height: 54px;

  @media (max-width: 767.98px) {
    width: 90px;
    height: 46px;
  }

  @media (max-width: 576.98px) {
    width: 70px;
    height: 38px;
  }
}

.payment-icon {
  width: 18px;
  height: 10px;
  margin-top: 12px;

  @media (max-width: 767.98px) {
    width: 15px;
    height: 8px;
  }

  @media (max-width: 576.98px) {
    width: 13px;
    height: 6px;
  }
}

.payment-btn {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>