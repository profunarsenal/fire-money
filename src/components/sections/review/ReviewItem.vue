<template>
  <div class="reviews-item">
    <img
      class="reviews-avatar"
      :src="require(`@/assets/images/${review.avatar}`)"
      :alt="review.avatar"
    />
    <h6 class="reviews-name">{{ review.user }}</h6>
    <span class="reviews-location">{{ review.city }}</span>
    <p class="reviews-text">
      {{ review.text }}
    </p>
    <div class="reviews-stars">
      <star-on v-for="star in review.grade" :key="star" />
      <star-off v-for="star in maxGrade - review.grade" :key="star" />
    </div>
  </div>
</template>

<script>
import StarOn from "@/components/sections/review/StarOn.vue";
import StarOff from "@/components/sections/review/StarOff.vue";

export default {
  components: {
    StarOn,
    StarOff,
  },

  props: {
    review: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      maxGrade: 5,
    };
  },
};
</script>

<style lang="scss" scoped>
.reviews-item {
  padding: 50px 44px;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0px 4px 44px rgba(84, 104, 123, 0.05);
  border-radius: 22px;

  &:not(:last-child) {
    margin-right: 28px;
  }

  @media (max-width: 991.98px) {
    &:not(:last-child) {
      margin-right: 0;
      margin-bottom: 20px;
    }
  }

  @media (max-width: 767.98px) {
    flex: 0 0 80%;

    &:not(:last-child) {
      margin-right: 20px;
      margin-bottom: 0;
    }
  }

  @media (max-width: 576.98px) {
    flex: 0 0 100%;
    padding: 20px 24px;
  }
}

.reviews-name {
  margin: 26px 0 20px;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: #45515f;

  @media (max-width: 576.98px) {
    font-size: 16px;
    line-height: 19px;
  }
}

.reviews-location {
  position: relative;
  padding-left: 20px;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: #93a0ab;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 12px;
    height: 16px;
    background-image: url("@/assets/images/location.svg");
    background-repeat: no-repeat;
  }

  @media (max-width: 576.98px) {
    font-size: 14px;
    line-height: 18px;
  }
}

.reviews-text {
  padding: 17px 0 27px;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  color: #536473;

  @media (max-width: 576.98px) {
    font-size: 14px;
    line-height: 18px;
  }
}

.reviews-avatar {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  object-fit: cover;

  @media (max-width: 576.98px) {
    width: 76px;
    height: 76px;
  }
}
</style>

