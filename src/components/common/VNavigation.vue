<template>
  <nav class="navigation">
    <ul class="menu">
      <li class="menu-item">
        <a @click.prevent="scrollById" href="#reviews" class="menu-link"
          >Почему мы?</a
        >
      </li>
      <li class="menu-item">
        <a @click.prevent="scrollById" href="#about" class="menu-link"
          >О сервисе</a
        >
      </li>
      <li class="menu-item">
        <a @click.prevent="scrollById" href="#questions" class="menu-link"
          >Вопросы-ответы</a
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "v-navigation",

  methods: {
    scrollById(event) {
      this.$emit("scrollTo", event.target.getAttribute("href"));
    },
  },
};
</script>

<style lang="scss" scoped>
.navigation {
  padding: 0 15px;

  @media (max-width: 482px) {
    padding: 15px 0;
  }
}

.menu {
  display: flex;
  align-items: center;

  @media (max-width: 482px) {
    flex-direction: column;
    justify-content: center;
  }
}

.menu-item {
  &:not(:last-child) {
    margin-right: 60px;
  }

  @media (max-width: 992px) {
    &:not(:last-child) {
      margin-right: 20px;
    }
  }

  @media (max-width: 482px) {
    &:not(:last-child) {
      margin-right: 0;
      margin-bottom: 15px;
    }
  }
}

.menu-link {
  position: relative;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #fff;
  white-space: nowrap;
  text-decoration: none;

  &::after {
    content: "";
    position: absolute;
    display: block;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #ffffff;
    transition: width 0.3s ease-out;
  }

  @media (any-hover: hover) {
    &:hover {
      &::after {
        width: 100%;
      }
    }
  }

  @media (max-width: 992px) {
    font-size: 16px;
    line-height: 19px;
  }
}
</style>