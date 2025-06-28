<template>
  <SectionFull class="event-highlight-section" title="CHƯƠNG TRÌNH SỰ KIỆN NỔI BẬT" section-id="program">
    <div class="event-list grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 justify-items-center">
      <div v-for="(item, idx) in events" :key="idx"
        class="event-card bg-white rounded-lg border border-gray-200 shadow-sm w-full max-w-[292px] flex flex-col items-center pb-5 transition-all duration-200 hover:shadow-xl hover:-translate-y-1 hover:scale-105">
        <img :src="item.img" alt="event" class="w-full h-48 object-cover rounded-t-lg border-b border-gray-200" />
        <div
          class="event-title text-lg font-bold text-gray-800 my-4 text-left min-h-12 w-11/12 flex items-center justify-start">
          {{ item.title }}
        </div>
        <button
          class="event-btn bg-gray-200 text-gray-800 border-none rounded-md px-6 py-1.5 text-base font-semibold cursor-pointer mt-1 shadow-sm transition-colors duration-200 hover:bg-blue-900 hover:text-white">
          Chi Tiết
        </button>
      </div>
    </div>
  </SectionFull>
</template>

<script>
import SectionContainer from '@/components/SectionContainer.vue'
import cityWithBeach from '@/assets/imgs/outstandingEvent/city_with_beach.png'

export default {
  name: 'EventHighlightSection',
  components: {
    SectionContainer
  },
  data() {
    return {
      events: [
        {
          img: cityWithBeach,
          title: 'Danh Bạ Doanh Nghiệp Xuất Khẩu Indonesia'
        },
        {
          img: cityWithBeach,
          title: 'Danh Bạ Doanh Nghiệp Nhập Khẩu Indonesia'
        },
        {
          img: cityWithBeach,
          title: 'Danh Bạ Doanh Nghiệp Xuất Khẩu Việt Nam'
        },
        {
          img: cityWithBeach,
          title: 'Danh Bạ Doanh Nghiệp Nhập Khẩu Việt Nam'
        }
      ]
    }
  }
}
</script>

<style class="scss">
.event-highlight-section {
  .containter-background {
    background: #4a6a7b url('@/assets/imgs/outstandingEvent/background.png') left top/cover no-repeat;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
}
</style>
