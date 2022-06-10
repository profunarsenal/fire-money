<template>
  <section class="questions" id="questions">
    <div class="container">
      <div class="questions-wrapper">
        <tittle-page class="questions-title" title="Вопросы-ответы" />
        <div class="questions-spollers">
          <question-spoller
            v-for="spoller in spollers"
            :key="spoller.id"
            :spoller="spoller"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TittlePage from "@/components/repeating-components/TittlePage.vue";
import QuestionSpoller from "@/components/sections/questions/QuestionSpoller.vue";

export default {
  components: {
    TittlePage,
    QuestionSpoller,
  },

  data() {
    return {
      spollers: this.$store.getters["getSpollers"],
    };
  },
};
</script>

<style lang="scss" scoped>
.questions {
  padding: 50px 0;

  @media (max-width: 767.98px) {
    paddding: 30px 0;
  }
}

.questions-title {
  margin-bottom: 36px;

  @media (max-width: 767.98px) {
    margin-bottom: 20px;
  }
}

.questions-spollers {
  display: flex;
  flex-direction: column;
}
</style>