// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: process.env.ENABLE_DEVTOOLS === 'true' },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'Daniel Stoiński Redesign',
      meta: [
        { property: 'og:title', content: 'Daniel Stoiński Redesign' },
        { property: 'og:type', content: 'website' },

        { name: 'twitter:title', content: 'Daniel Stoiński Redesign' },
        { name: 'twitter:description', content: 'Daniel Stoiński Redesign - pracownia renowacji mebli' },
        { name: 'twitter:image', content: '' },
        { name: 'twitter:card', content: 'summary' },

        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
      ]
    }
  },
  modules: ['@nuxtjs/supabase', '@nuxtjs/tailwindcss', '@nuxt/image', ['nuxt-mail', {
    smtp: {
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    },
  }], '@pinia/nuxt', '@nuxt/icon', '@nuxt/fonts', '@vueuse/motion/nuxt', '@nuxt/content', '@nuxtjs/robots', '@nuxtjs/sitemap'],
  mail: {
    message: {
      to: process.env.EMAIL_USER,
    },
    smtp: {
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    },
  },
  supabase: {
    redirect: false
  },
  site: {
    url: 'http://www.danielstoinskiredesign.pl',
    name: 'Daniel Stoiński Redesign',
  },
  content: {
    documentDriven: true
  },
  robots: {
    disallow: '', 
    sitemap: [
      'http://www.danielstoinskiredesign.pl/sitemap.xml',
    ],
  },
})