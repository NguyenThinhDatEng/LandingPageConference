<template>
  <SectionContainer title="GIỚI THIỆU" section-id="intro">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mx-auto">
      <!-- Image container -->
      <div class="w-full">
        <img 
          src="@/assets/imgs/intro/city_in_sunset.jpg" 
          alt="Giới thiệu"
          class="rounded-md shadow-lg object-cover w-full h-48 sm:h-64 md:h-auto md:max-h-96" 
        />
      </div>
      
      <!-- Content container -->
      <div class="w-full flex flex-col gap-4 md:gap-6">
        <p class="text-sm sm:text-base text-gray-800 leading-relaxed text-center md:text-left">
          Thương Vụ Việt Nam Tại Indonesia Là Cơ Quan Của Bộ Công Thương Việt Nam, Đóng Vai Trò Then Chốt Trong Việc
          Thúc Đẩy Quan Hệ Kinh Tế, Thương Mại Giữa Việt Nam Và Indonesia. Đặt Tại Jakarta, Thương Vụ Có Nhiệm Vụ
          Nghiên
          Cứu Thị Trường, Xúc Tiến Thương Mại, Hỗ Trợ Doanh Nghiệp Hai Nước, Quản Lý Nhà Nước Về Thương Mại Và Tăng
          Cường Hợp Tác Kinh Tế Song Phương. Đây Là Cầu Nối Quan Trọng Giúp Doanh Nghiệp Việt Nam Tiếp Cận Thị
          Trường
          Indonesia Và Ngược Lại.
        </p>
        <div class="flex justify-center md:justify-start">
          <button
            class="w-fit h-fit bg-gray-300 text-gray-900 border-none rounded-md px-6 sm:px-7 py-2.5 text-sm sm:text-base font-semibold cursor-pointer shadow-md transition-colors duration-200 hover:bg-blue-900 hover:text-white">
            Xem Chi Tiết
          </button>
        </div>
      </div>
    </div>
  </SectionContainer>
</template>

<script>
import SectionContainer from '@/components/SectionContainer.vue'

export default {
  name: 'AboutSection',
  components: {
    SectionContainer
  }
}
</script>
