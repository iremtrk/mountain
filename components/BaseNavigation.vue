<template>
  <div class="pt-[70px]">
    <header class="bg-white dark:bg-gray-900 shadow fixed top-0 w-full z-50 text-black dark:text-white">
      <nav class="max-w-screen-2xl mx-auto px-6 py-3 flex items-center justify-between">
        <div v-if="weatherData" class="flex items-center gap-1 text-sm px-4">
          <span class="text-[#1cbac8] px-1"><i class="fa-solid fa-temperature-half"></i></span>
          <span>{{ Math.round(weatherData.main.temp) }}°C, {{ weatherData.weather[0].description }}</span>
        </div>
        <nuxt-link to="/">
          <nuxt-img width="78" height="50" src="/images/logo.png" alt="logo" />
        </nuxt-link>

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
          <ul v-if="isSelect"
            class="absolute right-0 text-center mt-2 w-20 bg-white dark:bg-gray-800 border rounded shadow-lg z-50">
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
        <!--dark mode denemesiiiiiiii-->
        <button @click="toggleDark" class="px-4">
          <Icon :name="isDark ? 'heroicons:sun' : 'heroicons:moon'" class="text-[#1cbac8] text-3xl" />
        </button>
        <div  class="ml-4">
          {{ t('header.user') }},
          <nuxt-link :to="`/profile/${user.username}`"> <b>{{ user.username }} </b>
          </nuxt-link>
        </div>
        <button @click="isOpen = !isOpen" class="md:hidden">
          <i class="fa-solid fa-bars"></i>
        </button>

        <ul v-if="isOpen"
          class="flex flex-col absolute top-[70px] left-0 w-full bg-white dark:bg-gray-900 shadow-md md:hidden z-50 px-8 space-y-5 font-semibold h-[200px] overflow-y-auto">
          <li v-for="item in nav" class="border-b pb-2 text-sm">
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

const config = useRuntimeConfig()

const { t, tm, locales, locale, setLocale } = useI18n()
const nav = computed(() => tm('header.nav'))

const isOpen = ref(false)
const isSelect = ref(false)
console.log(locale.value)
const { data: weatherData } = await useFetch(
  'https://api.openweathermap.org/data/2.5/weather',
  {
    params: {
      q: 'Istanbul',
      units: 'metric',
      lang: locale.value,
      appid: config.public.openweatherApiKey
    }
  }
)

const authCookie = useCookie('auth')
const user = computed(() => {
  if (!authCookie.value) return null
  if (typeof authCookie.value === 'string') {
    try {
      return JSON.parse(authCookie.value)
    } catch {
      return null
    }
  }
  return authCookie.value
})

/*const logout = () => {
  localStorage.setItem("isLoggedIn", false)
  router.push('/login')
}*/

const logout = () => {
  const authCookie = useCookie('auth')
  authCookie.value = null
  navigateTo('/login')
}

const { isDark, toggleDark } = useDarkMode()
//const isDark = ref(false)

/*const toggleDark = () => {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}*/

</script>