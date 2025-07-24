
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@nuxtjs/color-mode',
  ],
  colorMode:{
    classSuffix:''
  },
  googleFonts:{
    families:{
      Ubuntu:true,
      "Open Sans":true
    }
  },
  i18n:{
     locales: [
      { code: 'en', language: 'en-US' , file:'en.js' },
      { code: 'tr', language: 'tr-TR' , file:'tr.js'}
    ],
    defaultLocale: 'en',
    strategy: 'prefix_and_default',
    customRoutes:'page',
    // pages:{
    //   login:{
    //     en:'/login',
    //     tr:'/girisYap'
    //   },
    //   index:{
    //     en:'/',
    //     tr:'/'
    //   },
    //   whatWeDo:{
    //     en:'/whatWeDo',
    //     tr:'/neYapabiliriz'
    //   },
    //   featuredProjects:{
    //     en:'/featuredProjects',
    //     tr:'/oneCikanProjeler'
    //   },
    //   registerNow:{
    //     en:'/registerNow',
    //     tr:'/kayitOl'
    //   },
    //   featuredPlans:{
    //     en:'/featuredPlans',
    //     tr:'/oneCikanPlanlar'
    //   },
    //   testimonials:{
    //     en:'/testimonials',
    //     tr:'/referanslar'
    //   },
    //   clients:{
    //     en:'/clients', 
    //     tr:'/müsteriler'     
    //   }

    // }
  },
  css: ['@/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

})