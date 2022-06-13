<template>
  <a href="mailto: Kustohelp@gmail.com" class="contacts-mail">
    Kustohelp@gmail.com
  </a>
</template>

<style lang="scss" scoped>
.contacts-mail {
  position: relative;
  padding-left: 32px;
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  color: #ffffff;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 22px;
    height: 15px;
    background-image: url("@/assets/images/letter-icon.svg");
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
}
</style>