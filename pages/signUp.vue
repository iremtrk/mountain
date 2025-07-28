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

            <h1 class="text-2xl font-bold mb-6 text-center dark:text-white ">{{ $t('signUp.title') }}</h1>

            <p v-if="successMessage" class="text-green-500 text-sm mt-2 mb-2 text-center">{{ successMessage }}</p>
            <p v-if="errorMessage" class="text-red-500 text-sm mt-2 mb-2 text-center">{{ errorMessage }}</p>

            <input v-model="username" type="text" :placeholder="t('signUp.username')" required
                class="border p-2 w-full mb-4 rounded text-black dark:text-white dark:bg-gray-900"
                @keyup.enter="signUp">
            <br>
            <input v-model="email" type="email" :placeholder="t('signUp.email')" required
                class="border p-2 w-full mb-4 rounded text-black dark:text-white dark:bg-gray-900"
                @keyup.enter="signUp">
            <br>

            <input v-model="password" type="password" :placeholder="t('signUp.password')" required
                class="border p-2 w-full mb-4 rounded text-black dark:text-white dark:bg-gray-900"
                @keyup.enter="signUp">
            <br>

            <button @click="signUp" class="bg-[#1cbac8] text-white px-4 py-1 w-full rounded">{{ t('signUp.button') }}
            </button>

            <div class="text-center mt-2 text-black dark:text-white">
                Do you have an account?
                <nuxt-link to="/login" class="text-center text-[#1cbac8] cursor-pointer">
                    Sign in
                </nuxt-link>
            </div>

        </div>
    </div>
</template>

<script setup>

const { isDark, toggleDark } = useDarkMode()

const isSelect = ref(false)
const username = ref('')
const email = ref('')
const password = ref('')
const errorMessage = ref('')
const successMessage = ref('')

const { locales, setLocale, t } = useI18n()

definePageMeta({
    layout: 'login'
})
defineI18nRoute({
    paths: {
        en: '/signUp',
        tr: '/kayit'
    }
})

const validateUsername = (value) => {
    return typeof value === 'string' && value.trim().length >= 3;
}
const validateEmail = (value) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(value)
}
const validatePassword = (value) => {
    return typeof value === 'string' && value.length >= 6;
}

const signUp = async () => {
    if (!username.value || !email.value || !password.value) {
        errorMessage.value = t('signUp.required')
        return
    }
    if (!validateUsername(username.value)) {
        errorMessage.value = t('signUp.usernameError')
        return
    }
    if (!validateEmail(email.value)) {
        errorMessage.value = t('signUp.emailError')
        return
    }
    if (!validatePassword(password.value)) {
        errorMessage.value = t('signUp.passwordError')
        return
    }
    errorMessage.value = ''
    try {
        await $fetch('http://localhost:5000/api/signUp', {
            method: 'POST',
            body: {
                username: username.value,
                email: email.value,
                password: password.value
            }
        })
        successMessage.value = t('signUp.successMessage')
        username.value = ''
        email.value = ''
        password.value = ''
        setTimeout(() => {
            navigateTo('/login')
        }, 1000)
    }
    catch (e) {
        errorMessage.value = e.data?.message || 'Register failed'
    }
}


</script>