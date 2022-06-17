<template>
  <section class="about" id="about">
    <div class="container">
      <div class="about-wrapper">
        <v-title class="about-title" title="О сервисе" />
        <div class="about-rules">
          <service-rule v-for="rule in rules" :key="rule.id" :rule="rule" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ServiceRule from "@/components/home/sections/about/ServiceRule.vue";
import VTitle from "@/components/common/VTitle.vue";

export default {
  name: "about-section",

  components: {
    ServiceRule,
    VTitle,
  },

  computed: {
    rules() {
      return this.$store.getters["getRules"];
    },
  },
};
</script>

<style lang="scss" scoped>
.about {
  padding: 50px 0;
  background: rgba(255, 255, 255, 0.95);

  @media (max-width: 767px) {
    paddding: 30px 0;
  }
}

.about-title {
  margin-bottom: 40px;

  @media (max-width: 767px) {
    margin-bottom: 20px;
  }
}

.about-rules {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>