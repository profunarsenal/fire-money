<template>
  <a href="#" class="logo">
    <img src="@/assets/images/FireMoney.svg" alt="FireMoney" />
  </a>
</template>

<style lang="scss" scoped>
.logo {
  position: relative;
  z-index: 6;
  margin-right: 20px;

  img {
    width: 164px;
    height: 26px;
  }

  @media (max-width: 767.98px) {
    margin-right: 0;

    img {
      width: 126px;
      height: 24px;
    }
  }
}
</style>