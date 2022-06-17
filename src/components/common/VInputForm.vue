<template>
  <input v-model="modelValue" @input="updateInput" class="input" type="text" />
</template>

<script>
export default {
  name: "v-input-form",

  props: {
    modelValue: { String, Number },
  },

  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.input {
  flex-grow: 1;
  min-height: 50px;
  padding: 10px;
  font-size: 16px;
  color: #45515f;
  border: 1px solid #d3dae2;
  border-radius: 8px;
  background-color: transparent;

  @media (any-hover: hover) {
    &:hover {
      border: 1px solid #bababa;
    }
  }

  &:focus {
    border: 1px solid #c9c9c9;
  }

  &::placeholder {
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    color: #b5b5b5;
  }
}
</style>