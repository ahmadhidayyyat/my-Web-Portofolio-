// nuxt.config.ts
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@nuxtjs/google-fonts", // Pastikan baris ini ada dan namanya benar
  ],

  googleFonts: {
    display: "swap",
    families: {
      Inter: [400, 500, 600, 700, 800],
    },
  },
  css: ["~/assets/css/transitions.css"],

  app: {
    head: {
      htmlAttrs: { lang: "id" },
      titleTemplate: "%s · Ahmad Hidayat",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "Portofolio Ahmad Hidayat — Frontend Developer berbasis di Indonesia." },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "Ahmad Hidayat" },
        { property: "og:title", content: "Portofolio" },
        { property: "og:description", content: "Frontend Developer berbasis di Indonesia." },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      ],
    },
  },
});
