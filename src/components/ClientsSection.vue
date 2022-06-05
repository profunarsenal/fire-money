<template>
  <section class="clients">
    <div class="container">
      <div class="clients-wrapper">
        <tittle-page class="clients-title" title="Наши клиенты" />
        <div class="clients-items">
          <div class="clients-item clients-item--refusal">
            <h6 class="clients-name">Екатерина Романова</h6>
            <div class="clients-status">Получила отказ 45 сек назад</div>
            <div class="clients-location">г. Москва</div>
          </div>
          <div v-if="width > 767" class="clients-item clients-item--success">
            <h6 class="clients-name">Игорь Николаев</h6>
            <div class="clients-status">Взял 5 000 ₽ 2 мин назад</div>
            <div class="clients-location">г. Москва</div>
          </div>
          <div v-if="width > 1198" class="clients-item clients-item--return">
            <h6 class="clients-name">Светлана Борисовна</h6>
            <div class="clients-status">Внес на счет 12 000 ₽ 45 сек назад</div>
            <div class="clients-location">г. Москва</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TittlePage from "@/components/TittlePage.vue";

export default {
  components: {
    TittlePage,
  },

  props: ["width"],
};
</script>

<style lang="scss" scoped>
.clients {
  padding: 50px 0;
  background-image: url("@/assets/images/clients-bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media (max-width: 767.98px) {
    padding: 30px 0;
  }
}

.clients-title {
  margin-bottom: 36px;
  color: #fff;

  @media (max-width: 767.98px) {
    margin-bottom: 20px;
  }
}

.clients-items {
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.clients-item {
  position: relative;
  flex: 0 1 33%;
  padding: 26px 26px 26px 76px;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0px 4px 44px rgba(84, 104, 123, 0.05);
  border-radius: 22px;

  &:not(:last-child) {
    margin-right: 26px;
  }

  @media (max-width: 991.98px) {
    &:not(:last-child) {
      margin-right: 16px;
    }
  }

  @media (max-width: 1198.98px) {
    flex: 0 1 40%;
  }

  @media (max-width: 767.98px) {
    flex: 0 1 80%;
  }

  @media (max-width: 576.98px) {
    flex: 0 1 100%;
  }
}

.clients-item--refusal {
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 25px;
    width: 30px;
    height: 30px;
    background-image: url("@/assets/images/cross-icon.svg");
    background-repeat: no-repeat;
    transform: translateY(-50%);
  }
}

.clients-item--success {
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 25px;
    width: 30px;
    height: 30px;
    background-image: url("@/assets/images/plus-icon.svg");
    background-repeat: no-repeat;
    transform: translateY(-50%);
  }
}

.clients-item--return {
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 25px;
    width: 30px;
    height: 30px;
    background-image: url("@/assets/images/download-icon.svg");
    background-repeat: no-repeat;
    transform: translateY(-50%);
  }
}

.clients-name {
  margin-bottom: 6px;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #45515f;
}

.clients-status {
  margin-bottom: 8px;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  color: #536473;
  white-space: nowrap;

  @media (max-width: 576.98px) {
    font-size: 14px;
    line-height: 16px;
  }
}

.clients-location {
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
    font-size: 13px;
    line-height: 16px;
  }
}
</style>