<template>
  <div class="credit-window">
    <div class="credit-window-sum">
      <div class="credit-window-title">Cумма кредита</div>
      <range-slider
        minValue="1000"
        maxValue="100000"
        :valueRange="sumSliderValue"
        stepValue="1000"
        className="range sum-range"
        @range="sumSlider"
        v-model="sumSliderValue"
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
        :valueRange="termSliderValue"
        stepValue="1"
        className="range term-range"
        @range="termSlider"
        v-model="termSliderValue"
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
          <span class="calc-value">{{ creditSum }} ₽ </span>
        </div>
        <div class="calc-item">
          <span class="calc-title">К возврату</span>
          <span class="calc-value">{{ returnSum }} ₽ </span>
        </div>
      </div>
      <div class="calc-row">
        <div class="calc-item">
          <span class="calc-title">Дата возврата</span>
          <span class="calc-value">{{ returnDate }}</span>
        </div>
        <div class="calc-item">
          <span class="calc-title">Ежемесячный платеж</span>
          <span class="calc-value">{{ monthPayment }} ₽ </span>
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

  data() {
    return {
      sumSliderValue: "50000",
      termSliderValue: "50",
      creditSum: 0,
      returnSum: 0,
      monthPayment: 0,
      returnDate: "",
      monthArray: [
        "января",
        "февраля",
        "марта",
        "апреля",
        "мая",
        "июня",
        "июля",
        "августа",
        "сентября",
        "октября",
        "ноября",
        "декабря",
      ],
    };
  },

  mounted() {
    this.updateCalc();
  },

  watch: {
    sumSliderValue() {
      this.updateCalc();
    },

    termSliderValue() {
      this.updateCalc();
    },
  },

  computed: {
    getDateMonthPayment() {
      const date = new Date(86400000 * +this.termSliderValue + Date.now());

      return `${date.getDate()} ${
        this.monthArray[date.getMonth()]
      } ${date.getFullYear()}`;
    },

    formulaMonthPayment() {
      if (+this.termSliderValue <= 30) {
        return this.returnSum;
      } else if (+this.termSliderValue > 30 && +this.termSliderValue <= 60) {
        return this.returnSum / 2;
      } else {
        return this.returnSum / 3;
      }
    },

    formulaReturnSum() {
      if (+this.termSliderValue <= 10) {
        return (this.creditSum / 100) * 8;
      } else if (+this.termSliderValue > 10 && +this.termSliderValue <= 30) {
        return (this.creditSum / 100) * 13;
      } else if (+this.termSliderValue > 30 && +this.termSliderValue <= 60) {
        return (this.creditSum / 100) * 21;
      } else {
        return (this.creditSum / 100) * 26;
      }
    },
  },

  methods: {
    updateCalc() {
      this.creditSum = +this.sumSliderValue;
      this.returnSum = this.creditSum + this.formulaReturnSum;
      this.monthPayment = this.formulaMonthPayment;
      this.returnDate = this.getDateMonthPayment;
    },

    termSlider(event, selector, value, progress) {
      selector.style.left = event.target.value + "%";
      progress.style.width = event.target.value + "%";
      value.textContent = event.target.value;

      if (event.target.value > 91) {
        value.style.cssText += "transform:translateX(-10%)";
      } else if (event.target.value < 1) {
        value.style.cssText += "transform:translateX(100%)";
      } else {
        value.style.cssText += "transform:translateX(0)";
      }
    },

    sumSlider(event, selector, value, progress) {
      selector.style.left = event.target.value / 1000 + "%";
      progress.style.width = event.target.value / 1000 + "%";
      value.textContent = event.target.value;

      if (event.target.value > 91000) {
        value.style.cssText += "transform:translateX(-50%)";
      } else if (event.target.value < 2000) {
        value.style.cssText += "transform:translateX(10%)";
      } else {
        value.style.cssText += "transform:translateX(0)";
      }
    },
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
