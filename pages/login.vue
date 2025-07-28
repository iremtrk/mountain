<template>
  <div class="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
    <div class="p-8 bg-white dark:bg-gray-800 rounded shadow-md w-96">
      <button @click="isSelect = !isSelect">
        <Icon name="heroicons:globe-alt" class="text-[#1cbac8] text-4xl" />
      </button>
      <ul v-if="isSelect"
        class="absolute text-center  mt-2 w-20 bg-white dark:bg-gray-700 border rounded shadow-lg z-50">
        <li v-for="locale in locales" @click="setLocale(locale.code); isSelect = false"
          class="px-4 py-2 text-black dark:text-white dark:hover:text-[#1cbac8] hover:text-[#1cbac8] cursor-pointer">
          {{ locale.code }}
        </li>
      </ul>

      <button @click="toggleDark" class="px-4 float-right">
        <Icon :name="isDark ? 'heroicons:sun' : 'heroicons:moon'" class="text-[#1cbac8] text-3xl" />
      </button>

      <h1 class="text-2xl font-bold mb-6 text-center dark:text-white ">{{ $t('login.title') }}</h1>

      <p v-if="errorMessage" class="text-red-500 text-sm mt-2 mb-2 text-center">{{ errorMessage }}</p>

      <input type="text" v-model="username" :placeholder="$t('login.username')" required
        class="border p-2 w-full mb-4 rounded text-black dark:text-white dark:bg-gray-900" @keyup.enter="login"> <br>

      <input type="password" v-model="password" :placeholder="$t('login.password')" required
        class="border p-2 w-full mb-4 rounded text-black dark:text-white dark:bg-gray-900" @keyup.enter="login"> <br>

      <button @click="login" class="bg-[#1cbac8] text-white px-4 py-1 w-full rounded">{{ $t('login.button') }}
      </button>

      <div class="text-center mt-2 text-black dark:text-white ">
        Don't have an account?
        <nuxt-link to="/signUp" class="text-center text-[#1cbac8] cursor-pointer">
          Sign up
        </nuxt-link>
      </div>

    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'login'
})
defineI18nRoute({
  paths: {
    en: '/login',
    tr: '/girisYap'
  }
})

const isSelect = ref(false)
const router = useRouter()
const username = ref('')
const password = ref('')
const errorMessage = ref('')

const { locales, setLocale } = useI18n()
const { t } = useI18n()
const { localePath } = useI18n()

const { isDark, toggleDark } = useDarkMode()


const login = async () => {
  if (!username.value || !password.value) {
    errorMessage.value = t('login.required')
    return
  }
  errorMessage.value = ''
  try {
    const response = await $fetch('http://localhost:5000/api/login', {
      method: 'POST',
      body: {
        username: username.value,
        password: password.value
      }
    })
    const authCookie = useCookie('auth')
    authCookie.value = JSON.stringify(response.user || { username: username.value })
    navigateTo('/')
  } 
  catch (e) {
    errorMessage.value = e.data?.message || 'Login Failed'
  }
}


</script>
