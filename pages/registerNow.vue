<template>
    <div class="max-w-screen-xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-10">
        <div class="space-y-6 text-left relative">
            <h5 class="text-[#1cbac8] font-bold">{{$t('register.sup-title')}}</h5>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white ">{{$t('register.title')}}</h2>
            <div class="text-[#1cbac8] text-3xl">•••••</div>
            <p class="text-gray-500 dark:text-gray-300 text-sm leading-relaxed">
              {{$t('register.content')}}
            </p>

            <ul class="space-y-2">
                <li v-for="item in $tm('register.items')" class="flex items-start gap-2">
                    <span class="text-[#1cbac8] mt-1">
                        <Icon name="heroicons:arrow-right-circle" />
                    </span>
                    <strong class="text-gray-800 dark:text-white text-sm">{{ item }}</strong>
                </li>
            </ul>

            <nuxt-img src="/images/register-form-arrow.png" alt="Arrow"
                class="hidden md:block absolute bottom-8 left-1/2 translate-x-12 w-28" >
            </nuxt-img>
        </div>

        <div class="bg-white dark:bg-gray-800 shadow-md rounded-md p-8 md:w-1/2 space-y-4">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white ">{{t('register.form.title')}}</h3>
            <p class="text-gray-500 dark:text-gray-300 text-sm">{{t('register.form.content')}}
            </p>

            <p v-if="successMessage" class="text-green-500 text-sm">{{successMessage}}</p>
            <p v-if="errorMessage" class="text-red-500 text-sm">{{ errorMessage}}</p>

            <input v-model="name" type="text" :placeholder="t('register.form.yourName')"
                class="w-full p-3 bg-gray-100 dark:bg-gray-900 rounded-sm text-sm" @keyup.enter="submitForm" />
            <input v-model="email" type="email" :placeholder="t('register.form.yourEmail')"
                class="w-full p-3 bg-gray-100 dark:bg-gray-900 rounded-sm text-sm" @keyup.enter="submitForm" />
            <input v-model="tel" type="tel" :placeholder="t('register.form.yourTel')"
                class="w-full p-3 bg-gray-100 dark:bg-gray-900 rounded-sm text-sm" @keyup.enter="submitForm" />

            <div class="flex items-center gap-3">
                <button @click="submitForm"
                    class="bg-[#1cbac8] text-white px-6 py-3 text-sm font-bold rounded-sm hover:bg-gray-900 transition">
                    {{t('register.form.button')}}
                </button>
                <p class="text-xs text-gray-500 dark:text-gray-300 flex items-center gap-1">
                    <span>
                        <Icon name="heroicons:information-circle" class="text-[#1cbac8] text-xl" />
                    </span>
                    {{t('register.form.info')}}
                </p>
            </div>
        </div>
    </div>

</template>

<script setup>

const {t}=useI18n()

const name = ref('')
const email = ref('')
const tel = ref('')
const errorMessage = ref('')
const successMessage = ref('')

defineI18nRoute({
  paths: {
    en: '/registerNow',
    tr: '/kayitOl'
  }
})

const validateEmail = (value) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(value)
}

const validatePhone = (value) => {
    const re = /([(]?)([5])([0-9]{2})([)]?)([\s]?)([0-9]{3})([\s]?)([0-9]{2})([\s]?)([0-9]{2})$/g
    return re.test(value)
}

const validateName = (value) => {
    return typeof value === 'string' && value.trim().length >= 3;
}

const submitForm = () => {
    if (!name.value || !email.value || !tel.value) {
        errorMessage.value = t('register.form.requiredError')
        return
    }
    if (!validateName(name.value)) {
        errorMessage.value = t('register.form.nameError')
        return
    }
    if (!validateEmail(email.value)) {
        errorMessage.value = t('register.form.emailError')
        return
    }
    if (!validatePhone(tel.value)) {
        errorMessage.value = t('register.form.telError')
        return
    }
    errorMessage.value = ''
    successMessage.value = t('register.form.successMessage')
    name.value = ''
    email.value = ''
    tel.value = ''
}

// const listItems = [
//     "Responsive Design",
//     "Great Support",
//     "Look Great on Any Devices",
//     "Highest Speed",
//     "Fresh Design",
//     "Useful and Intuitive Interface"
// ]
</script>
