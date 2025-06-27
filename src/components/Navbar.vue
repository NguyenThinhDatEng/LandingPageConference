<template>
  <nav class="navbar">
    <ul class="menu">
      <li><a href="#">Trang Chủ</a></li>
      <li><a href="#">Giới Thiệu</a></li>
      <li><a href="#">Chương Trình</a></li>
      <li><a href="#">Đăng Ký</a></li>
      <li><a href="#">Tài Trợ</a></li>
      <li><a href="#">Lưu Trú</a></li>
      <li><a href="#">Liên Hệ</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
.navbar {
  background: #003F91;
  border-top: 2px solid #111;
  width: 100%;
  min-height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.menu {
  list-style: none;
  display: flex;
  gap: 40px;
  margin: 0;
  padding: 0;
  justify-content: center;
  width: 100%;
}
.menu li a {
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 1.15rem;
  font-family: inherit;
  padding: 12px 0;
  display: block;
  transition: color 0.2s, border-bottom 0.2s;
  text-align: center;
}
.menu li a:hover {
  color: #FFD24C;
  border-bottom: 2.5px solid #FFD24C;
}
@media (max-width: 900px) {
  .menu {
    gap: 18px;
    font-size: 1rem;
  }
}
</style>
