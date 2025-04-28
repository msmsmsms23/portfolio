<template>
  <div class="flex justify-center text-4xl pt-10 text-primaryColor-400">
    {{ $t('contact_me_title') }}
  </div>
  <div class="relative h-96">
    <div class="absolute inset-0 flex items-center justify-center">
    <NuxtLink to="">
      <UIcon name="i-heroicons-at-symbol" class="size-8" />
    </NuxtLink>
    <NuxtLink to="https://github.com/msmsmsms23">
      <UIcon name="grommet-icons:github" class="size-8" />
    </NuxtLink>
    </div>
  </div>
</template>

<script setup>
defineI18nRoute({
  paths: {
    en: '/contact-me',
    ko: '/yeonrack',
  }
})
</script>