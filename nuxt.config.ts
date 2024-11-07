// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxt/eslint', '@nuxt/image', '@pinia/nuxt', '@nuxt/test-utils/module'],

  devtools: { enabled: true },
  app: {
    buildAssetsDir: 'assets',
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { name: 'author', content: 'AUTHOR NAME' },
        { name: 'description', content: 'PROJECT DESCRIPTION' },
        { name: 'theme-color', media: '(prefers-color-scheme: light)', content: '#ffffff' },
        { name: 'theme-color', media: '(prefers-color-scheme: dark)', content: '#000000' },
      ],
    },
  },

  future: {
    compatibilityVersion: 4,
  },

  experimental: {
    payloadExtraction: false,
  },

  compatibilityDate: '2024-11-05',

  typescript: {
    strict: true,
    typeCheck: true,
  },

  eslint: {
    checker: true,
    config: {
      standalone: false,
      stylistic: true,
    },
  },
})
