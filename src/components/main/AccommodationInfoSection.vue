<template>
  <SectionFull :title="$t('accommodation.title')" section-id="accommodation" is-full-width class="accomodation-section">
    <div class="w-full flex flex-col items-center md:flex-row bg-[#fff] overflow-hidden">
      <!-- Left: Text -->
      <transition name="slide-fade" mode="out-in">
        <div
          class="min-h-[300px] sm:min-h-[400px] px-[20px] sm:px-[60px] py-4 md:pl-[160px] md:pr-[40px] sm:py-8 bg-[#232323] md:basis-4/10 md:w-4/10 w-full flex flex-col justify-center text-white md:items-start items-center"
          :key="currentIndex + '-text'"
        >
          <div class="w-full md:w-auto">
            <div class="font-bold text-2xl mb-8" style="font-family: 'Pacifico', cursive;">
              {{ contents[currentIndex].title }}
            </div>
            <div class="text-base leading-relaxed" v-html="contents[currentIndex].text">
            </div>
          </div>
        </div>
      </transition>
      <!-- Right: Image -->
      <transition name="slide-fade" mode="out-in">
        <div class="md:basis-6/10 md:w-6/10 w-full h-[350px] md:h-auto" :key="currentIndex + '-img'">
          <img :src="contents[currentIndex].img" alt="Accommodation Info" class="w-full h-full object-cover rounded-md" />
        </div>
      </transition>
    </div>
  </SectionFull>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
import img1 from '@/assets/imgs/accommodationInfo/info1.png';
import img2 from '@/assets/imgs/accommodationInfo/info2.jpg';

export default {
  name: 'AccommodationInfoSection',
  setup() {
    const contents = [
      {
        title: 'Giới thiệu tổng quan',
        text: `Trung tâm Hội nghị Goldland Plaza – toạ lạc tại số 14–20 Lý Thường Kiệt, TP Huế, là một địa điểm hiện đại,
sang trọng bậc nhất tại khu vực miền Trung. <br/><br/>
Với kiến trúc tinh tế, không gian linh hoạt, đây là lựa chọn lý tưởng cho các sự kiện tầm cỡ trong nước và quốc tế.`,
        img: img1
      },
      {
        title: 'Không gian tổ chức sự kiện',
        text: `Goldland Plaza sở hữu hệ thống hội trường cao cấp, sức chứa lên đến <b>1.500</b> khách, trang bị âm thanh – ánh sáng chuyên nghiệp.<br/><br/>Địa điểm lý tưởng để tổ chức hội nghị khoa học, triển lãm y tế, hội thảo chuyên đề và tiệc chiêu đãi quy mô lớn.`,
        img: img2
      }
    ];
    const currentIndex = ref(0);
    let intervalId = null;

    onMounted(() => {
      intervalId = setInterval(() => {
        currentIndex.value = (currentIndex.value + 1) % contents.length;
      }, 5000);
    });

    onUnmounted(() => {
      clearInterval(intervalId);
    });

    return { contents, currentIndex };
  }
}
</script>

<style>
/* Optional: Custom font for the title if you want to match the style in the image */
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

.accomodation-section {
  .container-background {
    padding: unset !important;
  }
}

.slide-fade-enter-active, .slide-fade-leave-active {
  transition: all 0.6s cubic-bezier(0.55, 0, 0.1, 1);
}
.slide-fade-enter-from {
  opacity: 0;
  transform: translateX(100px);
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
</style>