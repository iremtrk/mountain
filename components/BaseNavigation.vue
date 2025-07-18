<template>
  <div class=" pt-[70px]">
    <header class="bg-white shadow fixed top-0 w-full z-50">
      <nav class="max-w-screen-xl mx-auto px-6 py-3 flex items-center justify-between">

        <nuxt-link to="/">
          <nuxt-img width="78" height="50" src="/images/logo.png" alt="logo" />
        </nuxt-link>

        <!--nav bar-->
        <ul class="hidden md:flex flex-1 justify-center space-x-6 font-semibold text-sm">
          <li v-for="item in nav" :key="item.to" class="hover:text-[#1cbac8]">
            <nuxt-link :to="$localePath(item.to)" :target="item.target">
              {{ item.label }}
            </nuxt-link>
          </li>
        </ul>

        <div class="relative px-4">
          <button @click="isSelect = !isSelect">
            <Icon name="heroicons:globe-alt" class="text-[#1cbac8] text-4xl" />
          </button>
          <ul v-if="isSelect" class="absolute right-0 text-center  mt-2 w-20 bg-white border rounded shadow-lg z-50">
            <li v-for="locale in locales" @click="setLocale(locale.code); isSelect = false"
              class="px-4 py-2 hover:text-[#1cbac8] cursor-pointer">
              {{ locale.code }}
            </li>
          </ul>
        </div>

        <nuxt-link :to="$localePath('/registerNow')"
          class="bg-[#1cbac8] text-white font-bold px-4 py-2 rounded hover:bg-black transition">
          {{ t('header.button') }}
        </nuxt-link>
        <button @click="logout" class="bg-[#1cbac8] text-white font-bold ml-4 px-4 py-2 rounded hover:bg-black"> 
          {{ t('header.buttonlog') }}
        </button>
        <!-- denemeeeeee -->
        <button @click="isOpen = !isOpen" class="md:hidden">
          <i class="fa-solid fa-bars"></i>
        </button>

        <ul v-if="isOpen"
          class="flex flex-col absolute top-[70px] left-0 w-full bg-white shadow-md md:hidden z-50 px-8 space-y-5 font-semibold h-[200px] overflow-y-auto">
          <li v-for="item in $tm('nav')" class="border-b pb-2 text-sm">
            <nuxt-link :to="$localePath(item.to)" :target="item.target" @click="isOpen = false"
              class="hover:text-[#1cbac8] block py-2">
              {{ item.label }}
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>


<script setup>
const { t,tm } = useI18n()
const nav=computed(()=> tm('header.nav'))

const { locales, setLocale } = useI18n()
const localeRoute = useLocaleRoute()
const { localePath } = useI18n()

const isOpen = ref(false)
const isSelect = ref(false)

const router = useRouter()
const route = useRoute()

const logout = () => {
  localStorage.removeItem('isLoggedIn')
  router.push('/login')
}
</script>