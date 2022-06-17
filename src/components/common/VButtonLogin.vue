<template>
  <button @click="$router.push('/auth')" class="header-btn" type="button">
    <span>вход</span>
    <span>вход в кабинет</span>
    <span>вход в личный кабинет</span>
  </button>
</template>

<script>
export default {
  name: "v-button-login",
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
</style>