<template>
  <SectionFull :title="$t('accommodation.title')" section-id="accommodation" is-full-width class="accomodation-section">
    <div class="w-full flex flex-col items-center md:flex-row bg-[#fff] overflow-hidden">
      <!-- Left: Text -->
      <div
        class="min-h-[300px] sm:min-h-[400px] px-[20px] sm:px-[60px] py-4 md:pr-[40px] sm:py-8 bg-[#232323] md:basis-4/10 md:w-4/10 w-full flex flex-col justify-center text-white md:items-start items-center">
        <div class="w-full md:w-auto">
          <div class="font-bold text-2xl mb-4" style="font-family: 'Pacifico', cursive;">
            Giới thiệu tổng quan
          </div>
          <div class="text-base leading-relaxed">
            Trung tâm Hội nghị Goldland Plaza – toạ lạc tại số 14–20 Lý Thường Kiệt, TP Huế, là một địa điểm hiện đại,
            sang trọng bậc nhất tại khu vực miền Trung.<br /><br /> Với kiến trúc tinh tế, không gian linh hoạt, đây là
            lựa chọn lý
            tưởng cho các sự kiện tầm cỡ trong nước và quốc tế.
          </div>
        </div>
      </div>
      <!-- Right: Image -->
      <div class="md:basis-6/10 md:w-6/10 w-full h-[350px] md:h-auto">
        <img src="@/assets/imgs/accommodationInfo/info.jpg" alt="Seaview Living" class="w-full h-full object-cover" />
      </div>
    </div>
  </SectionFull>
</template>

<script>
export default {
  name: 'AccommodationInfoSection',
  components: {
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
</style>