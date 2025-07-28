<template>
  <div class="max-w-xl mx-auto mt-10">
    <div class="text-center mb-6">
      <h1 class="text-2xl font-bold">{{$t('profile.title') }} {{ userInfo.username }}</h1>
      <h2>{{$t('profile.sub_title') }}</h2>
    </div>
    <div class="space-y-6">
      <div>
        <div class="flex items-center justify-between">
          <div>
            <p class="font-semibold">{{$t('profile.form.email') }}</p>
            <p class="text-gray-700 dark:text-gray-300">{{ userInfo.email }}</p>
          </div>
          <button class="text-[#1cbac8] hover:underline" @click="showEmailInput = !showEmailInput">
            {{$t('profile.form.changemail') }}
          </button>
        </div>
        <div v-if="showEmailInput" class="mt-2 flex gap-2 justify-between">
          <input v-model="newEmail" :placeholder="$t('profile.form.phemail')" class="border p-2 rounded dark:text-black" />
          <button @click="updateEmail" class="bg-[#1cbac8] text-white  px-4 py-2 rounded">{{$t('profile.form.button') }}</button>
        </div>
        <div v-if="emailSuccessMessage" class="text-green-600 mt-2">{{ emailSuccessMessage }}</div>
        <div v-if="emailErrorMessage" class="text-red-600 mt-2">{{ emailErrorMessage }}</div>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <div>
            <p class="font-semibold">{{$t('profile.form.password') }}</p>
            <p class="text-gray-700 dark:text-gray-300">********</p>
          </div>
          <button class="text-[#1cbac8] hover:underline" @click="showPasswordInput = !showPasswordInput">
            {{$t('profile.form.changepass') }}
          </button>
        </div>
        <div>
          <div v-if="showPasswordInput" class="mt-2 flex gap-2 justify-between">
            <input v-model="currentPassword" type="password" :placeholder="$t('profile.form.phpass')"
              class="border p-2 rounded dark:text-black" />
            <input v-model="newPassword" type="password" :placeholder="$t('profile.form.phpassnew')"
              class="border p-2 rounded dark:text-black" />
            <button @click="updatePassword" class="bg-[#1cbac8] text-white  px-4 py-2 rounded">{{$t('profile.form.button') }}</button>
          </div>
          <div v-if="successMessage" class="text-green-600 mt-2">{{ successMessage }}</div>
          <div v-if="errorMessage" class="text-red-600 mt-2">{{ errorMessage }}</div>
        </div>
      </div>
      <div class="flex justify-center">
        <button @click="showDeleteModal = true" class="text-white bg-red-700 py-2 px-4 rounded">{{$t('profile.delete.button') }}</button>
      </div>
    </div>

    <div v-if="showDeleteModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div class="bg-white dark:bg-gray-800 p-6 rounded shadow-md w-80">
        <h2 class="text-lg font-bold mb-2">{{$t('profile.delete.title') }}</h2>
        <p class="mb-4">{{$t('profile.delete.content') }}</p>
        <input v-model="deletePassword" type="password" placeholder="Password"
          class="border p-2 w-full rounded mb-2 dark:text-black" />
        <div class="flex justify-end gap-2">
          <button @click="showDeleteModal = false" class="px-4 py-2 rounded bg-gray-500">{{$t('profile.delete.cancelbtn') }}</button>
          <button @click="confirmDeleteAccount" class="px-4 py-2 rounded bg-red-700 text-white">{{$t('profile.delete.deletebtn') }}</button>
        </div>
        <div v-if="deleteError" class="text-red-600 mt-2">{{ deleteError }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>

const route = useRoute()
const username = route.params.username

const { data: userInfo, refresh } = await useFetch('http://localhost:5000/api/user/' + username) //(`http://localhost:5000/api/user/${username}`)

const showEmailInput = ref(false)
const newEmail = ref('')
const emailSuccessMessage = ref('')
const emailErrorMessage = ref('')

const showPasswordInput = ref(false)
const currentPassword = ref('')
const newPassword = ref('')
const successMessage = ref('')
const errorMessage = ref('')

const showDeleteModal = ref(false)
const deletePassword = ref('')
const deleteError = ref('')

const updateEmail = async () => {
  emailSuccessMessage.value = ''
  emailErrorMessage.value = ''
  if (!newEmail.value) return
  if (newEmail.value === userInfo.value.email) {
    emailErrorMessage.value = $t('profile.updateEmailErrorMessage')
    return
  }
  const res = await fetch(`http://localhost:5000/api/user/${username}/email`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: newEmail.value })
  })
  const data = await res.json()
  if (res.ok) {
    emailSuccessMessage.value = $t('profile.emailSuccessMessage')
    newEmail.value = ''
    showEmailInput.value = false
    refresh()
  } else {
    emailErrorMessage.value = $t('profile.emailErrorMessage')
  }
}

const updatePassword = async () => {
  successMessage.value = ''
  errorMessage.value = ''
  if (!currentPassword.value || !newPassword.value) return
  if (currentPassword.value === newPassword.value) {
    errorMessage.value = $t('profile.updatePasswordErrorMessage')
    return
  }
  const res = await fetch(`http://localhost:5000/api/user/${username}/password`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ currentPassword: currentPassword.value, newPassword: newPassword.value })
  })
  const data = await res.json()
  if (res.ok) {
    successMessage.value ='Password changed successfully.'
    currentPassword.value = ''
    newPassword.value = ''
    showPasswordInput.value = false
  } else {
    errorMessage.value = 'Password change failed.'
  }
}

const confirmDeleteAccount = async () => {
  deleteError.value = ''
  if (!deletePassword.value) {
    deleteError.value = 'Password is required.'
    return
  }
  try {
    const res = await fetch(`http://localhost:5000/api/user/${username}/delete`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password: deletePassword.value })
    })
    const data = await res.json()
    if (res.ok) {
      const authCookie = useCookie('auth')
      authCookie.value = null
      navigateTo('/')
    } else {
      deleteError.value = data.message || 'Account deletion failed.'
    }
  } catch (e) {
    deleteError.value = 'An error occurred.'
  }
}
</script>