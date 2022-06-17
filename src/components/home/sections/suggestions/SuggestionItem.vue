<template>
  <a @click.prevent="getId(suggestion.id)" href="#" class="suggestions-item">
    <span
      class="suggestions-sticker"
      :class="{
        'lite-bg': suggestion.rate === 'LITE',
        'basic-bg': suggestion.rate === 'BASIC',
        'pro-bg': suggestion.rate === 'PRO',
      }"
      >{{ suggestion.rate }}</span
    >
    <h5 class="suggestions-item-title">
      <span
        :class="{
          'lite-color': suggestion.rate === 'LITE',
          'basic-color': suggestion.rate === 'BASIC',
          'pro-color': suggestion.rate === 'PRO',
        }"
        >{{ suggestion.sum }} ₽</span
      >
      на
      <span
        :class="{
          'lite-color': suggestion.rate === 'LITE',
          'basic-color': suggestion.rate === 'BASIC',
          'pro-color': suggestion.rate === 'PRO',
        }"
        >{{ suggestion.term }}</span
      >
      {{ suggestion.interval }}
    </h5>
    <div class="suggestions-info">
      <div class="suggestions-item-date">
        Дата возврата:
        <span>{{ dateReturn }}</span>
      </div>
      <div class="suggestions-item-sum">
        К возврату:
        <span>{{ suggestion.sumReturn }} ₽</span>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: "suggestion-item",

  data() {
    return {
      monthArray: this.$store.getters["getMonth"],
    };
  },

  props: {
    suggestion: {
      type: Object,
      required: true,
    },
  },

  computed: {
    dateReturn() {
      const date = new Date(86400000 * this.suggestion.term + Date.now());

      return `${date.getDate()} ${
        this.monthArray[date.getMonth()]
      } ${date.getFullYear()}`;
    },
  },

  methods: {
    getId(id) {
      this.$emit("getId", id, this.dateReturn);
    },
  },
};
</script>

<style lang="scss" scoped>
.suggestions-item {
  position: relative;
  flex: 0 1 30%;
  min-width: 350px;
  padding: 35px 60px;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0px 4px 44px rgba(84, 104, 123, 0.05);
  border-radius: 22px;
  overflow: hidden;
  margin: 0 10px 20px;
  transition: all 0.3s;

  @media (any-hover: hover) {
    &:hover {
      transform: translateY(-5px);
    }
  }

  @media (max-width: 1254px) {
    flex: 0 1 30%;
  }

  @media (max-width: 769px) {
    flex: 0 0 100%;
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 480px) {
    min-width: 300px;
    margin: 0 0 20px;
    padding: 20px 30px;
  }
}

.suggestions-item-title {
  margin-bottom: 14px;
  font-weight: 700;
  font-size: 28px;
  line-height: 33px;
  color: #45515f;
  white-space: nowrap;

  @media (max-width: 769px) {
    text-align: center;
  }

  @media (max-width: 480px) {
    margin-bottom: 8px;
    font-size: 18px;
    line-height: 21px;
  }
}

.suggestions-info {
  @media (max-width: 769px) {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
  }
}

.suggestions-item-date,
.suggestions-item-sum {
  position: relative;
  padding-left: 22px;
  font-weight: 300;
  font-size: 15px;
  line-height: 182%;
  color: #45515f;
  white-space: nowrap;

  @media (max-width: 480px) {
    margin: 0 10px;
    font-size: 13px;
  }

  span {
    font-weight: 500;
  }
}

.suggestions-item-date {
  &::before {
    content: "";
    position: absolute;
    top: 7px;
    left: 0;
    width: 12px;
    height: 11px;
    background-image: url("@/assets/images/date-icon.svg");
    background-repeat: no-repeat;

    @media (max-width: 480px) {
      top: 5px;
    }
  }
}

.suggestions-item-sum {
  &::before {
    content: "";
    position: absolute;
    top: 7px;
    left: 0;
    width: 9px;
    height: 10px;
    background-image: url("@/assets/images/money-icon.svg");
    background-repeat: no-repeat;

    @media (max-width: 480px) {
      top: 5px;
    }
  }
}

.suggestions-sticker {
  position: absolute;
  top: 15px;
  left: -50px;
  width: 150px;
  font-weight: 500;
  font-size: 14px;
  line-height: 182%;
  text-transform: uppercase;
  text-align: center;
  color: #ffffff;
  box-shadow: 0px 4px 44px rgba(84, 104, 123, 0.05);
  transform: rotate(-45deg);

  @media (max-width: 480px) {
    font-size: 12px;
    line-height: 161%;
  }
}

.lite-bg {
  background: #ffc83e;
}

.basic-bg {
  background: #ff7b00;
}

.pro-bg {
  background: #fa5914;
}

.lite-color {
  color: #ffc83e;
}

.basic-color {
  color: #ff7b00;
}

.pro-color {
  color: #fa5914;
}
</style>

