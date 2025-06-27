<template>
  <section class="flex justify-center bg-white" id="intro">
    <div class="container flex flex-col items-center">
      <div class="intro md:max-w-6xl gap-8 flex flex-col">
        <h2 class="text-3xl font-extrabold text-gray-900">GIỚI THIỆU</h2>
        <div class="flex flex-wrap md:flex-nowrap items-start justify-center gap-8 mx-auto">
          <div class="flex-1">
            <img src="@/assets/imgs/intro/city_in_sunset.jpg" alt="Giới thiệu"
              class="rounded-md shadow-lg object-cover w-full h-full" />
          </div>
          <div class="flex-1 flex flex-col gap-6">
            <p class="text-base text-gray-800 leading-relaxed">
              Thương Vụ Việt Nam Tại Indonesia Là Cơ Quan Của Bộ Công Thương Việt Nam, Đóng Vai Trò Then Chốt Trong Việc
              Thúc Đẩy Quan Hệ Kinh Tế, Thương Mại Giữa Việt Nam Và Indonesia. Đặt Tại Jakarta, Thương Vụ Có Nhiệm Vụ
              Nghiên
              Cứu Thị Trường, Xúc Tiến Thương Mại, Hỗ Trợ Doanh Nghiệp Hai Nước, Quản Lý Nhà Nước Về Thương Mại Và Tăng
              Cường Hợp Tác Kinh Tế Song Phương. Đây Là Cầu Nối Quan Trọng Giúp Doanh Nghiệp Việt Nam Tiếp Cận Thị
              Trường
              Indonesia Và Ngược Lại.
            </p>
            <button
              class="w-fit h-fit bg-gray-300 text-gray-900 border-none rounded-md px-7 py-2.5 text-base font-semibold cursor-pointer shadow-md transition-colors duration-200 hover:bg-blue-900 hover:text-white">
              Xem Chi Tiết
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection'
}
</script>
