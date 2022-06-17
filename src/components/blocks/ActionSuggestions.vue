<template>
  <div class="action-suggestions">
    <div class="action-name">
      Предложение:
      <span
        class="action-rate"
        :class="{
          'lite-bg': suggestion.rate === 'LITE',
          'basic-bg': suggestion.rate === 'BASIC',
          'pro-bg': suggestion.rate === 'PRO',
        }"
        >{{ suggestion.rate }}</span
      >
    </div>
    <div class="action-name">
      Сумма:
      <span
        class="action"
        :class="{
          'lite-color': suggestion.rate === 'LITE',
          'basic-color': suggestion.rate === 'BASIC',
          'pro-color': suggestion.rate === 'PRO',
        }"
        >{{ suggestion.sum }}</span
      >
    </div>
    <div class="action-name">
      Сроком на:
      <span
        class="action"
        :class="{
          'lite-color': suggestion.rate === 'LITE',
          'basic-color': suggestion.rate === 'BASIC',
          'pro-color': suggestion.rate === 'PRO',
        }"
        >{{ suggestion.term }} дней</span
      >
    </div>
    <div class="action-name">
      Сроком до:
      <span
        class="action"
        :class="{
          'lite-color': suggestion.rate === 'LITE',
          'basic-color': suggestion.rate === 'BASIC',
          'pro-color': suggestion.rate === 'PRO',
        }"
        >{{ actionDate }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "action-suggestions",

  data() {
    return {
      actionDate: JSON.parse(localStorage.getItem("actionDate")),
    };
  },

  computed: {
    suggestion() {
      return this.$store.getters["getSuggestions"][this.$route.params.id];
    },
  },
};
</script>

<style lang="scss" scoped>
.action-suggestions {
  padding: 40px 40px 40px 0;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(
    336.96deg,
    #ececec -84.4%,
    rgba(236, 236, 236, 0) 129.87%,
    #ececec 129.87%
  );
  border-radius: 8px;

  @media (max-width: 1300px) {
    flex-wrap: wrap;
    padding: 20px 0 10px;
  }
}

.action-name {
  flex: 0 1 25%;
  font-weight: 500;
  font-size: 18px;
  line-height: 19px;
  text-align: center;

  @media (max-width: 1300px) {
    flex: 0 1 50%;
    margin-bottom: 20px;
  }

  @media (max-width: 767px) {
    flex: 0 1 100%;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    line-height: 18px;
  }
}

.action-rate {
  padding: 2px 10px;
  background: #ffc83e;
  color: #fff;
}

.action {
  color: #ffc83e;
}

.lite-bg {
  background: #ffc83e;
}

.basic-bg {
  background: #ff7b00;
}

.pro-bg {
  background: #fa5914;
}

.lite-color {
  color: #ffc83e;
}

.basic-color {
  color: #ff7b00;
}

.pro-color {
  color: #fa5914;
}
</style>