<template>
  <section class="suggestions">
    <div class="container">
      <tittle-page class="suggestions-title" title="Лучшие предложения" />
      <div class="suggestions-items">
        <suggestion-item
          v-for="suggestion in suggestions"
          :key="suggestion.id"
          :suggestion="suggestion"
        />
      </div>
      <p class="suggestions-message">
        * Расчёт не является публичное офертой и может отличаться от реальной
        ставки кредитора
      </p>
    </div>
  </section>
</template>

<script>
import TittlePage from "@/components/repeating-components/TittlePage.vue";
import SuggestionItem from "@/components/sections/suggestions/SuggestionItem.vue";

export default {
  components: {
    TittlePage,
    SuggestionItem,
  },

  data() {
    return {
      suggestions: this.$store.getters["getSuggestions"],
    };
  },
};
</script>

<style lang="scss" scoped>
.suggestions {
  padding: 50px 0;

  @media (max-width: 767.98px) {
    padding: 30px 0;
  }
}

.suggestions-title {
  margin-bottom: 36px;

  @media (max-width: 769.98px) {
    margin-bottom: 26px;
  }
}

.suggestions-items {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 1254.98px) {
    justify-content: center;
  }
}

.suggestions-message {
  margin-top: 12px;
  font-weight: 300;
  font-size: 13px;
  line-height: 145.5%;
  text-align: center;
  color: #45515f;
}
</style>