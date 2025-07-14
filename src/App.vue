<template>
  <div id="app">
    <HeaderBar />
    <div class="flex flex-col gap-16">
      <BannerSection />
      <IntroSection />
      <EventHighlightSection />
      <OurServicesSection />
      <AccommodationInfoSection />
      <TypicalActivitiesSection />
      <PartnersAndContactSection />
    </div>
    <Footer />
  </div>
</template>

<script>
import HeaderBar from "./components/HeaderBar.vue";
import BannerSection from "./components/BannerSection.vue";
import IntroSection from "@/components/main/IntroSection.vue";
import EventHighlightSection from "@/components/main/EventHighlightSection.vue";
import OurServicesSection from "./components/main/OurServicesSection.vue";
import AccommodationInfoSection from "./components/main/AccommodationInfoSection.vue";
import TypicalActivitiesSection from "./components/main/TypicalActivitiesSection.vue";
import PartnersAndContactSection from "./components/main/PartnersAndContactSection.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    HeaderBar,
    BannerSection,
    IntroSection,
    EventHighlightSection,
    OurServicesSection,
    AccommodationInfoSection,
    TypicalActivitiesSection,
    PartnersAndContactSection,
    Footer,
  },
  mounted() {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  },
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
</style>
