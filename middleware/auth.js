export default defineNuxtRouteMiddleware((to) => {
  const isLoggedIn = useCookie('isLoggedIn')


  if (!isLoggedIn.value && to.path !== '/login') {
    return navigateTo('/login')
  }


  if (isLoggedIn.value && to.path === '/login') {
    return navigateTo('/')
  }
})