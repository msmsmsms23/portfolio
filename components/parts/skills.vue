<template>
  <h2 class="text-center text-4xl pt-16 pb-8 font-bold text-primaryColor-500">
    Skills
  </h2>

  <div class="container mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div class="p-6 bg-white rounded-lg shadow-sm border-l-4 border-primaryColor-300 transform hover:scale-105 transition-transform duration-300">
        <div class="text-2xl font-semibold text-primaryColor-400 mb-4">
          Languages
        </div>
        <div class="text-gray-700 text-xl italic">
          Javascript
        </div>
        <ul class="mb-8 text-gray-700 list-image-[url(/portfolio/icon/check.png)] list-inside">
          <li class="mt-2">ES6+ 문법을 활용하여 가독성 있고 유지 보수 가능한 코드 작성</li>
          <li class="mt-2">비동기 처리(async/await, Promise)와 이벤트 기반 로직 구현</li>
          <li class="mt-2">브라우저 동작 방식과 JavaScript 실행 흐름 이해 및 기능 구현</li>
        </ul>
      </div>

      <div class="p-6 bg-white rounded-lg shadow-sm border-l-4 border-primaryColor-300 transform hover:scale-105 transition-transform duration-300">
        <div class="text-2xl font-semibold text-primaryColor-400 mb-4">
          Frameworks
        </div>
        <div class="text-gray-700 text-xl italic">
          Vue.js
        </div>
        <ul class="mb-8 text-gray-700 list-image-[url(/portfolio/icon/check.png)] list-inside">
          <li class="mt-2">컴포넌트 기반 구조로 재사용 가능한 UI 설계 및 구현</li>
          <li class="mt-2">props, emit, 상태 관리(Pinia/Vuex)를 활용한 데이터 흐름 제어 가능</li>
        </ul>
        <div class="mt-2 text-gray-700 text-xl italic">
          Nuxt.js
        </div>
        <ul class="mb-8 text-gray-700 list-image-[url(/portfolio/icon/check.png)] list-inside">
          <li class="mt-2">CSR/SSR 구조 이해 및 Nuxt 기반 웹 애플리케이션 구현</li>
          <li class="mt-2">페이지 기반 라우팅과 서버 렌더링을 활용한 초기 로딩 및 SEO를 고려한 개발 가능</li>
        </ul>
        <div class="mt-2 text-gray-700 text-xl italic">
          Tailwind CSS
        </div>
        <ul class="mb-8 text-gray-700 list-image-[url(/portfolio/icon/check.png)] list-inside">
          <li class="mt-2">반응형 레이아웃과 일관된 UI 스타일 구현</li>
        </ul>
      </div>

      <div class="p-6 bg-white rounded-lg shadow-sm border-l-4 border-primaryColor-300 transform hover:scale-105 transition-transform duration-300">
        <div class="text-2xl font-semibold text-primaryColor-400 mb-4">
          Runtime & APIs
        </div>
        <div class="text-gray-700 text-xl italic">
          Node.js
        </div>
        <ul class="mb-8 text-gray-700 list-image-[url(/portfolio/icon/check.png)] list-inside">
          <li class="mt-2">Node.js 환경에서 서버 로직 작성 및 프론트엔드와 연동 가능</li>
          <li class="mt-2">간단한 백엔드 기능을 직접 구현해 서비스 흐름 이해 및 적용</li>
        </ul>
        <div class="mt-2 text-gray-700 text-xl italic">
          REST APIs
        </div>
        <ul class="mb-8 text-gray-700 list-image-[url(/portfolio/icon/check.png)] list-inside">
          <li class="mt-2">RESTful 규칙에 따른 API 엔드포인트 설계 및 구현</li>
        </ul>
        <div class="mt-2 text-gray-700 text-xl italic">
          Websockets
        </div>
        <ul class="mb-8 text-gray-700 list-image-[url(/portfolio/icon/check.png)] list-inside">
          <li class="mt-2">실시간 데이터 송수신이 필요한 기능(채팅, 알림 등) 구현 가능</li>
        </ul>
        <div class="mt-2 text-gray-700 text-xl italic">
          Web workers
        </div>
        <ul class="mb-8 text-gray-700 list-image-[url(/portfolio/icon/check.png)] list-inside">
          <li class="mt-2">무거운 연산을 메인 스레드에서 분리하여 브라우저 성능 개선 가능</li>
        </ul>
      </div>

      <div class="p-6 bg-white rounded-lg shadow-sm border-l-4 border-primaryColor-300 transform hover:scale-105 transition-transform duration-300">
        <div class="text-2xl font-semibold text-primaryColor-400 mb-4">
          Database
        </div>
        <div class="text-gray-700 text-xl italic">
          PostgreSQL
        </div>
        <ul class="mb-8 text-gray-700 list-image-[url(/portfolio/icon/check.png)] list-inside">
          <li class="mt-2">관계형 데이터베이스 구조 설계, 테이블 및 쿼리 작성 가능</li>
          <li class="mt-2">API 서버와 연동하여 데이터를 저장·조회·관리</li>
        </ul>
        <div class="mt-2 text-gray-700 text-xl italic">
          Redis
        </div>
        <ul class="mb-8 text-gray-700 list-image-[url(/portfolio/icon/check.png)] list-inside">
          <li class="mt-2">캐시 및 세션 저장소로 Redis 활용</li>
        </ul>
      </div>

      <div class="p-6 bg-white rounded-lg shadow-sm border-l-4 border-primaryColor-300 transform hover:scale-105 transition-transform duration-300">
        <div class="text-2xl font-semibold text-primaryColor-400 mb-4">
          Core Concepts
        </div>
        <div class="text-gray-700 text-xl italic">
          Web Programming
        </div>
        <ul class="mb-8 text-gray-700 list-image-[url(/portfolio/icon/check.png)] list-inside">
          <li class="mt-2">웹 애플리케이션의 전체 흐름(클라이언트–서버–데이터베이스) 이해 및 구현</li>
          <li class="mt-2">SPA 및 SSR 환경에서 웹 서비스가 동작하는 구조 설명 및 적용 가능</li>
        </ul>
        <div class="mt-2 text-gray-700 text-xl italic">
          Data Structures
        </div>
        <ul class="mb-8 text-gray-700 list-image-[url(/portfolio/icon/check.png)] list-inside">
          <li class="mt-2">배열, 객체, Map, Set 등의 자료구조를 목적에 맞게 선택하여 사용 가능</li>
          <li class="mt-2">데이터 처리 로직의 효율성 고려한 코드 작성</li>
        </ul>
      </div>

      <div class="p-6 bg-white rounded-lg shadow-sm border-l-4 border-primaryColor-300 transform hover:scale-105 transition-transform duration-300">
        <div class="text-2xl font-semibold text-primaryColor-400 mb-4">
          Tools
        </div>
        <div class="text-gray-700 text-xl italic">
          Git / GitHub
        </div>
        <ul class="mb-8 text-gray-700 list-image-[url(/portfolio/icon/check.png)] list-inside">
          <li class="mt-2">Git을 이용한 버전 관리와 GitHub를 통한 프로젝트 관리</li>
          <li class="mt-2">브랜치 분기, 커밋 관리, PR 기반 협업 흐름 이해</li>
        </ul>
        <div class="mt-2 text-gray-700 text-xl italic">
          WebStorm
        </div>
        <ul class="mb-8 text-gray-700 list-image-[url(/portfolio/icon/check.png)] list-inside">
          <li class="mt-2">WebStorm을 주요 개발 환경으로 사용하며 디버깅 및 코드 관리를 효율적으로 수행</li>
        </ul>
        <div class="mt-2 text-gray-700 text-xl italic">
          Postman
        </div>
        <ul class="mb-8 text-gray-700 list-image-[url(/portfolio/icon/check.png)] list-inside">
          <li class="mt-2">API 요청/응답 테스트를 통해 백엔드 연동 및 오류를 검증 가능</li>
        </ul>
        <div class="mt-2 text-gray-700 text-xl italic">
          Docker
        </div>
        <ul class="mb-8 text-gray-700 list-image-[url(/portfolio/icon/check.png)] list-inside">
          <li class="mt-2">Docker를 이용해 개발 환경을 컨테이너로 구성 및 일관된 실행 환경 설계</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>
