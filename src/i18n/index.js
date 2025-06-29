import { createI18n } from 'vue-i18n'
import vi from './locales/vi.js'
import en from './locales/en.js'

const messages = {
  vi,
  en
}

// Lấy ngôn ngữ từ localStorage hoặc default
const getDefaultLocale = () => {
  const savedLocale = localStorage.getItem('locale')
  return savedLocale || 'vi'
}

export default createI18n({
  legacy: false, // Sử dụng Composition API
  locale: getDefaultLocale(),
  fallbackLocale: 'vi',
  messages
}) 