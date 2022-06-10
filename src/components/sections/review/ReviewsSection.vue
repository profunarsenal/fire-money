<template>
  <section class="reviews" id="reviews">
    <div class="container">
      <div class="reviews-wrapper">
        <tittle-page class="reviews-title" title="Почему выбирают нас" />
        <div class="reviews-items">
          <review-item
            v-for="review in reviews"
            :key="review.id"
            :review="review"
          />
        </div>
        <div class="reviews-btns">
          <button-primary />
          <a href="#" class="reviews-btn">Все отзывы</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TittlePage from "@/components/repeating-components/TittlePage.vue";
import ButtonPrimary from "@/components/repeating-components/ButtonPrimary.vue";
import ReviewItem from "@/components/sections/review/ReviewItem.vue";

export default {
  components: {
    TittlePage,
    ButtonPrimary,
    ReviewItem,
  },

  data() {
    return {
      reviews: this.$store.getters["getReviews"],
    };
  },

  props: ["width"],
};
</script>

<style lang="scss" scoped>
.reviews {
  padding: 50px 0;

  @media (max-width: 767.98px) {
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

  @media (max-width: 991.98px) {
    flex-wrap: wrap;
  }

  @media (max-width: 767.98px) {
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

  @media (max-width: 576.98px) {
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

  @media (max-width: 767.98px) {
    padding: 10px 28px;
    font-size: 16px;
    line-height: 19px;
  }

  @media (max-width: 576.98px) {
    margin-left: 0;
    margin-top: 10px;
  }
}
</style>