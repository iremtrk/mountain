<template>
    <div class="flex items-center justify-center h-screen bg-gray-100">
        <div class="p-8 bg-white rounded shadow-md w-96">

            <h1 class="text-2xl font-bold mb-6 text-center">Login</h1>

            <p v-if="errorMessage" class="text-red-500 text-sm mt-2 mb-2 text-center">{{ errorMessage }}</p>

            <input type="text" v-model="username" placeholder="Username" class="border p-2 w-full mb-4 rounded"  @keyup.enter="login"> <br>

            <input type="password" v-model="password" placeholder="password" class="border p-2 w-full mb-4 rounded"  @keyup.enter="login"> <br>

            <button @click="login" class="bg-[#1cbac8] text-white px-4 py-1 w-full rounded">Login</button>
        </div>

       
    </div>
</template>

<script setup>
import { NuxtLayout } from '#components'

definePageMeta({
    layout:'login'
})
const router=useRouter()
const username=ref('')
const password=ref('')
const errorMessage=ref('')

const auth = useCookie('isLoggedIn')

const login=()=>{
    if (username.value==='admin' && password.value==='1234'){
        auth.value='true'
        router.push('/')
    }
    else{
        errorMessage.value='Kullanıcı adı veya şifre hatalı'
    }
}
</script>
