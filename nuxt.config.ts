// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxtjs/i18n', '@nuxtjs/tailwindcss', '@nuxt/image'],
  i18n: {
    defaultLocale: 'en', // always set one! it is used when a translation is missing from the current locale
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'ko', name: '한국어', file: 'ko.json' }
    ]
  },
  public: {
    i18n: {
      baseUrl: 'https://example.com', // your base URL, required to use their SEO features
    }
  },
})