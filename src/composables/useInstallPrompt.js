import { ref, onMounted } from 'vue'

export function useInstallPrompt() {
  const deferredPrompt = ref(null)
  const isInstallPromptSupported = ref(false)

  onMounted(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault()
      deferredPrompt.value = e
      isInstallPromptSupported.value = true
    })
  })

  const promptInstall = async () => {
    if (deferredPrompt.value) {
      deferredPrompt.value.prompt()
      const { outcome } = await deferredPrompt.value.userChoice
      deferredPrompt.value = null
      return outcome // 'accepted' or 'dismissed'
    }
  }

  return {
    isInstallPromptSupported,
    promptInstall,
  }
}
