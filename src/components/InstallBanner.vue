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

// Track if the user has explicitly dismissed the banner *in the current session*
const dismissedInSession = ref(false)

onMounted(() => {
  // Check if the app is already installed
  const installed = window.matchMedia('(display-mode: standalone)').matches

  // Initial check: if supported and not installed, show the banner
  if (isInstallPromptSupported.value && !installed && !dismissedInSession.value) {
    showBanner.value = true
  }
})

// Watch for changes in isInstallPromptSupported (e.g., when the event fires)
watch(isInstallPromptSupported, (newValue) => {
  const installed = window.matchMedia('(display-mode: standalone)').matches
  if (newValue && !installed && !dismissedInSession.value) {
    showBanner.value = true
  } else {
    showBanner.value = false // Hide if not supported or already dismissed in session/installed
  }
})

const install = async () => {
  const outcome = await promptInstall()
  console.log('User chose:', outcome)
  showBanner.value = false

  if (outcome === 'dismissed') {
    dismissedInSession.value = true;
  }
}

const dismiss = () => {
  showBanner.value = false
  dismissedInSession.value = true;
}
</script>