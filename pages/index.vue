<script setup>
import Skills from "~/components/parts/skills.vue";
import Portfolio from "~/components/parts/portfolio.vue";
import Contact from "~/components/parts/contact.vue";
import AnimatedBackground from "~/components/ui/AnimatedBackground.vue";
import AboutMe from "~/components/parts/about-me.vue";

const achievements = [
  {
    icon: "i-heroicons-star",
    period: "2022.12 – 2023.08",
    title: "K-digital 지능형 블록체인 웹 개발자 양성과정 수료",
    desc: "다양한 팀 프로젝트 수행",
  },
  {
    icon: "i-heroicons-hand-thumb-up",
    period: "2023.07 – 2023.09",
    title: "「대학생이 간다」 공모전 우수상",
    desc: "노인을 위한 스마트폰 교육 및 퍼즐 게임 웹사이트 제작",
  },
  {
    icon: "i-heroicons-briefcase",
    period: "2023.10 – 2024.06",
    title: "국민연금공단 프로젝트 참여",
    desc: "SI 회사 재직 중 프로젝트 참여",
  },
  {
    icon: "i-heroicons-academic-cap",
    period: "2019.02 – 2024.02",
    title: "4년제 대학 컴퓨터공학 학사",
    desc: "",
  },
  {
    icon: "i-heroicons-globe-asia-australia",
    period: "2025.07",
    title: "미국 워싱턴대학교 연수",
    desc: "「경기 청년 사다리 프로그램」으로 워싱턴대학교 3주 어학 연수",
  },
  {
    icon: "i-heroicons-document-check",
    period: "2025.12",
    title: "정보처리기사 자격증 취득",
    desc: "",
  },
];

