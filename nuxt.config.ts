export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: false },

  css: [
     '~/assets/scss/tailwind.scss',
     '~/assets/libs/@mdi/font/css/materialdesignicons.min.css',
     '~/assets/libs/@iconscout/unicons/css/line.css',
     '~/assets/libs/animate.css/animate.min.css'
  ],

  app: {
    head: {
      title: 'Nino Biuk',
      titleTemplate: 'Nino Biuk',
      htmlAttrs: { lang: 'en', dir: 'ltr', class: "dark scroll-smooth" },
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
        },
        { id: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [
        { rel: 'icon', type: 'image/gif', href: '/favicon.gif' } // Add this line to specify the favicon
      ],
      script: [

      ]
    },
    baseURL: '/profile/',
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  vite: {
    css: {
      devSourcemap: false
    },
    build: {
      cssCodeSplit: true,
      assetsInlineLimit: 0
    }
  },

  nitro: {
    preset: 'static'
  },

  compatibilityDate: '2025-04-24'
})