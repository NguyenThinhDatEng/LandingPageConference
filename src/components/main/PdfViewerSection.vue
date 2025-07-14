<template>
  <SectionContainer :title="$t('report.title')" section-id="report">
    <div class="w-full">
      <iframe
        :src="pdfUrl + '#toolbar=0'"
        class="w-full h-[600px] rounded-md shadow-lg border"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  </SectionContainer>
</template>

<script>
import SectionContainer from '@/components/SectionContainer.vue'

export default {
  name: 'PdfViewerSection',
  components: {
    SectionContainer
  },
  computed: {
    pdfUrl() {
      // Đường dẫn public cho file PDF
      return new URL('@/assets/pdf/report.pdf', import.meta.url).href;
    }
  }
}
</script>