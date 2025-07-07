import { ref } from 'vue'

export function useFormSubmission() {
  const isSubmitting = ref(false)
  const submitError = ref(null)
  const submitSuccess = ref(false)
  
  const submitForm = async (formData) => {
    isSubmitting.value = true
    submitError.value = null
    submitSuccess.value = false
    
    try {
      // Sử dụng Google Apps Script URL - bạn cần thay thế bằng URL thực tế
      const url = "https://script.google.com/macros/s/AKfycbwIsUqKcm4Ie8MLX-mC1nwc6miVx-4Bw1y7aZvhhVopqt1w1BaLMdDVkUOirlsURIRoFg/exec"
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })
      
      const result = await response.json()
      
      if (result.success) {
        submitSuccess.value = true
        return { success: true }
      } else {
        throw new Error(result.message || 'Có lỗi xảy ra khi gửi thông tin')
      }
    } catch (error) {
      submitError.value = error.message
      return { success: false, error: error.message }
    } finally {
      isSubmitting.value = false
    }
  }
  
  const resetForm = () => {
    submitError.value = null
    submitSuccess.value = false
  }
  
  return {
    isSubmitting,
    submitError,
    submitSuccess,
    submitForm,
    resetForm
  }
} 