<template>
  <h2 class="title">{{ title }}</h2>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  font-weight: 600;
  font-size: 38px;
  line-height: 45px;
  color: #45515f;
  text-align: center;
}
</style>