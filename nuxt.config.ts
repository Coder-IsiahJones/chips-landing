// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  css: ["~/assets/scss/styles.scss"],

  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.2.0/remixicon.min.css",
        },
      ],
    },
  },

  modules: [],
});
