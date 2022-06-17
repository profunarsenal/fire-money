<template>
  <header
    class="header"
    :class="{ 'menu-open': menuOpen, 'header-page': !pageHome }"
  >
    <div class="container">
      <div class="header-wrapper">
        <v-logo />
        <mobile-menu @scrollTo="scrollById" :open="menuOpen" />
        <v-navigation
          class="header-nav"
          @scrollTo="scrollById"
          v-if="pageHome"
        />
        <div class="header-btns">
          <v-button-login v-if="!statusLogin" />
          <v-button-exit @click="exit" v-if="statusLogin" />
          <button
            class="menu-btn"
            type="button"
            @click="toggleMenu"
            :class="{
              'menu-open': menuOpen,
            }"
            v-if="pageHome"
          >
            <span></span>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import VNavigation from "@/components/common/VNavigation.vue";
import VLogo from "@/components/common/VLogo.vue";
import VButtonLogin from "@/components/common/VButtonLogin.vue";
import MobileMenu from "@/components/header/MobileMenu.vue";
import VButtonExit from "@/components/common/VButtonExit.vue";

export default {
  name: "header-section",

  components: {
    VNavigation,
    MobileMenu,
    VLogo,
    VButtonLogin,
    VButtonExit,
  },

  data() {
    return {
      menuOpen: false,
      statusLogin: null,
      pageHome: this.$router.options.history.location === "/",
    };
  },

  mounted() {
    if (localStorage.getItem("auth")) {
      this.statusLogin = JSON.parse(localStorage.getItem("auth"));
    } else {
      this.statusLogin = this.$store.getters["getAuthStatus"];
    }
  },

  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },

    scrollById(id) {
      this.$emit("scrollTo", id);
      this.menuOpen = false;
    },

    exit() {
      this.statusLogin = false;
      this.$store.dispatch("changeStatus", false);
      localStorage.setItem("auth", JSON.stringify(false));
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

  @media (max-width: 767px) {
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
    @media (max-width: 767px) {
      &::before {
        top: 0;
      }
    }
  }
}

.header-page {
  background: linear-gradient(278.04deg, #ffc83e 31.99%, #ff9f47 81.27%);
}

.header-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 122px;

  @media (max-width: 1400px) {
    min-height: 100px;
  }

  @media (max-width: 767px) {
    min-height: 80px;
  }
}

.header-nav {
  display: block;

  @media (max-width: 767px) {
    display: none;
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

  @media (max-width: 767px) {
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