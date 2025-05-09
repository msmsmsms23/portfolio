<template>
  <nav class="fixed top-0 left-0 right-0 z-10 bg-white/60 backdrop-blur-sm shadow-sm py-4">
    <div class="container mx-auto flex justify-between items-center px-4">
      <div class="font-bold text-lg text-primaryColor-500 flex items-center gap-2">
        <span>
          Minseo
        </span>
      </div>
      <div class="flex items-center gap-4">
        <a href="#about" class="text-primaryColor-400 hover:text-primaryColor-600 transition-colors">{{ $t('about') }}</a>
        <a href="#portfolio" class="text-primaryColor-400 hover:text-primaryColor-600 transition-colors">{{ $t('portfolio') }}</a>
        <a href="#services" class="text-primaryColor-400 hover:text-primaryColor-600 transition-colors">{{ $t('services') }}</a>
        <a href="#contact" class="text-primaryColor-400 hover:text-primaryColor-600 transition-colors">{{ $t('contact') }}</a>
        <LanguageSwitcher />
      </div>
    </div>
  </nav>

  <div class="w-full relative">
    <div class="min-h-[60vh] relative flex items-center">
      <AnimatedBackground :particle-count="30" />
      <div class="absolute top-0 right-0 w-full md:w-1/2 h-full overflow-hidden">
        <div class="hero-shape"></div>
      </div>
      <div class="container mx-auto px-4 z-10">
        <div class="max-w-2xl">
          <h1 class="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primaryColor-500 to-primaryColor-700">
            {{ $t('home_main_title') }}
          </h1>
          <h2 class="text-xl md:text-2xl mb-8 text-gray-700">
            {{ $t('home_main_subtitle') }}
          </h2>
          <p class="text-lg mb-8 text-gray-600 max-w-lg">
            {{ $t('hero_description') }}
          </p>
          <div class="flex flex-wrap gap-4">
            <a href="#contact" class="inline-flex items-center gap-2 bg-primaryColor-500 hover:bg-primaryColor-600 text-white px-6 py-3 rounded-full font-medium transition-colors">
              {{ $t('lets_work_together') }}
              <UIcon name="i-heroicons-arrow-right" class="size-4" />
            </a>
            <a href="#portfolio" class="inline-flex items-center gap-2 border border-gray-300 hover:border-primaryColor-400 hover:bg-primaryColor-50 text-gray-700 px-6 py-3 rounded-full font-medium transition-colors">
              {{ $t('view_projects') }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container mx-auto px-4 pt-16 text-lg flex flex-col items-center">
    <div class="max-w-2xl text-center">
      <p class="leading-relaxed">
        {{ $t('home_main_description') }}
      </p>

      <p class="mt-6 leading-relaxed">
        {{ $t('home_main_description2') }}
      </p>
    </div>
  </div>

  <div id="about">
    <about-me/>
  </div>

  <div id="portfolio">
    <portfolio/>
  </div>

  <div id="services" class="py-16 w-full">
    <div class="container mx-auto px-4">
      <h2 class="text-center text-4xl font-bold text-primaryColor-500 mb-8">
        {{ $t('korean_services_title') }}
      </h2>

      <p class="text-center max-w-2xl mx-auto mb-10 text-gray-700">
        {{ $t('korean_services_intro') }}
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <div class="bg-white p-6 rounded-xl shadow-sm border-t-4 border-primaryColor-300 flex flex-col items-center text-center">
          <div class="bg-primaryColor-100 w-14 h-14 rounded-full flex items-center justify-center mb-3">
            <UIcon name="i-heroicons-credit-card" class="size-7 text-primaryColor-500" />
          </div>
          <h3 class="text-lg font-bold mb-2">{{ $t('korean_payment_title') }}</h3>
          <p class="text-sm text-gray-600">{{ $t('korean_payment_desc_personal') }}</p>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-sm border-t-4 border-primaryColor-300 flex flex-col items-center text-center">
          <div class="bg-primaryColor-100 w-14 h-14 rounded-full flex items-center justify-center mb-3">
            <UIcon name="i-heroicons-chat-bubble-left-right" class="size-7 text-primaryColor-500" />
          </div>
          <h3 class="text-lg font-bold mb-2">{{ $t('korean_chat_title') }}</h3>
          <p class="text-sm text-gray-600">{{ $t('korean_chat_desc_personal') }}</p>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-sm border-t-4 border-primaryColor-300 flex flex-col items-center text-center">
          <div class="bg-primaryColor-100 w-14 h-14 rounded-full flex items-center justify-center mb-3">
            <UIcon name="i-heroicons-map" class="size-7 text-primaryColor-500" />
          </div>
          <h3 class="text-lg font-bold mb-2">{{ $t('korean_maps_title') }}</h3>
          <p class="text-sm text-gray-600">{{ $t('korean_maps_desc_personal') }}</p>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-sm border-t-4 border-primaryColor-300 flex flex-col items-center text-center">
          <div class="bg-primaryColor-100 w-14 h-14 rounded-full flex items-center justify-center mb-3">
            <UIcon name="i-heroicons-lock-closed" class="size-7 text-primaryColor-500" />
          </div>
          <h3 class="text-lg font-bold mb-2">{{ $t('korean_auth_title') }}</h3>
          <p class="text-sm text-gray-600">{{ $t('korean_auth_desc_personal') }}</p>
        </div>
      </div>
    </div>
  </div>

  <div id="contact">
    <contact/>
  </div>

  <footer class="bg-primaryColor-800 text-white py-10 w-full">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row justify-between items-center gap-6">
        <div class="flex gap-4">
          <a href="https://github.com/msmsmsms23" target="_blank" class="bg-primaryColor-700 hover:bg-primaryColor-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
            <UIcon name="grommet-icons:github" class="size-5" />
          </a>
          <a href="mailto:me@msmscomet.dev" class="bg-primaryColor-700 hover:bg-primaryColor-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
            <UIcon name="i-heroicons-at-symbol" class="size-5" />
          </a>
        </div>
      </div>

      <div class="mt-6 pt-6 border-t border-primaryColor-700 text-center text-primaryColor-300">
        <p> {{ new Date().getFullYear() }} Minseo | {{ $t('footer_text') }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import AboutMe from "~/components/parts/about-me.vue";
import Portfolio from "~/components/parts/portfolio.vue";
import Contact from "~/components/parts/contact.vue";
import LanguageSwitcher from "~/components/i18n/LanguageSwitcher.vue";
import AnimatedBackground from "~/components/ui/AnimatedBackground.vue";

const { t } = useI18n();

watchEffect(() => {
  useHead({
    title: t('home_title'),
    meta: [
      { name: 'description', content: t('home_meta_desc') },
      { name: 'keywords', content: t('home_meta_keywords') },
      { property: 'og:title', content: t('home_title') },
      { property: 'og:description', content: t('home_meta_desc') },
      { property: 'og:type', content: 'website' },
    ],
  })
})
</script>

<style>
html {
  scroll-behavior: smooth;
}

body {
  background-color: #f9f7fa;
  color: #333;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.hero-shape {
  position: absolute;
  width: 90%;
  height: 140%;
  background-color: #7d5b8c20;
  border-radius: 71% 29% 65% 35% / 33% 56% 44% 67%;
  top: -20%;
  right: -20%;
  animation: combined 20s ease-in-out infinite;
  transform-origin: center;
}

@keyframes combined {
  0% {
    border-radius: 71% 29% 65% 35% / 33% 56% 44% 67%;
    transform: translate(0, 0) scale(1);
  }
  25% {
    border-radius: 40% 60% 30% 70% / 50% 60% 40% 50%;
    transform: translate(1%, 1%) scale(1.02);
  }
  50% {
    border-radius: 67% 33% 52% 48% / 68% 31% 69% 32%;
    transform: translate(0, 2%) scale(1.01);
  }
  75% {
    border-radius: 29% 71% 58% 42% / 34% 44% 56% 66%;
    transform: translate(-1%, 1%) scale(1.02);
  }
  100% {
    border-radius: 71% 29% 65% 35% / 33% 56% 44% 67%;
    transform: translate(0, 0) scale(1);
  }
}

</style>
