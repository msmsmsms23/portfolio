<template>
  <div class="container mx-auto px-4 py-16">
    <h2 class="text-center text-4xl font-bold text-primaryColor-500 mb-12">
      Portfolio
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
              기능
            </h4>
            <div class="space-y-2">
              <div v-for="(feature, featureIdx) in item.features" :key="featureIdx" class="flex items-center gap-2 bg-primaryColor-50 p-2 pl-3 rounded-lg">
                <div class="w-1.5 h-1.5 bg-primaryColor-400 rounded-full"></div>
                <span class="text-sm">{{ feature }}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 class="text-xl font-semibold mb-3 text-primaryColor-400">
              기술 및 도구
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
    <div class="mt-10 mx-auto px-4 text-lg flex flex-col items-center">
      그 외 다른 프로젝트들은 저의 GitHub에서 확인하실 수 있습니다.
    </div>
  </div>
</template>

<script setup>
import PortfolioItem from "~/components/parts/portfolio-item.vue";

const portfolioItems = [
  {
    title: "실시간 채팅 프로그램",
    codeUrl: "https://github.com/msmsmsms23/real-time-chat",
    images: [
      "/images/real-time-chat.png",
      "/images/real-time-chat2.png"
    ],
    features: [
      '사용자 간 실시간 채팅',
      '각 메시지에 대한 이모지 반응',
      '이메일 알림',
      '공개 및 개인 채팅방 설정',
      '한국어/영어 지원'
    ],
    techStack: ['Vue 3', 'Nuxt', 'Pinia', 'Websockets', 'Redis', 'PostgreSQL', 'Tailwind', 'Mailgun']
  },
  {
    title: "Instagram clone",
    codeUrl: "https://github.com/msmsmsms23/instagram-clone",
    images: [
      "/images/instagram-clone.png",
      "/images/instagram-clone2.png",
      "/images/instagram-clone3.png",
      "/images/instagram-clone4.png"
    ],
    features: [
      '사진 게시 및 열람',
      '댓글',
      '유저 간 팔로우/언팔로우',
      '구독 및 이메일 알림',
      '게시글 검색'
    ],
    techStack: ['Vue 3', 'Nuxt', 'Pinia', 'Redis', 'PostgreSQL', 'Tailwind', 'Mailgun']
  },
  {
    title: "퍼즐 게임",
    codeUrl: "https://github.com/msmsmsms23/puzzle",
    images: [
      "/images/puzzle.png",
      "/images/puzzle2.png",
      "/images/puzzle3.png",
    ],
    features: [
      '마을 어르신들이 직접 찍으신 사진을 업로드해 만든 퍼즐 게임',
      '드래그 혹은 클릭으로 퍼즐 조각을 맞추는 형식',
      '모바일 화면 최적화',
      '피드백을 통해 선택한 퍼즐 조각의 가시성 높임(빨간 테두리)'
    ],
    techStack: ['HTML', 'CSS', 'Javascript', 'jQuery']
  },
  {
    title: "감정 분석 일기",
    codeUrl: "https://github.com/msmsmsms23/ASK_BURY",
    images: [
      "/images/ask-bury.png",
      "/images/ask-bury2.png",
    ],
    features: [
      '일기 작성',
      'CLOVA Sentiment API를 통한 글의 감정 분석',
      '특정 단어 포함 시 그에 맞는 명언 표시',
      '특정 개수의 일기 작성 시 열람 가능'
    ],
    techStack: ['HTML', 'CSS', 'Node.js', 'Javascript', 'Open API']
  },
];
</script>

<style scoped>
</style>
