<template>
  <div v-if="showBanner" class="fixed bottom-4 right-4 bg-white dark:bg-dark p-4 rounded-2xl border shadow-lg z-50">
    <p class="pb-4 font-semibold dark:text-white">برای دسترسی راحت‌تر اپلیکیشن Recipist رو نصب کنید :)</p>
    <button @click="install" class="bg-main text-white px-3 py-1 rounded">
      نصب
    </button>
    <button @click="dismiss" class="!px-6 text-gray-500 dark:text-gray-200 text-sm">الان نه</button>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useInstallPrompt } from '@/composables/useInstallPrompt'

const showBanner = ref(false)
const { isInstallPromptSupported, promptInstall } = useInstallPrompt()

const LOCAL_STORAGE_KEY = 'pwaBannerDismissed'
const dismissedInSession = ref(false)

const isMobile = () => {
  return window.innerWidth <= 768 || /iPhone|Android|Mobile/i.test(navigator.userAgent)
}

const isAppInstalled = () => {
  return window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true
}

const wasDismissedBefore = () => {
  return localStorage.getItem(LOCAL_STORAGE_KEY) === 'true'
}

const shouldShowBanner = () => {
  return isInstallPromptSupported.value && !isAppInstalled() && !dismissedInSession.value && !wasDismissedBefore() && isMobile()
}

onMounted(() => {
  if (shouldShowBanner()) {
    showBanner.value = true
  }
})

watch(isInstallPromptSupported, () => {
  showBanner.value = shouldShowBanner()
})

const install = async () => {
  const outcome = await promptInstall()
  console.log('User chose:', outcome)
  showBanner.value = false

  if (outcome === 'dismissed') {
    dismissedInSession.value = true
    localStorage.setItem(LOCAL_STORAGE_KEY, 'true')
  }
}

const dismiss = () => {
  showBanner.value = false
  dismissedInSession.value = true
  localStorage.setItem(LOCAL_STORAGE_KEY, 'true')
}
</script>

