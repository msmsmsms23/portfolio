<template>
  <h2 class="text-center text-4xl pt-16 pb-8 font-bold text-primaryColor-500">
    Skills
  </h2>

  <div class="container mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div class="p-6 bg-white rounded-lg shadow-sm border-l-4 border-primaryColor-300 transform hover:scale-105 transition-transform duration-300">
        <div class="text-2xl font-semibold text-primaryColor-400 mb-3">
          Languages
        </div>
        <div class="text-gray-700 text-xl italic">
          Javascript
        </div>
        <div class="mt-2 text-gray-700">
          JS의 기본부터 ES6+ 문법까지 지속적으로 학습하고 있으며, Vue와 Nuxt 프로젝트를 통해 실제 웹 서비스 기능 구현에 적용하고 있습니다. 더 안정적인 코드를 위해 타입 안정성과 구조적인 설계 방식도 함께 공부하고 있습니다.
        </div>
      </div>

      <div class="p-6 bg-white rounded-lg shadow-sm border-l-4 border-primaryColor-300 transform hover:scale-105 transition-transform duration-300">
        <div class="text-2xl font-semibold text-primaryColor-400 mb-3">
          Frameworks
        </div>
        <div class="text-gray-700 text-xl italic">
          Vue.js
        </div>
        <div class="mt-2 text-gray-700">
          컴포넌트 설계, props/emit 패턴 및 Vuex/Pinia 기반의 상태 관리를 적용해 UI를 구현했습니다.
        </div>
        <div class="mt-2 text-gray-700 text-xl italic">
          Nuxt.js
        </div>
        <div class="mt-2 text-gray-700">
          페이지 기반 라우팅과 SSR을 활용해 초기 렌더링 최적화 및 SEO 개선을 경험했습니다.
        </div>
        <div class="mt-2 text-gray-700 text-xl italic">
          Tailwind CSS
        </div>
        <div class="mt-2 text-gray-700">
          반응형 레이아웃을 유틸리티 클래스 기반으로 빠르게 구현하고 커스텀 디자인 시스템을 적용했습니다.
        </div>
      </div>

      <div class="p-6 bg-white rounded-lg shadow-sm border-l-4 border-primaryColor-300 transform hover:scale-105 transition-transform duration-300">
        <div class="text-2xl font-semibold text-primaryColor-400 mb-3">
          Runtime & APIs
        </div>
        <div class="text-gray-700 text-xl italic">
          Node.js
        </div>
        <div class="mt-2 text-gray-700">
          JavaScript 기반 서버 환경으로 간단한 API 서버를 구축하고, 프론트엔드와 연동해 실제 웹 서비스를 구현한 경험이 있습니다.
        </div>
        <div class="mt-2 text-gray-700 text-xl italic">
          REST APIs
        </div>
        <div class="mt-2 text-gray-700">
          RESTful 설계 원칙에 따라 엔드포인트를 구성하고, Axios/fetch를 활용해 클라이언트와 안정적으로 연동하는 경험이 있습니다.
        </div>
        <div class="mt-2 text-gray-700 text-xl italic">
          Websockets
        </div>
        <div class="mt-2 text-gray-700">
          실시간 양방향 통신을 위해 WebSocket을 활용한 채팅/알림 기능 구현 경험이 있습니다.
        </div>
        <div class="mt-2 text-gray-700 text-xl italic">
          Web workers
        </div>
        <div class="mt-2 text-gray-700">
          JavaScript Web Worker를 활용해 브라우저에서 무거운 연산을 분리 처리하여 UI 성능 최적화를 경험했습니다.
        </div>
      </div>

      <div class="p-6 bg-white rounded-lg shadow-sm border-l-4 border-primaryColor-300 transform hover:scale-105 transition-transform duration-300">
        <div class="text-2xl font-semibold text-primaryColor-400 mb-3">
          Database
        </div>
        <div class="text-gray-700 text-xl italic">
          PostgreSQL
        </div>
        <div class="mt-2 text-gray-700">
          관계형 데이터베이스를 설계하고 쿼리를 작성하며, 프론트엔드와 연동하여 데이터를 안정적으로 관리한 경험이 있습니다.
        </div>
        <div class="mt-2 text-gray-700 text-xl italic">
          Redis
        </div>
        <div class="mt-2 text-gray-700">
          캐시 및 세션 관리를 위해 Redis를 활용해 성능 최적화 및 빠른 데이터 접근을 구현한 경험이 있습니다.
        </div>
      </div>

      <div class="p-6 bg-white rounded-lg shadow-sm border-l-4 border-primaryColor-300 transform hover:scale-105 transition-transform duration-300">
        <div class="text-2xl font-semibold text-primaryColor-400 mb-3">
          Core Concepts
        </div>
        <div class="text-gray-700 text-xl italic">
          Web Programming
        </div>
        <div class="mt-2 text-gray-700">
          HTML, CSS, JavaScript를 기반으로 웹 애플리케이션 구조와 동작 원리를 이해하고, SPA 및 SSR 환경에서 실제 기능을 구현한 경험이 있습니다.
        </div>
        <div class="mt-2 text-gray-700 text-xl italic">
          Data Structures
        </div>
        <div class="mt-2 text-gray-700">
          배열, 객체, Map, Set 등 다양한 자료구조를 활용해 데이터를 효율적으로 저장·관리하고, 알고리즘 구현에 적용한 경험이 있습니다.
        </div>
      </div>

      <div class="p-6 bg-white rounded-lg shadow-sm border-l-4 border-primaryColor-300 transform hover:scale-105 transition-transform duration-300">
        <div class="text-2xl font-semibold text-primaryColor-400 mb-3">
          Tools
        </div>
        <div class="text-gray-700 text-xl italic">
          Git / GitHub
        </div>
        <div class="mt-2 text-gray-700">
          버전 관리와 협업을 위해 Git을 활용하고, GitHub를 통해 브랜치 전략, PR 및 코드 리뷰 경험을 쌓았습니다
        </div>
        <div class="mt-2 text-gray-700 text-xl italic">
          WebStorm
        </div>
        <div class="mt-2 text-gray-700">
          WebStorm을 개발 환경으로 사용하며 코드 작성, 디버깅, 프로젝트 관리를 효율적으로 수행했습니다.
        </div>
        <div class="mt-2 text-gray-700 text-xl italic">
          Postman
        </div>
        <div class="mt-2 text-gray-700">
          API 테스트와 요청/응답 검증을 위해 Postman을 사용하여 백엔드 연동 및 디버깅 경험을 쌓았습니다.
        </div>
        <div class="mt-2 text-gray-700 text-xl italic">
          Docker
        </div>
        <div class="mt-2 text-gray-700">
          컨테이너 환경을 활용해 개발/배포 환경을 일관성 있게 구성하고, 간단한 서비스 배포 경험을 보유하고 있습니다.
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>
