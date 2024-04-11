// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-svgo', ['@nuxtjs/google-fonts', {
    families: {
      'Rubik': [400, 500, 700],
    },
  }]],
})