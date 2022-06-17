<template>
  <section class="questions" id="questions">
    <div class="container">
      <div class="questions-wrapper">
        <v-title class="questions-title" title="Вопросы-ответы" />
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
import QuestionSpoller from "@/components/home/sections/questions/QuestionSpoller.vue";
import VTitle from "@/components/common/VTitle.vue";

export default {
  name: "questions-section",

  components: {
    QuestionSpoller,
    VTitle,
  },

  computed: {
    spollers() {
      return this.$store.getters["getSpollers"];
    },
  },
};
</script>

<style lang="scss" scoped>
.questions {
  padding: 50px 0;

  @media (max-width: 767px) {
    paddding: 30px 0;
  }
}

.questions-title {
  margin-bottom: 36px;

  @media (max-width: 767px) {
    margin-bottom: 20px;
  }
}

.questions-spollers {
  display: flex;
  flex-direction: column;
}
</style>