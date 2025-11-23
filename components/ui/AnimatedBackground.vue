<template>
  <div class="particles-container">
    <div class="gradient-background"></div>
    <div
        v-for="i in particleCount"
        :key="i"
        :class="['particle', Math.random() < 0.3 ? 'blurred' : '']"
        :style="{
          '--x': `${Math.random() * 100}%`,
          '--y': `${Math.random() * 100}%`,
          '--size': `${Math.random() * 20 + 5}px`,
          '--duration': `${Math.random() * 15 + 15}s`,
          '--delay': `${Math.random() * 5}s`,
          '--opacity': Math.random() * 0.7 + 0.1,
          '--depth': Math.random() * 0.5 + 0.5,
          '--blur-amount': `${Math.random() * 3 + 2}px`
        }"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  particleCount: {
    type: Number,
    default: 45
  }
})
</script>

<style scoped>
.particles-container {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  overflow: hidden;
  z-index: -1;
  pointer-events: none;
}

.gradient-background {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: -2;
  background-color: hsl(270, 100%, 93%);
  background-image:
      radial-gradient(circle at 5% 1%, hsl(273, 48%, 75%) 7%, transparent 84%),
      radial-gradient(circle at 7% 81%, hsl(276, 100%, 90%) 16%, transparent 53%),
      radial-gradient(circle at 11% 29%, hsl(256, 49%, 45%) 8%, transparent 74%),
      radial-gradient(circle at 39% 52%, hsl(273, 38%, 36%) 6%, transparent 68%),
      radial-gradient(circle at 90% 50%, hsl(265, 100%, 86%) 2%, transparent 85%);
  background-blend-mode: normal, normal, normal, normal, normal;
}

.particle {
  position: absolute;
  top: var(--y);
  left: var(--x);
  width: var(--size);
  height: var(--size);
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  opacity: var(--opacity);
  animation: float var(--duration) infinite cubic-bezier(0.45, 0.05, 0.55, 0.95);
  animation-delay: var(--delay);
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.1);
  will-change: transform;
  backdrop-filter: blur(1px);
}

.particle.blurred {
  filter: blur(var(--blur-amount));
}

.particle:nth-child(3n+1) {
  background-color: rgba(255, 255, 255, 0.15);
}

.particle:nth-child(3n+2) {
  background-color: rgba(255, 255, 255, 0.1);
  width: calc(var(--size) * 0.8);
  height: calc(var(--size) * 0.8);
}

.particle:nth-child(3n) {
  background-color: rgba(255, 255, 255, 0.25);
  width: calc(var(--size) * 1.2);
  height: calc(var(--size) * 1.2);
}

@keyframes float {
  0% {
    transform: translate(0, 0) scale(var(--depth));
  }
  20% {
    transform: translate(calc(50px * var(--depth)), calc(-30px * var(--depth))) scale(calc(var(--depth) * 1.02));
  }
  40% {
    transform: translate(calc(70px * var(--depth)), calc(20px * var(--depth))) scale(var(--depth));
  }
  60% {
    transform: translate(calc(30px * var(--depth)), calc(50px * var(--depth))) scale(calc(var(--depth) * 0.98));
  }
  80% {
    transform: translate(calc(-40px * var(--depth)), calc(30px * var(--depth))) scale(var(--depth));
  }
  100% {
    transform: translate(0, 0) scale(var(--depth));
  }
}

@media (prefers-reduced-motion) {
  .particle {
    animation-duration: calc(var(--duration) * 2);
  }
}
</style>
