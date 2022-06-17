<template>
  <form class="form">
    <div class="form-window">
      <div class="form-inputs">
        <div class="input-block">
          <span class="input-title">Фамилия</span>
          <v-input-form v-model="v$.userSurName.$model" />
          <span
            class="error-input"
            v-for="error in v$.userSurName.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}</span
          >
        </div>
        <div class="input-block">
          <span class="input-title">Имя</span>
          <v-input-form v-model="v$.userName.$model" />
          <span
            class="error-input"
            v-for="error in v$.userName.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}</span
          >
        </div>
        <div class="input-block">
          <span class="input-title">Отчество</span>
          <v-input-form v-model="v$.userPatronymic.$model" />
          <span
            class="error-input"
            v-for="error in v$.userPatronymic.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}</span
          >
        </div>
        <div class="input-block">
          <span class="input-title">Телефон</span>
          <v-input-form
            v-model="v$.userPhone.$model"
            class="input-img input-phone"
          />
          <span
            :class="{
              'phone-input':
                error.$message === 'Введите номер в формате +7 (XXX) XXX-XX-XX',
              'error-input': error.$message === 'Обязательное поле',
            }"
            v-for="error in v$.userPhone.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}</span
          >
          <img
            class="input-icon"
            src="@/assets/images/icon-input-phone.svg"
            alt="phone"
          />
        </div>
        <div class="input-block">
          <span class="input-title">Дата рождения</span>
          <datepicker v-model="picked" />
          <img
            class="input-icon"
            src="@/assets/images/icon-input-date.svg"
            alt="date"
          />
        </div>
        <div class="input-block">
          <span class="input-title">Город</span>
          <v-input-form
            v-model="v$.userCity.$model"
            class="input-img"
            @focus="focusInput = true"
            @blur="focusInputOff"
          />
          <span
            class="error-input"
            v-for="error in v$.userCity.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}</span
          >
          <img
            class="input-icon"
            src="@/assets/images/icon-input-city.png"
            alt="city"
          />
          <ul
            v-show="focusInput && userCity.length > 0 && cityPrompt0"
            class="city-list"
          >
            <li @click="writeCity($event)" v-if="cityPrompt0" class="city-item">
              {{ `${cityPrompt0.region} ${cityPrompt0.city}` }}
            </li>
            <li @click="writeCity($event)" v-if="cityPrompt1" class="city-item">
              {{ `${cityPrompt1.region} ${cityPrompt1.city}` }}
            </li>
            <li @click="writeCity($event)" v-if="cityPrompt2" class="city-item">
              {{ `${cityPrompt2.region} ${cityPrompt2.city}` }}
            </li>
          </ul>
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
          Заполняя заявку на сайте вы даете согласие со следующими условиями:
          <a href="#"
            >Политика обработки персональных данных , Публичная оферта и
            действующие тарифы , Согласие на обработку персональных данных ,
            Соглашение с подпиской и Соглашение о хранении учетных данных
            владельца карт.</a
          >
          Стоимость услуги четыреста девяносто шесть руб. Списание производится
          раз в 5 дней. Настоящим подтверждаю, что не являюсь получателем
          единовременных и/или регулярных денежных выплат, предусмотренных
          Указами Президента РФ.
        </p>
      </div>
    </div>
    <div class="form-btn">
      <v-button-primary
        @click="submitForm"
        :disabled="buttonDisabled"
        title="Оформить"
      />
    </div>
  </form>
</template>

<script>
import VInputForm from "@/components/common/VInputForm.vue";
import VButtonPrimary from "@/components/common/VButtonPrimary.vue";
import Datepicker from "vue3-datepicker";
import { ref } from "vue";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { helpers } from "@vuelidate/validators";
import { myPhone, myText } from "@/validators/validators";

