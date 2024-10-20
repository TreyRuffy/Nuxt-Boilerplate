// https://nuxt.com/docs/api/configuration/nuxt-config

import process from 'node:process'

const routerBase = process.env.GH_PAGES ?? '/'

export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/ui', '@nuxt/image', '@pinia/nuxt'],

  devtools: { enabled: true },
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

  future: {
    compatibilityVersion: 4,
  },

  experimental: {
    payloadExtraction: false,
  },

  compatibilityDate: '2024-10-19',

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

  image: {
    quality: 90,
    provider: 'ipx',
    ipx: {
      maxAge: 31536000,
    },
  },
})
