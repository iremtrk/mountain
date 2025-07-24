<template>
    <div class="max-w-screen-xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-white dark:bg-gray-900 text-black dark:text-white">
        <div>
            <nuxt-img src="/images/what-we-do.jpg" alt="What We Can Do"
                class="max-w-[450px] w-full h-auto object-contain" >
            </nuxt-img>
        </div>
        <div class="space-y-6">
            <p class="text-[#1cbac8] font-bold tracking-wide">{{ $t ('services.sup-title') }}</p>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
               {{ $t('services.title') }}
            </h2>
            <div class="text-[#1cbac8] text-3xl">•••••</div>

            <p class="text-gray-400 dark:text-gray-300 text-sm leading-relaxed">
                {{ $t('services.content') }}
            </p>

            <div class="space-y-6">

                <div v-for="item in $tm('services.items')" class="flex items-start gap-4">
                    <Icon :name="item['icon']" class="text-[#1cbac8] text-5xl" />
                    <div>
                        <h4 class="font-bold text-gray-900 dark:text-white">{{ item.header}}</h4>
                        <p class="text-sm text-gray-400 dark:text-gray-300">{{item.content}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

defineI18nRoute({
  paths: {
    en: '/whatWeDo',
    tr: '/neYapabiliriz'
  }
})


</script>
