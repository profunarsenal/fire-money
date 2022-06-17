<template>
  <div class="calculator" :class="{ 'calculator-form': pathCredit }">
    <div class="range-block" :class="{ 'range-block-form': pathCredit }">
      <div class="range-sum-block" :class="{ 'range-sum-form': pathCredit }">
        <h6 class="range-title">Cумма кредита</h6>
        <v-range
          minValue="1000"
          maxValue="100000"
          :valueRange="sumSliderValue"
          stepValue="1000"
          className="range sum-range"
          @range="sumSlider"
          v-model="sumSliderValue"
        />
        <div class="range-prompts">
          <span class="range-prompt">1 000 ₽ </span>
          <span class="range-prompt">100 000 ₽ </span>
        </div>
      </div>
      <div class="range-term-block" :class="{ 'range-term-form': pathCredit }">
        <h6 class="range-title">Cрок кредита</h6>
        <v-range
          minValue="1"
          maxValue="100"
          :valueRange="termSliderValue"
          stepValue="1"
          className="range term-range"
          @range="termSlider"
          v-model="termSliderValue"
        />
        <div class="range-prompts">
          <span class="range-prompt">от 1 дня</span>
          <span class="range-prompt">до 100 дней</span>
        </div>
      </div>
    </div>
    <div v-if="!pathCredit" class="btn-block">
      <v-button-primary @click="$router.push('/credit')" :disabled="false" />
    </div>
    <div class="calculator-block" :class="{ 'calculator-form': pathCredit }">
      <div class="calculator-row" :class="{ 'row-form': pathCredit }">
        <div class="calculator-item" :class="{ 'item-form': pathCredit }">
          <span class="calculator-title">Вы берете</span>
          <span class="calculator-value">{{ creditSum }} ₽ </span>
        </div>
        <div class="calculator-item" :class="{ 'item-form': pathCredit }">
          <span class="calculator-title">К возврату</span>
          <span class="calculator-value">{{ returnSum }} ₽ </span>
        </div>
      </div>
      <div class="calculator-row" :class="{ 'row-form': pathCredit }">
        <div class="calculator-item" :class="{ 'item-form': pathCredit }">
          <span class="calculator-title">Дата возврата</span>
          <span class="calculator-value">{{ returnDate }}</span>
        </div>
        <div class="calculator-item" :class="{ 'item-form': pathCredit }">
          <span class="calculator-title">Ежемесячный платеж</span>
          <span class="calculator-value">{{ monthPayment }} ₽ </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VRange from "@/components/common/VRange.vue";
import VButtonPrimary from "@/components/common/VButtonPrimary.vue";

export default {
  name: "calculator-money",

  components: {
    VRange,
    VButtonPrimary,
  },

  data() {
    return {
      sumSliderValue: "50000",
      termSliderValue: "50",
      creditSum: 0,
      returnSum: 0,
      monthPayment: 0,
      returnDate: "",
      monthArray: this.$store.getters["getMonth"],
      pathCredit: this.$router.options.history.location === `/credit`,
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
      const date = new Date(
        86400000 * +this.termSliderValue + new Date().getTime()
      );

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
      if (+this.termSliderValue <= 5) {
        return (this.creditSum / 100) * 10;
      } else if (+this.termSliderValue > 5 && +this.termSliderValue <= 15) {
        return (this.creditSum / 100) * 13;
      } else if (+this.termSliderValue > 15 && +this.termSliderValue <= 30) {
        return (this.creditSum / 100) * 17;
      } else if (+this.termSliderValue > 30 && +this.termSliderValue <= 50) {
        return (this.creditSum / 100) * 21;
      } else {
        return (this.creditSum / 100) * 25;
      }
    },
  },

  methods: {
    updateCalc() {
      this.creditSum = +this.sumSliderValue;
      this.returnSum = this.creditSum + this.formulaReturnSum;
      this.monthPayment = Math.ceil(this.formulaMonthPayment);
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
.calculator {
  width: 428px;
  padding: 26px 26px 16px;
  background-color: rgb(255, 255, 255);
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

  &.calculator-form {
    width: 100%;
    border-radius: 0;
    box-shadow: none;
    padding: 30px 0 20px;

    @media (max-width: 1200px) {
      transform: translateX(0);
    }

    @media (max-width: 992px) {
      transform: translateX(0);
    }

    @media (max-width: 810px) {
      transform: translateX(0);
    }
  }
}

.range-title {
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

.btn-block {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
}

.range-block-form {
  display: flex;
  justify-content: space-between;

  @media (max-width: 992px) {
    flex-direction: column;
    justify-content: center;
  }
}

.range-sum-block {
  margin-bottom: 40px;

  &.range-sum-form {
    margin-bottom: 0;
    flex: 0 1 45%;

    @media (max-width: 992px) {
      margin-bottom: 20px;
      flex: 0 1 100%;
    }
  }
}

.range-term-block {
  &.range-term-form {
    flex: 0 1 45%;
  }
}

.range-prompts {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.range-prompt {
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  color: #c0c2c5;
}

.calculator-block {
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

  &.calculator-form {
    padding-left: 0;
    background: linear-gradient(
      336.96deg,
      #ececec -84.4%,
      rgba(236, 236, 236, 0) 129.87%,
      #ececec 129.87%
    );

    @media (max-width: 992px) {
      padding-left: 0;
      flex-direction: column;
    }

    @media (max-width: 767px) {
      padding-left: 0;
      margin-top: 30px;
    }
  }
}
.calculator-row {
  flex: 0 1 50%;

  &.row-form {
    position: relative;
    display: flex;

    @media (min-width: 992px) {
      &:not(:last-child) {
        &::before {
          content: "";
          position: absolute;
          top: 50%;
          right: 0;
          width: 1px;
          height: 43px;
          background-color: #eaeaea;
          transform: translateY(-50%);
        }
      }
    }

    @media (max-width: 576px) {
      flex-direction: column;
    }
  }
}

.calculator-item {
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;

  &.item-form {
    position: relative;
    flex: 0 1 50%;
    align-items: center;
    justify-content: center;
    padding: 18px;

    @media (min-width: 576px) {
      &:not(:last-child) {
        &::before {
          content: "";
          position: absolute;
          top: 50%;
          right: 0;
          width: 1px;
          height: 43px;
          background-color: #eaeaea;
          transform: translateY(-50%);
        }
      }
    }
  }
}

.calculator-title {
  margin-bottom: 2px;
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;
  color: #45515f;
}
.calculator-value {
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #f28925;
}
</style>
