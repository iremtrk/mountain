<template>
    <div class="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-black dark:text-white">
        <base-navigation/>
        <main class="flex-1 ">
          <slot/>
        </main>
        <div>
          <footer-mountain/>
        </div>
    </div>
</template>

<script setup>

</script>
