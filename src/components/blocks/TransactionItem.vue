<template>
  <li class="transactions-item">
    <div class="transaction-box">
      <span class="transaction-title">Дата</span>
      <span class="transaction-value">{{ transaction.date }}</span>
    </div>
    <div class="transaction-box">
      <span class="transaction-title">Время</span>
      <span class="transaction-value">{{ transaction.time }}</span>
    </div>
    <div class="transaction-box">
      <span class="transaction-title">Статус</span>
      <span class="transaction-value">{{ transaction.status }}</span>
    </div>
    <div class="transaction-box">
      <span class="transaction-title">Сумма в рублях</span>
      <span class="transaction-value">{{ transaction.sum }}₽</span>
    </div>
  </li>
</template>

<script>
export default {
  name: "transaction-item",

  props: {
    transaction: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
.transactions-item {
  display: flex;
  justify-content: space-between;
  padding: 20px 30px;
  margin-bottom: 5px;
  background: #f6f9fc;
  border-radius: 8px;

  @media (max-width: 992px) {
    flex-wrap: wrap;
    padding: 20px 30px 10px;
  }
}

.transaction-box {
  position: relative;
  flex: 0 1 20%;
  display: flex;
  flex-direction: column;
  padding-left: 30px;

  &::before {
    content: "";
    position: absolute;
    top: 10px;
    left: 0;
    width: 17px;
    height: 17px;
    background-repeat: no-repeat;
  }

  @media (max-width: 992px) {
    flex: 0 1 50%;
    flex-direction: row;
    margin-bottom: 10px;

    &::before {
      top: 0;
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
  }

  @media (max-width: 480px) {
    flex: 0 1 100%;
  }
}

.transaction-box:nth-child(1) {
  &::before {
    background-image: url("@/assets/images/icon-date.svg");
  }
}

.transaction-box:nth-child(2) {
  &::before {
    background-image: url("@/assets/images/icon-clock.svg");
  }
}

.transaction-box:nth-child(3) {
  &::before {
    background-image: url("@/assets/images/icon-status.svg");
  }
}

.transaction-box:nth-child(4) {
  &::before {
    background-image: url("@/assets/images/icon-money.svg");
  }
}

.transaction-title {
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;

  @media (max-width: 992px) {
    margin-right: 10px;
  }

  @media (max-width: 600px) {
    margin-right: 0;
  }
}

.transaction-value {
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
}
</style>