watchEffect(() => {
  useHead({
    title: "Minseo Kim | Frontend Developer",
    meta: [
      { name: "description", content: "김민서의 포트폴리오" },
      { name: "keywords", content: "프론트엔드 개발자, Vue, Nuxt, JavaScript" },
      { property: "og:title", content: "Minseo Kim | Frontend Developer" },
      { property: "og:description", content: "김민서의 포트폴리오" },
      { property: "og:type", content: "website" },
    ],
  });
});
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 z-10 bg-white/60 backdrop-blur-sm shadow-sm py-4">
    <div class="container mx-auto flex justify-between items-center px-4">
      <div class="font-bold text-lg text-primaryColor-500">
        Minseo Kim
      </div>
      <div class="flex items-center gap-4">
        <a href="#skills" class="text-primaryColor-400 hover:text-primaryColor-600 transition-colors text-sm">Skills</a>
        <a href="#about" class="text-primaryColor-400 hover:text-primaryColor-600 transition-colors text-sm">About</a>
        <a href="#portfolio" class="text-primaryColor-400 hover:text-primaryColor-600 transition-colors text-sm">Portfolio</a>
        <a href="#achievements" class="text-primaryColor-400 hover:text-primaryColor-600 transition-colors text-sm">Achievements</a>
        <a href="#contact" class="text-primaryColor-400 hover:text-primaryColor-600 transition-colors text-sm">Contact</a>
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
          <h1 class="text-4xl font-bold mb-4 bg-clip-text bg-gradient-to-r from-primaryColor-500 to-primaryColor-700">
            안녕하세요, 신입 개발자 김민서입니다.
          </h1>
          <h2 class="text-xl md:text-2xl mb-6 text-gray-700">
            제 포트폴리오 사이트에 오신 것을 환영합니다. 👋
          </h2>
          <p class="text-base mb-8 text-gray-500 max-w-lg leading-relaxed">
            사용자의 불편함에서 코드를 시작하고, 효율적인 설계로 마침표를 찍는 개발자입니다.
          </p>
          <div class="flex flex-wrap gap-3">
            <a href="#contact" class="inline-flex items-center gap-2 bg-primaryColor-500 hover:bg-primaryColor-600 text-white px-6 py-3 rounded-full text-sm font-medium transition-colors">
              연락처
              <UIcon name="i-heroicons-arrow-right" class="size-4" />
            </a>
            <a href="#portfolio" class="inline-flex items-center gap-2 border border-gray-300 hover:border-primaryColor-400 hover:bg-primaryColor-50 text-gray-700 px-6 py-3 rounded-full text-sm font-medium transition-colors">
              프로젝트 보기
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container mx-auto px-4 py-16">
    <div class="max-w-3xl mx-auto">
      <div class="intro-card">
        <p class="intro-para">
          컴퓨터 작동 원리와 소프트웨어 구조에 대한 호기심으로 시작해, 기술을 직접 탐구하며 성장해 온 개발자입니다.
        </p>
        <p class="intro-para">
          SI 회사에서 JavaScript와 C++로 실제 서비스를 개발하며 실무 감각을 쌓았고, 현재는 Vue.js / Nuxt.js를 중심으로 사용자 중심의 반응형 웹 서비스를 설계·구현하는 데 집중하고 있습니다.
        </p>
        <p class="intro-para">
          코드를 작성하는 것을 넘어, 사용자가 실제로 체감할 수 있는 경험을 만드는 개발자를 목표로 합니다.
        </p>
      </div>
    </div>
  </div>

  <div id="skills"><Skills /></div>
  <div id="about"><AboutMe /></div>
  <div id="portfolio"><Portfolio /></div>

  <div id="achievements" class="py-16 w-full">
    <div class="container mx-auto px-4">
      <h2 class="text-center text-4xl font-bold text-primaryColor-500 mb-12">
        Achievements
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        <div
            v-for="item in achievements"
            :key="item.title"
            class="achievement-card"
        >
          <div class="achievement-icon-wrap">
            <UIcon :name="item.icon" class="size-6 text-primaryColor-500" />
          </div>
          <div class="achievement-period">{{ item.period }}</div>
          <div class="achievement-title">{{ item.title }}</div>
          <div v-if="item.desc" class="achievement-desc">{{ item.desc }}</div>
        </div>
      </div>
    </div>
  </div>

  <div id="contact"><Contact /></div>

  <footer class="bg-primaryColor-800 text-white py-10 w-full">
    <div class="container mx-auto px-4">
      <div class="flex gap-4">
        <a href="https://github.com/msmsmsms23" target="_blank" class="bg-primaryColor-700 hover:bg-primaryColor-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
          <UIcon name="grommet-icons:github" class="size-5" />
        </a>
        <a href="mailto:kms326464@naver.com" class="bg-primaryColor-700 hover:bg-primaryColor-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
          <UIcon name="i-heroicons-at-symbol" class="size-5" />
        </a>
      </div>
      <div class="mt-6 pt-6 border-t border-primaryColor-700 text-center text-primaryColor-300 text-sm">
        © {{ new Date().getFullYear() }} Minseo Kim · All rights reserved
      </div>
    </div>
  </footer>
</template>

<style>
html { scroll-behavior: smooth; }

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
  0%   { border-radius: 71% 29% 65% 35% / 33% 56% 44% 67%; transform: translate(0,0) scale(1); }
  25%  { border-radius: 40% 60% 30% 70% / 50% 60% 40% 50%; transform: translate(1%,1%) scale(1.02); }
  50%  { border-radius: 67% 33% 52% 48% / 68% 31% 69% 32%; transform: translate(0,2%) scale(1.01); }
  75%  { border-radius: 29% 71% 58% 42% / 34% 44% 56% 66%; transform: translate(-1%,1%) scale(1.02); }
  100% { border-radius: 71% 29% 65% 35% / 33% 56% 44% 67%; transform: translate(0,0) scale(1); }
}

.intro-card {
  background: white;
  border-radius: 16px;
  border: 1px solid #ede9f0;
  padding: 28px 32px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.intro-para {
  font-size: 15px;
  color: #555;
  line-height: 1.8;
}

.achievement-card {
  background: white;
  border-radius: 16px;
  border: 1px solid #ede9f0;
  padding: 20px 22px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  transition: box-shadow 0.25s;
}
.achievement-card:hover {
  box-shadow: 0 4px 20px rgba(125, 91, 140, 0.09);
}
.achievement-icon-wrap {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #f0ebf7;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 4px;
}
.achievement-period {
  font-size: 11px;
  color: #aaa;
  font-style: italic;
}
.achievement-title {
  font-size: 14px;
  font-weight: 700;
  color: #4a3660;
  line-height: 1.5;
}
.achievement-desc {
  font-size: 12px;
  color: #888;
  line-height: 1.5;
}
</style>