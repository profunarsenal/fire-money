<template>
  <main class="main">
    <div class="cabinet">
      <div class="container">
        <div class="cabinet-header">
          <router-link to="/" class="cabiner-logo">
            <img src="@/assets/images/cabinet-logo.svg" alt="logo" />
          </router-link>
          <div class="cabinet-user">
            <span class="user-name">{{ user.name }}</span>
            <span class="user-phone">{{ user.phone }}</span>
          </div>
          <button @click="leaveCabinet" class="btn-exit" type="button">
            <img src="@/assets/images/icon-exit.svg" alt="exit" />
          </button>
        </div>
        <div class="mobile-cabinet-user">
          <span class="user-name">{{ user.name }}</span>
          <span class="user-phone">{{ user.phone }}</span>
        </div>
        <div class="cabinet-wrapper">
          <div class="notifications">
            <h6 class="notifications-title">СМС Уведомления</h6>
            <p class="notifications-message">
              Уведомления о наилучших кредитных предложениях на указанный номер
              вами номер в заявке.
            </p>
            <label class="notifications-checkbox">
              <input class="checkbox-hide" type="checkbox" />
              <span class="checkbox-show"></span>
            </label>
          </div>
          <div class="transactions">
            <h6 class="transactions-title">Ваши транзакции</h6>
            <ul class="transactions-list">
              <transaction-item
                v-for="transaction in transactions"
                :key="transaction.id"
                :transaction="transaction"
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import TransactionItem from "@/components/blocks/TransactionItem.vue";

export default {
  name: "cabinet",

  components: {
    TransactionItem,
  },

  data() {
    return {
      user: JSON.parse(localStorage.getItem("user")),
    };
  },

  computed: {
    transactions() {
      return this.$store.getters["getTransactions"];
    },
  },

  methods: {
    leaveCabinet() {
      localStorage.setItem("auth", JSON.stringify(false));
      localStorage.removeItem("user");
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
.cabinet-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 90px;

  @media (max-width: 576px) {
    min-height: 70px;
  }
}

.cabiner-logo {
  img {
    width: 188px;
    height: 46px;
  }

  @media (max-width: 576px) {
    img {
      width: 146px;
      height: 40px;
    }
  }
}

.cabinet-user {
  display: flex;
  flex-direction: column;
  margin-left: auto;

  @media (max-width: 576px) {
    display: none;
  }
}

.mobile-cabinet-user {
  display: none;

  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
    padding: 20px;
    background: #ffffff;
    border: 1px solid #e2eefa;
    border-radius: 11px;
  }
}

.user-name,
.user-phone {
  font-weight: 500;
  font-size: 14px;
  line-height: 123.57%;
  text-align: right;

  @media (max-width: 576px) {
    text-align: center;
  }
}

.user-phone {
  font-weight: 400;
}

.btn-exit {
  margin-left: 18px;
  padding: 15px;
  border: 1px solid #e2eefa;
  border-radius: 11px;
  background-color: transparent;
  transition: all 0.3s;

  @media (any-hover: hover) {
    &:hover {
      background-color: #e2eefa;
    }
  }
}

.cabinet-wrapper {
  padding: 10px 0 30px;
}

.transactions {
  padding: 20px 30px;
  background: #ffffff;
  border: 1px solid #e2eefa;
  border-radius: 11px;
}

.transactions-title {
  margin-bottom: 16px;
  font-weight: 600;
  font-size: 20px;
  line-height: 103.57%;
}

.transactions-list {
  display: flex;
  flex-direction: column;
}

.notifications {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 20px 30px;
  background: #ffffff;
  border: 1px solid #e2eefa;
  border-radius: 11px;

  @media (max-width: 767px) {
    flex-wrap: wrap;
  }
}

.notifications-title {
  font-weight: 600;
  font-size: 16px;
  line-height: 103.57%;
}

.notifications-message {
  padding: 0 10px;
  font-weight: 400;
  font-size: 13px;
  line-height: 103.57%;
  text-align: center;

  @media (max-width: 767px) {
    flex: 0 1 100%;
    order: 3;
    margin-top: 10px;
    padding: 0;
    line-height: 103.57%;
    text-align: left;
  }
}

.notifications-checkbox {
  display: block;
  width: 44px;
  height: 24px;
}

.checkbox-hide {
  position: absolute;
  z-index: -1;
  width: 1px;
  height: 1px;
  opacity: 0;
  appearance: none;

  &:checked + .checkbox-show {
    &::before {
      background-color: #ffe896;
    }

    &::after {
      left: 22px;
    }
  }
}

.checkbox-show {
  position: relative;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 44px;
    height: 24px;
    background: #f0f1f1;
    border-radius: 40px;
  }

  &::after {
    content: "";
    position: absolute;
    top: 3px;
    left: 3px;
    width: 18px;
    height: 18px;
    background: #ff7b00;
    border-radius: 50%;
    transition: left 0.3s;
  }
}
</style>