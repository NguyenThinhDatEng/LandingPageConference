<template>
  <SectionContainer title="HÌNH ẢNH HOẠT ĐỘNG TIÊU BIỂU" section-id="typical-activities-section" is-full-width>
    <div class="flex flex-col gap-4">
      <div class="flex gap-4 w-full justify-center">
        <img :src="imgs[0]" alt="activity" class="w-full object-cover rounded-lg" />
      </div>
      <div class="flex gap-4 w-full justify-center">
        <img :src="imgs[1]" alt="activity" class="flex-1 min-w-0 h-36 md:h-54 object-cover rounded-lg" />
        <img :src="imgs[2]" alt="activity" class="flex-1 min-w-0 h-36 md:h-54 object-cover rounded-lg" />
        <img :src="imgs[3]" alt="activity" class="flex-1 min-w-0 h-36 md:h-54 object-cover rounded-lg" />
      </div>
      <div class="flex gap-4 w-full justify-center">
        <img :src="imgs[4]" alt="activity" class="flex-1 min-w-0 object-cover rounded-lg" />
        <img :src="imgs[5]" alt="activity" class="flex-1 min-w-0 object-cover rounded-lg" />
      </div>
    </div>
  </SectionContainer>
</template>

<script>
import img01 from '@/assets/imgs/typicalActivities/img01.png'
import img02 from '@/assets/imgs/typicalActivities/img02.png'
import img03 from '@/assets/imgs/typicalActivities/img03.png'
import img04 from '@/assets/imgs/typicalActivities/img04.png'
import img05 from '@/assets/imgs/typicalActivities/img05.png'
import img06 from '@/assets/imgs/typicalActivities/img06.png'

export default {
  name: 'TypicalActivitiesSection',
  data() {
    return {
      imgs: [img01, img02, img03, img04, img05, img06]
    }
  }
}
</script>

<style lang="scss"></style>