<template>
  <SectionContainer :title="$t('activities.title')" section-id="activities" is-full-width>
    <div class="flex flex-col gap-4">
      <div class="flex gap-4 w-full justify-center">
        <img :src="imgs[0]" alt="activity" class="w-full object-cover rounded-md" loading="lazy" />
      </div>
      <div class="flex gap-4 w-full justify-center">
        <img :src="imgs[1]" alt="activity" class="flex-1 min-w-0 h-36 md:h-54 object-cover rounded-md" loading="lazy" />
        <img :src="imgs[2]" alt="activity" class="flex-1 min-w-0 h-36 md:h-54 object-cover rounded-md" loading="lazy" />
        <img :src="imgs[3]" alt="activity" class="flex-1 min-w-0 h-36 md:h-54 object-cover rounded-md" loading="lazy" />
      </div>
      <div class="flex gap-4 w-full justify-center">
        <img :src="imgs[4]" alt="activity" class="flex-1 min-w-0 object-cover rounded-md" loading="lazy" />
        <img :src="imgs[5]" alt="activity" class="flex-1 min-w-0 object-cover rounded-md" loading="lazy" />
      </div>
    </div>
  </SectionContainer>
</template>

<script>
import img01 from '@/assets/imgs/typicalActivities/img01.jpg'
import img02 from '@/assets/imgs/typicalActivities/img02.jpg'
import img03 from '@/assets/imgs/typicalActivities/img03.jpg'
import img04 from '@/assets/imgs/typicalActivities/img04.jpg'
import img05 from '@/assets/imgs/typicalActivities/img05.jpg'
import img06 from '@/assets/imgs/typicalActivities/img06.jpg'

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