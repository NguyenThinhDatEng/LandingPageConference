export function useFormValidation() {
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }
  
  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9+\-\s()]+$/
    return phoneRegex.test(phone) && phone.length >= 10
  }
  
  const validateForm = (formData) => {
    const errors = []
    
    if (!formData.name || !formData.name.trim()) {
      errors.push('Tên không được để trống')
    }
    
    if (!formData.email || !validateEmail(formData.email)) {
      errors.push('Email không hợp lệ')
    }
    
    if (!formData.phone || !validatePhone(formData.phone)) {
      errors.push('Số điện thoại không hợp lệ')
    }
    
    if (!formData.content || !formData.content.trim()) {
      errors.push('Nội dung không được để trống')
    }
    
    return errors
  }
  
  return {
    validateEmail,
    validatePhone,
    validateForm
  }
} 