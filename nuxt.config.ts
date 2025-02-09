import { _size } from "#tailwind-config/theme"

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
