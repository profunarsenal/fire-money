<template>
  <div
    class="clients-item"
    :class="{
      'clients-item--refusal': client.status === 'refusal',
      'clients-item--success': client.status === 'success',
      'clients-item--return': client.status === 'return',
    }"
  >
    <h6 class="clients-name">{{ client.user }}</h6>
    <div class="clients-status">{{ client.message }}</div>
    <div class="clients-location">{{ client.city }}</div>
  </div>
</template>

<script>
export default {
  name: "client-item",

  props: {
    client: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.clients-item {
  position: relative;
  flex: 0 1 33%;
  padding: 26px 26px 26px 76px;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0px 4px 44px rgba(84, 104, 123, 0.05);
  border-radius: 22px;
  cursor: grab;

  &:not(:last-child) {
    margin-right: 26px;
  }

  @media (max-width: 992px) {
    &:not(:last-child) {
      margin-right: 16px;
    }
  }

  @media (max-width: 1198px) {
    flex: 0 1 40%;
  }

  @media (max-width: 767px) {
    flex: 0 1 80%;
  }

  @media (max-width: 576px) {
    flex: 0 1 100%;
  }
}

.clients-item--refusal {
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 25px;
    width: 30px;
    height: 30px;
    background-image: url("@/assets/images/cross-icon.svg");
    background-repeat: no-repeat;
    transform: translateY(-50%);
  }
}

.clients-item--success {
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 25px;
    width: 30px;
    height: 30px;
    background-image: url("@/assets/images/plus-icon.svg");
    background-repeat: no-repeat;
    transform: translateY(-50%);
  }
}

.clients-item--return {
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 25px;
    width: 30px;
    height: 30px;
    background-image: url("@/assets/images/download-icon.svg");
    background-repeat: no-repeat;
    transform: translateY(-50%);
  }
}

.clients-name {
  margin-bottom: 6px;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #45515f;
}

.clients-status {
  margin-bottom: 8px;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  color: #536473;
  white-space: nowrap;

  @media (max-width: 576px) {
    font-size: 14px;
    line-height: 16px;
  }
}

.clients-location {
  position: relative;
  padding-left: 20px;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: #93a0ab;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 12px;
    height: 16px;
    background-image: url("@/assets/images/location.svg");
    background-repeat: no-repeat;
  }

  @media (max-width: 576px) {
    font-size: 13px;
    line-height: 16px;
  }
}
</style>