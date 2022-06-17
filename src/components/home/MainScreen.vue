<template>
  <section class="main-screen">
    <div class="container">
      <div class="main-screen-wrapper">
        <div class="main-screen-content">
          <div class="hot-offer-title"><span>Горячие предложения</span></div>
          <h1 class="main-screen-title">быстрых займов по всей России!</h1>
          <p class="main-screen-text">
            Без проверки кредитной истории. От 1 000 ₽ за 15 минут.
          </p>
          <span class="main-screen-alert"
            >Внимание! Услуга обработки заявки платная и составляет от 98 ₽ до
            398 ₽ раз в неделю</span
          >
        </div>
        <div class="main-screen-image">
          <img src="@/assets/images/girl-sun.png" alt="girl" />
          <img src="@/assets/images/sun.svg" alt="sun" />
        </div>
        <div class="main-screen-credit">
          <calculator-money />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CalculatorMoney from "@/components/blocks/CalculatorMoney.vue";

export default {
  name: "main-screen",

  components: {
    CalculatorMoney,
  },
};
</script>

<style lang="scss" scoped>
.main-screen {
  position: relative;
  padding: 158px 0 68px;
  background-image: url("@/assets/images/main-bg.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  overflow: hidden;

  @media (max-width: 1400px) {
    padding: 122px 0 30px;
  }

  @media (max-width: 1200px) {
    padding: 118px 0 20px;
  }

  @media (max-width: 767px) {
    padding: 88px 0 20px;
  }
}

.main-screen-wrapper {
  display: flex;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
}

.main-screen-content {
  position: relative;
  z-index: 2;
  flex: 1 1 100%;
  margin-top: 72px;
  color: #fff;

  @media (max-width: 1400px) {
    margin-top: 42px;
  }

  @media (max-width: 1200px) {
    margin-bottom: 37px;
    text-align: center;
    margin-top: 0;
  }
}

.main-screen-image {
  img {
    position: absolute;
    z-index: 1;
    left: 53%;
    bottom: -55px;
    transform: translateX(-53%);

    &:first-child {
      z-index: 2;
    }
  }

  @media (max-width: 1200px) {
    img {
      left: 0;
      transform: translateX(30%);
      &:last-child {
        transform: translate(-17%, 10%);
      }
    }
  }

  @media (max-width: 992px) {
    img {
      left: 0;
      bottom: -70px;
      transform: translateX(10%);
      &:last-child {
        transform: translate(-25%, 10%);
      }
    }
  }

  @media (max-width: 810px) {
    img {
      left: 0;
      bottom: -70px;
      transform: translateX(0);
      &:last-child {
        transform: translate(-30%, 10%);
      }
    }
  }

  @media (max-width: 767px) {
    img {
      display: none;
    }
  }
}

.main-screen-credit {
  position: relative;
  z-index: 1;
  flex: 0 1 50%;

  @media (max-width: 1200px) {
    flex: 1 1 100%;
    display: flex;
    justify-content: flex-end;
  }

  @media (max-width: 767px) {
    justify-content: center;
  }
}

.hot-offer-title {
  position: relative;
  display: inline-block;
  padding: 15px 25px 15px 75px;
  margin-bottom: 20px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 12px;

  span {
    font-weight: 500;
    font-size: 22px;
    line-height: 26px;
    text-transform: uppercase;
    color: #3c4260;
    white-space: nowrap;

    @media (max-width: 767px) {
      font-size: 20px;
      line-height: 24px;
    }

    @media (max-width: 400px) {
      font-size: 16px;
      line-height: 21px;
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: -10px;
    left: 14px;
    width: 44px;
    height: 54px;
    background-image: url("@/assets/images/fire-icon.svg");
    background-repeat: no-repeat;
    background-size: cover;

    @media (max-width: 767px) {
      width: 34px;
      height: 43px;
    }
  }

  @media (max-width: 767px) {
    padding: 10px 25px 10px 55px;
  }
}

.main-screen-title {
  max-width: 477px;
  margin-bottom: 15px;
  font-weight: 600;
  font-size: 48px;
  line-height: 111.5%;
  text-transform: uppercase;

  @media (max-width: 1200px) {
    max-width: 100%;
    font-size: 40px;
    line-height: 111.5%;
  }

  @media (max-width: 767px) {
    font-size: 36px;
  }
}

.main-screen-text {
  max-width: 454px;
  font-weight: 400;
  font-size: 27px;
  line-height: 133.5%;

  @media (max-width: 1200px) {
    max-width: 100%;
  }

  @media (max-width: 767px) {
    font-size: 20px;
  }
}

.main-screen-alert {
  max-width: 300px;
  display: inline-block;
  margin-top: 110px;
  font-weight: 300;
  font-size: 14px;
  line-height: 145.5%;

  @media (max-width: 1400px) {
    margin-top: 80px;
  }

  @media (max-width: 1200px) {
    max-width: 100%;
    margin-top: 10px;
  }
}

.credit-window {
  width: 428px;
  padding: 26px 26px 16px;
  background-color: #fff;
  box-shadow: 0px 4px 44px rgba(0, 0, 0, 0.05);
  border-radius: 15px;

  @media (max-width: 1200px) {
    transform: translateX(-10%);
  }

  @media (max-width: 992px) {
    transform: translateX(-5%);
  }

  @media (max-width: 810px) {
    transform: translateX(0);
  }
}

.credit-window-title {
  margin-bottom: 50px;
  font-weight: 400;
  font-size: 22px;
  line-height: 26px;
  color: #45515f;

  @media (max-width: 767px) {
    font-size: 18px;
    line-height: 21px;
  }
}

.credit-window-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
}

.credit-window-sum {
  margin-bottom: 40px;
}

.credit-window-prompts {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.credit-window-prompt {
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  color: #c0c2c5;
}

.credit-window-calc {
  padding-left: 50px;
  margin-top: 50px;
  display: flex;

  @media (max-width: 992px) {
    padding-left: 55px;
  }

  @media (max-width: 767px) {
    padding-left: 0;
    margin-top: 20px;
  }
}
.calc-row {
  flex: 0 1 50%;
}

.calc-item {
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
}

.calc-title {
  margin-bottom: 2px;
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;
  color: #45515f;
}
.calc-value {
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #f28925;
}
</style>
