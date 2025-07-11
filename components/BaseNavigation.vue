<template>
  <div>
    <header class="bg-white shadow">
      <nav class="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
    
        <nuxt-link to="/">
          <nuxt-img width="78" height="50" src="/images/logo.png" alt="logo" />
        </nuxt-link>
        <ul class="hidden md:flex flex-1 justify-center space-x-6 font-semibold text-sm">
          <li>
              <nuxt-link to="/" class="hover:text-[#1cbac8] transition">Home</nuxt-link>
          </li>
          <li>
              <nuxt-link to="/whatWeDo" class="hover:text-[#1cbac8]">What We Do</nuxt-link>
          </li>
          <li>
              <nuxt-link to="/featuredProjects" class="hover:text-[#1cbac8]">Featured Projects</nuxt-link>
          </li>
          <li>
              <nuxt-link to="/registerNow" class="hover:text-[#1cbac8]">Register Now</nuxt-link>
          </li>
          <li>
              <nuxt-link to="/featuredPlans" class="hover:text-[#1cbac8]">Featured Plans</nuxt-link>
          </li>
          <li>
              <nuxt-link to="/testimonials" class="hover:text-[#1cbac8]">Testimonials</nuxt-link>
          </li>
          <li>
              <nuxt-link to="/clients" class="hover:text-[#1cbac8]">Clients</nuxt-link>
          </li>
        </ul>
        <nuxt-link to="/registerNow"
          class="bg-[#1cbac8] text-white font-bold px-4 py-2 rounded hover:bg-black transition">READY TO START
        </nuxt-link>
      </nav>
    </header>
  </div>
</template>


<script setup>

</script>
