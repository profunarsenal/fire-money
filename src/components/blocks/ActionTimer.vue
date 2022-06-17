<template>
  <div class="timer">
    <div class="hour">
      <div class="hour-wrap">
        <span class="hour-card">{{ cardHour1 }}</span>
        <span class="hour-card">{{ cardHour2 }}</span>
      </div>
      <div class="hour-text">часа</div>
    </div>
    <span v-if="timerDot" class="dots"></span>
    <div class="minute">
      <div class="minute-wrap">
        <span class="minute-card">{{ cardMinute1 }}</span>
        <span class="minute-card">{{ cardMinute2 }}</span>
      </div>
      <div class="minute-text">минут</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "action-timer",

  data() {
    return {
      clockTimer: null,
      timerDot: true,
      cardHour1: "",
      cardHour2: "",
      cardMinute1: "",
      cardMinute2: "",
      dateNow: 0,
      dateEnd: 0,
      timeRemaining: 0,
      hours: 0,
      minutes: 0,
    };
  },

  mounted() {
    this.initTimer();
    this.startTimer();
    this.initDots();
  },

  watch: {
    cardHour1() {
      this.cardHour1 =
        this.hours < 10 ? `0${this.hours}`[0] : this.hours.toString()[0];
    },

    cardHour2() {
      this.cardHour2 =
        this.hours < 10 ? `0${this.hours}`[1] : this.hours.toString()[1];
    },

    cardMinute1() {
      this.cardMinute1 =
        this.minutes < 10 ? `0${this.minutes}`[0] : this.minutes.toString()[0];
    },

    cardMinute2() {
      this.cardMinute2 =
        this.minutes < 10 ? `0${this.minutes}`[1] : this.minutes.toString()[1];
    },
  },

  methods: {
    initTimer() {
      if (localStorage.getItem("timer")) {
        this.dateEnd = JSON.parse(localStorage.getItem("timer"));
      } else {
        this.dateNow = new Date().getTime();
        this.dateEnd = this.dateNow + 54000000;
        localStorage.setItem("timer", this.dateEnd);
      }
    },

    updateClock() {
      this.timeRemaining = this.dateEnd - new Date().getTime();

      this.hours = Math.floor((this.timeRemaining / 1000 / 60 / 60) % 24);
      this.minutes = Math.floor((this.timeRemaining / 1000 / 60) % 60);

      this.cardHour1 =
        this.hours < 10 ? `0${this.hours}`[0] : this.hours.toString()[0];
      this.cardHour2 =
        this.hours < 10 ? `0${this.hours}`[1] : this.hours.toString()[1];
      this.cardMinute1 =
        this.minutes < 10 ? `0${this.minutes}`[0] : this.minutes.toString()[0];
      this.cardMinute2 =
        this.minutes < 10 ? `0${this.minutes}`[1] : this.minutes.toString()[1];
    },

    startTimer() {
      this.updateClock();

      this.clockTimer = setInterval(() => {
        if (this.timeRemaining > 1000) {
          this.updateClock();
        } else {
          clearInterval(this.clockTimer);
          this.restartTimer();
        }
      }, 1000);
    },

    restartTimer() {
      this.dateNow = new Date().getTime();
      this.dateEnd = this.dateNow + 54000000;
      localStorage.setItem("timer", this.dateEnd);

      this.startTimer();
    },

    initDots() {
      setInterval(() => {
        this.timerDot = !this.timerDot;
      }, 1000);
    },
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