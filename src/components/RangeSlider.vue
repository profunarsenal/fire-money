<template>
  <div ref="range" :class="className">
    <input
      ref="rangeSlider"
      @input="rangeSlider"
      class="range-slider"
      type="range"
      :min="minValue"
      :max="maxValue"
      :value="maxValue / 2"
      name="range"
      :step="stepRange"
    />
    <div ref="rangeSelector" class="range-selector">
      <div class="range-selector-btn"></div>
      <div ref="rangeSelectorValue" class="range-selector-value">
        {{ valueRange }}
      </div>
    </div>
    <div class="range-background"></div>
    <div ref="rangeProgress" class="range-progress"></div>
  </div>
</template>

<script>
export default {
  props: {
    className: {
      type: String,
      required: true,
    },
    minValue: {
      required: true,
    },
    maxValue: {
      required: true,
    },
    valueRange: {
      required: true,
    },
    stepRange: {
      required: true,
    },
  },

  methods: {
    rangeSlider() {
      const range = this.$refs.range;
      const rangeInput = range.querySelector("input");
      const rangeSelector = range.querySelector(".range-selector");
      const rangeSelectorValue = range.querySelector(".range-selector-value");
      const rangeProgress = range.querySelector(".range-progress");

      if (this.$refs.range.classList.contains("term-range")) {
        this.termSlider(
          rangeInput,
          rangeSelector,
          rangeSelectorValue,
          rangeProgress
        );
      }

      if (this.$refs.range.classList.contains("sum-range")) {
        this.sumSlider(
          rangeInput,
          rangeSelector,
          rangeSelectorValue,
          rangeProgress
        );
      }
    },

    sumSlider(input, selector, selectorValue, progress) {
      selector.style.left = input.value / 1000 + "%";
      progress.style.width = input.value / 1000 + "%";
      selectorValue.textContent = input.value;

      if (input.value > 91000) {
        selectorValue.style.cssText += "transform:translateX(-50%)";
      } else if (input.value < 2000) {
        selectorValue.style.cssText += "transform:translateX(10%)";
      } else {
        selectorValue.style.cssText += "transform:translateX(0)";
      }
    },

    termSlider(input, selector, selectorValue, progress) {
      selector.style.left = input.value + "%";
      progress.style.width = input.value + "%";
      selectorValue.textContent = input.value;

      if (input.value > 91) {
        selectorValue.style.cssText += "transform:translateX(-10%)";
      } else if (input.value < 1) {
        selectorValue.style.cssText += "transform:translateX(100%)";
      } else {
        selectorValue.style.cssText += "transform:translateX(0)";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.range {
  position: relative;
}

.range-slider {
  width: 100%;
  height: 7px;
  border-radius: 8px;
  outline: none;
  -webkit-appearance: none;
}

.range-slider::-webkit-slider-thumb {
  position: relative;
  z-index: 3;
  width: 21px;
  height: 21px;
  cursor: pointer;
  -webkit-appearance: none;
}

.range-selector {
  position: absolute;
  z-index: 2;
  bottom: -1px;
  left: 50%;
  height: 21px;
  width: 21px;
  transform: translateX(-50%);
}

.range-selector-btn {
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 21px;
  height: 21px;
  background-image: url("@/assets/images/range-icon.png");
  background-size: cover;
  background-position: center;
  transform: translateX(-50%);
}

.range-selector-value {
  position: absolute;
  top: -28px;
  left: -30px;
  width: 80px;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #45515f;
  white-space: nowrap;
  text-align: center;

  @media (max-width: 767.98px) {
    font-size: 18px;
    line-height: 21px;
  }
}

.range-progress {
  position: absolute;
  bottom: 3px;
  left: 0;
  width: 50%;
  height: 7px;
  background: linear-gradient(81.55deg, #ffc83e 33.93%, #ff9f47 73.78%);
  border-radius: 8px;
}

.range-background {
  position: absolute;
  bottom: 3px;
  left: 0;
  width: 100%;
  height: 7px;
  background: #ececec;
  border-radius: 8px;
}
</style>