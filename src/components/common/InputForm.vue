<template>
  <input v-model="modelValue" @input="updateInput" class="input" type="text" />
</template>

<script>
export default {
  name: "input-form",

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

  &:not(:last-child) {
  }
}
</style>