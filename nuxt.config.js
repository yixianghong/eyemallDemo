export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "EyeMall",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Noto+Sans+HK:wght@100;300;400;500;700;900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600&display=swap"
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["./scss/_custom.scss"],


  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: ["@nuxtjs/style-resources"],

  // Modules (https://go.nuxtjs.dev/config-modules)

  modules: [
    // https://go.nuxtjs.dev/bootstrap
    [
      "bootstrap-vue/nuxt",
      {
        css:false,
        bootstrapVue: {
          bootstrapCSS: false,
          bootstrapVueCSS: false,
          icons: true,
        }
      }
    ],
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    
  ],

  router: {
    mode: 'history'
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: "@/plugins/vue-swiper.js", ssr:true }
  ],

  styleResources: {
    scss:["@/scss/_base.scss"]
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)

  build: {
    // extractCSS: { allChunks: true }
  },

 

pageTransition: 'my-page',
  // or
  pageTransition: {
    name: 'my-page',
    mode: 'out-in',
    beforeEnter (el) {
      console.log('Before enter...');
    }
  }
};
