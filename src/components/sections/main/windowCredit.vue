<template>
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
      <button-primary />
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
</template>

<script>
import RangeSlider from "@/components/repeating-components/RangeSlider.vue";
import ButtonPrimary from "@/components/repeating-components/ButtonPrimary.vue";

export default {
  components: {
    RangeSlider,
    ButtonPrimary,
  },
};
</script>

<style lang="scss" scoped>
.credit-window {
  width: 428px;
  padding: 26px 26px 16px;
  background-color: #fff;
  box-shadow: 0px 4px 44px rgba(0, 0, 0, 0.05);
  border-radius: 15px;

  @media (max-width: 1200.98px) {
    transform: translateX(-10%);
  }

  @media (max-width: 991.98px) {
    transform: translateX(-5%);
  }

  @media (max-width: 810.98px) {
    transform: translateX(0);
  }
}

.credit-window-title {
  margin-bottom: 50px;
  font-weight: 400;
  font-size: 22px;
  line-height: 26px;
  color: #45515f;

  @media (max-width: 767.98px) {
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

  @media (max-width: 991.98px) {
    padding-left: 55px;
  }

  @media (max-width: 767.98px) {
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
