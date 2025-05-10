import { ref, watchEffect } from 'vue'

const isDark = ref(false)

// Initialize from localStorage
if (localStorage.getItem('theme') === 'dark') {
  isDark.value = true
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

// Watch for changes
watchEffect(() => {
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
})

export function useDarkMode() {
  return {
    isDark,
    toggleTheme: () => {
      isDark.value = !isDark.value
    }
  }
}
