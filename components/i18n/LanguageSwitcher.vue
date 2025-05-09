<template>
  <NuxtLink v-for="i in otherLocales" :key="i.code" :to="switchLocalePath(i.code)">
    {{ i.name }}
  </NuxtLink>

</template>

<script setup>
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const otherLocales = computed(() => {
  return locales.value.filter((i) => {
    return i.code !== locale.value
  })
})
</script>
