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
      {{ sliceText(review.text) }}
    </p>
    <div class="reviews-stars">
      <star-on v-for="star in review.grade" :key="star" />
      <star-off v-for="star in maxGrade - review.grade" :key="star" />
    </div>
  </div>
</template>

<script>
import StarOn from "@/components/home/sections/review/StarOn.vue";
import StarOff from "@/components/home/sections/review/StarOff.vue";

export default {
  name: "review-item",

  components: {
    StarOn,
    StarOff,
  },

  data() {
    return {
      maxGrade: 5,
    };
  },

  props: {
    review: {
      type: Object,
      required: true,
    },
  },

  methods: {
    sliceText(txt) {
      if (txt.length > 200) {
        return txt.substring(0, 200) + "…";
      } else {
        return txt;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.reviews-item {
  height: 455px;
  padding: 50px 44px;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0px 4px 44px rgba(84, 104, 123, 0.05);
  border-radius: 22px;
  cursor: grab;

  @media (max-width: 992px) {
    &:not(:last-child) {
      margin-right: 0;
      margin-bottom: 20px;
    }
  }

  @media (max-width: 767px) {
    height: 400px;
  }

  @media (max-width: 576px) {
    padding: 20px 24px;
  }
}

.reviews-name {
  margin: 26px 0 20px;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: #45515f;

  @media (max-width: 576px) {
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

  @media (max-width: 576px) {
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

  @media (max-width: 576px) {
    font-size: 14px;
    line-height: 18px;
  }
}

.reviews-avatar {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  object-fit: cover;

  @media (max-width: 576px) {
    width: 76px;
    height: 76px;
  }
}
</style>

