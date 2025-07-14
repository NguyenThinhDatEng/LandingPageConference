<template>
  <SectionContainer :title="$t('common.reportTitle', 'Báo cáo viên')" section-id="report">
    <div class="w-full">
      <a
      :href="pdfUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="absolute top-2 right-2 z-10 bg-black bg-opacity-75 text-white p-2 rounded hover:bg-opacity-90"
      title="Mở tab mới"
    >
      <!-- Heroicon: external-link -->
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M14 3h7m0 0v7m0-7L10 14m-4 0h4v4H6v-4z" />
      </svg>
    </a>
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