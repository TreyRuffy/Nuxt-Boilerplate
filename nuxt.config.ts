// https://nuxt.com/docs/api/configuration/nuxt-config

const routerBase = process.env.GH_PAGES ?? '/'

export default defineNuxtConfig({
  app: {
    baseURL: routerBase,
    buildAssetsDir: 'assets',
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'author', content: 'AUTHOR NAME' },
        { name: 'description', content: 'PROJECT DESCRIPTION' },
        { name: 'theme-color', media: '(prefers-color-scheme: light)', content: '#ffffff' },
        { name: 'theme-color', media: '(prefers-color-scheme: dark)', content: '#000000' },
      ],
    },
  },

  devtools: { enabled: true },

  modules: ['@nuxt/eslint', '@nuxt/ui', '@nuxt/image', '@pinia/nuxt'],

  experimental: {
    payloadExtraction: false,
  },

  typescript: {
    strict: true,
    typeCheck: true,
  },

  image: {
    quality: 90,
    provider: 'ipx',
    ipx: {
      maxAge: 31536000,
    },
  },

  colorMode: {
    classSuffix: '',
    preference: 'light',
    dataValue: 'theme',
  },

  eslint: {
    checker: true,
  },
})
