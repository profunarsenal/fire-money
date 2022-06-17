<template>
  <div class="square">
    <div class="spin"></div>
  </div>
</template>

<script>
export default {
  name: "v-preloader",
};
</script>

<style lang="scss" scoped>
.square {
  border: 0;
  width: 170px;

  @media (max-width: 480px) {
    width: 110px;
  }
}

.spin {
  height: 170px;
  width: 170px;
  border-radius: 50%;
  border: dashed 5px white;
  -webkit-animation-name: spin;
  -webkit-animation-duration: 0.5s;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;

  @media (max-width: 480px) {
    height: 110px;
    width: 110px;
  }
}

@-webkit-keyframes spin {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}
</style>