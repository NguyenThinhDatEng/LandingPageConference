<template>
  <SectionContainer title="DỊCH VỤ CỦA CHÚNG TÔI" section-id="our-services-section">
    <div class="flex gap-8 mx-auto items-start justify-center">
      <div class="flex-3 flex flex-col gap-4 h-full">
        <div class="relative flex flex-1 bg-cover bg-center rounded-lg overflow-hidden items-end" 
             v-for="(item, idx) in bigCards" 
             :key="idx"
             :style="{ backgroundImage: `url(${item.img})` }">
          <div class="w-full h-full flex flex-col justify-end items-start pb-6 pl-7 bg-gradient-to-t from-black/55 via-black/30 to-black/10">
            <div class="text-lg text-white font-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.18)]">{{ item.caption }}</div>
          </div>
        </div>
      </div>
      <div class="flex-2 flex flex-col gap-4">
        <div class="flex items-start bg-white rounded-lg shadow-sm border-[1.5px] border-gray-200 p-3 pl-4 gap-[18px] min-h-[90px]" 
             v-for="(item, idx) in smallCards" 
             :key="idx">
          <img :src="item.img" alt="service" class="w-[110px] h-[70px] object-cover rounded-md" />
          <div class="flex flex-col justify-center gap-[6px]">
            <div class="text-base font-bold text-gray-900">{{ item.title }}</div>
            <div class="text-xs text-gray-600 font-normal">{{ item.desc }}</div>
          </div>
        </div>
      </div>
    </div>
  </SectionContainer>
</template>

<script>
import cauVang from '@/assets/imgs/myServices/cau_vang.png'
import bridgeEvening from '@/assets/imgs/myServices/bridge_in_evening.jpg'
import SectionContainer from '@/components/SectionContainer.vue'

export default {
  name: 'OurServicesSection',
  components: {
    SectionContainer
  },
  data() {
    return {
      bigCards: [
        {
          img: cauVang,
          title: 'CẦU VÀNG',
          caption: 'QUY ĐỊNH VỀ HALAL INDONESIA'
        },
        {
          img: cauVang,
          title: 'CẦU VÀNG',
          caption: 'DANH SÁCH CÁC ĐƠN VỊ CHỨNG NHẬN HALAL INDONESIA'
        }
      ],
      smallCards: [
        {
          img: bridgeEvening,
          title: 'INDONESIA: THỊ TRƯỜNG ĐẦY TIỀM NĂNG CỦA DOANH NGHIỆP VIỆT',
          desc: 'Là Thị Trường Có Quy Mô Dân Số Đứng Thứ 4 Trên Thế Giới, Indonesia Có Nhu Cầu Lớn Về Một Hàng Nông Sản'
        },
        {
          img: bridgeEvening,
          title: 'DOANH NGHIỆP VIỆT NAM TỪNG BƯỚC CHINH PHỤC THỊ TRƯỜNG "KHÓ TÍNH" INDONESIA',
          desc: 'Là Thị Trường Có Quy Mô Dân Số Đứng Thứ 4 Trên Thế Giới, Indonesia Có Nhu Cầu Lớn Về Một Hàng Nông Sản'
        },
        {
          img: bridgeEvening,
          title: 'MỞ ĐƯỜNG CHO DOANH NGHIỆP XUẤT KHẨU SANG THỊ TRƯỜNG INDONESIA',
          desc: 'Là Thị Trường Có Quy Mô Dân Số Đứng Thứ 4 Trên Thế Giới, Indonesia Có Nhu Cầu Lớn Về Một Hàng Nông Sản'
        },
        {
          img: bridgeEvening,
          title: 'THỊ TRƯỜNG INDONESIA - CƠ HỘI NÀO CHO NÔNG SẢN VIỆT',
          desc: 'Là Thị Trường Có Quy Mô Dân Số Đứng Thứ 4 Trên Thế Giới, Indonesia Có Nhu Cầu Lớn Về Một Hàng Nông Sản'
        }
      ]
    }
  }
}
</script>

<style scoped>
/* Custom flex-1.2 utility since Tailwind doesn't have it by default */
.flex-1\.2 {
  flex: 1.2;
}

/* Responsive styles */
@media (max-width: 1200px) {
  .flex.gap-10 {
    flex-direction: column;
    gap: 8rem;
    align-items: center;
  }
  .flex-1\.2, .flex-1 {
    width: 100%;
    max-width: 700px;
  }
  .w-\[600px\] {
    width: 100%;
    min-width: 0;
  }
}

@media (max-width: 700px) {
  .text-\[3\.2rem\] {
    font-size: 2rem;
  }
  .h-\[220px\] {
    height: 140px;
  }
  .w-\[110px\] {
    width: 70px;
  }
  .h-\[70px\] {
    height: 48px;
  }
}
</style> 