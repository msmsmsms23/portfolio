<template>
  <div class="container mx-auto px-4 py-16">
    <h2 class="text-center text-4xl font-bold text-primaryColor-500 mb-12">
      About Me
    </h2>

    <div class="about-grid">
      <div
          v-for="card in cards"
          :key="card.title"
          class="about-card"
      >
        <div class="about-card-header">
          <span class="about-icon">{{ card.icon }}</span>
          <span class="about-title">{{ card.title }}</span>
        </div>
        <div class="about-body">
          <p v-for="(para, i) in card.paragraphs" :key="i" class="about-para">
            {{ para }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const cards = [
  {
    icon: "🔥",
    title: "도전하는 개발자",
    paragraphs: [
      "대학 시절 총 660시간의 개발자 양성과정에서 팀 프로젝트에 참여하며 실력을 키우기 시작했습니다. 졸업 전 취업에 성공했지만, 회사의 부도로 예기치 못한 퇴직을 겪었습니다. 이를 계기로 스스로 경쟁력을 증명할 수 있는 개발자가 되어야겠다고 결심했습니다.",
      "완벽한 조건을 기다리기보다, 부족한 상태에서 먼저 도전하는 쪽을 선택해 왔습니다. 언어의 장벽 앞에서도 해외 개발자와의 수업에 뛰어들었고, 이해하지 못한 채 넘어가는 대신 끝까지 파고드는 방식을 고집해 왔습니다.",
    ],
  },
  {
    icon: "🤝",
    title: "함께하는 개발자",
    paragraphs: [
      "한 달간의 미국 연수에서 아마존 소속 개발자와 인터뷰·프로젝트를 함께하며, 개인 역량만큼이나 팀 내 소통과 맥락 공유가 중요하다는 것을 직접 체감했습니다.",
      "팀에서는 주로 정리하는 역할을 맡아 왔습니다. 코드를 작성하는 데에서 그치지 않고, 왜 이렇게 작성되었는지·다른 상황에서 재사용할 수 있는지를 함께 고민하며 팀원과 맥락을 공유해 왔습니다. 모르는 부분은 개인 과제로 남기기보다 빠르게 질문하고, 그 과정을 팀과 공유하는 것을 습관으로 삼고 있습니다.",
    ],
  },
];
</script>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  max-width: 900px;
  margin: 0 auto;
}

@media (max-width: 640px) {
  .about-grid {
    grid-template-columns: 1fr;
  }
}

.about-card {
  background: white;
  border-radius: 16px;
  border: 1px solid #ede9f0;
  padding: 22px 24px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: box-shadow 0.25s;
}
.about-card:hover {
  box-shadow: 0 4px 20px rgba(125, 91, 140, 0.09);
}

.about-card-header {
  display: flex;
  align-items: center;
  gap: 10px;
  padding-bottom: 12px;
  border-bottom: 1px solid #f0ebf5;
}

.about-icon {
  font-size: 20px;
  flex-shrink: 0;
}

.about-title {
  font-size: 15px;
  font-weight: 700;
  color: #6b4f85;
}

.about-body {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.about-para {
  font-size: 13.5px;
  color: #555;
  line-height: 1.8;
}
</style>