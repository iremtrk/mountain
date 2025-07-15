<template>
    <div class="max-w-screen-xl mx-auto px-6 py-16 text-center">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <nuxt-link v-for="(item, index) in ourProjects" :key="index" to="/"
                class="block bg-white shadow-md rounded-md overflow-hidden hover:shadow-lg transition text-left ">
                <div class="p-5">
                    <h3 class="text-lg font-bold text-gray-900 mb-2 hover:underline hover:text-[#1cbac8]">{{ item.title}}</h3>
                    <div class="text-[#1cbac8] text-xl mb-2">•••</div>
                    <p class="text-sm text-gray-600 mb-3">{{ item.description }}</p>
                    <span class="text-[#1cbac8] text-sm font-medium hover:underline hover:text-gray-900">READ MORE...</span>
                </div>
            </nuxt-link>
        </div>
    </div>
</template>

<script setup>
const ourAll = ref([
    {
        title: 'OUR MISSION',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been indust...'
    },
    {
        title: 'OUR VISION',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been indust...'
    },
    {
        title: 'OUR PROCESS',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been indust...'
    },
    {
        title: 'OUR STRATEGY',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been indust...'
    },
    {
        title: 'OUR RESULT',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been indust...'
    },


])

const ourProjects = computed(() => ourAll.value.slice(0, 3))
onMounted(() => {
    setInterval(() => {
        const first = ourAll.value.shift()
        ourAll.value.push(first)
    }, 5000)
})
</script>