<template>
    <div class="relative w-full h-screen overflow-hidden">
        <div v-for="(slide, index) in slides" :key="index"
            class="absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000"
            :class="currentIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0'"
            :style="`background-image: url(${slide.image})`">
            <div class="w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white px-4">
                <h2 class="text-3xl md:text-5xl font-bold mb-4 leading-tight whitespace-pre-line">{{slide.title}}</h2>
                <span class="text-[#1cbac8] text-4xl leading-none mb-4">•••••</span>
                <p class="max-w-xl text-sm md:text-base mb-6">{{ slide.text }}</p>

                <nuxt-link to="/"
                    class="bg-[#1cbac8] hover:bg-transparent border-2 border-[#1cbac8] hover:text-[#1cbac8] hover:border-2 px-6 py-3 rounded-sm font-semibold transition ">
                    {{ t('slides.button') }}
                </nuxt-link>
            </div>
        </div>

        <button @click="prevSlide"
            class="z-20 absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 text-white py-6 px-4 hover:bg-[#1cbac8]">
            ‹
        </button>

        <button @click="nextSlide"
            class="z-20 absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 text-white py-6 px-4 hover:bg-[#1cbac8]">
            ›
        </button>

        <div class="z-20 absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-2">
            <span v-for="(slide, index) in slides" :key="index" class="w-3 h-3 rounded-full cursor-pointer"
                :class="currentIndex === index ? 'bg-[#1cbac8]' : 'bg-gray-400'" @click="currentIndex = index"></span>
        </div>
    </div>
</template>

<script setup>
const { t, tm } = useI18n()

const slides = computed(() => tm('slides.items'))

const currentIndex = ref(0)

const nextSlide = () => {
    currentIndex.value = (currentIndex.value + 1) % slides.value.length
}

const prevSlide = () => {
    currentIndex.value = (currentIndex.value - 1 + slides.value.length) % slides.value.length
}

let intervalId = null

onMounted(() => {
  intervalId = setInterval(() => {
    nextSlide()
  }, 10000)
})

onBeforeUnmount(() => {
  clearInterval(intervalId)
})
</script>
