<template>
  <SectionFull class="event-highlight-section" :title="$t('activities.title')" section-id="activities">
    <div class="event-list grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-8 justify-items-center">
      <div v-for="(item, idx) in events" :key="idx"
        class="event-card bg-white rounded-md border border-gray-200 shadow-sm w-full max-w-[292px] flex flex-col items-center pb-5 transition-all duration-200 hover:shadow-xl hover:-translate-y-1 hover:scale-105">
        <img :src="item.img" alt="event" class="w-full h-48 object-cover rounded-t-lg border-b border-gray-200" loading="lazy" />
        <div
          class="event-title text-lg font-bold text-gray-800 my-4 text-left min-h-12 w-11/12 flex items-center justify-start">
          {{ $t(item.titleKey) }}
        </div>
        <button
          class="event-btn bg-gray-200 text-gray-800 border-none rounded-md px-6 py-1.5 text-base font-semibold cursor-pointer mt-1 shadow-sm transition-colors duration-200 hover:bg-blue-900 hover:text-white">
          {{ $t('common.detail') }}
        </button>
      </div>
    </div>
  </SectionFull>
</template>

<script>
import SectionContainer from '@/components/SectionContainer.vue'
import event01 from '@/assets/imgs/outstandingEvent/event01.jpg'
import event02 from '@/assets/imgs/outstandingEvent/event02.jpg'
import event03 from '@/assets/imgs/outstandingEvent/event03.png'
import event04 from '@/assets/imgs/outstandingEvent/event04.jpg'

export default {
  name: 'ActivitiesSection',
  components: {
    SectionContainer
  },
  data() {
    return {
      events: [
        {
          img: event04,
          titleKey: 'activities._01'
        },
        {
          img: event01,
          titleKey: 'activities._02'
        },
        {
          img: event02,
          titleKey: 'activities._03'
        },
        {
          img: event03,
          titleKey: 'activities._04'
        }
      ]
    }
  }
}
</script>

<style class="scss">
.event-highlight-section {
  .container-background {
    background: #4a6a7b url('@/assets/imgs/outstandingEvent/background.png') left top/cover no-repeat;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
}
</style>
