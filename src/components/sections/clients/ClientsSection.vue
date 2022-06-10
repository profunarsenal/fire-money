<template>
  <section class="clients">
    <div class="container">
      <div class="clients-wrapper">
        <tittle-page class="clients-title" title="Наши клиенты" />
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
import TittlePage from "@/components/repeating-components/TittlePage.vue";
import ClientItem from "@/components/sections/clients/ClientItem.vue";

export default {
  components: {
    TittlePage,
    ClientItem,
  },

  data() {
    return {
      clients: [],
      clientsOverWidth: this.$store.getters["getClients"],
      clientsMaxWidth1040: this.$store.getters["getClients"].slice(0, 2),
      clientsMaxWidth767: this.$store.getters["getClients"].slice(0, 1),
    };
  },

  methods: {
    numberOfClientsPerWidth() {
      if (this.width <= 767) {
        this.clients = this.clientsMaxWidth767;
      } else if (this.width > 767 && this.width <= 1040) {
        this.clients = this.clientsMaxWidth1040;
      } else {
        this.clients = this.clientsOverWidth;
      }
    },
  },

  mounted() {
    this.numberOfClientsPerWidth();
  },

  watch: {
    width() {
      this.numberOfClientsPerWidth();
    },
  },

  props: ["width"],
};
</script>

<style lang="scss" scoped>
.clients {
  padding: 50px 0;
  background-image: url("@/assets/images/clients-bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media (max-width: 767.98px) {
    padding: 30px 0;
  }
}

.clients-title {
  margin-bottom: 36px;
  color: #fff;

  @media (max-width: 767.98px) {
    margin-bottom: 20px;
  }
}

.clients-items {
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
</style>