<template>
  <header class="header-bar flex flex-col item-center">
    <div
      class="topbar-background flex justify-center h-[var(--header-topbar-height)]"
    >
      <div class="topbar container justify-between flex items-center">
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
    </div>
    <div
      class="navbar-background flex justify-center h-[var(--header-navbar-height)]"
    >
      <nav class="navbar md:w-6xl">
        <ul class="menu flex gap-12">
          <li><a href="#banner">Trang Chủ</a></li>
          <li><a href="#intro">Giới Thiệu</a></li>
          <li><a href="#program">Chương Trình</a></li>
          <li><a href="#partners">Đăng ký</a></li>
          <li><a href="#services">Dịch vụ</a></li>
          <li><a href="#accommodation">Lưu Trú</a></li>
          <li><a href="#activities">Hoạt động</a></li>
          <li><a href="#partners">Đối tác</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderBar",
};
</script>

<style scoped>
.header-bar {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
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
  background: #eeaa2c;
  border: none;
  border-radius: 6px;
  padding: 14px 28px;
  font-size: 1.1rem;
  color: #fff;
  font-style: italic;
  font-weight: 400;
  outline: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
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
  color: #1665b0;
}
.divider {
  color: #bbb;
  font-size: 1.1rem;
  font-weight: 400;
}
.navbar-background {
  background: #003f91;
}

.menu li a {
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 1.15rem;
  font-family: inherit;
  display: block;
  transition: color 0.2s, border-bottom 0.2s;
  text-align: center;
  height: var(--header-navbar-height);
  line-height: var(--header-navbar-height);
}

.menu li a:hover {
  color: #ffd24c;
}
</style> 