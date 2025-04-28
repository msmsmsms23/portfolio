<template>
  <div class="flex justify-center text-4xl pt-10 text-primaryColor-400 pb-5">
    {{ $t('portfolio_title') }}
  </div>
  <div class="flex justify-center">
    <div class="pr-10 text-center">
      <NuxtLink to="https://github.com/msmsmsms23/instagram-clone">
        <NuxtImg src="/screenshot/instagram-clone.png" alt="Instagram clone" height="400"
                 preload placeholder format="webp" />
      </NuxtLink>
      {{ $t('first_portfolio') }}
    </div>
    <div class="text-center">
      <NuxtLink to="https://github.com/msmsmsms23/real-time-chat">
        <NuxtImg src="/screenshot/real-time-chat.png" alt="Real time chat" height="400"
               preload placeholder format="webp" />
      </NuxtLink>
      {{ $t('second_portfolio') }}
    </div>
  </div>
</template>

<script setup>
defineI18nRoute({
  paths: {
    en: '/my-portfolio',
    ko: '/naeuiportfolio',
  }
})
</script>