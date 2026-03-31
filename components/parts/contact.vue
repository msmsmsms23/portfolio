<template>
  <div class="container mx-auto px-4 py-16">
    <h2 class="text-center text-4xl font-bold text-primaryColor-500 mb-10">
      Get In Touch
    </h2>

    <div class="max-w-3xl mx-auto p-3">

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="flex flex-col items-center p-6 rounded-lg bg-primaryColor-50 hover:bg-primaryColor-100 transition-colors">
          <a href="mailto:kms326464@naver.com" class="p-4 bg-primaryColor-100 rounded-full mb-3">
            <UIcon name="i-heroicons-at-symbol" class="size-8 text-primaryColor-500" />
          </a>
          <h3 class="text-lg font-bold mb-1">Email</h3>
          <p class="text-sm text-center text-gray-600">kms326464@naver.com</p>
        </div>

        <div class="flex flex-col items-center p-6 rounded-lg bg-primaryColor-50 hover:bg-primaryColor-100 transition-colors">
          <a href="https://github.com/msmsmsms23" target="_blank" class="p-4 bg-primaryColor-100 rounded-full mb-3">
            <UIcon name="grommet-icons:github" class="size-8 text-primaryColor-500" />
          </a>
          <h3 class="text-lg font-bold mb-1">GitHub</h3>
          <p class="text-sm text-center text-gray-600">@msmsmsms23</p>
        </div>

        <div class="flex flex-col items-center p-6 rounded-lg bg-primaryColor-50 hover:bg-primaryColor-100 transition-colors">
          <div class="p-4 bg-primaryColor-100 rounded-full mb-3">
            <UIcon name="i-heroicons-phone" class="size-8 text-primaryColor-500" />
          </div>
          <h3 class="text-lg font-bold mb-1">Phone</h3>
          <p class="text-sm text-center text-gray-600">010-2382-2072</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>
