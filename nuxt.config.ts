import process from "node:process"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "nuxt-icon", "@nuxtseo/module", "@vueuse/nuxt"],
  runtimeConfig: {
    public: {
      apiUrl: process.env.NUXT_PUBLIC_API_URL || "http://localhost:8000/api",
      cdnUrl: process.env.NUXT_PUBLIC_CDN_URL || "http://localhost:8000",
    },
  },
  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700],
    },
  },
  site: {
    name: "sprichwoerter.wiki",
    description: "Liste deutscher Sprichwörter und Redewendungen",
    defaultLocale: "de",
  },
})
