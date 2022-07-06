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
          <button
            v-if="!statusLogin"
            @click="$router.push('/auth')"
            class="btn-login"
            type="button"
          >
            <span>вход</span>
            <span>вход в кабинет</span>
            <span>вход в личный кабинет</span>
          </button>
          <button
            v-if="statusLogin"
            @click="$router.push('/cabinet')"
            class="btn-cabinet"
          >
            Кабинет
          </button>
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
import MobileMenu from "@/components/blocks/MobileMenu.vue";

export default {
  name: "header-section",

  components: {
    VNavigation,
    MobileMenu,
    VLogo,
  },

  data() {
    return {
      menuOpen: false,
      statusLogin: JSON.parse(localStorage.getItem("auth")),
    };
  },

  computed: {
    pageHome() {
      return this.$route.path === "/";
    },
  },

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

.btn-login {
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

  @media (max-width: 992px) {
    padding: 12px 20px;
    font-size: 12px;
    line-height: 14px;
  }
}

span:nth-child(1) {
  display: none;

  @media (max-width: 480px) {
    display: block;
  }
}

span:nth-child(2) {
  display: none;

  @media (max-width: 992px) {
    display: block;
  }

  @media (max-width: 480px) {
    display: none;
  }
}

span:nth-child(3) {
  display: block;

  @media (max-width: 992px) {
    display: none;
  }
}

.btn-cabinet {
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
  cursor: pointer;

  @media (any-hover: hover) {
    &:hover {
      color: #ff7b00;
      background-color: #ffffff;
    }
  }

  @media (max-width: 992px) {
    padding: 12px 20px;
    font-size: 12px;
    line-height: 14px;
  }
}
</style>