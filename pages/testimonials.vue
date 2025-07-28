<template>
    <div class="max-w-screen-xl mx-auto px-6 py-16 text-center">
        <div>
            <h5 class="text-[#1cbac8] font-bold">{{ $t('testimonials.sup-title') }}</h5>
            <h2 class="md:text-4xl font-bold text-gray-900 dark:text-white mb-2">{{ $t('testimonials.title') }}</h2>
            <span class="text-[#1cbac8] text-3xl mb-6">•••••</span>
            <p class="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10 text-sm">
                {{ $t('testimonials.content') }}
            </p>
        </div> <br> <br>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div v-for="item in testimonials"
                class="block bg-white dark:bg-gray-800 shadow-md rounded-md hover:shadow-lg transition relative pt-20 pb-6 px-4">
                <nuxt-img :src="item['image']" :alt="item['name']"
                    class="w-24 h-24 object-cover border-4 border-white shadow absolute -top-12 left-1/2 -translate-x-1/2" />

                <div class="text-center mt-4">
                    <h3 class="text-lg font-bold text-[#1cbac8]">{{ item.name }}</h3>
                    <p class="text-sm text-gray-600 dark:text-gray-300 mb-3">{{ item.text }}</p>
                    <span class="text-[#1cbac8]">★★★★★</span>
                </div>
            </div>
        </div>
    </div>
</template>



<script setup>
const{t,tm}=useI18n()
const testimonials = ref(tm('testimonials.items'))

defineI18nRoute({
  paths: {
    en: '/testimonials',
    tr: '/referanslar'
  }
})


// const testimonials = ref([
//     {
//         name: 'MORAD HAMDY',
//         text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
//         image: '/images/testimonials/testimonials-1.jpg',
//     },
//     {
//         name: 'AMR SADEK',
//         text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
//         image: '/images/testimonials/testimonials-2.jpg',
//     },
//     {
//         name: 'AHMED HAMDY',
//         text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
//         image: '/images/testimonials/testimonials-1.jpg',
//     },
// ])

const testimonialslice = computed(() => testimonials.value.slice(0, 3))
onMounted(() => {
    setInterval(() => {
        const first = testimonials.value.shift()
        testimonials.value.push(first)
    }, 5000)
})

</script>
