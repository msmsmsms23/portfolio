<template>
  <h2 class="text-center text-4xl pt-16 pb-8 font-bold text-primaryColor-500">
    {{ $t('about_me_title') }}
  </h2>

  <div class="container mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div class="p-6 bg-white rounded-lg shadow-sm border-l-4 border-primaryColor-300 transform hover:scale-105 transition-transform duration-300">
        <div class="text-2xl font-semibold text-primaryColor-400 mb-3">
          {{ $t('about_me_first_subtitle') }}
        </div>
        <div class="text-gray-700">
          {{ $t('about_me_first_elements') }}
        </div>
      </div>

      <div class="p-6 bg-white rounded-lg shadow-sm border-l-4 border-primaryColor-300 transform hover:scale-105 transition-transform duration-300">
        <div class="text-2xl font-semibold text-primaryColor-400 mb-3">
          {{ $t('about_me_second_subtitle') }}
        </div>
        <div class="text-gray-700">
          {{ $t('about_me_second_elements') }}
        </div>
      </div>

      <div class="p-6 bg-white rounded-lg shadow-sm border-l-4 border-primaryColor-300 transform hover:scale-105 transition-transform duration-300">
        <div class="text-2xl font-semibold text-primaryColor-400 mb-3">
          {{ $t('about_me_specialties_subtitle') }}
        </div>
        <div class="text-gray-700">
          {{ $t('about_me_specialties_elements') }}
        </div>
      </div>

      <div class="p-6 bg-white rounded-lg shadow-sm border-l-4 border-primaryColor-300 transform hover:scale-105 transition-transform duration-300">
        <div class="text-2xl font-semibold text-primaryColor-400 mb-3">
          {{ $t('about_me_third_subtitle') }}
        </div>
        <div class="text-gray-700">
          {{ $t('about_me_third_elements') }}
        </div>
      </div>

      <div class="p-6 bg-white rounded-lg shadow-sm border-l-4 border-primaryColor-300 transform hover:scale-105 transition-transform duration-300">
        <div class="text-2xl font-semibold text-primaryColor-400 mb-3">
          {{ $t('about_me_fourth_subtitle') }}
        </div>
        <div class="text-gray-700">
          {{ $t('about_me_fourth_elements') }}
        </div>
      </div>

      <div class="p-6 bg-white rounded-lg shadow-sm border-l-4 border-primaryColor-300 transform hover:scale-105 transition-transform duration-300">
        <div class="text-2xl font-semibold text-primaryColor-400 mb-3">
          {{ $t('about_me_fifth_subtitle') }}
        </div>
        <div class="text-gray-700">
          {{ $t('about_me_fifth_elements') }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>
