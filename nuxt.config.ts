import { _size } from "#tailwind-config/theme"
import { resolve } from "node:path";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['@nuxt/ui-pro'],
  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    '@nuxthq/studio',
    '@nuxtjs/fontaine',
    '@nuxtjs/google-fonts',
    'nuxt-og-image',
    'nuxt-testimonial'
  ],
  css: ['~/assets/css/main.css'],
  content: {
    sources: {    
     content: {
        driver: 'fs',
        prefix: '/content-start', // All contents inside this source will be prefixed with `/docs`
        base: resolve(__filename,'content')
      },
      // Additional sources
      fa: {
        driver: 'fs',
        prefix: '/fa', // All contents inside this source will be prefixed with `/fa`
        base: resolve(__dirname,'content-fa') // Path for source directory. This needs to be in accordance with folder name
      },
      la: {
        driver: 'fs',
        prefix: '/la', // All contents inside this source will be prefixed with `/la`
        base: resolve(__dirname,'content-la') // Path for source directory. This needs to be in accordance with folder name
      },
      ra: {
        driver: 'fs',
        prefix: '/ra', // All contents inside this source will be prefixed with `/ra`
        base: resolve(__dirname,'content-ra') // Path for source directory. This needs to be in accordance with folder name
      },
    },
    highlight: {
      // Theme used in all color schemes.
      //theme: 'github-light'
      // OR
      theme: {
        // Default theme (same as single string)
        default: 'github-light',
        // Theme used if `html.dark`
        dark: 'github-dark',
        // Theme used if `html.sepia`
        sepia: 'monokai'
      }
    }
  },
  hooks: {
    // Define `@nuxt/ui` components as global to use them in `.md` (feel free to add those you need)
    'components:extend': (components) => {

      const globals = components.filter((c) => ['UButton', 'UAlert', 'UIcon', 'ShAlert','ShVideo', 'ShTweet', 'ShLinkedin', 'ShFacebook', 'ShBadge', 'CodeSandbox'].includes(c.pascalName))


      globals.forEach((c) => c.global = true)
    }
  },
  ui: {
    icons: ['heroicons', 'simple-icons'],
    safelistColors: ['blue', 'emerald', 'yellow', 'red', 'white']//colors used as props in ShAlert component
  },
  // Fonts
  googleFonts: {
    display: 'swap',
    download: true,
    families: {
      'DM Sans': [400, 500, 600, 700],
      'DM Mono': [400, 500],
    },
  },
  routeRules: {
    '/api/search.json': { prerender: true },
  },
  // Devtools / Typescript
  devtools: { enabled: true },
  typescript: { strict: false }
})
