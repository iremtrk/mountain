export default defineNuxtRouteMiddleware((to) => {
  const authCookie = useCookie('auth')
  const isLoggedIn = !!authCookie.value

  if (!isLoggedIn && to.path !== '/login' && to.path !== '/signUp') {
    return navigateTo('/login')
  }
  if (isLoggedIn && to.path === '/login') {
    return navigateTo('/')
  }
})