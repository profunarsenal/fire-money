<template>
  <div class="questions-spoller">
    <button @click="toggleSpoller" class="spoller-btn" type="button">
      <span class="spoller-title">{{ spoller.title }}</span>
      <svg class="spoller-icon" width="15" height="9" viewBox="0 0 15 9">
        <path
          d="M8.36655 8.44546L14.6342 2.61882C14.8781 2.40424 15 2.13629 15 1.81444C15 1.49259 14.878 1.22464 14.6342 1.01006L13.912 0.330866C13.6745 0.110372 13.3858 0.00012507 13.0456 0.000125055C12.7119 0.000125041 12.4198 0.110341 12.1695 0.330865L7.49997 4.67416L2.82082 0.330677C2.58332 0.110246 2.29462 -5.5537e-07 1.95441 -5.70241e-07C1.6207 -5.84828e-07 1.32847 0.110215 1.07832 0.330677L0.356236 1.00994C0.118734 1.2304 8.88167e-07 1.49863 8.74368e-07 1.81431C8.60564e-07 2.13012 0.118734 2.39829 0.356236 2.61869L6.62388 8.44546C6.87419 8.66602 7.16626 8.77636 7.5 8.77636C7.84018 8.77639 8.12904 8.66602 8.36655 8.44546Z"
        />
      </svg>
    </button>
    <p class="spoller-text">
      {{ spoller.text }}
    </p>
  </div>
</template>

<script>
export default {
  name: "question-spoller",

  props: {
    spoller: {
      type: Object,
      required: true,
    },
  },

  mounted() {
    const spollers = document.querySelectorAll(".questions-spoller");
    spollers[0].classList.add("spoller-open");
  },

  methods: {
    toggleSpoller(e) {
      const spollers = document.querySelectorAll(".questions-spoller");

      spollers.forEach((spoller) => {
        spoller.classList.remove("spoller-open");
      });

      e.target.closest(".questions-spoller").classList.add("spoller-open");
    },
  },
};
</script>

<style lang="scss" scoped>
.questions-spoller {
  position: relative;
  padding: 20px;
  flex: 0 1 100%;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0px 4px 44px rgba(84, 104, 123, 0.05);
  border-radius: 12px;

  &:not(:last-child) {
    margin-bottom: 5px;
  }
}

.spoller-btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: transparent;

  @media (max-width: 576px) {
    justify-content: space-between;
  }
}

.spoller-title {
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #45515f;

  @media (max-width: 576px) {
    font-size: 13px;
    line-height: 14px;
  }
}

.spoller-icon {
  position: relative;
  width: 15px;
  height: 15px;
  fill: #45515f;
  transition: all 0.3s;

  @media (max-width: 576px) {
    width: 8px;
    height: 8px;
  }
}

.spoller-text {
  max-width: 95%;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  color: #fff;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10%);
  height: 0;
  transition: all 0.3s;

  @media (max-width: 576px) {
    max-width: 100%;
    font-size: 12px;
    line-height: 18px;
  }
}

.questions-spoller {
  &.spoller-open {
    background: linear-gradient(268.87deg, #ffc83e -5.09%, #ff7347 51.96%);

    .spoller-title {
      color: #fff;
      margin-bottom: 10px;
    }

    .spoller-icon {
      top: -5px;
      transform: rotate(-180deg);
      fill: #fff;
    }

    .spoller-text {
      height: auto;
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }
  }
}
</style>