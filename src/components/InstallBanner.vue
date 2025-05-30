<template>
    <div v-if="showBanner" class="fixed bottom-4 right-4 bg-white border p-4 rounded shadow-lg z-50">
      <p class="mb-2 font-semibold">برای دسترسی راحت‌تر اپلیکیشن Recipist رو نصب کنید :)</p>
      <button @click="install" class="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
        نصب
      </button>
      <button @click="dismiss" class="ml-2 text-gray-500 text-sm">الان نه</button>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { useInstallPrompt } from '@/composables/useInstallPrompt'
  
  const showBanner = ref(false)
  const { isInstallPromptSupported, promptInstall } = useInstallPrompt()
  
  onMounted(() => {
    const dismissed = localStorage.getItem('pwa-install-dismissed')
    const installed = window.matchMedia('(display-mode: standalone)').matches
    if (!dismissed && isInstallPromptSupported.value && !installed) {
      showBanner.value = true
    }
  })
  
  const install = async () => {
    const outcome = await promptInstall()
    console.log('User chose:', outcome)
    showBanner.value = false
    if (outcome === 'dismissed') {
      localStorage.setItem('pwa-install-dismissed', 'true')
    }
  }
  
  const dismiss = () => {
    showBanner.value = false
    localStorage.setItem('pwa-install-dismissed', 'true')
  }
  </script>
  