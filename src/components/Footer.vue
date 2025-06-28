<template>
  <footer class="footer">
    <!-- Contact Form Box -->
    <div class="bg-yellow-500 max-w-4xl mx-auto rounded-none px-8 py-9 relative z-10">
      <h3 class="text-center text-2xl font-bold mb-7 tracking-wide">
        ĐĂNG KÝ THÔNG TIN LIÊN HỆ
      </h3>

      <form class="flex flex-col gap-4">
        <div class="flex gap-4">
          <input type="text" placeholder="QUÝ DANH" required
            class="flex-1 px-4 py-3 border-none rounded-md text-base" />
          <input type="email" placeholder="EMAIL" required class="flex-1 px-4 py-3 border-none rounded-md text-base" />
        </div>

        <div class="flex gap-4">
          <input type="text" placeholder="ĐIỆN THOẠI" required
            class="flex-1 px-4 py-3 border-none rounded-md text-base" />
          <input type="text" placeholder="NỘI DUNG" required
            class="flex-1 px-4 py-3 border-none rounded-md text-base" />
        </div>

        <textarea placeholder="CHI TIẾT" rows="3"
          class="w-full border-none rounded-md px-4 py-3 text-base resize-y min-h-12"></textarea>

        <button type="submit"
          class="mx-auto mt-2 bg-white text-gray-800 border-none rounded-md px-8 py-2.5 text-base font-bold cursor-pointer transition-all duration-200 shadow-md hover:bg-blue-900 hover:text-white">
          GỬI THÔNG TIN
        </button>
      </form>
    </div>
    <div class="footer-content">
      <div>© 2024 Hội nghị Công nghệ. All rights reserved.</div>
      <div class="socials">
        <a href="#" aria-label="Facebook"><svg width="20" height="20" fill="#fff">
            <circle cx="10" cy="10" r="10" opacity="0.2" /><text x="5" y="15" font-size="10" fill="#fff">f</text>
          </svg></a>
        <a href="#" aria-label="Twitter"><svg width="20" height="20" fill="#fff">
            <circle cx="10" cy="10" r="10" opacity="0.2" /><text x="5" y="15" font-size="10" fill="#fff">t</text>
          </svg></a>
        <a href="#" aria-label="LinkedIn"><svg width="20" height="20" fill="#fff">
            <circle cx="10" cy="10" r="10" opacity="0.2" /><text x="3" y="15" font-size="10" fill="#fff">in</text>
          </svg></a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer {
  background: #222b45;
  color: #fff;
  padding: 32px 0 20px 0;
  text-align: center;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.socials {
  display: flex;
  gap: 18px;
}

.socials a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
  transition: background 0.2s;
}

.socials a:hover {
  background: #007bff;
}
</style>
