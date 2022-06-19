<template>
  <nav
    class="mobile-navigation"
    :class="{
      'menu-open': open,
    }"
  >
    <ul class="mobile-menu">
      <li class="mobile-item">
        <a @click.prevent="scrollById" href="#reviews" class="mobile-link"
          >Почему мы?</a
        >
      </li>
      <li class="mobile-item">
        <a @click.prevent="scrollById" href="#about" class="mobile-link"
          >О сервисе</a
        >
      </li>
      <li class="mobile-item">
        <a @click.prevent="scrollById" href="#questions" class="mobile-link"
          >Вопросы-ответы</a
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "mobile-menu",

  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    scrollById(event) {
      this.$emit("scrollTo", event.target.getAttribute("href"));
    },
  },
};
</script>

<style lang="scss" scoped>
.mobile-navigation {
  display: none;
  position: absolute;
  z-index: 5;
  top: -300%;
  left: 0;
  width: 100%;
  height: auto;
  align-items: flex-end;
  justify-content: center;
  background: linear-gradient(278.04deg, #ffc83e 31.99%, #ff9f47 81.27%);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.492);
  transition: all 0.5s;

  &.menu-open {
    top: 0;
  }

  @media (max-width: 767px) {
    display: flex;
  }
}

.mobile-menu {
  padding: 80px 15px 30px;
}

.mobile-item {
  display: flex;
  flex-direction: column;
  &:not(:last-child) {
    margin-bottom: 15px;
  }
}

.mobile-link {
  color: #fff;
  font-size: 18px;
  text-align: center;
}
</style>