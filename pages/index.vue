<template>
  <nav class="fixed top-0 left-0 right-0 z-10 bg-white/60 backdrop-blur-sm shadow-sm py-4">
    <div class="container mx-auto flex justify-between items-center px-4">
      <div class="font-bold text-lg text-primaryColor-500 flex items-center gap-2">
        <span>
          Minseo Kim
        </span>
      </div>
      <div class="flex items-center gap-4">
        <a href="#skills" class="text-primaryColor-400 hover:text-primaryColor-600 transition-colors">Skills</a>
        <a href="#about" class="text-primaryColor-400 hover:text-primaryColor-600 transition-colors">About</a>
        <a href="#portfolio" class="text-primaryColor-400 hover:text-primaryColor-600 transition-colors">Portfolio</a>
        <a href="#achievements" class="text-primaryColor-400 hover:text-primaryColor-600 transition-colors">Achievements</a>
        <a href="#contact" class="text-primaryColor-400 hover:text-primaryColor-600 transition-colors">Contact</a>
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
          <h1 class="text-4xl md:text-4xl font-bold mb-4 bg-clip-text bg-gradient-to-r from-primaryColor-500 to-primaryColor-700">
            안녕하세요, 신입 개발자 김민서입니다.
          </h1>
          <h2 class="text-xl md:text-2xl mb-8 text-gray-700">
            제 포트폴리오 사이트에 오신 것을 환영합니다. 👋
          </h2>
          <p class="text-lg mb-8 text-gray-600 max-w-lg">
           저는 새로운 발견을 즐기는 풀스택 개발자입니다.
          </p>
          <div class="flex flex-wrap gap-4">
            <a href="#contact" class="inline-flex items-center gap-2 bg-primaryColor-500 hover:bg-primaryColor-600 text-white px-6 py-3 rounded-full font-medium transition-colors">
              연락처
              <UIcon name="i-heroicons-arrow-right" class="size-4" />
            </a>
            <a href="#portfolio" class="inline-flex items-center gap-2 border border-gray-300 hover:border-primaryColor-400 hover:bg-primaryColor-50 text-gray-700 px-6 py-3 rounded-full font-medium transition-colors">
              프로젝트
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container mx-auto px-4 pt-16 text-lg flex flex-col items-center">
    <div class="max-w-2xl text-center">
      <p class="leading-relaxed">
        대학교 졸업 전 SI 회사에서 Javascript와 C++을 이용하여 개발한 경험이 있습니다.
      </p>

      <p class="mt-6 leading-relaxed">
        어렸을 적부터 컴퓨터 작동 원리에 관심이 많았고, 스마트폰 애플리케이션의 내부를 탐구하는 것을 즐겼습니다. 그러한 프로그램들을 직접 만들어 보고 싶다는 열망이 저로 하여금 개발자라는 꿈을 키우게 했습니다.
      </p>

      <p class="mt-6 leading-relaxed">
        현재 Vue.js, Nuxt.js, 그리고 최신 JavaScript 기술을 중심으로 웹 개발을 학습하고 있으며, 사용자 중심적인 반응형 웹 서비스를 만드는 데 집중하고 있습니다.
      </p>
    </div>
  </div>

  <div id="skills">
    <skills/>
  </div>

  <div id="about">
    <about-me/>
  </div>

  <div id="portfolio">
    <portfolio/>
  </div>

  <div id="achievements" class="py-16 w-full">
    <div class="container mx-auto px-4">
      <h2 class="text-center text-4xl font-bold text-primaryColor-500 mb-8">
        Achievements
      </h2>

      <div class="grid grid-cols-1 mt-10 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <div class="bg-white p-6 rounded-xl shadow-sm border-t-4 border-primaryColor-300 flex flex-col items-center text-center">
          <div class="bg-primaryColor-100 w-14 h-14 rounded-full flex items-center justify-center mb-3">
            <UIcon name="i-heroicons-star" class="size-7 text-primaryColor-500" />
          </div>
          <p class="text-primaryColor-200 italic">
            2022. 12 ~ 2023. 08
          </p>
          <h3 class="text-lg font-bold mb-2 mt-1">K-digital 지능형 블록체인 웹 개발자 양성과정 수료</h3>
          <p class="text-sm text-gray-600">8개월 간 여러 팀 프로젝트 수행</p>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-sm border-t-4 border-primaryColor-300 flex flex-col items-center text-center">
          <div class="bg-primaryColor-100 w-14 h-14 rounded-full flex items-center justify-center mb-3">
            <UIcon name="i-heroicons-hand-thumb-up" class="size-7 text-primaryColor-500" />
          </div>
          <p class="text-primaryColor-200 italic">
            2023. 07 ~ 2023. 09
          </p>
          <h3 class="text-lg font-bold mb-2 mt-1">「대학생이 간다」 공모전 우수상</h3>
          <p class="text-sm text-gray-600">노인들을 위한 스마트폰 교육 및 퍼즐 게임 웹 사이트 제작</p>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-sm border-t-4 border-primaryColor-300 flex flex-col items-center text-center">
          <div class="bg-primaryColor-100 w-14 h-14 rounded-full flex items-center justify-center mb-3">
            <UIcon name="i-heroicons-briefcase" class="size-7 text-primaryColor-500" />
          </div>
          <p class="text-primaryColor-200 italic">
            2023. 10 ~ 2024. 06
          </p>
          <h3 class="text-lg font-bold mb-2 mt-1">국민연금공단 프로젝트 참여</h3>
          <p class="text-sm text-gray-600">SI 회사 재직 중 프로젝트 참여</p>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-sm border-t-4 border-primaryColor-300 flex flex-col items-center text-center">
          <div class="bg-primaryColor-100 w-14 h-14 rounded-full flex items-center justify-center mb-3">
            <UIcon name="i-heroicons-academic-cap" class="size-7 text-primaryColor-500" />
          </div>
          <p class="text-primaryColor-200 italic">
            2019. 02 ~ 2024. 02
          </p>
          <h3 class="text-lg font-bold mb-2 mt-1">백석대학교 컴퓨터공학부 정보보호학전공 학사</h3>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-sm border-t-4 border-primaryColor-300 flex flex-col items-center text-center">
          <div class="bg-primaryColor-100 w-14 h-14 rounded-full flex items-center justify-center mb-3">
            <UIcon name="i-heroicons-globe-asia-australia" class="size-7 text-primaryColor-500" />
          </div>
          <p class="text-primaryColor-200 italic">
            2025. 07
          </p>
          <h3 class="text-lg font-bold mb-2 mt-1">미국 워싱턴대학교 연수</h3>
          <p class="text-sm text-gray-600">「경기 청년 사다리 프로그램」을 통해 미국의 워싱턴대학교에서 3주 간 어학 연수</p>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-sm border-t-4 border-primaryColor-300 flex flex-col items-center text-center">
          <div class="bg-primaryColor-100 w-14 h-14 rounded-full flex items-center justify-center mb-3">
            <UIcon name="i-heroicons-user-circle" class="size-7 text-primaryColor-500" />
          </div>
          <p class="text-primaryColor-200 italic">
            2025. 12
          </p>
          <h3 class="text-lg font-bold mb-2 mt-1">정보처리기사 자격증 취득</h3>
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
        <p> {{ new Date().getFullYear() }} Minseo | All rights reserved</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import Skills from "~/components/parts/skills.vue";
import Portfolio from "~/components/parts/portfolio.vue";
import Contact from "~/components/parts/contact.vue";
import AnimatedBackground from "~/components/ui/AnimatedBackground.vue";
import AboutMe from "~/components/parts/about-me.vue";

const { t } = useI18n();

watchEffect(() => {
  useHead({
    title: "Full-stack Web developer | Nuxt | Vue | JS",
    meta: [
      { name: 'description', content: "김민서의 포트폴리오" },
      { name: 'keywords', content: "풀스택 개발자" },
      { property: 'og:title', content: "Full-stack Web developer | Nuxt | Vue | JS" },
      { property: 'og:description', content: "김민서의 포트폴리오" },
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
