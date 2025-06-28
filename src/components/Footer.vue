<template>
  <footer class="relative">
    <!-- Contact Form Box -->
    <div
      class="form-register absolute -top-1/2 left-1/2 bg-yellow-500 md:w-6xl mx-auto rounded-none px-16 py-8 z-10">
      <h3 class="text-center text-2xl font-bold tracking-wide text-black mb-8">
        ĐĂNG KÝ THÔNG TIN LIÊN HỆ
      </h3>
      <form class="flex flex-col gap-4">
        <div class="flex gap-4">
          <input type="text" placeholder="QUÝ DANH" required
            class="flex-1 px-4 py-3 border-none rounded-md text-base bg-white text-black" />
          <input type="email" placeholder="EMAIL" required
            class="flex-1 bg-white text-black px-4 py-3 border-none rounded-md text-base" />
        </div>
        <div class="flex gap-4">
          <input type="text" placeholder="ĐIỆN THOẠI" required
            class="flex-1 px-4 py-3 border-none rounded-md text-base bg-white text-black" />
          <input type="text" placeholder="NỘI DUNG" required
            class="flex-1 px-4 py-3 border-none rounded-md text-base bg-white text-black" />
        </div>
        <textarea placeholder="CHI TIẾT" rows="3"
          class="w-full border-none rounded-md px-4 py-3 text-base resize-y min-h-12 bg-white text-black"></textarea>
        <button type="submit"
          class="mx-auto mt-2 bg-white text-gray-800 border-none rounded-md px-8 py-2.5 text-base font-bold cursor-pointer transition-all duration-200 shadow-md hover:bg-blue-900 hover:text-white">
          GỬI THÔNG TIN
        </button>
      </form>
    </div>
    <!-- Conference Info Section -->
    <div class="bg-[#0a3c86] text-white pt-72 pb-12 text-center">
      <div class="text-2xl font-bold mb-2 tracking-wide">ECHO ASIA 2025 - HỘI NGHỊ KHOA HỌC</div>
      <div class="text-base mb-1">Địa Chỉ: Xx Thành Phố Đà Nẵng, Việt Nam.</div>
      <div class="text-base mb-1">Fax: +84.12345678</div>
      <div class="text-base mb-1">Email: Abc@Gmail.Com</div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.form-register {
  transform: translate(-50%, 4%)
}
</style>