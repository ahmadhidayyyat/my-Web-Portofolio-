// nuxt.config.ts
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@nuxtjs/google-fonts", // Pastikan baris ini ada dan namanya benar
  ],

  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700, 800],
    },
  },
  css: ["~/assets/css/transitions.css"],
});
