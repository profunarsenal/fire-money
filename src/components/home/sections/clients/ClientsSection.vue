<template>
  <section class="clients">
    <div class="container">
      <div class="clients-wrapper">
        <v-title class="clients-title" title="Наши клиенты" />
        <div class="clients-items">
          <swiper
            :autoplay="{
              delay: 2500,
              disableOnInteraction: false,
            }"
            :slides-per-view="1"
            :loop="true"
            :space-between="30"
            :modules="modules"
            :breakpoints="{
              '800': {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              '1240': {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }"
          >
            <swiper-slide v-for="client in clients" :key="client.id">
              <client-item :client="client" />
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ClientItem from "@/components/home/sections/clients/ClientItem.vue";
import VTitle from "@/components/common/VTitle.vue";
import SwiperClass, { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css";
import "swiper/css/pagination";

export default {
  name: "client-section",

  components: {
    ClientItem,
    VTitle,
    Swiper,
    SwiperSlide,
  },

  setup() {
    return {
      modules: [Pagination, Autoplay],
    };
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