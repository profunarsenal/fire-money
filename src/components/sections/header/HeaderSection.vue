<template>
  <header class="header" :class="{ 'menu-open': menuOpen }">
    <div class="container">
      <div class="header-wrapper">
        <logo-component />
        <mobile-menu
          @scrollTo="scrollById"
          :open="menuOpen"
          v-if="width <= 767"
        />
        <navigation-panel @scrollTo="scrollById" v-if="width > 767" />
        <div class="header-btns">
          <button-login :width="width" />
          <button
            class="menu-btn"
            type="button"
            @click="toggleMenu"
            :class="{
              'menu-open': menuOpen,
            }"
          >
            <span></span>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import NavigationPanel from "@/components/common/NavigationPanel.vue";
import LogoComponent from "@/components/common/LogoComponent.vue";
import ButtonLogin from "@/components/common/ButtonLogin.vue";
import MobileMenu from "@/components/sections/header/MobileMenu.vue";

export default {
  components: {
    NavigationPanel,
    MobileMenu,
    LogoComponent,
    ButtonLogin,
  },

  data() {
    return {
      menuOpen: false,
    };
  },

  props: ["width"],

  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },

    scrollById(id) {
      this.$emit("scrollTo", id);
      this.menuOpen = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;

  @media (max-width: 767.98px) {
    &::before {
      content: "";
      position: absolute;
      z-index: 6;
      top: -300%;
      left: 0;
      width: 100%;
      height: 80px;
      background: linear-gradient(278.04deg, #ffc83e 31.99%, #ff9f47 81.27%);
      transition: all 0.5s;
    }
  }

  &.menu-open {
    @media (max-width: 767.98px) {
      &::before {
        top: 0;
      }
    }
  }
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

.menu-btn {
  position: relative;
  z-index: 6;
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
    opacity: 1;
    visibility: visible;
    transition: all 0.3s;
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
    transition: all 0.3s;
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

  &.menu-open {
    span {
      opacity: 0;
      visibility: hidden;
    }

    &::before {
      width: 25px;
      top: 19px;
      left: 8px;
      transform: rotate(45deg);
    }

    &::after {
      width: 25px;
      bottom: 18px;
      left: 8px;
      transform: rotate(-45deg);
    }
  }
}
</style>