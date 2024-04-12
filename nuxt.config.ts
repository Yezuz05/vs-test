// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-svgo', ['nuxt-swiper', {
    modules: ['a11y', 'autoplay', 'free-mode'],
  }], ['@nuxtjs/google-fonts', {
    families: {
      'Rubik': [400, 500, 700],
    },
  }]],
})