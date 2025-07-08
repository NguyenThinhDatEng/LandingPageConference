<template>
  <SectionContainer :title="'Chương trình'" section-id="services">
    <div class="flex flex-col gap-4">
      <!-- Bảng ngày thứ nhất -->
      <div class="overflow-x-auto mb-8">
        <div class="font-bold text-xl text-gray-700 mb-1">NGÀY THỨ NHẤT (Thứ Sáu, ngày 15/8/2025)</div>
        <table class="min-w-full rounded-lg">
          <thead>
            <tr class="bg-white">
              <th class="py-2 px-4 text-left italic font-medium text-gray-700 border-b border-green-300 text-blue w-32">
                Thời gian</th>
              <th class="py-2 px-4 text-left italic font-medium text-gray-700 border-b border-green-300 text-blue">
                Chương trình
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-green-200">
              <td class="py-2 px-4 align-top time-cell w-32">07:00 - 17:00</td>
              <td class="py-2 px-4 align-top font-bold text-blue-900"></td>
            </tr>
            <tr class="border-b border-green-200">
              <td class="py-2 px-4 align-top time-cell w-32">17:30 - 19:00</td>
              <td class="py-2 px-4 align-top font-bold text-blue-900"></td>
            </tr>
            <tr>
              <td class="py-2 px-4 align-top time-cell w-32">19:30 - 21:30</td>
              <td class="py-2 px-4 align-top font-bold text-blue-900"></td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Bảng ngày thứ hai -->
      <div class="overflow-x-auto">
        <div class="font-bold text-xl text-gray-700 mb-1">NGÀY THỨ HAI (Thứ Bảy, ngày 16/8/2025)</div>
        <div class="italic text-gray-700 mb-2">
          Địa điểm: Khách sạn Sheraton, Khu đô thị Vinhomes Imperia, Q. Hồng Bàng, TP. Hải Phòng
        </div>
        <table class="min-w-full rounded-lg">
          <thead>
            <tr class="bg-white">
              <th class="py-2 px-4 text-left italic font-medium text-gray-700 border-b border-green-300 text-blue w-32">
                Thời gian</th>
              <th class="py-2 px-4 text-left italic font-medium text-gray-700 border-b border-green-300 text-blue">Nội
                dung</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-green-200">
              <td class="py-2 px-4 align-top time-cell w-32">08:00 - 10:00</td>
              <td class="py-2 px-4 align-top font-bold text-blue-900"></td>
            </tr>
            <tr class="border-b border-green-200">
              <td class="py-2 px-4 align-top time-cell w-32" rowspan="3">10:00 - 11:30</td>
              <td class="py-2 px-4 align-top font-bold text-blue-900">PHIÊN 1A</td>
            </tr>
            <tr class="border-b border-green-200">
              <td class="hidden"></td>
              <td class="py-2 px-4 align-top font-bold text-blue-900">PHIÊN 1B</td>
            </tr>
            <tr class="border-b border-green-200">
              <td class="hidden"></td>
              <td class="py-2 px-4 align-top font-bold text-blue-900">PHIÊN 1C</td>
            </tr>
            <tr class="border-b border-green-200">
              <td class="py-2 px-4 align-top time-cell w-32">11:30 - 13:30</td>
              <td class="py-2 px-4 align-top"></td>
            </tr>
            <tr class="border-b border-green-200">
              <td class="py-2 px-4 align-top time-cell w-32" rowspan="3">13:30 - 15:00</td>
              <td class="py-2 px-4 align-top font-bold text-blue-900">PHIÊN 2A</td>
            </tr>
            <tr class="border-b border-green-200">
              <td class="hidden"></td>
              <td class="py-2 px-4 align-top font-bold text-blue-900">PHIÊN 2B</td>
            </tr>
            <tr class="border-b border-green-200">
              <td class="hidden"></td>
              <td class="py-2 px-4 align-top font-bold text-blue-900">PHIÊN 2C</td>
            </tr>
            <tr class="border-b border-green-200">
              <td class="py-2 px-4 align-top time-cell w-32">15:00 - 15:30</td>
              <td class="py-2 px-4 align-top"></td>
            </tr>
            <tr class="border-b border-green-200">
              <td class="py-2 px-4 align-top time-cell w-32" rowspan="2">15:30 - 17:00</td>
              <td class="py-2 px-4 align-top font-bold text-blue-900">PHIÊN 7C</td>
            </tr>
            <tr>
              <td class="hidden"></td>
              <td class="py-2 px-4 align-top font-bold text-blue-900">PHIÊN 8C</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </SectionContainer>
</template>

<script>
import SectionContainer from '@/components/SectionContainer.vue'
export default {
  name: 'OurServicesSection',
  components: { SectionContainer }
}
</script>

<style scoped>
/* Optional: Add a subtle green border radius for the table wrapper */
div.overflow-x-auto {
  border: 2px solid #8bc34a;
  border-radius: 12px;
  margin-top: 8px;
  padding: 8px;
}

.time-cell {
  color: #2d286c !important;
}

.text-blue {
  color: #2d286c;
}
</style>