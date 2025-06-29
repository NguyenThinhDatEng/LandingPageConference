<template>
  <SectionContainer title="THÔNG TIN LƯU TRÚ" section-id="accommodation">
    <!-- Mobile: Single column layout -->
    <div class="grid grid-cols-1 gap-6 md:hidden">
      <div class="flex flex-col items-start h-full justify-between" v-for="(col, colIdx) in columns" :key="colIdx">
        <div class="text-base font-bold text-gray-900 mb-4">{{ col.title }}</div>
        <div class="flex flex-col gap-3 w-full">
          <div class="flex gap-3" v-for="(item, idx) in col.items" :key="idx">
            <img :src="item.img" alt="info" class="w-20 h-16 object-cover rounded-md flex-shrink-0" />
            <div class="item-title text-gray-900 font-bold text-sm leading-tight flex-1">{{ item.title }}</div>
          </div>
          <div class="text-sm text-center text-gray-800 italic underline cursor-pointer hover:text-blue-800 transition-colors duration-200 mt-2">
            Xem Thêm
          </div>
        </div>
      </div>
    </div>

    <!-- Desktop: Original 3-column grid layout -->
    <div class="hidden md:grid md:grid-cols-3 gap-8">
      <div class="flex flex-col items-start h-full justify-between" v-for="(col, colIdx) in columns" :key="colIdx">
        <div class="text-lg md:text-xl font-bold text-gray-900 mb-8">{{ col.title }}</div>
        <div class="flex flex-col gap-4">
          <div class="flex gap-4" v-for="(item, idx) in col.items" :key="idx">
            <img :src="item.img" alt="info" class="w-[120px] h-[70px] object-cover rounded-md" />
            <div class="item-title text-gray-900 font-bold">{{ item.title }}</div>
          </div>
          <div class="text-base text-center text-gray-800 italic underline cursor-pointer hover:text-blue-800 transition-colors duration-200">
            Xem Thêm
          </div>
        </div>
      </div>
    </div>
  </SectionContainer>
</template>

<script>
import bridgeMorning from '@/assets/imgs/accommodationInfo/bridget_in_morning.png'
import SectionContainer from '@/components/SectionContainer.vue'

export default {
  name: 'AccommodationInfoSection',
  components: {
    SectionContainer
  },
  data() {
    return {
      columns: [
        {
          title: 'CHÍNH SÁCH LIÊN QUAN TỚI ĐẦU TƯ VIỆT NAM',
          items: [
            { img: bridgeMorning, title: 'ĐỀ XUẤT CẢI CÁCH CHÍNH SÁCH ƯU ĐÃI ĐẦU TƯ' },
            { img: bridgeMorning, title: 'BÀN VỀ CHÍNH SÁCH ƯU ĐÃI ĐẦU TƯ CỦA VIỆT NAM ĐỐI VỚI DOANH NGHIỆP FDI' }
          ]
        },
        {
          title: 'THỦ TỤC ĐẦU TƯ TẠI VIỆT NAM',
          items: [
            { img: bridgeMorning, title: 'CÁC LĨNH VỰC ĐƯỢC ÁP DỤNG THỦ TỤC ĐẦU TƯ ĐẶC BIỆT THEO NGHỊ ĐỊNH 19' },
            { img: bridgeMorning, title: 'THỦ TỤC ĐẦU TƯ ĐẶC BIỆT TỪ NGÀY 15/01/2025' }
          ]
        },
        {
          title: 'TIN TỨC ĐẦU TƯ',
          items: [
            { img: bridgeMorning, title: 'ĐẦU TƯ TRỰC TIẾP NƯỚC NGOÀI VÀO VIỆT NAM VÀ TRIỂN VỌNG' },
            { img: bridgeMorning, title: 'VỐN FDI ĐĂNG KÝ VÀO VIỆT NAM TRONG QUÝ 1/2025 ĐẠT GẦN 11 TỶ USD, TĂNG 34,7%' }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped></style>