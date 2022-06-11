<template>
  <div class="timer">
    <div class="hour">
      <div class="hour-wrap">
        <span class="hour-card">0</span>
        <span class="hour-card">2</span>
      </div>
      <div class="hour-text">часа</div>
    </div>
    <span v-if="timerDot" class="dots"></span>
    <div class="minute">
      <div class="minute-wrap">
        <span class="minute-card">5</span>
        <span class="minute-card">5</span>
      </div>
      <div class="minute-text">минут</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timerDot: true,
    };
  },

  mounted() {
    setInterval(() => {
      this.timerDot = !this.timerDot;
    }, 1000);
  },
};
</script>

<style lang="scss" scoped>
.timer {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Montserrat";
  font-weight: 700;
  font-size: 38.2052px;
  line-height: 47px;
  color: #ffffff;
}

.dots {
  position: absolute;
  top: 0;
  left: 50%;
  z-index: 5;
  color: #45515f;
  transform: translateX(-50%);

  &::before {
    content: "";
    position: absolute;
    top: 15px;
    left: -2px;
    width: 6px;
    height: 8px;
    background: #45515f;
  }

  &::after {
    content: "";
    position: absolute;
    top: 30px;
    left: -2px;
    width: 6px;
    height: 8px;
    background: #45515f;
  }
}

.hour-wrap,
.minute-wrap {
  display: flex;
  align-items: center;
  padding: 0 10px;
}

.hour-text,
.minute-text {
  font-family: "Rubik";
  font-weight: 300;
  font-size: 13px;
  line-height: 15px;
  text-align: center;
  color: #45515f;
}

.hour-card,
.minute-card {
  position: relative;
  z-index: 1;
  width: 41px;
  height: 52px;
  text-align: center;

  &::before,
  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-image: url("@/assets/images/timer-bg.png");
  }
}

.hour-card {
  &:not(:last-child) {
    margin-right: 5px;
  }

  &::before {
    top: 0;
    left: 0;
  }

  &::after {
    top: 0;
    left: 0;
  }
}

.minute-card {
  &:not(:last-child) {
    margin-right: 5px;
  }

  &::before {
    top: 0;
    left: 0;
  }

  &::after {
    top: 0;
    left: 0;
  }
}
</style>