export default {
  name: "user-form",

  components: {
    VInputForm,
    VButtonPrimary,
    Datepicker,
  },

  data() {
    return {
      userName: "",
      userSurName: "",
      userPatronymic: "",
      userPhone: "+7",
      userDate: "",
      userCity: "",
      buttonDisabled: true,
      focusInput: false,
      citiesList: [],
      cityPrompt0: "",
      cityPrompt1: "",
      cityPrompt2: "",
    };
  },

  setup() {
    const picked = ref(new Date());

    return {
      picked,
      v$: useVuelidate(),
    };
  },

  mounted() {
    this.datepickerStyle();
    this.getCitiesList();
  },

  computed: {
    isTimeStatus() {
      return this.$store.getters["getStatus"];
    },

    filteredCity() {
      return this.citiesList.filter((city) =>
        city.city.toLowerCase().includes(this.userCity.toLowerCase())
      );
    },
  },

  watch: {
    userCity() {
      this.filteredCitiesList();
    },
  },

  methods: {
    async submitForm() {
      if (!this.buttonDisabled) {
        const isFormCorrect = await this.v$.$validate();
        if (!isFormCorrect) return;

        const user = {
          userName: this.userName,
          userSurName: this.userSurName,
          userPatronymic: this.userPatronymic,
          userPhone: this.userPhone,
          userDate: this.userDate,
          userCity: this.userCity,
        };

        this.$store.dispatch("changeUser", user);

        this.$router.push("/receiving");
      }
    },

    async getCitiesList() {
      const responce = await fetch(
        "https://gist.githubusercontent.com/gorborukov/0722a93c35dfba96337b/raw/435b297ac6d90d13a68935e1ec7a69a225969e58/russia"
      );
      const data = await responce.json();

      this.citiesList = data;
    },

    filteredCitiesList() {
      const findCityList = this.citiesList.filter((city) =>
        `${city.region.toLowerCase()} ${city.city.toLowerCase()}`.includes(
          this.userCity.toLowerCase()
        )
      );

      this.renderCitiesList(findCityList);
    },

    renderCitiesList(cities) {
      this.cityPrompt0 = cities[0];
      this.cityPrompt1 = cities[1];
      this.cityPrompt2 = cities[2];
    },

    writeCity(e) {
      this.userCity = e.target.outerText;
    },

    datepickerStyle() {
      const datepicker = document.querySelector(".v3dp__input_wrapper > input");
      datepicker.style.cssText += `
      position: relative;
      z-index: 2;
      flex-grow: 1;
      width: 100%;
      min-height: 50px;
      padding: 10px 45px;
      font-size: 16px;
      color: #45515f;
      border: 1px solid #d3dae2;
      border-radius: 8px;
      background-color: transparent;
    `;
    },

    focusInputOff() {
      setTimeout(() => {
        this.focusInput = false;
      }, 100);
    },
  },

  validations() {
    return {
      userName: {
        required: helpers.withMessage("Обязательное поле", required),
        myText: helpers.withMessage("Только буквы на русском языке", myText),
      },
      userSurName: {
        required: helpers.withMessage("Обязательное поле", required),
        myText: helpers.withMessage("Только буквы на русском языке", myText),
      },
      userPatronymic: {
        required: helpers.withMessage("Обязательное поле", required),
        myText: helpers.withMessage("Только буквы на русском языке", myText),
      },
      userCity: {
        required: helpers.withMessage("Обязательное поле", required),
        myText: helpers.withMessage("Только буквы на русском языке", myText),
      },
      userPhone: {
        required: helpers.withMessage("Обязательное поле", required),
        myPhone: helpers.withMessage(
          "Введите номер в формате +7 (XXX) XXX-XX-XX",
          myPhone
        ),
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.subtitle {
  color: #ff7b00;
}

.form {
  background-color: #fff;
}

.form-window {
  padding-bottom: 20px;
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
  margin-bottom: 25px;

  @media (max-width: 767px) {
    flex: 0 1 45%;
  }

  @media (max-width: 576px) {
    flex: 0 1 100%;
  }
}

.input-icon {
  position: absolute;
  z-index: 1;
  bottom: 18px;
  left: 15px;
  width: 14px;
  height: 14px;
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

.error-input {
  position: absolute;
  bottom: -16px;
  left: 0;
  color: red;
  font-size: 13px;
}

.phone-input {
  position: absolute;
  bottom: -16px;
  left: 0;
  color: gray;
  font-size: 13px;
}

.input-img {
  position: relative;
  z-index: 2;
  padding: 10px 35px;
  width: 100%;
}

.city-list {
  position: absolute;
  z-index: 2;
  top: 80px;
  left: 0;
  width: 100%;
  padding: 10px;
  background-color: #f0f0f0;
  border: 1px solid #d3dae2;
  border-radius: 8px;
}

.city-item {
  width: 100%;
  height: 100%;
  cursor: pointer;
  transition: all 0.3s;

  &:not(:last-child) {
    margin-bottom: 5px;
  }

  @media (any-hover: hover) {
    &:hover {
      color: #ff7b00;
    }
  }
}
</style>