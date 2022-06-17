<template>
  <section class="reviews" id="reviews">
    <div class="container">
      <div class="reviews-wrapper">
        <v-title class="reviews-title" title="Почему выбирают нас" />
        <div class="reviews-items">
          <review-item
            v-for="review in reviews"
            :key="review.id"
            :review="review"
          />
        </div>
        <div class="reviews-btns">
          <v-button-primary
            @click="$router.push('/credit')"
            :disabled="false"
          />
          <router-link to="/review" class="reviews-btn">Все отзывы</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ReviewItem from "@/components/home/sections/review/ReviewItem.vue";
import VTitle from "@/components/common/VTitle.vue";
import VButtonPrimary from "@/components/common/VButtonPrimary.vue";

export default {
  name: "reviews-section",

  components: {
    ReviewItem,
    VTitle,
    VButtonPrimary,
  },

  computed: {
    reviews() {
      return this.$store.getters["getReviews"];
    },
  },
};
</script>

<style lang="scss" scoped>
.reviews {
  padding: 50px 0;

  @media (max-width: 767px) {
    padding: 30px 0;
  }
}

.reviews-title {
  margin-bottom: 40px;
}

.reviews-items {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 35px;

  @media (max-width: 992px) {
    flex-wrap: wrap;
  }

  @media (max-width: 767px) {
    flex-wrap: nowrap;
    justify-content: flex-start;
    overflow: scroll;
    padding-bottom: 25px;
    margin-bottom: 10px;
  }
}

.reviews-btns {
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 576px) {
    flex-direction: column;
  }
}

.reviews-btn {
  padding: 22px 32px;
  margin-left: 10px;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-transform: uppercase;
  color: #45515f;
  border: 1px solid #c9d2dd;
  border-radius: 8px;
  text-align: center;
  transition: all 0.3s ease;

  @media (any-hover: hover) {
    &:hover {
      color: #ffc83e;
      border: 1px solid #ffc83e;
      background-color: #ffffff;
    }
  }

  @media (max-width: 767px) {
    padding: 10px 28px;
    font-size: 16px;
    line-height: 19px;
  }

  @media (max-width: 576px) {
    margin-left: 0;
    margin-top: 10px;
  }
}
</style>