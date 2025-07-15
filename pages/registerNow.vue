<template>

    <div class="max-w-screen-xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-10">
        <div class="space-y-6 text-left relative">
            <h5 class="text-[#1cbac8] font-bold">REGISTER</h5>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900">Start Your Free Trial</h2>
            <div class="text-[#1cbac8] text-3xl">•••••</div>
            <p class="text-gray-500 text-sm leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been
                standard. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </p>

            <ul class="space-y-2">
                <li v-for="(item, index) in listItems" :key="index" class="flex items-start gap-2">
                    <span class="text-[#1cbac8] mt-1">
                        <Icon name="heroicons:arrow-right-circle" />
                    </span>
                    <strong class="text-gray-800 text-sm">{{ item }}</strong>
                </li>
            </ul>

            <nuxt-img src="/images/register-form-arrow.png" alt="Arrow"
                class="hidden md:block absolute bottom-8 left-1/2 translate-x-12 w-28" >
            </nuxt-img>
        </div>

        <div class="bg-white shadow-md rounded-md p-8 md:w-1/2 space-y-4">
            <h3 class="text-xl font-bold text-gray-900">REGISTER NOW</h3>
            <p class="text-gray-500 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod
                tempor ever since the 1500s.
            </p>

            <p v-if="successMessage" class="text-green-500 text-sm">{{ successMessage }}</p>
            <p v-if="errorMessage" class="text-red-500 text-sm">{{ errorMessage }}</p>

            <input v-model="name" type="text" placeholder="Your Name"
                class="w-full p-3 bg-gray-100 rounded-sm text-sm" />
            <input v-model="email" type="email" placeholder="Your Email"
                class="w-full p-3 bg-gray-100 rounded-sm text-sm" />
            <input v-model="tel" type="tel" placeholder="Phone Number"
                class="w-full p-3 bg-gray-100 rounded-sm text-sm" />

            <div class="flex items-center gap-3">
                <button @click="submitForm"
                    class="bg-[#1cbac8] text-white px-6 py-3 text-sm font-bold rounded-sm hover:bg-gray-900 transition">
                    READY TO START
                </button>
                <p class="text-xs text-gray-500 flex items-center gap-1">
                    <span>
                        <Icon name="heroicons:information-circle" class="text-[#1cbac8] text-xl" />
                    </span>
                    We will never share your personal info
                </p>
            </div>
        </div>
    </div>

</template>

<script setup>


const name = ref('')
const email = ref('')
const tel = ref('')
const errorMessage = ref('')
const successMessage = ref('')

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
        errorMessage.value = 'Please fill out all fields.'
        return
    }
    if (!validateName(name.value)) {
        errorMessage.value = 'Name must be at least 3 letters long.'
        return
    }
    if (!validateEmail(email.value)) {
        errorMessage.value = 'Please enter a valid email address.'
        return
    }
    if (!validatePhone(tel.value)) {
        errorMessage.value = 'Please enter a valid phone number.'
        return
    }
    errorMessage.value = ''
    successMessage.value = 'Thank you for your submission!'
    name.value = ''
    email.value = ''
    tel.value = ''
}

const listItems = [
    "Responsive Design",
    "Great Support",
    "Look Great on Any Devices",
    "Highest Speed",
    "Fresh Design",
    "Useful and Intuitive Interface"
]
</script>
