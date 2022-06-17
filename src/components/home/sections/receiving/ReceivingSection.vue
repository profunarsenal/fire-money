<template>
  <section class="receiving">
    <div class="container">
      <div class="receiving-wrapper">
        <v-title class="receiving-title" title="Как получить деньги" />
        <div class="receiving-scheme">
          <div class="scheme-item scheme-item--finished">
            <img
              class="scheme-img"
              src="@/assets/images/how-money-icon-1.svg"
              alt="how-money"
            />
            <div class="scheme-number scheme-number--finished">1</div>
            <div class="scheme-text">Выберите сумму займа</div>
          </div>
          <div class="scheme-item">
            <img
              class="scheme-img"
              src="@/assets/images/how-money-icon-2.svg"
              alt="how-money"
            />
            <div class="scheme-number">2</div>
            <div class="scheme-text">Заполните анкету</div>
          </div>
          <div class="scheme-item">
            <img
              class="scheme-img"
              src="@/assets/images/how-money-icon-3.svg"
              alt="how-money"
            />
            <div class="scheme-number">3</div>
            <div class="scheme-text">Дождитесь рассмотрения заявки</div>
          </div>
          <div class="scheme-item">
            <img
              class="scheme-img"
              src="@/assets/images/how-money-icon-4.svg"
              alt="how-money"
            />
            <div class="scheme-number">4</div>
            <div class="scheme-text">
              Получите деньги любым удобным способом
            </div>
          </div>
        </div>
        <div class="receiving-button">
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
import VTitle from "@/components/common/VTitle.vue";
import VButtonPrimary from "@/components/common/VButtonPrimary.vue";

export default {
  name: "receiving-section",

  components: {
    VTitle,
    VButtonPrimary,
  },
};
</script>

<style lang="scss" scoped>
.receiving {
  padding: 50px 0;

  @media (max-width: 767px) {
    padding: 30px 0;
  }
}

.receiving-scheme {
  position: relative;
  margin: 45px 0;
  display: flex;
  justify-content: space-between;

  @media (max-width: 767px) {
    flex-direction: column;
  }

  @media (max-width: 476px) {
    padding: 0;
  }

  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    top: 56%;
    left: 0;
    width: 100%;
    height: 7px;
    background: #fff;
    border-radius: 8px;
    transform: translateY(-56%);

    @media (max-width: 865px) {
      top: 52%;
      transform: translateY(-52%);
    }

    @media (max-width: 767px) {
      top: 0;
      left: 49%;
      width: 7px;
      height: 100%;
      transform: translate(49%, 0);
    }

    @media (max-width: 576px) {
      left: 48.5%;
      transform: translate(48.5%, 0);
    }

    @media (max-width: 420px) {
      left: 48%;
      transform: translate(48%, 0);
    }
  }
}

.scheme-item {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 767px) {
    flex-direction: row;
    justify-content: center;

    &:not(:last-child) {
      margin-bottom: 70px;
    }
  }
}

.scheme-item--finished {
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 56%;
    left: -1px;
    width: 50%;
    height: 10px;
    background: linear-gradient(81.55deg, #ffc83e 33.93%, #ff9f47 73.78%);
    border-radius: 8px;
    transform: translateY(-56%);

    @media (max-width: 865px) {
      top: 52%;
      transform: translateY(-52%);
    }

    @media (max-width: 767px) {
      width: 10px;
      height: 50%;
      top: -2px;
      left: 50%;
      transform: translate(-53%, 0);
    }
  }
}

.scheme-img {
  width: 68px;
  height: 77px;

  @media (max-width: 767px) {
    flex: 0 0 50%;
    transform: translateX(-10%);
  }

  @media (max-width: 526px) {
    flex: 0 0 60%;
  }

  @media (max-width: 476px) {
    width: 58px;
    height: 67px;
  }
}

.scheme-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  margin: 20px 0;
  font-weight: 500;
  font-size: 16px;
  line-height: 145.5%;
  color: #d6d3d3;
  background-color: #fff;
  border-radius: 50%;

  @media (max-width: 767px) {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
  }
}

.scheme-number--finished {
  position: relative;
  z-index: 2;
  color: #fff;
  background-color: #ffa147;

  @media (max-width: 767px) {
    position: absolute;
    top: 0%;
    left: 50%;
    transform: translate(-50%, 0);
  }
}

.scheme-text {
  max-width: 240px;
  padding: 0 10px;
  font-weight: 300;
  font-size: 18px;
  line-height: 132%;
  text-align: center;
  color: #45515f;

  @media (max-width: 767px) {
    flex: 0 0 50%;
    max-width: 200px;
    text-align: left;
  }

  @media (max-width: 526px) {
    flex: 0 0 40%;
  }

  @media (max-width: 476px) {
    max-width: 160px;
    font-size: 14px;
  }
}

.receiving-button {
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
</style>