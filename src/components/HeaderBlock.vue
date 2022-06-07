<template>
  <header class="header">
    <div class="container">
      <div class="header-wrapper">
        <logo-component />
        <header-navigation />
        <div class="header-btns">
          <button class="header-btn" type="button">
            {{
              width <= 360
                ? "вход"
                : width > 360 && width < 767
                ? "вход в кабинет"
                : "вход в личный кабинет"
            }}
          </button>
          <button class="menu-btn" type="button">
            <span></span>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import LogoComponent from "@/components/LogoComponent.vue";
import HeaderNavigation from "@/components/HeaderNavigation.vue";

export default {
  components: {
    LogoComponent,
    HeaderNavigation,
  },

  props: ["width"],
};
</script>

<style lang="scss" scoped>
.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;
}

.header-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 122px;

  @media (max-width: 1400.98px) {
    min-height: 100px;
  }

  @media (max-width: 767.98px) {
    min-height: 80px;
  }
}

.header-btns {
  display: flex;
  align-items: center;
}

.header-btn {
  min-height: 40px;
  padding: 18px 25px;
  font-weight: 500;
  font-size: 13px;
  line-height: 15px;
  text-transform: uppercase;
  color: #fff;
  background: #ff7b00;
  border-radius: 8px;
  white-space: nowrap;

  @media (max-width: 767.98px) {
    padding: 12px 20px;
    font-size: 12px;
    line-height: 14px;
  }
}

.menu-btn {
  position: relative;
  width: 40px;
  height: 40px;
  display: none;
  margin-left: 15px;
  background-color: #fff;
  border-radius: 8px;

  span {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 3px;
    background: #ff7b00;
    border-radius: 8px;
    transform: translate(-50%, -50%);
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 50%;
    width: 20px;
    height: 3px;
    background: #ff7b00;
    border-radius: 8px;
    transform: translateX(-50%);
  }

  &::before {
    top: 11px;
  }

  &::after {
    bottom: 11px;
  }

  @media (max-width: 767.98px) {
    display: block;
  }
}
</style>