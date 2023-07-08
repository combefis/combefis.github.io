<script setup lang="ts">
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

defineProps<{
  images: {
    image: {
      src: string;
      width: number;
      height: number;
      alt: string;
    };
    caption: string;
  }[];
}>();
</script>

<template>
  <Carousel :wrap-around="true">
    <Slide v-for="({ image, caption }, i) in images" :key="i">
      <div class="carousel__item">
        <img v-bind="image" /><br /><small>{{ caption }}</small>
      </div>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<style scoped>
.carousel__item {
  text-align: center;
}
.carousel__item > img {
  border-radius: 5px;
  margin: auto;
}

:deep(.carousel__slide) {
  padding: 0 10px;
}
:deep(.carousel__pagination) {
  list-style: none;
  margin: 10px 0;
}
:deep(.carousel__pagination-item) {
  margin-top: 0!important;
}
:deep(.carousel__prev) {
  left: -10px;
  top: 45%;
}
:deep(.carousel__next) {
  right: -10px;
  top: 45%;
}
</style>
