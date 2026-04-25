<template>
  <div class="pi-card">
    <div class="pi-inner">

      <div class="pi-laptop-panel">
        <div class="laptop-wrap">
          <div class="laptop-screen">
            <div class="mock-bar">
              <span class="mock-dot red"></span>
              <span class="mock-dot yellow"></span>
              <span class="mock-dot green"></span>
              <span class="mock-url">{{ liveUrl || codeUrl }}</span>
            </div>
            <div class="screen-img-wrap">
              <img
                  v-for="(img, i) in images"
                  :key="i"
                  :src="img"
                  :alt="title"
                  class="screen-img"
                  :class="{ active: currentImg === i }"
              />
            </div>
          </div>
          <div class="laptop-chin"></div>
          <div class="laptop-base"></div>
        </div>

        <div v-if="images.length > 1" class="img-dots">
          <button
              v-for="(_, i) in images"
              :key="i"
              class="img-dot"
              :class="{ active: currentImg === i }"
              @click="currentImg = i"
          />
        </div>
        <div class="img-arrows" v-if="images.length > 1">
          <button class="arrow-btn" @click="prev">‹</button>
          <button class="arrow-btn" @click="next">›</button>
        </div>
      </div>

      <div class="pi-content">

        <div class="pi-header">
          <div class="pi-title-row">
            <h3 class="pi-title">{{ title }}</h3>
            <span v-if="badge" class="pi-badge">{{ badge }}</span>
            <span v-if="period" class="pi-period">{{ period }}</span>
          </div>
          <p class="pi-desc">{{ description }}</p>
        </div>

        <div class="pi-detail-grid">
          <div class="pi-col">
            <div class="pi-col-label">
              <span class="pi-col-icon">⊙</span> 문제 상황
            </div>
            <p class="pi-col-text">{{ problem }}</p>
          </div>
          <div class="pi-col">
            <div class="pi-col-label">
              <span class="pi-col-icon">✦</span> 해결 방법
            </div>
            <ul class="pi-bullets">
              <li v-for="(s, i) in solutions" :key="i">
                <span class="bullet-dot"></span>{{ s }}
              </li>
            </ul>
          </div>
          <div class="pi-col">
            <div class="pi-col-label">
              <span class="pi-col-icon">↑</span> 성과
            </div>
            <ul class="pi-bullets">
              <li v-for="(r, i) in results" :key="i">
                <span class="bullet-dot"></span>{{ r }}
              </li>
            </ul>
          </div>
          <div class="pi-col">
            <div class="pi-col-label">
              <span class="pi-col-icon">◎</span> 담당 역할
            </div>
            <ul class="pi-bullets">
              <li v-for="(role, i) in roles" :key="i">
                <span class="bullet-dot"></span>{{ role }}
              </li>
            </ul>
          </div>
        </div>

        <div class="pi-footer">
          <div class="pi-stack-row">
            <span class="pi-stack-label">기술 스택</span>
            <div class="pi-tags">
              <span v-for="(t, i) in techStack" :key="i" class="pi-tag">{{ t }}</span>
            </div>
          </div>
          <div class="pi-btns">
            <a
                v-if="codeUrl"
                :href="codeUrl"
                target="_blank"
                class="btn-outline"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>
              GitHub
            </a>
            <a
                v-if="liveUrl"
                :href="liveUrl"
                target="_blank"
                class="btn-solid"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              Live
            </a>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  title: { type: String, required: true },
  badge: { type: String, default: '' },
  period: { type: String, default: '' },
  description: { type: String, default: '' },
  codeUrl: { type: String, default: '' },
  liveUrl: { type: String, default: '' },
  images: { type: Array, default: () => [] },
  problem: { type: String, default: '' },
  solutions: { type: Array, default: () => [] },
  results: { type: Array, default: () => [] },
  roles: { type: Array, default: () => [] },
  techStack: { type: Array, default: () => [] },
});

const currentImg = ref(0);
let timer = null;

const next = () => { currentImg.value = (currentImg.value + 1) % props.images.length; };
const prev = () => { currentImg.value = (currentImg.value - 1 + props.images.length) % props.images.length; };

onMounted(() => {
  if (props.images.length > 1) {
    timer = setInterval(next, 3500);
  }
});
onUnmounted(() => clearInterval(timer));
</script>

<style scoped>
.pi-card {
  border-radius: 16px;
  background: #fff;
  border: 1px solid #ede9f0;
  overflow: hidden;
  transition: box-shadow 0.25s;
}
.pi-card:hover {
  box-shadow: 0 4px 24px rgba(125, 91, 140, 0.1);
}
.pi-inner {
  display: flex;
  min-height: 340px;
}

.pi-laptop-panel {
  width: 260px;
  flex-shrink: 0;
  background: #f7f4fa;
  border-right: 1px solid #ede9f0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 24px 16px 16px;
  gap: 10px;
}

