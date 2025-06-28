<template>
  <SectionContainer title="ĐỐI TÁC KHÁCH HÀNG" sectionId="partners-contact-section" is-full-width>
    <!-- Partners Row -->
    <div class="flex justify-center gap-8 mb-10">
      <div v-for="n in 5" :key="n" class="w-42 h-15 bg-gray-200 rounded-lg"></div>
    </div>
  </SectionContainer>
</template>

<script>
import SectionContainer from './SectionContainer.vue'

export default {
  name: 'PartnersAndContactSection',
  components: {
    SectionContainer
  }
}
</script>

<style>
/* Custom styles for specific elements that need special handling */
input,
textarea {
  outline: none;
}
</style>