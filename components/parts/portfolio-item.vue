<template>
  <div class="portfolio-item overflow-hidden bg-white rounded-xl shadow-md">
    <div class="flex flex-col md:flex-row">
      <div class="relative w-full md:w-1/3 overflow-hidden">
        <Carousel :settings="carouselSettings" :breakpoints="carouselBreakpoints">
          <Slide v-for="(img, index) in images" :key="index">
            <div class="carousel-slide">
              <img
                class="carousel-image"
                :src="img"
                :alt="props.title"
                preload
                placeholder
                format="webp"
              />
            </div>
          </Slide>

          <template #addons>
            <Navigation />
          </template>
        </Carousel>
      </div>

      <div class="p-6 flex flex-col grow relative">
        <h3 class="text-2xl font-bold text-primaryColor-500 mb-4">
          {{ props.title }}
        </h3>

        <div class="grow">
          <slot/>
        </div>

        <div v-if="codeUrl || liveUrl" class="mt-6 flex flex-wrap gap-3">
          <UButton
            v-if="codeUrl"
            :to="props.codeUrl"
            target="_blank"
            color="blue"
            size="sm"
            class="flex items-center gap-2"
          >
            <UIcon name="grommet-icons:github" class="size-4" />
            <span>{{ $t('see_code') }}</span>
          </UButton>

          <UButton
            v-if="liveUrl"
            :to="props.liveUrl"
            target="_blank"
            color="green"
            size="sm"
            class="flex items-center gap-2"
          >
            <UIcon name="i-heroicons-globe-alt" class="size-4" />
            <span>{{ $t('see_live') }}</span>
          </UButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Carousel, Navigation, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import { computed } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  codeUrl: {
    type: String,
    default: ''
  },
  liveUrl: {
    type: String,
    default: ''
  },
  images: {
    type: Array,
    default: () => []
  }
});

const carouselSettings = {
  itemsToShow: 1,
  snapAlign: 'center',
  wrapAround: true,
  autoplay: 3000
};

const carouselBreakpoints = {
  1024: {
    itemsToShow: 1,
    snapAlign: 'center',
  }
};

</script>

<style scoped>
  .portfolio-item {
    background-color: #fff;
  }

  .carousel {
    height: 100%;
  }

  :deep(.carousel__prev),
  :deep(.carousel__next) {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    width: 30px;
    height: 30px;
    color: white;
  }

  :deep(.carousel__prev) {
    left: 10px;
  }

  :deep(.carousel__next) {
    right: 10px;
  }

  :deep(.carousel__pagination) {
    z-index: 1;
    position: relative;
  }

  :deep(.carousel__pagination-button) {
    background-color: rgba(255, 255, 255, 0.5);
  }

  :deep(.carousel__pagination-button--active) {
    background-color: white;
  }
</style>
