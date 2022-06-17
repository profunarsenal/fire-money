<template>
  <a @click.prevent="$router.push('/form')" class="payment-method">
    <img
      class="payment-image"
      :src="require(`@/assets/images/${payment.image}`)"
      :alt="payment.image"
    />
    <img class="payment-icon" src="@/assets/images/arrow.svg" alt="arrow" />
  </a>
</template>

<script>
export default {
  name: "payment-method",

  props: {
    payment: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
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
  cursor: pointer;
  transition: all 0.3s;

  @media (any-hover: hover) {
    &:hover {
      transform: translateY(-5px);
      box-shadow: 2px 2px 4px #ececec;
    }
  }

  &:not(:last-child) {
    margin-right: 30px;
  }

  @media (max-width: 767px) {
    flex: 0 1 120px;
    height: 110px;

    &:not(:last-child) {
      margin-right: 20px;
    }
  }

  @media (max-width: 576px) {
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

  @media (max-width: 767px) {
    width: 90px;
    height: 46px;
  }

  @media (max-width: 576px) {
    width: 70px;
    height: 38px;
  }
}

.payment-icon {
  width: 18px;
  height: 10px;
  margin-top: 12px;

  @media (max-width: 767px) {
    width: 15px;
    height: 8px;
  }

  @media (max-width: 576px) {
    width: 13px;
    height: 6px;
  }
}
</style>