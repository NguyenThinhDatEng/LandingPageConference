<template>
  <SectionContainer :title="$t('intro.title')" section-id="intro">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mx-auto">
      <!-- Image container -->
      <div class="w-full">
        <img 
          src="@/assets/imgs/intro/intro.jpg" 
          alt="Giới thiệu"
          class="rounded-md shadow-lg object-cover w-full h-48 sm:h-64 md:h-auto md:max-h-96" 
          loading="lazy"
        />
      </div>
      
      <!-- Content container -->
      <div class="w-full flex flex-col gap-4 md:gap-6">
        <p class="text-sm sm:text-base text-gray-800 leading-relaxed text-center md:text-left">
          {{ $t('intro.content') }}
        </p>
        <div class="flex justify-center md:justify-start">
          <button
            class="w-fit h-fit bg-gray-300 text-gray-900 border-none rounded-md px-6 sm:px-7 py-2.5 text-sm sm:text-base font-semibold cursor-pointer shadow-md transition-colors duration-200 hover:bg-blue-900 hover:text-white">
            {{ $t('common.viewDetail') }}
          </button>
        </div>
      </div>
    </div>
  </SectionContainer>
</template>

<script>
import SectionContainer from '@/components/SectionContainer.vue'

export default {
  name: 'AboutSection',
  components: {
    SectionContainer
  }
}
</script>
