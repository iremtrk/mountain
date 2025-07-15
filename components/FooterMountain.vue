<template>
  <footer class="bg-black text-white py-6">
    <div class="max-w-screen-xl mx-auto px-10 grid grid-cols-1 md:grid-cols-3 items-center text-center md:text-left">
      
      <div class="mb-4 md:mb-0">
        <p class="text-sm text-gray-300">
          <span class="text-[#1cbac8]">Mountain Template</span>.
          All Rights Reserved © 2025
        </p>
      </div>

      <div class="flex justify-center">
        <nuxt-img src="/images/logo-footer.png" alt="Logo" class="h-6 object-contain" />
      </div>

      <div class="flex justify-center md:justify-end space-x-4 text-[#1cbac8] text-sm">
        <nuxt-link to="/" class="hover:text-white">
          <i class="fab fa-facebook-f"></i>
        </nuxt-link>
        <nuxt-link to="/" class="hover:text-white">
          <i class="fab fa-behance"></i>
        </nuxt-link>
        <nuxt-link to="/" class="hover:text-white">
          <i class="fab fa-twitter"></i>
        </nuxt-link>
      </div>

    </div>
  </footer>
</template>
