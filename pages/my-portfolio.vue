<template>
  <div class="flex justify-center text-4xl pt-10 text-primaryColor-400 pb-5">
    {{ $t('portfolio_title') }}
  </div>
  <div class="flex justify-center">
    <div class="pr-10 container">
      <NuxtImg class="rounded-xl" src="/screenshot/instagram-clone.png" alt="Instagram clone"
               width="670" preload placeholder format="webp" />
      <NuxtLink to="https://github.com/msmsmsms23/instagram-clone" target="_blank">
        <div class="wrapper">
          <div class="description">
            <div class="text-4xl">
              {{ $t('first_portfolio_title') }}
            </div>
            <div>
              <ul class="text-xl">
                {{ $t('features') }}
                <li class="text-sm">
                  {{ $t('first_portfolio_first_feature') }}
                </li>
                <li class="text-sm">
                  {{ $t('first_portfolio_second_feature') }}
                </li>
                <li class="text-sm">
                  {{ $t('first_portfolio_third_feature') }}
                </li>
                <li class="text-sm">
                  {{ $t('first_portfolio_fourth_feature') }}
                </li>
              </ul>

              <ul class="text-xl">
                {{ $t('tech_stack') }}
                <li class="text-sm">
                  Vue 3, Nuxt, Pinia
                </li>
                <li class="text-sm">
                  Redis, PostgreSQL
                </li>
                <li class="text-sm">
                  Mailgun
                </li>
              </ul>
            </div>
          </div>
        </div>
      </NuxtLink>
    </div>

    <div class="container">
      <NuxtImg class="rounded-xl" src="/screenshot/real-time-chat.png" alt="Real time chat"
             width="350" preload placeholder format="webp" />
      <NuxtLink to="https://github.com/msmsmsms23/real-time-chat" target="_blank">
        <div class="wrapper">
          <div class="description">
            <div class="text-4xl">
              {{ $t('second_portfolio_title') }}
            </div>
            <div>
              <ul class="text-xl">
                {{ $t('features') }}
                <li class="text-sm">
                  {{ $t('second_portfolio_first_feature') }}
                </li>
                <li class="text-sm">
                  {{ $t('second_portfolio_second_feature') }}
                </li>
                <li class="text-sm">
                  {{ $t('second_portfolio_third_feature') }}
                </li>
              </ul>

              <ul class="text-xl">
                {{ $t('tech_stack') }}
                <li class="text-sm">
                  Vue 3, Nuxt, Pinia
                </li>
                <li class="text-sm">
                  Pusher, Redis, PostgreSQL
                </li>
                <li class="text-sm">
                  Mailgun
                </li>
              </ul>
            </div>
          </div>
        </div>
      </NuxtLink>
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

<style scoped>
.container {
  position: relative;
  width: fit-content;
}

.description {
  position: absolute;
  text-align: center;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
}

.container:hover .wrapper {
  visibility: visible;
  opacity: 0.8;
}

.wrapper {
  position: absolute;
  background-color: #DED3DE;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  visibility: hidden;
  opacity: 0;
  transition: opacity .2s, visibility .2s;
}
</style>