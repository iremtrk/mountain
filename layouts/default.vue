<template>
    <div class="min-h-screen flex flex-col">
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
