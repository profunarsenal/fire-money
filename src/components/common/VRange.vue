<template>
  <div ref="range">
    <input
      ref="rangeSlider"
      @input="updateValue"
      v-model="modelValue"
      class="range-slider"
      type="range"
      name="range"
      :min="minValue"
      :max="maxValue"
      :step="stepValue"
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
  name: "v-range",

  props: {
    modelValue: "",
    valueRange: {
      required: true,
    },
    minValue: {
      type: String,
      required: true,
    },
    maxValue: {
      type: String,
      required: true,
    },
    stepValue: {
      type: String,
      required: true,
    },
  },

  methods: {
    updateValue(event) {
      this.$emit("update:modelValue", event.target.value);
      this.$emit(
        "range",
        event,
        this.$refs.rangeSelector,
        this.$refs.rangeSelectorValue,
        this.$refs.rangeProgress
      );
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

  @media (max-width: 767px) {
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