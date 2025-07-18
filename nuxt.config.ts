import FeaturedPlans from "./pages/featuredPlans.vue";
import FeaturedProjects from "./pages/featuredProjects.vue";
import WhatWeDo from "./pages/whatWeDo.vue";

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
  ],
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
    strategy: 'prefix_except_default',
    customRoutes:'config',
    pages:{
      login:{
        en:'/login',
        tr:'/girisYap'
      },
      index:{
        en:'/',
        tr:'/'
      },
      whatWeDo:{
        en:'/whatWeDo',
        tr:'/neYapabiliriz'
      },
      featuredProjects:{
        en:'/featuredProjects',
        tr:'/oneCikanProjeler'
      },
      registerNow:{
        en:'/registerNow',
        tr:'/kayitOl'
      },
      FeaturedPlans:{
        en:'/featuredPlans',
        tr:'/oneCikanPlanlar'
      },
      testimonials:{
        en:'/testimonials',
        tr:'/referanslar'
      },
      clients:{
        en:'/clients', 
        tr:'/müsteriler'     
      }

    }
  },
  css: ['@/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

})