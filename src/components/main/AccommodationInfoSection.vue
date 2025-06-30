<template>
  <SectionContainer :title="$t('accommodation.title')" section-id="accommodation">
    <!-- Mobile: Single column layout -->
    <div class="grid grid-cols-1 gap-6 md:hidden">
      <div class="flex flex-col items-start h-full justify-between" v-for="(col, colIdx) in columns" :key="colIdx">
        <div class="text-base font-bold text-gray-900 mb-4">{{ $t(col.titleKey) }}</div>
        <div class="flex flex-col gap-3 w-full">
          <div class="flex gap-3" v-for="(item, idx) in col.items" :key="idx">
            <img :src="item.img" alt="info" class="w-20 h-16 object-cover rounded-md flex-shrink-0" loading="lazy" />
            <div class="item-title text-gray-900 font-bold text-sm leading-tight flex-1">{{ $t(item.titleKey) }}</div>
          </div>
          <div class="text-sm text-center text-gray-800 italic underline cursor-pointer hover:text-blue-800 transition-colors duration-200 mt-2">
            {{ $t('common.viewMore') }}
          </div>
        </div>
      </div>
    </div>

    <!-- Desktop: Original 3-column grid layout -->
    <div class="hidden md:grid md:grid-cols-3 gap-8">
      <div class="flex flex-col items-start h-full justify-between" v-for="(col, colIdx) in columns" :key="colIdx">
        <div class="text-lg md:text-xl font-bold text-gray-900 mb-8">{{ $t(col.titleKey) }}</div>
        <div class="flex flex-col gap-4">
          <div class="flex gap-4" v-for="(item, idx) in col.items" :key="idx">
            <img :src="item.img" alt="info" class="w-[120px] h-[70px] object-cover rounded-md" loading="lazy" />
            <div class="item-title text-gray-900 font-bold">{{ $t(item.titleKey) }}</div>
          </div>
          <div class="text-base text-center text-gray-800 italic underline cursor-pointer hover:text-blue-800 transition-colors duration-200">
            {{ $t('common.viewMore') }}
          </div>
        </div>
      </div>
    </div>
  </SectionContainer>
</template>

<script>
import info from '@/assets/imgs/accommodationInfo/info.jpg'
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
          titleKey: 'accommodation.section_policies',
          items: [
            { img: info, titleKey: 'accommodation.policy_1' },
            { img: info, titleKey: 'accommodation.policy_2' }
          ]
        },
        {
          titleKey: 'accommodation.section_procedures',
          items: [
            { img: info, titleKey: 'accommodation.procedure_1' },
            { img: info, titleKey: 'accommodation.procedure_2' }
          ]
        },
        {
          titleKey: 'accommodation.section_news',
          items: [
            { img: info, titleKey: 'accommodation.news_1' },
            { img: info, titleKey: 'accommodation.news_2' }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped></style>