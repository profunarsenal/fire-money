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
          <img src="@/assets/images/girl.png" alt="girl" />
        </div>
        <div class="main-screen-credit">
          <div class="credit-window">
            <div class="credit-window-sum">
              <div class="credit-window-title">Cумма кредита</div>
              <range-slider
                minValue="1000"
                maxValue="100000"
                valueRange="50000"
                stepRange="1000"
                className="range sum-range"
              />
              <div class="credit-window-prompts">
                <span class="credit-window-prompt">1 000 ₽ </span>
                <span class="credit-window-prompt">100 000 ₽ </span>
              </div>
            </div>
            <div class="credit-window-term">
              <div class="credit-window-title">Срок кредита</div>
              <range-slider
                minValue="1"
                maxValue="100"
                valueRange="50"
                stepRange="1"
                className="range term-range"
              />
              <div class="credit-window-prompts">
                <span class="credit-window-prompt">от 1 дня</span>
                <span class="credit-window-prompt">до 100 дней</span>
              </div>
            </div>
            <div class="credit-window-btn">
              <button class="btn-primary" type="button">Оформить заявку</button>
            </div>
            <div class="credit-window-calc">
              <div class="calc-row">
                <div class="calc-item">
                  <span class="calc-title">Вы берете</span>
                  <span class="calc-value">20 000 ₽ </span>
                </div>
                <div class="calc-item">
                  <span class="calc-title">К возврату</span>
                  <span class="calc-value">25 650 ₽ </span>
                </div>
              </div>
              <div class="calc-row">
                <div class="calc-item">
                  <span class="calc-title">Дата возврата</span>
                  <span class="calc-value">08 января 2022</span>
                </div>
                <div class="calc-item">
                  <span class="calc-title">Ежемесячный платеж</span>
                  <span class="calc-value">5 650 ₽ </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import RangeSlider from "@/components/RangeSlider.vue";

export default {
  components: {
    RangeSlider,
  },

  data() {
    return {};
  },

  methods: {},
};
</script>


<style lang="scss" scoped>
.main-screen {
  position: relative;
  padding: 158px 0 68px;
  background-image: url("@/assets/images/main-bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  &::before {
    content: "";
    position: absolute;
    z-index: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: url("@/assets/images/sun.png");
    background-repeat: no-repeat;
    background-position: center;
  }
}

.main-screen-wrapper {
  display: flex;
}

.main-screen-content {
  position: relative;
  z-index: 1;
  flex: 1 1 100%;
  color: #fff;
}

.main-screen-image {
  position: absolute;
  z-index: 2;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
}

.main-screen-credit {
  position: relative;
  z-index: 1;
  flex: 0 1 50%;
}

.main-screen-title {
  max-width: 477px;
  margin-bottom: 15px;
  font-weight: 600;
  font-size: 48px;
  line-height: 111.5%;
  text-transform: uppercase;
}

.main-screen-text {
  max-width: 454px;
  font-weight: 400;
  font-size: 27px;
  line-height: 133.5%;
}

.main-screen-alert {
  max-width: 300px;
  display: inline-block;
  margin-top: 110px;
  font-weight: 300;
  font-size: 14px;
  line-height: 145.5%;
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
  }

  &::before {
    content: "";
    position: absolute;
    top: -10px;
    left: 14px;
    width: 44px;
    height: 54px;
    background-image: url("@/assets/images/fire-icon.svg");
  }
}

.credit-window {
  max-width: 428px;
  padding: 20px 30px;
  background-color: #fff;
  box-shadow: 0px 4px 44px rgba(0, 0, 0, 0.05);
  border-radius: 15px;
}

.credit-window-title {
  margin-bottom: 50px;
  font-weight: 400;
  font-size: 22px;
  line-height: 26px;
  color: #45515f;
}

.credit-window-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
}

.btn-primary {
  padding: 22px 44px;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  text-transform: uppercase;
  color: #ffffff;
  text-shadow: 0px 4px 12px rgba(0, 0, 0, 0.12);
  background: linear-gradient(81.55deg, #ffc83e 33.93%, #ff7347 73.78%);
  border-radius: 8px;
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
  padding-left: 30px;
  margin-top: 50px;
  display: flex;
}
.calc-row {
  flex: 0 1 50%;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
}
.calc-item {
  display: flex;
  flex-direction: column;
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
