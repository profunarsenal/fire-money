<template>
  <div class="about-rule">
    <h6 class="rule-title">
      {{ rule.title }}
    </h6>
    <p class="rule-info">
      {{ rule.text }}
    </p>
  </div>
</template>

<script>
export default {
  name: "service-rule",

  props: {
    rule: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.about-rule {
  flex: 0 1 45%;
  padding: 44px;
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid #f8ebeb;
  box-shadow: 0px 4px 44px rgba(84, 104, 123, 0.05);
  border-radius: 22px;

  &:not(:last-child) {
    margin-right: 30px;
  }

  @media (max-width: 1080px) {
    flex: 0 1 100%;

    &:not(:last-child) {
      margin-right: 0;
      margin-bottom: 30px;
    }
  }

  @media (max-width: 576px) {
    padding: 24px;
  }
}

.rule-title {
  margin-bottom: 30px;
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  color: #45515f;

  @media (max-width: 576px) {
    margin-bottom: 15px;
    font-size: 18px;
    line-height: 23px;
  }
}

.rule-info {
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  color: #536473;

  @media (max-width: 576px) {
    font-size: 14px;
    line-height: 18px;
  }
}
</style>