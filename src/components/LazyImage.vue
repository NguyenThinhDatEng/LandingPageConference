<template>
  <div class="lazy-image-container" :class="{ 'loaded': isLoaded }">
    <!-- Placeholder -->
    <div v-if="!isLoaded" class="image-placeholder" :style="placeholderStyle">
      <div class="loading-spinner"></div>
    </div>
    
    <!-- Actual image -->
    <img
      v-show="isLoaded"
      :src="src"
      :alt="alt"
      :class="imageClass"
      @load="onImageLoad"
      @error="onImageError"
    />
  </div>
</template>

<script>
export default {
  name: 'LazyImage',
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: ''
    },
    imageClass: {
      type: String,
      default: ''
    },
    placeholderStyle: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      isLoaded: false,
      observer: null
    }
  },
  mounted() {
    this.setupIntersectionObserver()
  },
  beforeUnmount() {
    if (this.observer) {
      this.observer.disconnect()
    }
  },
  methods: {
    setupIntersectionObserver() {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              this.loadImage()
              this.observer.unobserve(entry.target)
            }
          })
        },
        {
          rootMargin: '50px 0px', // Load 50px before entering viewport
          threshold: 0.1
        }
      )
      
      this.observer.observe(this.$el)
    },
    loadImage() {
      // Trigger image load
      const img = new Image()
      img.onload = () => {
        this.isLoaded = true
      }
      img.src = this.src
    },
    onImageLoad() {
      this.isLoaded = true
    },
    onImageError() {
      console.error('Failed to load image:', this.src)
    }
  }
}
</script>

<style scoped>
.lazy-image-container {
  position: relative;
  overflow: hidden;
}

.image-placeholder {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loading-spinner {
  width: 20px;
  height: 20px;
  border: 2px solid #ddd;
  border-top: 2px solid #003f91;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

img {
  transition: opacity 0.3s ease;
}
</style> 