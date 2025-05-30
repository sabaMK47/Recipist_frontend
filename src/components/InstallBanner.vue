<!-- components/InstallBanner.vue -->
<template>
    <div v-if="showBanner" class="fixed bottom-4 right-4 bg-white border p-4 rounded shadow-lg z-50">
      <p class="mb-2 font-semibold">برای دسترسی راحت تر اپلیکیشن Recipist رو نصب کنید :)</p>
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
    // Show the banner only if install is possible
    if (isInstallPromptSupported.value) {
      showBanner.value = true
    }
  })
  
  const install = async () => {
    const outcome = await promptInstall()
    console.log('User response to install:', outcome)
    showBanner.value = false
  }
  
  const dismiss = () => {
    showBanner.value = false
  }
  </script>
  