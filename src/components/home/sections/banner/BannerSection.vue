<template>
  <section class="banner">
    <div class="container">
      <div class="banner-wrapper">
        <div class="banner-content">
          <v-title class="banner-title" title="Получи деньги здесь и сейчас" />
          <p class="banner-text">
            Без проверки кредитной истории. От 1 000 ₽ за 15 минут.
          </p>
          <div class="banner-btn">
            <v-button-primary
              @click="$router.push('/credit')"
              :disabled="false"
            />
          </div>
        </div>
        <div class="banner-image">
          <img src="@/assets/images/banner-girl.png" alt="banner" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import VTitle from "@/components/common/VTitle.vue";
import VButtonPrimary from "@/components/common/VButtonPrimary.vue";

export default {
  name: "banner-section",

  components: {
    VTitle,
    VButtonPrimary,
  },
};
</script>

<style lang="scss" scoped>
.banner {
  background: #fefefe;
}

.container {
  @media (max-width: 576px) {
    padding: 0;
  }
}

.banner-wrapper {
  display: flex;

  @media (max-width: 1119px) {
    flex-direction: column;
  }
}

.banner-content {
  flex: 0 1 50%;
  padding: 60px 0;

  @media (max-width: 1119px) {
    flex: 0 1 100%;
    padding: 60px 0 30px;
  }

  @media (max-width: 767px) {
    padding: 30px 0 20px;
  }

  @media (max-width: 576px) {
    padding: 30px 15px 20px;
  }
}

.banner-image {
  position: relative;
  flex: 0 1 50%;
  background-image: url("@/assets/images/banner-sun.svg");
  background-position: bottom;
  background-repeat: no-repeat;
  text-align: center;

  @media (min-width: 1119px) {
    background-size: cover;
  }

  img {
    @media (min-width: 1119px) {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%);
    }

    @media (max-width: 576px) {
      max-width: 100%;
    }
  }
}

.banner-title {
  margin-bottom: 26px;
  white-space: nowrap;

  @media (min-width: 1119px) {
    text-align: left;
  }

  @media (max-width: 767px) {
    white-space: normal;
    margin-bottom: 18px;
  }
}

.banner-text {
  max-width: 460px;
  margin-bottom: 26px;
  font-weight: 400;
  font-size: 27px;
  line-height: 133.5%;
  color: #536473;

  @media (max-width: 1119px) {
    max-width: 100%;
    text-align: center;
  }

  @media (max-width: 767px) {
    margin-bottom: 18px;
  }
}

.banner-btn {
  @media (max-width: 1119px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>