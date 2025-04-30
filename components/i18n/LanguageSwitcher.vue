<template>
  [
  <NuxtLink v-for="i in locales" :key="i.code" :to="switchLocalePath(i.code)">
    <div class="font-semibold px-1" v-if="i.code === locale">
      {{ i.name }}
    </div>
    <div class="px-1" v-else>
      {{ i.name }}
    </div>
  </NuxtLink>
  ]
</template>

<script setup>
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>
