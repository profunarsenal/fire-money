<template>
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
</template>

<style lang="scss" scoped>
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
</style>