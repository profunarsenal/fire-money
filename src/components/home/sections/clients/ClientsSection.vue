<template>
  <section class="clients">
    <div class="container">
      <div class="clients-wrapper">
        <v-title class="clients-title" title="Наши клиенты" />
        <div class="clients-items">
          <client-item
            v-for="client in clients"
            :key="client.id"
            :client="client"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ClientItem from "@/components/home/sections/clients/ClientItem.vue";
import VTitle from "@/components/common/VTitle.vue";

export default {
  name: "client-section",

  components: {
    ClientItem,
    VTitle,
  },

  computed: {
    clients() {
      return this.$store.getters["getClients"];
    },
  },
};
</script>

<style lang="scss" scoped>
.clients {
  padding: 50px 0;
  background-image: url("@/assets/images/clients-bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media (max-width: 767px) {
    padding: 30px 0;
  }
}

.clients-title {
  margin-bottom: 36px;
  color: #fff;

  @media (max-width: 767px) {
    margin-bottom: 20px;
  }
}

.clients-items {
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
</style>