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
        <button class="header-btn" type="button">вход в личный кабинет</button>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
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
}

.navigation {
  padding: 0 15px;
}

.menu {
  display: flex;
  align-items: center;
}

.menu-item {
  &:not(:last-child) {
    margin-right: 60px;
  }
}

.menu-link {
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #fff;
}

.header-btn {
  padding: 18px 25px;
  font-weight: 500;
  font-size: 13px;
  line-height: 15px;
  text-transform: uppercase;
  color: #fff;
  background: #ff7b00;
  border-radius: 8px;
}
</style>