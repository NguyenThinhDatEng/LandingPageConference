<template>
  <header class="header-bar">
    <div class="topbar">
      <div class="logo-group">
        <img src="@/assets/imgs/logo/logo01.svg" alt="logo1" />
        <img src="@/assets/imgs/logo/logo02.svg" alt="logo2" />
        <img src="@/assets/imgs/logo/logo03.svg" alt="logo3" />
        <img src="@/assets/imgs/logo/logo04.svg" alt="logo4" />
      </div>
      <input class="search-input" placeholder="Tìm Kiếm Thông Tin ...." />
      <div class="lang-switch">
        <span class="lang active">VN</span>
        <span class="divider">|</span>
        <span class="lang">ENG</span>
      </div>
    </div>
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
  </header>
</template>

<script>
export default {
  name: 'HeaderBar'
}
</script>

<style scoped>
.header-bar {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
}
.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 40px 10px 40px;
  background: #fff;
  gap: 24px;
}
.logo-group {
  display: flex;
  align-items: center;
  gap: 18px;
}
.logo-group img {
  height: 88px;
  width: auto;
  object-fit: contain;
  background: transparent;
  transition: height 0.2s;
}
.search-input {
  flex: 1 1 420px;
  max-width: 480px;
  min-width: 260px;
  background: #EEAA2C;
  border: none;
  border-radius: 6px;
  padding: 14px 28px;
  font-size: 1.1rem;
  color: #fff;
  font-style: italic;
  font-weight: 400;
  outline: none;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
}
.search-input::placeholder {
  color: #fff;
  opacity: 0.85;
  font-style: italic;
}
.lang-switch {
  display: flex;
  align-items: center;
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 18px;
  padding: 2px 10px;
  gap: 6px;
  min-width: 70px;
  height: 32px;
  justify-content: center;
}
.lang {
  font-size: 1rem;
  font-weight: 600;
  color: #888;
  cursor: pointer;
  padding: 0 4px;
  transition: color 0.2s;
}
.lang.active {
  color: #1665B0;
}
.divider {
  color: #bbb;
  font-size: 1.1rem;
  font-weight: 400;
}
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
  .topbar {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
    padding: 18px 10px 10px 10px;
  }
  .logo-group {
    justify-content: center;
  }
  .logo-group img {
    height: 64px;
  }
  .search-input {
    max-width: 100%;
    min-width: 0;
  }
  .lang-switch {
    align-self: flex-end;
  }
  .menu {
    gap: 18px;
    font-size: 1rem;
  }
}
</style> 