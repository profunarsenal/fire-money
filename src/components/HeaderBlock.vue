<template>
  <header class="header">
    <div class="container">
      <div class="header-wrapper">
        <a href="#" class="logo">
          <img src="@/assets/images/FireMoney.svg" alt="FireMoney" />
        </a>
        <nav class="navigation">
          <ul class="menu">
            <li class="menu-item">
              <a href="#" class="menu-link">Почему мы?</a>
            </li>
            <li class="menu-item">
              <a href="#" class="menu-link">О сервисе</a>
            </li>
            <li class="menu-item">
              <a href="#" class="menu-link">Вопросы-ответы</a>
            </li>
          </ul>
        </nav>
        <div class="header-btns">
          <button class="header-btn" type="button">
            {{
              width < 360
                ? "вход"
                : width < 767
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
export default {
  data: () => ({
    width: window.innerWidth,
  }),

  created() {
    window.addEventListener("resize", this.updateWidth);
  },

  methods: {
    updateWidth() {
      this.width = window.innerWidth;
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

.logo {
  margin-right: 20px;

  img {
    width: 164px;
    height: 26px;
  }

  @media (max-width: 767.98px) {
    img {
      width: 126px;
      height: 24px;
    }
  }
}

.navigation {
  padding: 0 15px;

  @media (max-width: 767.98px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    padding: 80px 0 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: orange;
    transform: translateY(-100%);
  }
}

.menu {
  display: flex;
  align-items: center;

  @media (max-width: 767.98px) {
    flex-direction: column;
  }
}

.menu-item {
  &:not(:last-child) {
    margin-right: 60px;

    @media (max-width: 991.98px) {
      margin-right: 30px;
    }

    @media (max-width: 767.98px) {
      margin-right: 0;
      margin-bottom: 10px;
    }
  }
}

.menu-link {
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #fff;

  @media (max-width: 991.98px) {
    font-size: 14px;
    line-height: 17px;
  }

  @media (max-width: 767.98px) {
    font-size: 18px;
    line-height: 21px;
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