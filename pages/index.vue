<template>
  <div class="pb-[70px]">
    <hero-slider />
    <our />
    <!-- <ul>
      <li v-for="user in users">
        <a :href="'localhost:5000/user/'+user._id">{{ user.username }}</a>
      </li>
    </ul> -->
  </div>
</template>

<script setup>

const router = useRouter()
const { data } = await useFetch('/api/users')
const users = ref(data.value)


const logout = () => {
  localStorage.removeItem('isLoggedIn')
  router.push('/login')
}
</script>
