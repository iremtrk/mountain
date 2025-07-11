<template>
    <div class="bg-[#f9f9f9] py-16 px-6">
        <div class="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">

            <div class="md:w-1/2 space-y-6 text-left relative">
                <h5 class="text-[#1cbac8] font-bold">REGISTER</h5>
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900">Start Your Free Trial</h2>
                <div class="text-[#1cbac8] text-3xl">•••••</div>
                <p class="text-gray-500 text-sm leading-relaxed">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been
                    standard. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </p>

                <ul class="space-y-2">
                    <li v-for="(item, i) in listItems" :key="i" class="flex items-start gap-2">
                        <span class="text-[#1cbac8] mt-1">
                            <Icon name="heroicons:arrow-right-circle" />
                        </span>
                        <strong class="text-gray-800 text-sm">{{ item }}</strong>
                    </li>
                </ul>

                <nuxt-img src="/images/register-form-arrow.png" alt="Arrow"
                    class="hidden md:block absolute bottom-8 left-1/2 translate-x-12 w-28" />
            </div>

            <div class="bg-white shadow-md rounded-md p-8 md:w-1/2 space-y-4">
                <h3 class="text-xl font-bold text-gray-900">REGISTER NOW</h3>
                <p class="text-gray-500 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod
                    tempor ever since the 1500s.</p>

                <input type="text" placeholder="Your Name"
                    class="w-full p-3 bg-gray-100 rounded-sm text-sm outline-none" />
                <input type="email" placeholder="Your Email"
                    class="w-full p-3 bg-gray-100 rounded-sm text-sm outline-none" />
                <input type="tel" placeholder="Phone Number"
                    class="w-full p-3 bg-gray-100 rounded-sm text-sm outline-none" />

                <div class="flex items-center gap-3">
                    <nuxt-link to="/"
                        class="bg-[#1cbac8] text-white px-6 py-3 text-sm font-bold rounded-sm hover:bg-gray-900 transition">
                        READY TO START
                    </nuxt-link>
                    <p class="text-xs text-gray-500 flex items-center gap-1">
                        <span>
                            <Icon name="heroicons:information-circle" class="text-[#1cbac8] text-xl" />
                        </span>
                        We will never share your personal info
                    </p>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
const listItems = [
    "Responsive Design",
    "Great Support",
    "Look Great on Any Devices",
    "Highest Speed",
    "Fresh Design",
    "Useful and Intuitive Interface"
]
</script>
