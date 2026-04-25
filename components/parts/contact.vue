<template>
  <div class="container mx-auto px-4 py-16">
    <h2 class="text-center text-4xl font-bold text-primaryColor-500 mb-12">
      Get In Touch
    </h2>

    <div class="contact-grid">
      <a
          v-for="item in contactItems"
          :key="item.label"
          :href="item.href"
          :target="item.external ? '_blank' : undefined"
          class="contact-card"
          :class="{ 'no-link': !item.href }"
      >
        <div class="contact-icon-wrap">
          <UIcon :name="item.icon" class="size-6 text-primaryColor-500" />
        </div>
        <div class="contact-label">{{ item.label }}</div>
        <div class="contact-value">{{ item.value }}</div>
      </a>
    </div>
  </div>
</template>

<script setup>
const contactItems = [
  {
    icon: "i-heroicons-at-symbol",
    label: "Email",
    value: "kms326464@naver.com",
    href: "mailto:kms326464@naver.com",
    external: false,
  },
  {
    icon: "grommet-icons:github",
    label: "GitHub",
    value: "@msmsmsms23",
    href: "https://github.com/msmsmsms23",
    external: true,
  },
  {
    icon: "i-heroicons-phone",
    label: "Phone",
    value: "010-2382-2072",
    href: "tel:01023822072",
    external: false,
  },
];
</script>

<style scoped>
.contact-grid {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
  max-width: 700px;
  margin: 0 auto;
}

.contact-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 24px 28px;
  background: white;
  border-radius: 16px;
  border: 1px solid #ede9f0;
  text-decoration: none;
  transition: box-shadow 0.2s, border-color 0.2s;
  min-width: 160px;
  flex: 1;
  max-width: 200px;
}
.contact-card:hover {
  border-color: #c4b5d4;
  box-shadow: 0 4px 20px rgba(125, 91, 140, 0.1);
}
.contact-card.no-link {
  cursor: default;
}

.contact-icon-wrap {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #f0ebf7;
  display: flex;
  align-items: center;
  justify-content: center;
}

.contact-label {
  font-size: 14px;
  font-weight: 700;
  color: #4a3660;
}

.contact-value {
  font-size: 12px;
  color: #888;
  text-align: center;
}
</style>