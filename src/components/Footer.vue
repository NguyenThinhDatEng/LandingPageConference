<template>
  <footer class="relative" id="footer">
    <div
      class="form-register absolute -top-1/2 left-1/2 transform -translate-x-1/2 translate-y-[30%] sm:translate-y-[18%] md:translate-y-[4%] bg-yellow-500 w-11/12 md:w-6xl mx-auto rounded-none px-4 md:px-16 py-6 md:py-8 z-10">
      <h3 class="text-center text-xl md:text-2xl font-bold tracking-wide text-black mb-6 md:mb-8">
        {{ $t('footer.registerTitle') }}
      </h3>
      
      <!-- Success Message -->
      <div v-if="submitSuccess" class="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
        {{ $t('form.successMessage') }}
      </div>
      
      <!-- Error Message -->
      <div v-if="submitError" class="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
        {{ submitError }}
      </div>
      
      <!-- Validation Errors -->
      <div v-if="validationErrors.length > 0" class="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
        <ul class="list-disc list-inside">
          <li v-for="error in validationErrors" :key="error">{{ error }}</li>
        </ul>
      </div>
      
      <form @submit.prevent="handleSubmit" class="flex flex-col gap-4">
        <!-- Mobile: Single column layout -->
        <div class="flex flex-col gap-4 md:hidden">
          <input 
            v-model="formData.name"
            type="text" 
            :placeholder="$t('footer.name')" 
            required
            class="w-full px-4 py-3 border-none rounded-md text-base bg-white text-black" />
          <input 
            v-model="formData.email"
            type="email" 
            :placeholder="$t('footer.email')" 
            required
            class="w-full bg-white text-black px-4 py-3 border-none rounded-md text-base" />
          <input 
            v-model="formData.phone"
            type="text" 
            :placeholder="$t('footer.phone')" 
            required
            class="w-full px-4 py-3 border-none rounded-md text-base bg-white text-black" />
          <input 
            v-model="formData.content"
            type="text" 
            :placeholder="$t('footer.content')" 
            required
            class="w-full px-4 py-3 border-none rounded-md text-base bg-white text-black" />
        </div>

        <!-- Desktop: Two column layout -->
        <div class="hidden md:flex md:gap-4">
          <input 
            v-model="formData.name"
            type="text" 
            :placeholder="$t('footer.name')" 
            required
            class="flex-1 px-4 py-3 border-none rounded-md text-base bg-white text-black" />
          <input 
            v-model="formData.email"
            type="email" 
            :placeholder="$t('footer.email')" 
            required
            class="flex-1 bg-white text-black px-4 py-3 border-none rounded-md text-base" />
        </div>
        <div class="hidden md:flex md:gap-4">
          <input 
            v-model="formData.phone"
            type="text" 
            :placeholder="$t('footer.phone')" 
            required
            class="flex-1 px-4 py-3 border-none rounded-md text-base bg-white text-black" />
          <input 
            v-model="formData.content"
            type="text" 
            :placeholder="$t('footer.content')" 
            required
            class="flex-1 px-4 py-3 border-none rounded-md text-base bg-white text-black" />
        </div>

        <textarea 
          v-model="formData.details"
          :placeholder="$t('footer.details')" 
          rows="3"
          class="w-full border-none rounded-md px-4 py-3 text-base resize-y min-h-12 bg-white text-black"></textarea>
        
        <button 
          type="submit"
          :disabled="isSubmitting"
          class="mx-auto mt-2 bg-white text-gray-800 border-none rounded-md px-6 md:px-8 py-2.5 text-sm md:text-base font-bold cursor-pointer transition-all duration-200 shadow-md hover:bg-blue-900 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed">
          <span v-if="isSubmitting">{{ $t('form.submitting') }}</span>
          <span v-else>{{ $t('footer.sendInfo') }}</span>
        </button>
      </form>
    </div>
    <div class="flex justify-center bg-[#0a3c86] text-white pt-82 md:pt-72 pb-12 text-center px-2 md:px-0">
      <div class="container grid grid-cols-1 md:grid-cols-4 gap-6 text-left md:max-w-6xl">
        <!-- Cột 1 -->
        <div class="sm:col-span-2">
          <div class="font-bold uppercase mb-2">{{ $t('footer.contactTitle') }}</div>
          <div class="text-sm leading-relaxed">{{ $t('footer.contactOrg') }}</div>
          <div class="text-sm leading-relaxed">{{ $t('footer.contactAddress') }}</div>
          <div class="text-sm leading-relaxed">Điện thoại: {{ $t('footer.contactPhone') }}</div>
          <div class="text-sm leading-relaxed">Email: vago.mientrung@gmail.com</div>
        </div>
        <!-- Cột 2 -->
        <div>
          <div class="font-bold uppercase mb-2">{{ $t('footer.coordinatorTitle') }}</div>
          <div class="text-sm leading-relaxed">{{ $t('footer.coordinatorName') }}</div>
          <div class="text-sm leading-relaxed">{{ $t('common.phone') }}: {{ $t('footer.coordinatorPhone') }}</div>
          <div class="text-sm leading-relaxed">Email: leminhtam.med@gmail.com</div>
        </div>
        <!-- Cột 3 -->
        <div>
          <div class="font-bold uppercase mb-2">{{ $t('footer.secretaryTitle') }}</div>
          <div class="text-sm leading-relaxed">{{ $t('footer.secretaryName') }}</div>
          <div class="text-sm leading-relaxed">{{ $t('common.phone') }}: 0903 522 510</div>
          <div class="text-sm leading-relaxed">Email: vovankhoa@huemed-univ.edu.vn</div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { ref, reactive } from 'vue'
import { useFormSubmission } from '@/composables/useFormSubmission'
import { useFormValidation } from '@/composables/useFormValidation'

export default {
  name: 'Footer',
  setup() {
    const { isSubmitting, submitError, submitSuccess, submitForm, resetForm } = useFormSubmission()
    const { validateForm } = useFormValidation()
    
    const validationErrors = ref([])
    
    const formData = reactive({
      name: '',
      email: '',
      phone: '',
      content: '',
      details: ''
    })
    
    const handleSubmit = async () => {
      // Reset previous messages
      resetForm()
      validationErrors.value = []
      
      // Validate form
      const errors = validateForm(formData)
      if (errors.length > 0) {
        validationErrors.value = errors
        return
      }
      
      // Submit form
      const result = await submitForm(formData)
      
      if (result.success) {
        // Reset form data
        Object.keys(formData).forEach(key => {
          formData[key] = ''
        })
        
        // Auto hide success message after 5 seconds
        setTimeout(() => {
          resetForm()
        }, 5000)
      }
    }
    
    return {
      formData,
      isSubmitting,
      submitError,
      submitSuccess,
      validationErrors,
      handleSubmit
    }
  }
}
</script>

<style scoped></style>
