<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-wrapper">
        <div class="footer-header">
          <logo-component />
          <navigation-component />
          <div class="footer-contacts">
            <a href="mailto: Kustohelp@gmail.com" class="contacts-mail">
              Kustohelp@gmail.com
            </a>
            <a href="tel: +78008080080" class="contacts-phone"
              >8 800 808-00-80</a
            >
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import LogoComponent from "@/components/LogoComponent.vue";
import NavigationComponent from "@/components/NavigationComponent.vue";

export default {
  components: {
    LogoComponent,
    NavigationComponent,
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
}

.footer-contacts {
  display: flex;
  align-items: center;
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
  }
}
</style>