<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-wrapper">
        <div class="footer-header">
          <v-logo class="footer-logo" />
          <v-navigation
            class="footer-header-nav"
            @scrollTo="scrollById"
            v-if="pageHome"
          />
          <div class="footer-contacts">
            <a href="mailto: Kustohelp@gmail.com" class="contacts-mail">
              Kustohelp@gmail.com
            </a>
            <a href="tel: +78008080080" class="contacts-phone"
              >8 800 808-00-80</a
            >
          </div>
        </div>
        <v-navigation @scrollTo="scrollById" class="footer-nav" />
        <credit-list />
        <div class="banks-cards">
          <div class="cards">
            <h4 class="cards-title">Какие карты принимаем</h4>
            <div class="cards-images">
              <img src="@/assets/images/payment-1.png" alt="payment" />
              <img src="@/assets/images/payment-4.png" alt="payment" />
              <img src="@/assets/images/payment-6.png" alt="payment" />
            </div>
          </div>
          <div class="agreement">
            <span>
              Мы явлемся обработчиками
              <a class="agreement-link" href="#"> персональных данных </a>
            </span>
          </div>
        </div>
        <div class="terms">
          <h4 class="terms-title">Соглашения и условия</h4>
          <p class="terms-text">
            Займы и кредиты предоставляются партнерами Imoneys Сredit на сумму
            от 3 000 до 1 000 000 рублей включительно на срок от 13 до 260
            недель. Проценты за пользование денежных средств составляют от 40 до
            360 процентов годовых. Расчетная сумма (основной долг и проценты) к
            возврату от 500 до 250 000 рублей. Условия актуальны на 01.06.2021 и
            не являются публичной офертой. Пример расчета общей стоимости займа:
            заём на 15 000 руб. и сроком 25 недель; проценты за весь период
            составят 5 000 руб. Итого ПСК 264,392 %. За услуги сервиса может
            быть взята плата в размере от 48 до 446 руб. за активацию сервиса.
          </p>
          <p class="terms-text">
            В случае невозвращения в условленный срок суммы кредита или суммы
            процентов за пользование заёмными средствами кредитор вынуждено
            начислит штраф за просрочку платежа. Большинство кредиторов идут на
            уступки и дают 3 дополнительных рабочих дня для оплаты. Они
            предусмотрены на случай, к примеру, если банковский перевод занял
            больше времени, чем обычно. Однако, в случае неполучения от Вас
            какой-либо реакции в течение продолжительного времени, будет
            начислен штраф за просрочку срока погашения размером в среднем 0,10%
            от первоначальной суммы для займов, 0,03% от суммы задолженности в
            среднем для потребительских кредитов и кредитных карт. При
            несоблюдении Вами условий по погашению кредитов и займов, данные о
            Вас могут быть переданы в реестр должников или БКИ, что негативно
            может сказаться на Вашей кредитной истории и рейтинге
            кредитоспособности. Рекомендуем Вам вносить платеж в день получения
            данных напоминаний. Погашая задолженность в срок, Вы формируете
            хорошую кредитную историю, что повышает Ваш рейтинг
            кредитоспособности и шансы в дальнейшем получить кредит на более
            выгодных условиях.
          </p>
        </div>
        <div class="footer-ending">
          <div class="footer-copy">
            <img
              class="copy-icon"
              src="@/assets/images/icon-18.svg"
              alt="18+"
            />
            <span class="copy-text"
              >Imoneys Сredit ©2015–2022 Все права на сайт защищены.</span
            >
          </div>
          <div class="footer-social">
            <div class="social-icons">
              <a href="#" class="social-link">
                <img src="@/assets/images/icon-social-1.svg" alt="social" />
              </a>
              <a href="#" class="social-link">
                <img src="@/assets/images/icon-social-2.svg" alt="social" />
              </a>
              <a href="#" class="social-link">
                <img src="@/assets/images/icon-social-3.svg" alt="social" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import VNavigation from "@/components/common/VNavigation.vue";
import VLogo from "@/components/common/VLogo.vue";
import CreditList from "@/components/footer/CreditList.vue";

export default {
  name: "footer-section",

  components: {
    VNavigation,
    CreditList,
    VLogo,
  },

  data() {
    return {
      pageHome: this.$router.options.history.location === "/",
    };
  },

  methods: {
    scrollById(id) {
      this.$emit("scrollTo", id);
    },
  },
};
</script>

