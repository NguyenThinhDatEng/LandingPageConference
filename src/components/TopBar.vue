<template>
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
</template>

<script>
export default {
  name: 'TopBar'
}
</script>

<style scoped>
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
}
</style> 