.laptop-wrap {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.laptop-screen {
  width: 100%;
  border-radius: 6px 6px 0 0;
  border: 1.5px solid #c4b5d4;
  border-bottom: none;
  background: white;
  overflow: hidden;
}

.mock-bar {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 5px 8px;
  background: #f3f0f7;
  border-bottom: 1px solid #ede9f0;
}
.mock-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  flex-shrink: 0;
}
.mock-dot.red { background: #ff5f57; }
.mock-dot.yellow { background: #febc2e; }
.mock-dot.green { background: #28c840; }
.mock-url {
  flex: 1;
  font-size: 8px;
  color: #aaa;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-left: 4px;
  background: white;
  border-radius: 3px;
  padding: 1px 5px;
  border: 0.5px solid #e0dce8;
}

.screen-img-wrap {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  background: #eee;
  overflow: hidden;
}
.screen-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.5s ease;
}
.screen-img.active {
  opacity: 1;
}

.laptop-chin {
  width: 112%;
  height: 10px;
  background: #c4b5d4;
  border-radius: 0 0 4px 4px;
}
.laptop-base {
  width: 85%;
  height: 12px;
  background: #b4a8c4;
  border-radius: 0 0 5px 5px;
}

.img-dots {
  display: flex;
  gap: 5px;
  margin-top: 4px;
}
.img-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #d4c8e4;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: background 0.2s;
}
.img-dot.active { background: #8b68a8; }

.img-arrows {
  display: flex;
  gap: 6px;
}
.arrow-btn {
  background: white;
  border: 1px solid #ded8eb;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #8b68a8;
  cursor: pointer;
  line-height: 1;
  transition: background 0.15s;
}
.arrow-btn:hover { background: #f0eaf7; }

.pi-content {
  flex: 1;
  padding: 22px 24px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  min-width: 0;
}

.pi-title-row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 6px;
}
.pi-title {
  font-size: 18px;
  font-weight: 700;
  color: #4a3660;
  flex-shrink: 0;
}
.pi-badge {
  font-size: 11px;
  padding: 3px 10px;
  border-radius: 999px;
  background: #ede9f7;
  color: #6b4f85;
  font-weight: 500;
  white-space: nowrap;
}
.pi-period {
  font-size: 11px;
  color: #aaa;
  margin-left: auto;
  white-space: nowrap;
}
.pi-desc {
  font-size: 13px;
  color: #666;
  line-height: 1.7;
  white-space: pre-line;
}

.pi-detail-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
  padding: 14px 0;
  border-top: 1px solid #f0ebf5;
  border-bottom: 1px solid #f0ebf5;
}
.pi-col-label {
  font-size: 11px;
  font-weight: 600;
  color: #8b68a8;
  letter-spacing: 0.04em;
  margin-bottom: 7px;
  display: flex;
  align-items: center;
  gap: 3px;
}
.pi-col-icon { font-style: normal; }
.pi-col-text {
  font-size: 12px;
  color: #666;
  line-height: 1.6;
}
.pi-bullets {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.pi-bullets li {
  display: flex;
  align-items: flex-start;
  gap: 6px;
  font-size: 12px;
  color: #555;
  line-height: 1.55;
}
.bullet-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #c4a8d4;
  flex-shrink: 0;
  margin-top: 5px;
}

.pi-footer {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
}
.pi-stack-label {
  font-size: 11px;
  font-weight: 500;
  color: #aaa;
  display: block;
  margin-bottom: 5px;
}
.pi-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}
.pi-tag {
  display: inline-block;
  padding: 3px 10px;
  border-radius: 999px;
  background: #ede9f7;
  color: #6b4f85;
  font-size: 11px;
  font-weight: 500;
}
.pi-btns {
  display: flex;
  gap: 8px;
  flex-shrink: 0;
}
.btn-outline, .btn-solid {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 7px 14px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.15s;
  white-space: nowrap;
}
.btn-outline {
  border: 1.5px solid #8b68a8;
  color: #8b68a8;
  background: transparent;
}
.btn-outline:hover { background: #f0eaf7; }
.btn-solid {
  background: #8b68a8;
  color: white;
  border: 1.5px solid #8b68a8;
}
.btn-solid:hover { background: #7a5a96; }

@media (max-width: 900px) {
  .pi-inner {
    flex-direction: column;
  }
  .pi-laptop-panel {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid #ede9f0;
    padding: 20px 24px 16px;
    flex-direction: row;
    align-items: flex-start;
    gap: 16px;
  }
  .laptop-wrap { width: 240px; flex-shrink: 0; }
  .pi-detail-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 560px) {
  .pi-detail-grid {
    grid-template-columns: 1fr;
  }
  .pi-laptop-panel {
    flex-direction: column;
    align-items: center;
  }
  .laptop-wrap { width: 100%; }
}
</style>