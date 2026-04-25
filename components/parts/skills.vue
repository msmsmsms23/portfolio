<template>
  <div class="container mx-auto px-4 py-16">
    <h2 class="text-center text-4xl font-bold text-primaryColor-500 mb-12">
      Skills
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <div
          v-for="group in skillGroups"
          :key="group.category"
          class="skill-card"
      >
        <div class="skill-category">{{ group.category }}</div>

        <div
            v-for="skill in group.skills"
            :key="skill.name"
            class="skill-block"
        >
          <div class="skill-name">{{ skill.name }}</div>
          <ul class="skill-list">
            <li v-for="(point, i) in skill.points" :key="i">
              <span class="skill-dot"></span>{{ point }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const skillGroups = [
  {
    category: "Languages",
    skills: [
      {
        name: "JavaScript",
        points: [
          "ES6+ 문법으로 가독성 있는 코드 작성",
          "async/await, Promise 기반 비동기 처리",
          "브라우저 동작 방식과 실행 흐름 이해",
        ],
      },
      {
        name: "C++",
        points: [
          "실무에서 서버 기능 및 로직 구현 경험",
          "기존 코드 분석 후 필요한 부분 수정·보완",
        ],
      },
    ],
  },
  {
    category: "Frameworks",
    skills: [
      {
        name: "Vue.js",
        points: [
          "컴포넌트 기반 재사용 가능한 UI 설계",
          "props, emit, Pinia를 활용한 데이터 흐름 제어",
        ],
      },
      {
        name: "Nuxt.js",
        points: [
          "CSR/SSR 구조 이해 및 웹 애플리케이션 구현",
          "서버 렌더링과 파일 기반 라우팅 활용",
        ],
      },
      {
        name: "Tailwind CSS",
        points: [
          "반응형 레이아웃과 일관된 UI 스타일 구현",
        ],
      },
    ],
  },
  {
    category: "Runtime & APIs",
    skills: [
      {
        name: "Node.js",
        points: [
          "서버 로직 작성 및 프론트엔드 연동",
          "간단한 백엔드 기능 직접 구현 경험",
        ],
      },
      {
        name: "REST APIs",
        points: [
          "RESTful 규칙에 따른 API 설계 및 구현",
        ],
      },
      {
        name: "WebSockets",
        points: [
          "실시간 채팅·알림 기능 구현 경험",
        ],
      },
      {
        name: "Web Workers",
        points: [
          "무거운 연산을 메인 스레드에서 분리해 성능 개선",
        ],
      },
    ],
  },
  {
    category: "Database",
    skills: [
      {
        name: "PostgreSQL",
        points: [
          "관계형 DB 스키마 설계 및 쿼리 작성",
          "API 서버와 연동해 데이터 저장·조회·관리",
        ],
      },
      {
        name: "Redis",
        points: [
          "캐시 및 세션 저장소로 활용",
        ],
      },
    ],
  },
  {
    category: "Core Concepts",
    skills: [
      {
        name: "Web Programming",
        points: [
          "클라이언트–서버–DB 전체 흐름 이해 및 구현",
          "SPA/SSR 구조를 상황에 맞게 선택·적용",
        ],
      },
      {
        name: "Data Structures",
        points: [
          "배열, 객체, Map, Set 등 목적에 맞게 선택",
          "처리 효율을 고려한 로직 작성",
        ],
      },
    ],
  },
  {
    category: "Tools",
    skills: [
      {
        name: "Git / GitHub",
        points: [
          "브랜치 분기, 커밋 관리, PR 기반 협업",
        ],
      },
      {
        name: "WebStorm",
        points: [
          "주요 개발 환경으로 디버깅 및 코드 관리",
        ],
      },
      {
        name: "Postman",
        points: [
          "API 요청/응답 테스트 및 백엔드 연동 검증",
        ],
      },
      {
        name: "Docker",
        points: [
          "컨테이너로 일관된 개발 환경 구성 경험",
        ],
      },
    ],
  },
];
</script>

<style scoped>
.skill-card {
  background: white;
  border-radius: 16px;
  border: 1px solid #ede9f0;
  padding: 20px 22px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: box-shadow 0.25s;
}
.skill-card:hover {
  box-shadow: 0 4px 20px rgba(125, 91, 140, 0.09);
}

.skill-category {
  font-size: 15px;
  font-weight: 700;
  color: #6b4f85;
  padding-bottom: 10px;
  border-bottom: 1px solid #f0ebf5;
}

.skill-block {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.skill-name {
  font-size: 13px;
  font-weight: 600;
  color: #4a3660;
  font-style: italic;
}

.skill-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.skill-list li {
  display: flex;
  align-items: flex-start;
  gap: 7px;
  font-size: 12px;
  color: #666;
  line-height: 1.6;
}

.skill-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #c4a8d4;
  flex-shrink: 0;
  margin-top: 5px;
}
</style>