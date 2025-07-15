<template>
    <div class="max-w-screen-xl mx-auto px-6 py-16 text-center">
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center justify-items-center mb-20">
            <div v-for="(item, index) in clients" :key="index">
                <nuxt-img :src="item.image" alt="client logo"
                    class="w-28 h-auto object-contain grayscale hover:grayscale-0 transition" />
            </div>
        </div>
    </div>

    <div class="bg-black w-full text-white text-center py-24 px-4 bg-no-repeat bg-center bg-contain flex items-center justify-center"
        style="background-image: url('/images/cta-bg.png')">
        <div class="max-w-3xl mx-auto">
            <h4 class="text-[#1cbac8] font-semibold mb-2">CALL TO ACTION</h4>
            <h2 class="text-4xl md:text-5xl font-bold mb-4">Are You Ready Now?</h2>
            <span class="text-[#1cbac8] text-3xl mb-4 block">•••••</span>
            <p class="text-gray-300 mb-8 text-sm md:text-base">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </p>
                <nuxt-link to="/registerNow"
                    class="bg-[#1cbac8] hover:bg-transparent border-2 border-[#1cbac8] hover:text-[#1cbac8] hover:border-2 px-6 py-3 rounded-sm font-semibold transition ">
                    EXPLORE MORE
                </nuxt-link>
        </div>
    </div>
</template>


<script setup>
const clients = ref([
    { image: '/images/clients/img-1.png' },
    { image: '/images/clients/img-2.png' },
    { image: '/images/clients/img-3.png' },
    { image: '/images/clients/img-4.png' },
    { image: '/images/clients/img-5.png' },
])

const clients1 = computed(() => clients.value.slice(0, 3))
onMounted(() => {
    setInterval(() => {
        const first = clients.value.shift()
        clients.value.push(first)
    }, 5000)
})
</script>
