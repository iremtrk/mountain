<template>
    <div>   
        <div class="pb-[70px]">
            <hero-slider/>
            <our/>
        </div>
    </div>
</template>

<script setup>
const router = useRouter()

const logout = () => {
  localStorage.removeItem('isLoggedIn')
  router.push('/login')
}
</script>
