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

  @media (max-width: 576.98px) {
    font-size: 33px;
    line-height: 40px;
  }

  @media (max-width: 480.98px) {
    font-size: 24px;
    line-height: 35px;
  }
}
</style>