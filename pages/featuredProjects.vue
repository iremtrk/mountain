<template>
    <div class="max-w-screen-xl mx-auto px-6 py-16 text-center">
        <h5 class="text-[#1cbac8] font-bold">{{ $t('projects.sup-title') }}</h5>
        <h2 class="md:text-4xl font-bold text-gray-900 mb-2">{{ $t('projects.title') }}</h2>
        <span class="text-[#1cbac8] text-3xl mb-6">•••••</span>
        <p class="text-gray-600 max-w-2xl mx-auto mb-10 text-sm">
            {{ $t('projects.content') }}
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <nuxt-link v-for="item in allProjects" to="/"
                class="block bg-white shadow-md rounded-md overflow-hidden hover:shadow-lg transition text-left">
                <nuxt-img :src="item['image']" :alt="item['title']" class="w-full h-64 object-cover" />
                <div class="p-5">
                    <h3 class="text-lg font-bold text-gray-900 mb-2 hover:underline hover:text-[#1cbac8]">
                        {{ item.title }}
                    </h3>
                    <div class="text-[#1cbac8] text-xl mb-2">•••</div>
                    <p class="text-sm text-gray-600 mb-3">{{ item.description }}</p>
                    <span class="text-[#1cbac8] text-sm font-medium hover:underline hover:text-gray-900">
                        {{ item.more }}
                    </span>
                </div>
            </nuxt-link>
        </div>
    </div>
</template>



<script setup>
// const allProjects = ref([
//     {
//         title: 'GREAT PROJECT',
//         image: '/images/featuredProjects/img-2.jpg',
//         description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been indust...'
//     },
//     {
//         title: 'THE BEST PROJECT',
//         image: '/images/featuredProjects/img-3.jpg',
//         description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been indust...'
//     },
//     {
//         title: 'AWESOME PROJECT',
//         image: '/images/featuredProjects/img-1.jpg',
//         description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been indust...'
//     }
// ])

const { tm } = useI18n()
const allProjects = ref(tm('projects.items'))

const visibleProjects = computed(() => allProjects.value.slice(0, 3))
onMounted(() => {
    setInterval(() => {
        const first = allProjects.value.shift()
        allProjects.value.push(first)
    }, 5000)
})
</script>
