export default defineNuxtRouteMiddleware((to) => {
  const isLoggedIn = process.import.meta.client && localStorage.getItem('isLoggedIn')


  if (!isLoggedIn.value && to.path !== '/login') {
    return navigateTo('/login')
  }


  if (isLoggedIn.value && to.path === '/login') {
    return navigateTo('/')
  }
})