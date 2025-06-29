<template>
  <div v-if="showLoading" class="image-preloader">
    <div class="preloader-content">
      <div class="preloader-spinner"></div>
      <p>Loading critical assets...</p>
    </div>
  </div>
</template>

<script>
import { useImagePreloader } from '@/composables/useImagePreloader'
import bannerImg from '@/assets/imgs/Banner.jpg'
import logo1Img from '@/assets/imgs/logo/logo1.png'
import logo2Img from '@/assets/imgs/logo/logo2.png'
import logo3Img from '@/assets/imgs/logo/logo3.jpg'
import logo4Img from '@/assets/imgs/logo/logo4.png'

export default {
  name: 'ImagePreloader',
  data() {
    return {
      showLoading: true,
      criticalImages: [
        bannerImg,
        logo1Img,
        logo2Img,
        logo3Img,
        logo4Img
      ]
    }
  },
  async mounted() {
    const { preloadCriticalImages } = useImagePreloader()
    
    try {
      await preloadCriticalImages(this.criticalImages)
      this.showLoading = false
      this.$emit('preload-complete')
    } catch (error) {
      console.error('Error preloading critical images:', error)
      this.showLoading = false
      this.$emit('preload-complete')
    }
  }
}
</script>

<style scoped>
.image-preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.preloader-content {
  text-align: center;
}

.preloader-spinner {
  width: 50px;
  height: 50px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #003f91;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 1rem;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

p {
  color: #666;
  font-size: 1rem;
  margin: 0;
}
</style> 