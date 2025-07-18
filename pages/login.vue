<template>
    <div class="flex items-center justify-center h-screen bg-gray-100">
        <div class="p-8 bg-white rounded shadow-md w-96">
            <button @click="isSelect = !isSelect">
                <Icon name="heroicons:globe-alt" class="text-[#1cbac8] text-4xl" />
            </button>
            <ul v-if="isSelect" class="absolute text-center  mt-2 w-20 bg-white border rounded shadow-lg z-50">
                <li v-for="locale in locales" @click="setLocale(locale.code); isSelect = false"
                    class="px-4 py-2 hover:text-[#1cbac8] cursor-pointer">
                    {{ locale.code }}
                </li>
            </ul>

            <h1 class="text-2xl font-bold mb-6 text-center">{{ $t('login.title') }}</h1>

            <p v-if="errorMessage" class="text-red-500 text-sm mt-2 mb-2 text-center">{{ errorMessage }}</p>

            <input type="text" v-model="username" :placeholder="$t('login.username')" required
                class="border p-2 w-full mb-4 rounded" @keyup.enter="login"> <br>

            <input type="password" v-model="password" :placeholder="$t('login.password')" required
                class="border p-2 w-full mb-4 rounded" @keyup.enter="login"> <br>

            <button @click="login" class="bg-[#1cbac8] text-white px-4 py-1 w-full rounded">{{ $t('login.button') }}
            </button>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'login'
})

const isSelect = ref(false)
const router = useRouter()
const username = ref('')
const password = ref('')
const errorMessage = ref('')


const { locales, setLocale } = useI18n()
const { t } = useI18n()
const { localePath } = useI18n()


const login = () => {
    if (!username.value || !password.value) {
        errorMessage.value = t('login.required')
    }
    else if (username.value === 'admin' && password.value === '1234') {
        localStorage.setItem('isLoggedIn', 'true')
        router.push('/')
    }
    else {
        errorMessage.value = t('login.incorrect')
    }
}
</script>
