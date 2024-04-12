// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title: 'Complete Vue.js training solutions for companies',
      meta: [
        {
          name: 'description',
          content: 'Training solutions designed for companies, agencies and organisations with developers using or who are considering using the Vue.js framework',
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          name: 'og:title',
          content: 'Complete Vue.js training solutions for companies'
        },
        {
          name: 'og:description',
          content: 'Training solutions designed for companies, agencies and organisations with developers using or who are considering using the Vue.js framework',
        },
        {
          name: 'og:type',
          content: 'website'
        }
      ]
    }
  },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-svgo', ['nuxt-swiper', {
    modules: ['a11y', 'autoplay', 'free-mode'],
  }], ['@nuxtjs/google-fonts', {
    families: {
      'Rubik': [400, 500, 700],
    },
  }], "@nuxt/image"],
})