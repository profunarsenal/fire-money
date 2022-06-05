<template>
  <section class="reviews">
    <div class="container">
      <div class="reviews-wrapper">
        <tittle-page class="reviews-title" title="Почему выбирают нас" />
        <div class="reviews-items">
          <div class="reviews-item">
            <img
              class="reviews-avatar"
              src="@/assets/images/avatar-1.jpg"
              alt="avatar"
            />
            <h6 class="reviews-name">Екатерина Романова, 26 лет</h6>
            <span class="reviews-location">г. Москва</span>
            <p class="reviews-text">
              Для того, чтобы воспользоваться услугой, вам необходимо лишь
              заполнить анкету на сайте, все остальное сервис сделает за вас,
              сэкономив вам большое количество времени и сил. Наш сервис
              работает со всеми клиентами, нам не важно, какая у вас кредитная
              история и имеются ли текущие просрочки.
            </p>
            <div class="reviews-stars">
              <img
                class="reviews-star reviews-star--active"
                src="@/assets/images/star-active.svg"
                alt="star"
              />
              <img
                class="reviews-star reviews-star--active"
                src="@/assets/images/star-active.svg"
                alt="star"
              />
              <img
                class="reviews-star reviews-star--active"
                src="@/assets/images/star-active.svg"
                alt="star"
              />
              <img
                class="reviews-star reviews-star--active"
                src="@/assets/images/star-active.svg"
                alt="star"
              />
              <img
                class="reviews-star"
                src="@/assets/images/star.svg"
                alt="star"
              />
            </div>
          </div>
          <div v-if="width > 767" class="reviews-item">
            <img
              class="reviews-avatar"
              src="@/assets/images/avatar-2.jpg"
              alt="avatar"
            />
            <h6 class="reviews-name">Екатерина Романова, 26 лет</h6>
            <span class="reviews-location">г. Москва</span>
            <p class="reviews-text">
              Для того, чтобы воспользоваться услугой, вам необходимо лишь
              заполнить анкету на сайте, все остальное сервис сделает за вас,
              сэкономив вам большое количество времени и сил. Наш сервис
              работает со всеми клиентами, нам не важно, какая у вас кредитная
              история и имеются ли текущие просрочки.
            </p>
            <div class="reviews-stars">
              <img
                class="reviews-star reviews-star--active"
                src="@/assets/images/star-active.svg"
                alt="star"
              />
              <img
                class="reviews-star reviews-star--active"
                src="@/assets/images/star-active.svg"
                alt="star"
              />
              <img
                class="reviews-star reviews-star--active"
                src="@/assets/images/star-active.svg"
                alt="star"
              />
              <img
                class="reviews-star reviews-star--active"
                src="@/assets/images/star-active.svg"
                alt="star"
              />
              <img
                class="reviews-star"
                src="@/assets/images/star.svg"
                alt="star"
              />
            </div>
          </div>
          <div v-if="width > 1080" class="reviews-item">
            <img
              class="reviews-avatar"
              src="@/assets/images/avatar-3.jpg"
              alt="avatar"
            />
            <h6 class="reviews-name">Екатерина Романова, 26 лет</h6>
            <span class="reviews-location">г. Москва</span>
            <p class="reviews-text">
              Для того, чтобы воспользоваться услугой, вам необходимо лишь
              заполнить анкету на сайте, все остальное сервис сделает за вас,
              сэкономив вам большое количество времени и сил. Наш сервис
              работает со всеми клиентами, нам не важно, какая у вас кредитная
              история и имеются ли текущие просрочки.
            </p>
            <div class="reviews-stars">
              <img
                class="reviews-star reviews-star--active"
                src="@/assets/images/star-active.svg"
                alt="star"
              />
              <img
                class="reviews-star reviews-star--active"
                src="@/assets/images/star-active.svg"
                alt="star"
              />
              <img
                class="reviews-star reviews-star--active"
                src="@/assets/images/star-active.svg"
                alt="star"
              />
              <img
                class="reviews-star reviews-star--active"
                src="@/assets/images/star-active.svg"
                alt="star"
              />
              <img
                class="reviews-star"
                src="@/assets/images/star.svg"
                alt="star"
              />
            </div>
          </div>
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
import TittlePage from "@/components/TittlePage.vue";
import ButtonPrimary from "@/components/ButtonPrimary.vue";

export default {
  components: {
    TittlePage,
    ButtonPrimary,
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
  margin-bottom: 35px;
}

.reviews-item {
  padding: 50px 44px;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0px 4px 44px rgba(84, 104, 123, 0.05);
  border-radius: 22px;

  &:not(:last-child) {
    margin-right: 28px;
  }
}

.reviews-name {
  margin: 26px 0 20px;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: #45515f;
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
}

.reviews-text {
  padding: 17px 0 27px;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  color: #536473;
}

.reviews-avatar {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  object-fit: cover;
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