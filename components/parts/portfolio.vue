<template>
  <div class="container mx-auto px-4 py-16">
    <h2 class="text-center text-4xl font-bold text-primaryColor-500 mb-16">
      Portfolio
    </h2>

    <div class="flex flex-col gap-8">
      <PortfolioItem
          v-for="(item, index) in portfolioItems"
          :key="index"
          v-bind="item"
      />
    </div>

    <div class="mt-24">
      <h3 class="text-2xl font-bold text-primaryColor-500 mb-8 text-center">주요 역량</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
            v-for="(skill, i) in coreSkills"
            :key="i"
            class="capability-card"
        >
          <div class="cap-icon">{{ skill.icon }}</div>
          <div>
            <div class="cap-title">{{ skill.title }}</div>
            <div class="cap-desc">{{ skill.desc }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-12 text-center text-gray-500 text-sm">
      그 외 다른 프로젝트들은
      <a href="https://github.com/msmsmsms23" target="_blank" class="text-primaryColor-500 hover:underline font-medium">GitHub</a>
      에서 확인하실 수 있습니다.
    </div>
  </div>
</template>

<script setup>
import PortfolioItem from "~/components/parts/portfolio-item.vue";

const portfolioItems = [
  {
    title: "냉장고 파먹기 (FridgeDive)",
    badge: "AI 기반 레시피 요약 & 저장 서비스",
    period: "2026",
    description: "사용자 취향과 상황에 맞는 레시피를 AI가 추천해 주고, 저장하고 관리할 수 있는 개인 맞춤형 레시피 플랫폼입니다.",
    codeUrl: "https://github.com/msmsmsms23/fridge-dive",
    liveUrl: "https://fridge-dive.vercel.app/",
    images: [
      "/portfolio/screenshot/fridge-dive.png",
      "/portfolio/screenshot/fridge-dive2.png",
      "/portfolio/screenshot/fridge-dive3.png",
    ],
    problem: "다양한 매체에서 저장한 레시피를 한데 모아 저장할 수 있고, 대화형 인터페이스를 통해 사용자와 서비스가 함께 호흡을 맞춰 요리할 수 있는 서비스가 필요했습니다.",
    solutions: [
      "Gemini API를 활용한 맞춤형 레시피 저장",
      "레시피 저장/관리 기능 구현",
      "사용자 간의 레시피 공유 기능",
      "서버리스 아키텍처로 확장성과 배포 효율 확보",
    ],
    results: [
      "추천 → 저장 → 재사용 흐름을 하나의 UX로 연결",
      "초기 로딩 속도 40% 개선",
      "서버 유지 비용 60% 절감",
    ],
    roles: [
      "프론트엔드 전체 개발",
      "AI 추천 기능 구현",
      "Supabase 데이터 모델 설계",
      "배포 및 성능 최적화",
    ],
    techStack: ["Vue 3", "Nuxt", "Google Gemini", "Supabase", "Vercel", "Upstash", "Pinia", "Tailwind", "Drizzle", "PostgreSQL"],
  },
  {
    title: "실시간 채팅 프로그램",
    badge: "실시간 소통을 위한 채팅 웹 서비스",
    period: "2025",
    description: "WebSocket 기반의 실시간 채팅 서비스로, 사용자 간 즉각적인 메시지 교환과 다양한 상호작용 기능을 제공합니다.",
    codeUrl: "https://github.com/msmsmsms23/real-time-chat",
    liveUrl: "",
    images: [
      "/portfolio/screenshot/real-time-chat.png",
      "/portfolio/screenshot/real-time-chat2.png",
    ],
    problem: "처음에는 메시지를 보내도 화면에 바로 나타나지 않아 새로고침을 해야 했습니다. WebSocket 연결과 실시간 상태 동기화를 직접 다루는 게 가장 어려운 부분이었습니다.",
    solutions: [
      "WebSocket으로 메시지를 실시간으로 주고받는 구조 구축",
      "연결 상태 관리 및 재연결 처리 구현",
      "이모지 반응 및 이메일 알림 기능 추가",
      "공개/비공개 채팅방 구분 설정",
    ],
    results: [
      "메시지가 새로고침 없이 즉시 화면에 반영됨",
      "공개/비공개 채팅방 구분이 의도대로 동작함",
      "이모지 반응과 이메일 알림까지 연결되어 완성도 있는 서비스가 됨",
    ],
    roles: [
      "실시간 통신 로직 구현",
      "채팅 UI/UX 개발",
      "상태 관리 (Pinia)",
      "알림 시스템 구현",
    ],
    techStack: ["Vue 3", "Nuxt", "Pinia", "WebSockets", "Drizzle", "Redis", "PostgreSQL", "Tailwind", "Mailgun"],
  },
  {
    title: "Instagram Clone",
    badge: "SNS 클론 프로젝트",
    period: "2024",
    description: "Instagram의 핵심 기능을 직접 구현한 SNS 클론 프로젝트입니다. 피드, 팔로우, 알림 등 실제 서비스 수준의 기능을 갖추고 있습니다.",
    codeUrl: "https://github.com/msmsmsms23/instagram-clone",
    liveUrl: "",
    images: [
      "/portfolio/screenshot/instagram-clone.png",
      "/portfolio/screenshot/instagram-clone2.png",
      "/portfolio/screenshot/instagram-clone3.png",
      "/portfolio/screenshot/instagram-clone4.png",
    ],
    problem: "단순 튜토리얼이 아닌 실제 서비스 수준의 SNS 기능을 직접 설계하고 구현해 보고 싶었습니다.",
    solutions: [
      "사진 게시/열람 및 댓글 기능 구현",
      "유저 간 팔로우/언팔로우",
      "구독 및 이메일 알림 연동",
      "게시글 검색 기능",
    ],
    results: [
      "실서비스와 유사한 UX 흐름 구현",
      "Redis를 활용한 세션/캐싱 구조 이해",
    ],
    roles: [
      "풀스택 전체 개발",
      "DB 스키마 설계",
      "이메일 알림 연동",
      "검색 기능 구현",
    ],
    techStack: ["Vue 3", "Nuxt", "Pinia", "Redis", "Drizzle", "PostgreSQL", "Tailwind", "Mailgun"],
  },
  {
    title: "퍼즐 게임",
    badge: "노인 대상 웹 퍼즐 게임",
    period: "2022",
    description: "「대학생이 간다」 공모전 우수상 수상 프로젝트입니다. 마을 어르신들이 직접 찍으신 사진으로 만든 모바일 최적화 퍼즐 게임입니다.",
    codeUrl: "https://github.com/msmsmsms23/puzzle",
    liveUrl: "",
    images: [
      "/portfolio/screenshot/puzzle.png",
      "/portfolio/screenshot/puzzle2.png",
      "/portfolio/screenshot/puzzle3.png",
    ],
    problem: "노인 사용자들이 쉽게 즐길 수 있는 디지털 콘텐츠가 부족하고, 스마트폰 활용 교육과 연계할 수 있는 게임이 필요했습니다.",
    solutions: [
      "어르신이 찍은 사진을 업로드해 퍼즐 생성",
      "드래그·클릭 두 가지 입력 방식 지원",
      "선택한 조각에 빨간 테두리로 가시성 향상",
    ],
    results: [
      "공모전 우수상 수상",
      "모바일 최적화로 어르신 사용성 확보",
    ],
    roles: [
      "기획 및 UI 설계",
      "퍼즐 게임 로직 전체 구현",
      "모바일 반응형 최적화",
    ],
    techStack: ["HTML", "CSS", "JavaScript", "jQuery"],
  },
];

const coreSkills = [
  {
    icon: "🧩",
    title: "문제 해결 능력",
    desc: "사용자 경험을 고려한 문제 정의 및 해결",
  },
  {
    icon: "⚡",
    title: "성능 최적화",
    desc: "로딩 속도 개선 및 성능 지표 향상 경험",
  },
  {
    icon: "🔌",
    title: "실시간 통신",
    desc: "WebSocket 기반 실시간 서비스 개발 경험",
  },
  {
    icon: "🤖",
    title: "AI 활용 경험",
    desc: "LLM API 연동 및 AI 기능 구현 경험",
  },
  {
    icon: "☁️",
    title: "클라우드 & 배포",
    desc: "서버리스 아키텍처 및 CI/CD 자동화 경험",
  },
  {
    icon: "🗄️",
    title: "데이터베이스 설계",
    desc: "PostgreSQL 스키마 설계 및 ORM 활용",
  },
];
</script>

<style scoped>
.capability-card {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 16px;
  border-radius: 12px;
  background: white;
  border: 1px solid #ede9f0;
  transition: border-color 0.2s, box-shadow 0.2s;
}
.capability-card:hover {
  border-color: #c4b5d4;
  box-shadow: 0 2px 12px rgba(125, 91, 140, 0.08);
}
.cap-icon {
  font-size: 22px;
  flex-shrink: 0;
  margin-top: 2px;
}
.cap-title {
  font-size: 14px;
  font-weight: 600;
  color: #6b4f85;
  margin-bottom: 3px;
}
.cap-desc {
  font-size: 12px;
  color: #888;
  line-height: 1.5;
}
</style>