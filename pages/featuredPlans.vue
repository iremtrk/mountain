
<template>
  <div class="max-w-screen-xl mx-auto flex flex-col px-6 py-16 md:flex-row items-center justify-between gap-10">
    <div v-for="plan in $tm('plans')" 
      class="bg-gray-100 dark:bg-gray-900 border rounded-lg shadow-lg p-10 text-center w-full md:w-1/3">
      <div class="text-2xl mb-4">{{ plan.star }}</div>
      <h2 class="text-xl border-b font-bold mb-4">{{ plan.name }}</h2>
      <p class="text-4xl font-bold mb-2">{{ plan.price }}</p>
      <p class="text-gray-500 dark:text-gray-300 mb-6">{{plan.per}}</p>

      <ul class="space-y-4 text-left text-gray-700 dark:text-gray-300">
        <li v-for="feature in plan.features"
          class="flex items-center justify-between border-b py-5">
          <span class="font-semibold">{{ feature.name }}</span>
          <span class="ml-2">
            <Icon name="heroicons:check" v-if="feature.available" class="h-5 w-5 text-black" />
            <Icon name="heroicons:x-circle" v-else class="h-5 w-5 text-black" />
          </span>
        </li>
      </ul>

      <nuxt-link to="/registerNow">
        <button class="mt-8 text-white bg-[#1cbac8] hover:bg-transparent border-2 border-[#1cbac8] hover:text-[#1cbac8] hover:border-2 px-6 py-3 rounded-sm font-semibold transition" :class="plan.buttonClass">
          {{plan.buttonClass}}
        </button>
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>

defineI18nRoute({
  paths: {
    en: '/featuredPlans',
    tr: '/oneCikanPlanlar'
  }
})



// const plans = ref([
//   {
//     star: '★',
//     name: 'BASIC',
//     price: 125,
//     buttonClass: 'bg-[#1cbac8] hover:bg-transparent border-2 border-[#1cbac8] hover:text-[#1cbac8] hover:border-2 px-6 py-3 rounded-sm font-semibold transition',
//     features: [
//       { name: 'Full Analytic', available: true },
//       { name: 'Mobile Site and Store', available: true },
//       { name: '24h Support', available: false },
//       { name: 'Unlimited Email Accounts', available: false }
//     ]
//   },
//   {
//     star: '★★★',
//     name: 'STANDARD',
//     price: 225,
//     buttonClass: 'bg-black hover:bg-transparent border-2 border-black hover:text-black hover:border-2 px-6 py-3 rounded-sm font-semibold transition',
//     features: [
//       { name: 'Full Analytic', available: true },
//       { name: 'Mobile Site and Store', available: true },
//       { name: '24h Support', available: true },
//       { name: 'Unlimited Email Accounts', available: false }
//     ]
//   },
//   {
//     star: '★',
//     name: 'BUSINESS',
//     price: 325,
//     buttonClass: 'bg-[#1cbac8] hover:bg-transparent border-2 border-[#1cbac8] hover:text-[#1cbac8] hover:border-2 px-6 py-3 rounded-sm font-semibold transition',
//     features: [
//       { name: 'Full Analytic', available: true },
//       { name: 'Mobile Site and Store', available: true },
//       { name: '24h Support', available: true },
//       { name: 'Unlimited Email Accounts', available: true }
//     ]
//   }
// ])
</script>
