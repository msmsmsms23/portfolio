<template>
  <div class="container mx-auto px-4 py-16">
    <h2 class="text-center text-4xl font-bold text-primaryColor-500 mb-12">
      {{ $t('portfolio_title') }}
    </h2>

    <div class="grid grid-cols-1 gap-16">
      <portfolio-item
        v-for="(item, index) in portfolioItems"
        :key="index"
        :title="item.title"
        :code-url="item.codeUrl"
        :images="item.images">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 class="text-xl font-semibold mb-3 text-primaryColor-400">
              {{ $t('features') }}
            </h4>
            <div class="space-y-2">
              <div v-for="(feature, featureIdx) in item.features" :key="featureIdx" class="flex items-center gap-2 bg-primaryColor-50 p-2 pl-3 rounded-lg">
                <div class="w-1.5 h-1.5 bg-primaryColor-400 rounded-full"></div>
                <span class="text-sm">{{ $t(feature) }}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 class="text-xl font-semibold mb-3 text-primaryColor-400">
              {{ $t('tech_stack') }}
            </h4>
            <div class="flex flex-wrap gap-2">
              <span v-for="(tech, techIdx) in item.techStack" :key="techIdx" class="bg-primaryColor-100 text-primaryColor-600 px-3 py-1 rounded-full text-xs font-medium">
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </portfolio-item>
    </div>
  </div>
</template>

<script setup>
import PortfolioItem from "~/components/parts/portfolio-item.vue";

const portfolioItems = [
  {
    title: "Real time chat",
    codeUrl: "https://github.com/msmsmsms23/real-time-chat",
    images: [
      "/screenshot/real-time-chat.png",
      "/screenshot/real-time-chat.png" // TODO add more images :)
    ],
    features: [
      'second_portfolio_first_feature',
      'second_portfolio_second_feature',
      'second_portfolio_third_feature',
      'second_portfolio_fourth_feature'
    ],
    techStack: ['Vue 3', 'Nuxt', 'Pinia', 'Websockets', 'Redis', 'PostgreSQL', 'Tailwind', 'Mailgun']
  },
  {
    title: "Instagram clone",
    codeUrl: "https://github.com/msmsmsms23/instagram-clone",
    images: [
      "/screenshot/instagram-clone.png",
      "/screenshot/instagram-clone.png" // TODO add more images :)
    ],
    features: [
      'first_portfolio_first_feature',
      'first_portfolio_second_feature',
      'first_portfolio_third_feature',
      'first_portfolio_fourth_feature'
    ],
    techStack: ['Vue 3', 'Nuxt', 'Pinia', 'Redis', 'PostgreSQL', 'Tailwind', 'Mailgun']
  }
];
</script>

<style scoped>
</style>
