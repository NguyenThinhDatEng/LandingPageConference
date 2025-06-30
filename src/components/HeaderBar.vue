<template>
  <header class="header-bar flex flex-col item-center px-2 md:px-0">
    <div class="topbar-background flex justify-center">
      <div class="topbar container flex md:justify-between md:items-center">
        <!-- Logo group - full width on mobile, flex-1 on desktop -->
        <div class="logo-group flex justify-center justify-start flex-1 items-center">
          <img src="@/assets/imgs/logo/VAGO.png" alt="VAGO logo"/>
        </div>

        <!-- Topbar right - full width on mobile, flex items on desktop -->
        <div
          class="topbar-right flex md:flex-row items-center justify-end gap-4 py-2 md:py-0">
          <input
            class="search-input hidden sm:flex flex-1 max-w-[480px] xl:min-w-[480px] bg-[#eeaa2c] border-none rounded-md px-2 md:px-6 py-3.5 text-xs md:text-lg text-white italic font-normal outline-none shadow-md placeholder:text-white placeholder:opacity-85 placeholder:italic transition-all duration-200 focus:ring-2 focus:ring-[#eeaa2c]/50 focus:shadow-lg"
            :placeholder="$t('header.search')" />

          <div class="flex items-center gap-4">
            <div class="lang-switch">
              <span class="lang" :class="{ 'active': currentLocale === 'vi' }" @click="changeLocale('vi')">
                VN
              </span>
              <span class="divider">|</span>
              <span class="lang" :class="{ 'active': currentLocale === 'en' }" @click="changeLocale('en')">
                ENG
              </span>
            </div>
            <!-- Mobile menu icon -->
            <button
              class="mobile-menu-btn md:hidden flex flex-col justify-center items-center w-10 h-10 bg-[#003f91] border-none rounded-md cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#002d6b]"
              @click="toggleMobileMenu" :class="{ 'active': isMobileMenuOpen }">
              <span
                class="hamburger-line w-5 h-0.5 bg-white my-0.5 transition-all duration-300 ease-in-out rounded-md"></span>
              <span
                class="hamburger-line w-5 h-0.5 bg-white my-0.5 transition-all duration-300 ease-in-out rounded-md"></span>
              <span
                class="hamburger-line w-5 h-0.5 bg-white my-0.5 transition-all duration-300 ease-in-out rounded-md"></span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Desktop navbar -->
    <div class="navbar-background hidden md:flex justify-center h-[var(--header-navbar-height)]">
      <nav class="navbar container md:w-6xl">
        <ul class="menu flex gap-2 xl:gap-12">
          <li v-for="item in menuItems" :key="item.key">
            <a :href="item.href">{{ $t(item.translationKey) }}</a>
          </li>
        </ul>
      </nav>
    </div>

    <!-- Mobile menu dropdown -->
    <div class="mobile-menu md:hidden" :class="{ 'open': isMobileMenuOpen }">
      <nav class="mobile-nav">
        <ul class="mobile-menu-list">
          <li v-for="item in menuItems" :key="item.key">
            <a :href="item.href" @click="closeMobileMenu">{{ $t(item.translationKey) }}</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderBar",
  data() {
    return {
      isMobileMenuOpen: false,
      menuItems: [
        { key: 'home', href: '#banner', translationKey: 'header.home' },
        { key: 'intro', href: '#intro', translationKey: 'header.intro' },
        { key: 'program', href: '#program', translationKey: 'header.program' },
        { key: 'register', href: '#partners', translationKey: 'header.register' },
        { key: 'services', href: '#services', translationKey: 'header.services' },
        { key: 'accommodation', href: '#accommodation', translationKey: 'header.accommodation' },
        { key: 'activities', href: '#activities', translationKey: 'header.activities' },
        { key: 'partners', href: '#partners', translationKey: 'header.partners' }
      ]
    };
  },
  computed: {
    currentLocale() {
      return this.$i18n.locale
    }
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false;
    },
    changeLocale(locale) {
      this.$i18n.locale = locale
      localStorage.setItem('locale', locale)
    }
  }
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

.topbar-background {
  min-height: var(--header-topbar-height);
}

.logo-group img {
  height: var(--header-topbar-height);
  max-width: 156.44px;
  object-fit: contain;
  background: transparent;
  transition: height 0.2s;
}

.topbar-right {
  display: flex;
  align-items: center;
  gap: 1rem;
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

.mobile-menu-btn.active .hamburger-line:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.mobile-menu-btn.active .hamburger-line:nth-child(2) {
  opacity: 0;
}

.mobile-menu-btn.active .hamburger-line:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -6px);
}

/* Mobile menu dropdown */
.mobile-menu {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: #003f91;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
  z-index: 999;
}

.mobile-menu.open {
  max-height: 100vh;
}

.mobile-menu-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.mobile-menu-list li {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.mobile-menu-list li:last-child {
  border-bottom: none;
}

.mobile-menu-list li a {
  display: block;
  padding: 1rem 2rem;
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: background-color 0.2s ease;
}

.mobile-menu-list li a:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #ffd24c;
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
