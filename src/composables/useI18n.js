import { useI18n } from 'vue-i18n'

export function useCustomI18n() {
  const { t, locale } = useI18n()
  
  const changeLanguage = (newLocale) => {
    locale.value = newLocale
    localStorage.setItem('locale', newLocale)
  }
  
  const getCurrentLanguage = () => {
    return locale.value
  }
  
  const isVietnamese = () => {
    return locale.value === 'vi'
  }
  
  const isEnglish = () => {
    return locale.value === 'en'
  }
  
  return {
    t,
    locale,
    changeLanguage,
    getCurrentLanguage,
    isVietnamese,
    isEnglish
  }
} 