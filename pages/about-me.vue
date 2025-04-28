<template>
  <div class="flex justify-center text-4xl pt-10 pb-5 text-primaryColor-400">
    {{ $t('about_me_title') }}
  </div>

  <div class="flex flex-wrap">
    <div class="w-64 p-8 m-5 bg-primaryColor-100 border-s-4 rounded-r-lg border-primaryColor-200">
      <div class="text-2xl text-primaryColor-300">
        {{ $t('about_me_first_subtitle') }}
      </div>
      <div class="text-white">
        {{ $t('about_me_first_elements') }}
      </div>
    </div>

    <div class="w-fit p-8 m-5 bg-primaryColor-100 border-s-4 rounded-r-lg border-primaryColor-200">
      <div class="text-2xl text-primaryColor-300">
        {{ $t('about_me_second_subtitle') }}
      </div>
      <div class="text-white">
        {{ $t('about_me_second_elements') }}
      </div>
    </div>

    <div class="w-fit p-8 m-5 bg-primaryColor-100 border-s-4 rounded-r-lg border-primaryColor-200">
      <div class="text-2xl text-primaryColor-300">
        {{ $t('about_me_third_subtitle') }}
      </div>
      <div class="text-white">
        {{ $t('about_me_third_elements') }}
      </div>
    </div>

    <div class="w-fit p-8 m-5 bg-primaryColor-100 border-s-4 rounded-r-lg border-primaryColor-200">
      <div class="text-2xl text-primaryColor-300">
        {{ $t('about_me_fourth_subtitle') }}
      </div>
      <div class="text-white">
        {{ $t('about_me_fourth_elements') }}
      </div>
    </div>

    <div class="w-fit p-8 m-5 bg-primaryColor-100 border-s-4 rounded-r-lg border-primaryColor-200">
      <div class="text-2xl text-primaryColor-300">
        {{ $t('about_me_fifth_subtitle') }}
      </div>
      <div class="text-white">
        {{ $t('about_me_fifth_elements') }}
      </div>
    </div>
  </div>
</template>

<script setup>
defineI18nRoute({
  paths: {
    en: '/about-me',
    ko: '/na',
  }
})
</script>