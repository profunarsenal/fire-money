<template>
  <section class="suggestions">
    <div class="container">
      <tittle-page class="suggestions-title" title="Лучшие предложения" />
      <div class="suggestions-items">
        <div class="suggestions-item">
          <span class="suggestions-sticker">lite</span>
          <h5 class="suggestions-item-title">
            <span>15 000 ₽</span>
            на
            <span>7</span>
            дней
          </h5>
          <div class="suggestions-item-date">
            Дата возврата:
            <span>12 января 2022</span>
          </div>
          <div class="suggestions-item-sum">
            К возврату:
            <span>45 500 ₽</span>
          </div>
        </div>
        <div class="suggestions-item">
          <span class="suggestions-sticker">lite</span>
          <h5 class="suggestions-item-title">
            <span>15 000 ₽</span>
            на
            <span>7</span>
            дней
          </h5>
          <div class="suggestions-item-date">
            Дата возврата:
            <span>12 января 2022</span>
          </div>
          <div class="suggestions-item-sum">
            К возврату:
            <span>45 500 ₽</span>
          </div>
        </div>
        <div class="suggestions-item">
          <span class="suggestions-sticker">lite</span>
          <h5 class="suggestions-item-title">
            <span>15 000 ₽</span>
            на
            <span>7</span>
            дней
          </h5>
          <div class="suggestions-item-date">
            Дата возврата:
            <span>12 января 2022</span>
          </div>
          <div class="suggestions-item-sum">
            К возврату:
            <span>45 500 ₽</span>
          </div>
        </div>
      </div>
      <p class="suggestions-mess">
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
}
</style>