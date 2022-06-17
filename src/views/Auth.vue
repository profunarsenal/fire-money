<template>
  <main class="main">
    <div class="auth">
      <div class="container">
        <div class="auth-wrapper">
          <router-link class="auth-logo" to="/">
            <img src="@/assets/images/auth-logo.svg" alt="logo" />
          </router-link>
          <h2 class="auth-title">Авторизация</h2>
          <form class="auth-form">
            <label class="auth-label">
              <span class="auth-name">Телефон</span>
              <v-input-form
                v-model="v$.inputAuthPhone.$model"
                class="auth-input"
                placeholder="+79270001122"
              />
              <span
                :class="{
                  'phone-input':
                    error.$message ===
                    'Введите номер в формате +7 (XXX) XXX-XX-XX',
                  'error-input': error.$message === 'Обязательное поле',
                }"
                v-for="error in v$.inputAuthPhone.$errors"
                :key="error.$uid"
              >
                {{ error.$message }}</span
              >
              <img
                class="auth-icon"
                src="@/assets/images/icon-input-phone.svg"
                alt="phone"
              />
            </label>
            <label class="auth-label">
              <span class="auth-name">ФИО</span>
              <v-input-form
                v-model="v$.inputAuthName.$model"
                class="auth-input"
                placeholder="Иванов Иван Иванович"
              />
              <span
                class="error-input"
                v-for="error in v$.inputAuthName.$errors"
                :key="error.$uid"
              >
                {{ error.$message }}</span
              >
              <img
                class="auth-icon"
                src="@/assets/images/icon-input-user.svg"
                alt="phone"
              />
            </label>
            <div class="auth-btn">
              <v-button-primary
                @click="login"
                title="Найти заявки"
                :disabled="false"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import VInputForm from "@/components/common/VInputForm.vue";
import VButtonPrimary from "@/components/common/VButtonPrimary.vue";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { helpers } from "@vuelidate/validators";
import { myPhone, myText } from "@/validators/validators";

export default {
  name: "auth",

  components: {
    VInputForm,
    VButtonPrimary,
  },

  data() {
    return {
      inputAuthPhone: "",
      inputAuthName: "",
    };
  },

  setup() {
    return {
      v$: useVuelidate(),
    };
  },

  methods: {
    async login() {
      if (!this.buttonDisabled) {
        const isFormCorrect = await this.v$.$validate();
        const user = {
          name: this.inputAuthName,
          phone: this.inputAuthPhone,
        };

        if (!isFormCorrect) return;

        localStorage.setItem("auth", JSON.stringify(true));
        localStorage.setItem("user", JSON.stringify(user));
        this.$router.push("/cabinet");
      }
    },
  },

  validations() {
    return {
      inputAuthName: {
        required: helpers.withMessage("Обязательное поле", required),
        myText: helpers.withMessage("Только буквы на русском языке", myText),
      },
      inputAuthPhone: {
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
.auth {
  background-image: url("@/assets/images/auth-bg.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.auth-wrapper {
  padding: 25px 0;
}

.auth-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;

  img {
    width: 303px;
    height: 57px;
  }

  @media (max-width: 576px) {
    margin-top: 20px;

    img {
      width: 203px;
      height: 37px;
    }
  }
}

.auth-title {
  margin-bottom: 30px;
  font-weight: 600;
  font-size: 30px;
  line-height: 36px;
  text-align: center;
  text-transform: uppercase;

  @media (max-width: 576px) {
    margin-bottom: 20px;
    font-size: 24px;
    line-height: 29px;
  }
}

.auth-form {
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 576px;
  margin: 0 auto;
  padding: 50px;
  background: #ffffff;
  box-shadow: 0px 4px 44px rgba(130, 141, 150, 0.15);
  border-radius: 22px;
  border: 3px solid #ffc83e;

  @media (max-width: 576px) {
    padding: 20px;
  }
}

.auth-label {
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;

  @media (max-width: 576px) {
    margin-bottom: 10px;
  }
}

.auth-name {
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
}

.auth-btn {
  display: flex;
  align-items: center;
  justify-content: center;
}

.auth-icon {
  position: absolute;
  bottom: 15px;
  left: 15px;
  width: 18px;
  height: 18px;
}

.auth-input {
  padding-left: 45px;
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
</style>
