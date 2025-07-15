<template>
    <div class="max-w-screen-xl mx-auto px-6 py-16 text-center">
        <div>
            <h5 class="text-[#1cbac8] font-bold">TESTIMONIALS</h5>
            <h2 class="md:text-4xl font-bold text-gray-900 mb-2">Our Best Clients</h2>
            <span class="text-[#1cbac8] text-3xl mb-6">•••••</span>
            <p class="text-gray-600 max-w-2xl mx-auto mb-10 text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s
            </p>
        </div> <br> <br>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div v-for="(person, index) in testimonials" :key="index"
                class="block bg-white shadow-md rounded-md hover:shadow-lg transition relative pt-20 pb-6 px-4">
                <nuxt-img :src="person.image" :alt="person.name"
                    class="w-24 h-24 object-cover border-4 border-white shadow absolute -top-12 left-1/2 -translate-x-1/2" />

                <div class="text-center mt-4">
                    <h3 class="text-lg font-bold text-[#1cbac8]">{{ person.name }}</h3>
                    <p class="text-sm text-gray-600 mb-3">{{ person.text }}</p>
                    <span class="text-[#1cbac8]">★★★★★</span>
                </div>
            </div>
        </div>
    </div>
</template>



<script setup>
const testimonials = ref([
    {
        name: 'MORAD HAMDY',
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        image: '/images/testimonials/testimonials-1.jpg',
    },
    {
        name: 'AMR SADEK',
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        image: '/images/testimonials/testimonials-2.jpg',
    },
    {
        name: 'AHMED HAMDY',
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        image: '/images/testimonials/testimonials-1.jpg',
    },
])


const testimonials1 = computed(() => testimonials.value.slice(0, 3))
onMounted(() => {
    setInterval(() => {
        const first = testimonials.value.shift()
        testimonials.value.push(first)
    }, 5000)
})

</script>
