<template>
  <header class="header-bar flex flex-col item-center px-2 sm:px-0">
    <div class="topbar-background flex justify-center">
      <div class="topbar container flex gap-2 md:gap-8 md:justify-between md:items-center">
        <!-- Logo group - full width on mobile, flex-1 on desktop -->
        <div class="logo-group flex justify-center justify-start items-center gap-2 md:gap-8">
          <img src="@/assets/imgs/logo/VAGO.png" alt="VAGO logo" />
          <img src="@/assets/imgs/logo/HAGO.jpg" alt="HAGO logo" class="small-logo"/>
        </div>

        <!-- Topbar right - full width on mobile, flex items on desktop -->
        <div class="topbar-right flex flex-1  md:flex-row items-center justify-end gap-4 py-2 md:py-0">
          <!-- Search Container -->
          <div class="search-container relative hidden sm:flex flex-1 max-w-[480px] xl:min-w-[480px]">
            <input v-model="searchQuery" @input="handleSearchInput" @focus="isSearchOpen = true" @blur="handleBlur"
              class="search-input w-full bg-[#eeaa2c] border-none rounded-md px-2 md:px-6 py-3.5 text-xs md:text-lg text-white italic font-normal outline-none shadow-md placeholder:text-white placeholder:opacity-85 placeholder:italic transition-all duration-200 focus:ring-2 focus:ring-[#eeaa2c]/50 focus:shadow-lg"
              :placeholder="$t('header.search')" />
            <!-- Search Results Dropdown -->
            <div v-if="isSearchOpen && (searchQuery || isLoading)"
              class="search-dropdown absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg z-50 max-h-96 overflow-y-auto">
              <!-- Loading State -->
              <div v-if="isLoading" class="p-4 text-center text-gray-500">
                <div class="animate-spin rounded-full h-6 w-6 border-b-2 border-[#eeaa2c] mx-auto mb-2"></div>
                {{ $t('search.searching') }}
              </div>
              <!-- No Results -->
              <div v-else-if="searchResults.length === 0 && searchQuery" class="p-4 text-center text-gray-500">
                {{ $t('search.noResults') }}
              </div>
              <!-- Search Results -->
              <div v-else class="py-2">
                <div v-for="result in searchResults" :key="result.id" @mousedown="selectSearchResult(result)"
                  class="search-result-item px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0 transition-colors duration-150">
                  <div class="flex items-start gap-3">
                    <!-- Icon based on type -->
                    <div class="search-result-icon flex-shrink-0 mt-1">
                      <div v-if="result.type === 'event'" class="w-4 h-4 bg-blue-500 rounded-full"></div>
                      <div v-else-if="result.type === 'service'" class="w-4 h-4 bg-green-500 rounded-full"></div>
                      <div v-else-if="result.type === 'accommodation'" class="w-4 h-4 bg-purple-500 rounded-full"></div>
                      <div v-else-if="result.type === 'activity'" class="w-4 h-4 bg-orange-500 rounded-full"></div>
                      <div v-else-if="result.type === 'contact'" class="w-4 h-4 bg-red-500 rounded-full"></div>
                      <div v-else-if="result.type === 'form'" class="w-4 h-4 bg-yellow-500 rounded-full"></div>
                      <div v-else class="w-4 h-4 bg-gray-500 rounded-full"></div>
                    </div>
                    <!-- Content -->
                    <div class="flex-1 min-w-0">
                      <div class="search-result-title font-semibold text-gray-900 text-sm mb-1 truncate">
                        {{ result.title }}
                      </div>
                      <div class="search-result-description text-gray-600 text-xs line-clamp-2">
                        {{ result.description }}
                      </div>
                      <div class="search-result-section text-[#eeaa2c] text-xs font-medium mt-1">
                        {{ $t(`sections.${result.section}`) }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- End Search Container -->

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
              class="mobile-menu-btn sm:hidden flex flex-col justify-center items-center w-10 h-10 bg-[#003f91] border-none rounded-md cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#002d6b]"
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
    <div class="navbar-background hidden sm:flex justify-center h-[var(--header-navbar-height)]">
      <nav class="navbar container md:w-7xl">
        <ul class="menu flex justify-between">
          <li v-for="item in menuItems" :key="item.key">
            <a :href="item.href" class="sm:px-1 md:px-4 text-sm md:text-lg">{{ $t(item.translationKey) }}</a>
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
import { useSearch } from '@/composables/useSearch'

export default {
  name: "HeaderBar",
  data() {
    return {
      isMobileMenuOpen: false,
      menuItems: [
        { key: 'home', href: '#banner', translationKey: 'header.home' },
        { key: 'intro', href: '#intro', translationKey: 'header.intro' },
        { key: 'report', href: '#report', translationKey: 'header.report' },
        { key: 'activities', href: '#activities', translationKey: 'header.activities' },
        { key: 'programs', href: '#programs', translationKey: 'header.programs' },
        { key: 'accommodation', href: '#accommodation', translationKey: 'header.accommodation' },
        { key: 'partners', href: '#partners', translationKey: 'header.partners' },
        { key: 'register', href: '#partners', translationKey: 'header.register' },
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
    },
    handleBlur(e) {
      setTimeout(() => {
        this.closeSearch()
      }, 200)
    }
  },
  setup() {
    const {
      searchQuery,
      isSearchOpen,
      searchResults,
      isLoading,
      handleSearchInput,
      toggleSearch,
      selectSearchResult,
      closeSearch
    } = useSearch()

    return {
      searchQuery,
      isSearchOpen,
      searchResults,
      isLoading,
      handleSearchInput,
      toggleSearch,
      selectSearchResult,
      closeSearch
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
  max-height: 80px;
  object-fit: contain;
  background: transparent;
  transition: height 0.2s;

  &.small-logo {
    max-height: 76px;
  }
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

.search-dropdown {
  min-width: 100%;
  box-shadow: 0 4px 24px 0 rgba(0, 0, 0, 0.08);
  animation: fadeIn 0.2s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-8px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.search-result-item {
  transition: background 0.15s;
}

.search-result-item:hover {
  background: #f3f4f6;
}
</style>