<style lang="scss" scoped>
.footer {
  background-image: url("@/assets/images/footer-bg.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.footer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 116px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  @media (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
    padding: 30px 0;
  }
}

.footer-contacts {
  display: flex;
  align-items: center;

  @media (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
    margin-top: 20px;
  }
}

.contacts-mail {
  position: relative;
  padding-left: 32px;
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  color: #ffffff;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 22px;
    height: 15px;
    background-image: url("@/assets/images/letter-icon.svg");
    background-repeat: no-repeat;
    transition: all 0.3s;
  }

  @media (any-hover: hover) {
    &:hover {
      &::before {
        transform: rotate(-360deg);
      }
    }
  }
}

.contacts-phone {
  position: relative;
  padding-left: 29px;
  margin-left: 50px;
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
  color: #ffffff;

  &::before {
    content: "";
    position: absolute;
    top: 2px;
    left: 0;
    width: 19px;
    height: 19px;
    background-image: url("@/assets/images/phone-icon.svg");
    background-repeat: no-repeat;
    transition: all 0.3s;
  }

  @media (any-hover: hover) {
    &:hover {
      &::before {
        transform: rotate(-360deg);
      }
    }
  }

  @media (max-width: 767px) {
    margin-left: 0px;
    margin-top: 20px;
  }
}

.footer-header-nav {
  display: block;

  @media (max-width: 1160px) {
    display: none;
  }
}

.footer-nav {
  display: none;
  align-items: center;
  justify-content: center;
  min-height: 80px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  @media (max-width: 1160px) {
    display: flex;
  }
}

.footer-logo {
  @media (max-width: 480px) {
    margin-right: 0;
  }
}

.banks-cards {
  @media (min-width: 1080px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

.cards {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 25px 0;

  @media (min-width: 1080px) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }

  @media (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
  }
}

.cards-title {
  margin-right: 30px;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;

  @media (max-width: 767px) {
    margin-right: 0;
    margin-bottom: 30px;
  }
}

.cards-images {
  display: flex;
  align-items: flex-start;

  @media (min-width: 1080px) {
    margin-right: 80px;
  }
}

.agreement {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 33px 15px;
  border: 1px solid #ffffff;

  span {
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    color: #ffffff;
    text-align: center;
  }

  @media (min-width: 1080px) {
    flex: 0 1 100%;
  }
}

.agreement-link {
  color: #ffffff;
  text-decoration: underline;
  transition: color 0.3s;

  @media (any-hover: hover) {
    &:hover {
      color: #e9e9e9;
    }
  }
}

.terms {
  padding: 25px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.terms-title {
  margin-bottom: 25px;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  text-transform: uppercase;
  color: #ffffff;

  @media (max-width: 767px) {
    text-align: center;
  }
}

.terms-text {
  font-weight: 300;
  font-size: 13px;
  line-height: 15px;
  color: #ffffff;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
}

.footer-ending {
  display: flex;
  align-items: center;
  padding: 30px 0;

  @media (max-width: 992px) {
    flex-direction: column;
    justify-content: center;
  }
}

.footer-copy {
  display: flex;
  align-items: center;
  margin-right: auto;

  @media (max-width: 992px) {
    margin-right: 0;
    margin-bottom: 30px;
    text-align: center;
  }

  @media (max-width: 576px) {
    flex-direction: column;
    justify-content: center;
  }
}

.copy-icon {
  width: 45px;
  height: 45px;
}

.copy-text {
  margin-left: 28px;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;

  @media (max-width: 576px) {
    margin-left: 0;
    margin-top: 20px;
  }
}

.footer-social {
  display: flex;
  align-items: center;
}

.social-icons {
  display: flex;
  align-items: center;
}

.social-link {
  position: relative;
  width: 30px;
  height: 30px;
  transition: all 0.3s;

  @media (any-hover: hover) {
    &:hover {
      transform: translateY(-2px);
    }
  }

  &:not(:last-child) {
    margin-right: 46px;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      right: -20px;
      width: 1px;
      height: 100%;
      background-color: rgba(255, 255, 255, 0.2);
    }
  }

  @media (max-width: 576px) {
    &:not(:last-child) {
      margin-right: 16px;

      &::after {
        content: "";
        position: absolute;
        top: 0;
        right: -10px;
        width: 1px;
      }
    }
  }
}
</style>