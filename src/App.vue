<template>
  <div id="app">
    <ImagePreloader @preload-complete="onPreloadComplete" />
    
    <div v-if="isReady" class="app-content">
      <HeaderBar />
      <div class="flex flex-col gap-16">
        <HeroSection />
        <IntroSection />
        <!-- Lazy load sections below the fold -->
        <Suspense>
          <template #default>
            <div>
              <EventHighlightSection />
              <OurServicesSection />
              <AccommodationInfoSection />
              <TypicalActivitiesSection />
              <PartnersAndContactSection />
            </div>
          </template>
          <template #fallback>
            <div class="loading-sections">
              <div class="loading-spinner"></div>
              <p>Loading content...</p>
            </div>
          </template>
        </Suspense>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import ImagePreloader from "./components/ImagePreloader.vue";
import HeaderBar from "./components/HeaderBar.vue";
import HeroSection from "./components/HeroSection.vue";
import IntroSection from "@/components/main/IntroSection.vue";
import Footer from "./components/Footer.vue";

// Import components directly instead of using async imports
import EventHighlightSection from "@/components/main/EventHighlightSection.vue";
import OurServicesSection from "./components/main/OurServicesSection.vue";
import AccommodationInfoSection from "./components/main/AccommodationInfoSection.vue";
import TypicalActivitiesSection from "./components/main/TypicalActivitiesSection.vue";
import PartnersAndContactSection from "./components/main/PartnersAndContactSection.vue";

export default {
  name: "App",
  components: {
    ImagePreloader,
    HeaderBar,
    HeroSection,
    IntroSection,
    EventHighlightSection,
    OurServicesSection,
    AccommodationInfoSection,
    TypicalActivitiesSection,
    PartnersAndContactSection,
    Footer,
  },
  data() {
    return {
      isReady: false
    }
  },
  methods: {
    onPreloadComplete() {
      this.isReady = true
      if ("scrollRestoration" in history) {
        history.scrollRestoration = "manual";
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
};
</script>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #fff;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-content {
  width: 100%;
}

.loading-sections {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  min-height: 200px;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #003f91;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 1rem;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
