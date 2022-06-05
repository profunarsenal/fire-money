<template>
  <section class="suggestions">
    <div class="container">
      <tittle-page class="suggestions-title" title="Лучшие предложения" />
      <div class="suggestions-items">
        <a href="#" class="suggestions-item">
          <span class="suggestions-sticker">lite</span>
          <h5 class="suggestions-item-title">
            <span>15 000 ₽</span>
            на
            <span>7</span>
            дней
          </h5>
          <div class="suggestions-info">
            <div class="suggestions-item-date">
              Дата возврата:
              <span>12 января 2022</span>
            </div>
            <div class="suggestions-item-sum">
              К возврату:
              <span>45 500 ₽</span>
            </div>
          </div>
        </a>
        <a href="#" class="suggestions-item">
          <span class="suggestions-sticker">lite</span>
          <h5 class="suggestions-item-title">
            <span>15 000 ₽</span>
            на
            <span>7</span>
            дней
          </h5>
          <div class="suggestions-info">
            <div class="suggestions-item-date">
              Дата возврата:
              <span>12 января 2022</span>
            </div>
            <div class="suggestions-item-sum">
              К возврату:
              <span>45 500 ₽</span>
            </div>
          </div>
        </a>
        <a href="#" class="suggestions-item">
          <span class="suggestions-sticker">lite</span>
          <h5 class="suggestions-item-title">
            <span>15 000 ₽</span>
            на
            <span>7</span>
            дней
          </h5>
          <div class="suggestions-info">
            <div class="suggestions-item-date">
              Дата возврата:
              <span>12 января 2022</span>
            </div>
            <div class="suggestions-item-sum">
              К возврату:
              <span>45 500 ₽</span>
            </div>
          </div>
        </a>
      </div>
      <p class="suggestions-message">
        * Расчёт не является публичное офертой и может отличаться от реальной
        ставки кредитора
      </p>
    </div>
  </section>
</template>

<script>
import TittlePage from "@/components/TittlePage.vue";

export default {
  components: {
    TittlePage,
  },
};
</script>

<style lang="scss" scoped>
.suggestions {
  padding: 50px 0;

  @media (max-width: 767.98px) {
    padding: 30px 0;
  }
}

.suggestions-title {
  margin-bottom: 36px;

  @media (max-width: 769.98px) {
    margin-bottom: 26px;
  }
}

.suggestions-items {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 1254.98px) {
    justify-content: center;
  }
}

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

  @media (max-width: 1254.98px) {
    flex: 0 1 30%;
  }

  @media (max-width: 769.98px) {
    flex: 0 0 100%;
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 480.98px) {
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

  span {
    color: #ffc83e;
  }

  @media (max-width: 769.98px) {
    text-align: center;
  }

  @media (max-width: 480.98px) {
    margin-bottom: 8px;
    font-size: 18px;
    line-height: 21px;
  }
}

.suggestions-info {
  @media (max-width: 769.98px) {
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

  @media (max-width: 480.98px) {
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

    @media (max-width: 480.98px) {
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

    @media (max-width: 480.98px) {
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
  background: #ffc83e;
  box-shadow: 0px 4px 44px rgba(84, 104, 123, 0.05);
  transform: rotate(-45deg);

  @media (max-width: 480.98px) {
    font-size: 12px;
    line-height: 161%;
  }
}

.suggestions-message {
  margin-top: 12px;
  font-weight: 300;
  font-size: 13px;
  line-height: 145.5%;
  text-align: center;
  color: #45515f;
}
</style>