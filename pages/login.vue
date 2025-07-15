<template>
    <div class="flex items-center justify-center h-screen bg-gray-100">
        <div class="p-8 bg-white rounded shadow-md w-96">

            <h1 class="text-2xl font-bold mb-6 text-center">Login</h1>

            <p v-if="errorMessage" class="text-red-500 text-sm mt-2 mb-2 text-center">{{ errorMessage }}</p>

            <input type="text" v-model="username" placeholder="Username" required class="border p-2 w-full mb-4 rounded"
                @keyup.enter="login"> <br>

            <input type="password" v-model="password" placeholder="password" required
                class="border p-2 w-full mb-4 rounded" @keyup.enter="login"> <br>

            <button @click="login" class="bg-[#1cbac8] text-white px-4 py-1 w-full rounded">Login</button>
        </div>


    </div>
</template>

<script setup>
definePageMeta({
    layout: 'login'
})

const router = useRouter()
const username = ref('')
const password = ref('')
const errorMessage = ref('')


const login = () => {
    if (!username.value || !password.value) {
        errorMessage.value = 'Please fill in the required fields'
        return
    }
    if (username.value === 'admin' && password.value === '1234') {
        localStorage.setItem('isLoggedIn', 'true')
        router.push('/')
    }
    else {
        errorMessage.value = 'Username or password is incorrect'
    }
}
</script>
