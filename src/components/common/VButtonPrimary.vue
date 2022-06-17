<template>
  <button
    :class="{ 'btn-disabled': disabled }"
    class="btn-primary"
    type="button"
  >
    <span>{{ title }}</span>
  </button>
</template>

<script>
export default {
  name: "v-button-primary",

  props: {
    title: {
      type: String,
      default: "Оформить заявку",
    },

    disabled: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.btn-primary {
  padding: 22px 44px;
  font-size: 18px;
  font-weight: 700;
  line-height: 21px;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
  border: none;
  background-size: 300% 100%;
  border-radius: 8px;
  cursor: pointer;
  text-shadow: 0px 4px 12px rgba(0, 0, 0, 0.12);
  moz-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
  background-image: linear-gradient(
    to right,
    #ffc83e,
    #ff7347,
    #fa7199,
    #e85a19
  );

  &:focus {
    outline: none;
  }

  @media (any-hover: hover) {
    &:hover {
      background-position: 100% 0;
      moz-transition: all 0.4s ease-in-out;
      -o-transition: all 0.4s ease-in-out;
      -webkit-transition: all 0.4s ease-in-out;
      transition: all 0.4s ease-in-out;
    }
  }

  @media (max-width: 767px) {
    padding: 10px 28px;
    font-size: 16px;
    line-height: 19px;
  }
}

.btn-disabled {
  cursor: auto;
  background-image: linear-gradient(
    to right,
    #b8b8b8,
    #8a8a8a,
    #6e6e6e,
    #565656
  );
  background-position: 100% 0;
  moz-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
}
</style>