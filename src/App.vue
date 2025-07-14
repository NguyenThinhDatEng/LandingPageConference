<template>
  <div id="app">
    <HeaderBar />
    <div class="flex flex-col gap-16">
      <BannerSection />
      <IntroSection />
      <PdfViewerSection />
      <ActivitiesSection />
      <ProgramSection />
      <AccommodationInfoSection />
      <HueSection />
      <PartnersAndContactSection />
    </div>
    <Footer />
  </div>
</template>

<script>
import HeaderBar from "./components/HeaderBar.vue";
import BannerSection from "./components/main/BannerSection.vue";
import IntroSection from "@/components/main/IntroSection.vue";
import PdfViewerSection from "@/components/main/PdfViewerSection.vue";
import ActivitiesSection from "@/components/main/ActivitiesSection.vue";
import ProgramSection from "./components/main/ProgramSection.vue";
import AccommodationInfoSection from "./components/main/AccommodationInfoSection.vue";
import HueSection from "./components/main/HueSection.vue";
import PartnersAndContactSection from "./components/main/PartnersAndContactSection.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    HeaderBar,
    BannerSection,
    IntroSection,
    PdfViewerSection,
    ActivitiesSection,
    ProgramSection,
    AccommodationInfoSection,
    HueSection,
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
