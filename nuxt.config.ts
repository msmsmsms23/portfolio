// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  target: 'static',
  router: {
    base: '/portfolio/'
  },
  app: {
    baseURL: '/portfolio/',
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxtjs/i18n', '@nuxtjs/tailwindcss', '@nuxt/image'],
  ui: {
    colorMode: false
  },
})