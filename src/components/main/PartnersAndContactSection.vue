<template>
  <SectionContainer :title="$t('partners.title')" sectionId="partners" is-full-width>
    <!-- Partners Row -->
    <div class="flex flex-wrap justify-center gap-8 pb-62">
      <div v-for="n in 5" :key="n" class="w-42 h-15 bg-gray-200 rounded-md"></div>
    </div>
  </SectionContainer>
</template>

<script>
import SectionContainer from '../SectionContainer.vue'

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