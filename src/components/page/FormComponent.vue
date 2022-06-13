<template>
  <div class="form-credit">
    <div class="container">
      <div class="form-credit-wrapper">
        <title-page v-if="isTimeStatus" title="Для получения займа под 0%*" />
        <title-page v-if="!isTimeStatus" title="Для получения займа" />
        <title-page class="subtitle" title="Заполните заявку" />
        <form class="form">
          <div v-if="isTimeStatus" class="timer-block">
            <p class="form-message">
              Поторопитесь, до окончания акционного предложения осталось
            </p>
            <div class="form-timer">
              <timer-component />
            </div>
          </div>
          <div class="form-window">
            <calculator-money />
            <div class="form-inputs">
              <div class="input-block">
                <span class="input-title">Фамилия</span>
                <input-form v-model="form.userSurName" />
              </div>
              <div class="input-block">
                <span class="input-title">Имя</span>
                <input-form v-model="form.userName" />
              </div>
              <div class="input-block">
                <span class="input-title">Отчество</span>
                <input-form v-model="form.userPatronymic" />
              </div>
              <div class="input-block">
                <span class="input-title">Телефон</span>
                <input-form v-model="form.userPhone" :inputImg="true" />
                <img
                  class="input-icon"
                  src="@/assets/images/icon-input-phone.svg"
                  alt="phone"
                />
              </div>
              <div class="input-block input-block-date">
                <span class="input-title">Дата рождения</span>
                <input-form v-model="form.userDate" :inputImg="true" />
                <img
                  class="input-icon"
                  src="@/assets/images/icon-input-date.svg"
                  alt="date"
                />
                <button class="date-btn" type="button">
                  <img src="@/assets/images/icon-input-arrow.svg" alt="date" />
                </button>
              </div>
              <div class="input-block">
                <span class="input-title">Город</span>
                <input-form v-model="form.userCity" :inputImg="true" />
                <img
                  class="input-icon"
                  src="@/assets/images/icon-input-city.png"
                  alt="city"
                />
              </div>
            </div>
            <div class="form-agreement">
              <label class="form-checkbox">
                <input
                  @change="buttonDisabled = !buttonDisabled"
                  class="checkbox-hide"
                  type="checkbox"
                />
                <span class="checkbox-visual"></span>
              </label>
              <p class="form-agreement-text">
                Заполняя заявку на сайте вы даете согласие со следующими
                условиями:
                <a href="#"
                  >Политика обработки персональных данных , Публичная оферта и
                  действующие тарифы , Согласие на обработку персональных данных
                  , Соглашение с подпиской и Соглашение о хранении учетных
                  данных владельца карт.</a
                >
                Стоимость услуги четыреста девяносто шесть руб. Списание
                производится раз в 5 дней. Настоящим подтверждаю, что не являюсь
                получателем единовременных и/или регулярных денежных выплат,
                предусмотренных Указами Президента РФ.
              </p>
            </div>
          </div>
          <div class="form-btn">
            <button-primary
              @click="sendForm"
              :disabled="buttonDisabled"
              title="Оформить"
            />
          </div>
          <date-pick></date-pick>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import TitlePage from "@/components/common/TitlePage.vue";
import TimerComponent from "@/components/page/TimerComponent.vue";
import CalculatorMoney from "@/components/common/CalculatorMoney.vue";
import inputForm from "@/components/common/InputForm.vue";
import ButtonPrimary from "@/components/common/ButtonPrimary.vue";
import DatePick from "vue-date-pick";
import "vue-date-pick/dist/vueDatePick.css";

export default {
  components: {
    TitlePage,
    TimerComponent,
    CalculatorMoney,
    inputForm,
    ButtonPrimary,
    DatePick,
  },

  data() {
    return {
      form: {
        userName: "",
        userSurName: "",
        userPatronymic: "",
        userPhone: "",
        userDate: "",
        userCity: "",
      },
      actionTime: true,
      buttonDisabled: true,
    };
  },

  computed: {
    isTimeStatus() {
      return this.$store.getters["getStatus"];
    },
  },

  methods: {
    sendForm() {
      if (!this.buttonDisabled) {
        console.log(this.form);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.subtitle {
  color: #ff7b00;
}

.form-credit {
  background-image: url("@/assets/images/page-bg.png");
  background-size: cover;
  background-position: center;
}

.form-credit-wrapper {
  padding: 40px 0 70px;
}

.form {
  margin-top: 32px;
  padding: 38px;
  background: #fff;
  box-shadow: 0px 4px 44px rgba(130, 141, 150, 0.15);
  border-radius: 22px;

  @media (max-width: 576.98px) {
    padding: 20px;
  }
}

.form-window {
  margin-top: 20px;
  padding-bottom: 20px;
  border-top: 1px solid #f2f2f2;
  border-bottom: 1px solid #f2f2f2;
}

.form-message {
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #45515f;
}

.form-timer {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.form-inputs {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

.input-block {
  position: relative;
  flex: 0 1 30%;
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;

  @media (max-width: 767.98px) {
    flex: 0 1 45%;
  }

  @media (max-width: 576.98px) {
    flex: 0 1 100%;
  }
}

.input-icon {
  position: absolute;
  bottom: 18px;
  left: 15px;
  width: 14px;
  height: 14px;
}

.date-btn {
  position: absolute;
  bottom: 14px;
  right: 15px;
  width: 20px;
  height: 20px;
  background-color: transparent;

  img {
    width: 14px;
    height: 14px;
  }
}

.input-title {
  display: block;
  margin-bottom: 8px;
  font-weight: 300;
  font-size: 15px;
  line-height: 18px;
}

.form-agreement {
  display: flex;
  align-items: flex-start;
  margin-top: 25px;
}

.form-agreement-text {
  max-width: 620px;
  margin-left: 37px;
  font-weight: 300;
  font-size: 13px;
  line-height: 15px;

  a {
    color: #45515f;
    text-decoration: underline;
  }
}

.form-checkbox {
  display: block;
}

.checkbox-hide {
  position: absolute;
  z-index: -1;
  width: 1px;
  height: 1px;
  opacity: 0;
  appearance: none;

  &:checked + .checkbox-visual {
    &::before {
      background: linear-gradient(81.55deg, #ffc83e 33.93%, #ff7347 73.78%);
      border: none;
    }

    &::after {
      content: "";
      position: absolute;
      top: 6px;
      left: 5px;
      width: 24px;
      height: 24px;
      background-image: url("@/assets/images/icon-checked.svg");
      background-repeat: no-repeat;
      transition: all 0.3s;
    }
  }
}

.checkbox-visual {
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 24px;
    height: 24px;
    border-radius: 6px;
    border: 1px solid #ff7b00;
    transition: all 0.3s;
  }
}

.form-btn {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
