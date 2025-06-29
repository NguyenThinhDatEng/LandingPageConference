<template>
  <SectionContainer :title="$t('services.title')" section-id="services">
    <!-- Mobile: Only small cards layout -->
    <div class="grid grid-cols-1 gap-6 md:hidden">
      <!-- Small cards for mobile -->
      <div
        class="flex items-start bg-white rounded-md shadow-sm border-[1.5px] border-gray-200 p-3 gap-3"
        v-for="(item, idx) in smallCards" :key="idx">
        <img :src="item.img" alt="service" class="w-20 h-16 object-cover rounded-md flex-shrink-0" />
        <div class="flex flex-col justify-center gap-1 min-w-0">
          <div class="text-sm font-bold text-gray-900 leading-tight">{{ $t(item.titleKey) }}</div>
          <div class="text-xs text-gray-600 font-normal leading-tight">{{ $t(item.descKey) }}</div>
        </div>
      </div>
    </div>

    <!-- Desktop: Original layout with grid -->
    <div class="hidden md:grid md:grid-cols-5 gap-8 mx-auto items-start">
      <!-- Big cards section - takes 3 columns -->
      <div class="md:col-span-3 flex flex-col gap-4 h-full">
        <div class="relative flex flex-1 bg-cover bg-center rounded-md overflow-hidden items-end min-h-[200px]"
          v-for="(item, idx) in bigCards" :key="idx" :style="{ backgroundImage: `url(${item.img})` }">
          <div
            class="w-full h-full flex flex-col justify-end items-start pb-6 pl-7 bg-gradient-to-t from-black/55 via-black/30 to-black/10">
            <div class="text-lg text-white font-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.18)]">{{ $t(item.captionKey) }}
            </div>
          </div>
        </div>
      </div>
      
      <!-- Small cards section - takes 2 columns -->
      <div class="md:col-span-2 flex flex-col gap-4">
        <div
          class="flex items-start bg-white rounded-md shadow-sm border-[1.5px] border-gray-200 p-3 pl-4 gap-[18px] min-h-[90px]"
          v-for="(item, idx) in smallCards" :key="idx">
          <img :src="item.img" alt="service" class="w-[110px] h-[70px] object-cover rounded-md" />
          <div class="flex flex-col justify-center gap-[6px]">
            <div class="text-base font-bold text-gray-900">{{ $t(item.titleKey) }}</div>
            <div class="text-xs text-gray-600 font-normal">{{ $t(item.descKey) }}</div>
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
          captionKey: 'services.halalIndonesia'
        },
        {
          img: cauVang,
          title: 'CẦU VÀNG',
          captionKey: 'services.halalCertification'
        }
      ],
      smallCards: [
        {
          img: bridgeEvening,
          titleKey: 'services.indonesiaMarket',
          descKey: 'services.indonesiaMarketDesc'
        },
        {
          img: bridgeEvening,
          titleKey: 'services.vietnamBusiness',
          descKey: 'services.indonesiaMarketDesc'
        },
        {
          img: bridgeEvening,
          titleKey: 'services.exportOpportunity',
          descKey: 'services.indonesiaMarketDesc'
        },
        {
          img: bridgeEvening,
          titleKey: 'services.agricultureMarket',
          descKey: 'services.indonesiaMarketDesc'
        }
      ]
    }
  }
}
</script>

<style scoped></style>