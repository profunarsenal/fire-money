<template>
  <a href="tel: +78008080080" class="contacts-phone">8 800 808-00-80</a>
</template>

<style lang="scss" scoped>
.contacts-phone {
  position: relative;
  padding-left: 29px;
  margin-left: 50px;
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
  color: #ffffff;

  &::before {
    content: "";
    position: absolute;
    top: 2px;
    left: 0;
    width: 19px;
    height: 19px;
    background-image: url("@/assets/images/phone-icon.svg");
    background-repeat: no-repeat;
    transition: all 0.3s;
  }

  @media (any-hover: hover) {
    &:hover {
      &::before {
        transform: rotate(-360deg);
      }
    }
  }

  @media (max-width: 767.98px) {
    margin-left: 0px;
    margin-top: 20px;
  }
}
</style>