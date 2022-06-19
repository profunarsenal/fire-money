<template>
  <main class="main">
    <div class="action">
      <div class="container">
        <div class="action-wrapper">
          <v-title title="Для получения займа под 0%*">
            <span class="action-subtitle">Заполните заявку</span>
          </v-title>
          <div class="action-form">
            <p class="action-message">
              Поторопитесь, до окончания акционного предложения осталось
            </p>
            <div class="action-timer">
              <action-timer />
            </div>
            <action-suggestions />
            <user-form />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import VTitle from "@/components/common/VTitle.vue";
import ActionTimer from "@/components/blocks/ActionTimer.vue";
import ActionSuggestions from "@/components/blocks/ActionSuggestions.vue";
import UserForm from "@/components/blocks/UserForm.vue";

export default {
  name: "action",

  components: {
    VTitle,
    ActionTimer,
    ActionSuggestions,
    UserForm,
  },
};
</script>

<style lang="scss" scoped>
.action {
  background-image: url("@/assets/images/page-bg.png");
  background-size: cover;
  background-position: center;
}

.action-wrapper {
  padding: 122px 0 70px;
}

.action-subtitle {
  display: block;
  color: #ff7b00;
}

.action-form {
  padding: 38px;
  margin-top: 32px;
  box-shadow: 0px 4px 44px rgba(130, 141, 150, 0.15);
  background: #fff;
  border-radius: 22px;

  @media (max-width: 576px) {
    padding: 20px;
  }
}

.action-message {
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #45515f;
}

.action-timer {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}
</style>