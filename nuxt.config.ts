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
    '@zadigetvoltaire/nuxt-gtm',
    'nuxt-testimonial'
  ],
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

      const globals = components.filter((c) => ['UButton', 'UAlert', 'UIcon', 'ShAlert','ShVideo', 'ShTweet', 'ShLinkedin', 'ShFacebook'].includes(c.pascalName))


      globals.forEach((c) => c.global = true)
    }
  },
  ui: {
    icons: ['heroicons', 'simple-icons'],
    safelistColors: ['blue', 'emerald', 'yellow', 'red', 'white']//colors used as props in ShAlert component
  },
  // Fonts
  fontMetrics: {
    fonts: ['DM Sans']
  },
  googleFonts: {
    display: 'swap',
    download: true,
    families: {
      'Roboto': [400, 500, 600, 700]
    }
  },
  routeRules: {
    '/api/search.json': { prerender: true },
  },
  // Google Tag Manager
  runtimeConfig: {
    public: {
      gtm: {
        id: 'GTM-1111111110',
        queryParams: {
          gtm_auth: 'AB7cDEf3GHIjkl-MnOP8qr',
          gtm_preview: 'env-4',
          gtm_cookies_win: 'x',
        },
        defer: false, /* Script can be set to `defer` to speed up page load at the cost of less accurate results 
        (in case visitor leaves before script is loaded, which is unlikely but possible).
        Defaults to false, so the script is loaded `async` by default */
        compatibility: false,/* Will add `async` and `defer` to the script tag to not block requests for old browsers that do not support `async` */
        nonce: '2726c7f26c',/* Will add `nonce` to the script tag */
        enabled: true,/* defaults to true. Plugin can be disabled by setting this to false for Ex: enabled: !!GDPR_Cookie (optional) */
        debug: true,/* Whether or not display console logs debugs (optional) */
        loadScript: true,/* Whether or not to load the GTM Script (Helpful if you are including GTM manually,
        but need the dataLayer functionality in your components) (optional) */
        enableRouterSync: true,/* Pass the router instance of your app to automatically sync with router (optional) */
        ignoredViews: [],/* Don't trigger events for specified router names (optional) */
        trackOnNextTick: false,/* Whether or not call trackView in Vue.nextTick */
        devtools: true,/* (optional) */
      }
    }
  },
  // Devtools / Typescript
  devtools: { enabled: true },
  typescript: { strict: false }
})
