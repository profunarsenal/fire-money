<template>
  <button class="header-btn" type="button">
    {{
      width <= 360
        ? "вход"
        : width > 360 && width < 992
        ? "вход в кабинет"
        : "вход в личный кабинет"
    }}
  </button>
</template>

<script>
export default {
  name: "button-login",

  props: ["width"],
};
</script>


<style lang="scss" scoped>
.header-btn {
  position: relative;
  z-index: 6;
  min-height: 40px;
  padding: 18px 25px;
  font-weight: 500;
  font-size: 13px;
  line-height: 15px;
  text-transform: uppercase;
  color: #fff;
  background-color: #ff7b00;
  border-radius: 8px;
  white-space: nowrap;
  transition: all 0.3s ease;

  @media (any-hover: hover) {
    &:hover {
      color: #ff7b00;
      background-color: #ffffff;
    }
  }

  @media (max-width: 991.98px) {
    padding: 12px 20px;
    font-size: 12px;
    line-height: 14px;
  }
}
</style>