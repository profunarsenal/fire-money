<template>
  <section class="reviews" id="reviews">
    <div class="container">
      <div class="reviews-wrapper">
        <v-title class="reviews-title" title="Почему выбирают нас" />
        <div class="reviews-items">
          <swiper
            :slides-per-view="1"
            :space-between="30"
            :modules="modules"
            :loop="true"
            :breakpoints="{
              '640': {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              '768': {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              '1124': {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }"
          >
            <swiper-slide v-for="review in reviews" :key="review.id">
              <review-item :review="review" />
            </swiper-slide>
          </swiper>
        </div>
        <div class="reviews-btn">
          <v-button-primary
            @click="$router.push('/credit')"
            :disabled="false"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ReviewItem from "@/components/home/sections/review/ReviewItem.vue";
import VTitle from "@/components/common/VTitle.vue";
import VButtonPrimary from "@/components/common/VButtonPrimary.vue";
import SwiperClass, { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css";
import "swiper/css/pagination";

export default {
  name: "reviews-section",

  components: {
    ReviewItem,
    VTitle,
    VButtonPrimary,
    Swiper,
    SwiperSlide,
  },

  setup() {
    return {
      modules: [Pagination, Autoplay],
    };
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
  margin-bottom: 35px;

  @media (max-width: 767px) {
    margin-bottom: 20px;
  }
}

.reviews-btn {
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 576px) {
    flex-direction: column;
  }
}
</style>