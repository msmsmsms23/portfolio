<template>
  <UContainer>
    <NuxtLayout>
      <UHorizontalNavigation :links="links" />
      <div class="flex justify-end">
        <LanguageSwitcher />
      </div>
      <NuxtPage />
    </NuxtLayout>
  </UContainer>
</template>
<script setup>
import LanguageSwitcher from "~/components/i18n/LanguageSwitcher.vue";
const localePath = useLocalePath()

const links = computed(() => [
  [{
    label: 'Introduction',
    icon: 'i-heroicons-home',
    to: localePath('/')
  }, {
    label: 'My portfolio',
    icon: 'i-heroicons-squares-2x2',
    to: localePath('my-portfolio')
  }, {
    label: 'About Me',
    icon: 'i-heroicons-user',
    to: localePath('about-me')
  }, {
    label: 'Contact Me',
    icon: 'i-heroicons-envelope',
    to: localePath('contact-me')
  }]
])
</script>