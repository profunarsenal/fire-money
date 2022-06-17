<template>
  <section class="suggestions">
    <div class="container">
      <v-title class="suggestions-title" title="Лучшие предложения" />
      <div class="suggestions-items">
        <suggestion-item
          v-for="suggestion in suggestions"
          :key="suggestion.id"
          :suggestion="suggestion"
          @getId="openActionForm"
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
import SuggestionItem from "@/components/home/sections/suggestions/SuggestionItem.vue";
import VTitle from "@/components/common/VTitle.vue";

export default {
  name: "suggestions-section",

  components: {
    SuggestionItem,
    VTitle,
  },

  computed: {
    suggestions() {
      return this.$store.getters["getSuggestions"];
    },
  },

  methods: {
    openActionForm(id, date) {
      localStorage.setItem("actionDate", JSON.stringify(date));

      this.$router.push({
        name: "action",
        params: { id: id },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.suggestions {
  padding: 50px 0;

  @media (max-width: 767px) {
    padding: 30px 0;
  }
}

.suggestions-title {
  margin-bottom: 36px;

  @media (max-width: 769px) {
    margin-bottom: 26px;
  }
}

.suggestions-items {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 1254px) {
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