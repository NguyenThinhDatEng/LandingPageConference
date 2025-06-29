export function useImagePreloader() {
  const preloadImage = (src) => {
    return new Promise((resolve, reject) => {
      const img = new Image()
      img.onload = () => resolve(img)
      img.onerror = () => reject(new Error(`Failed to load image: ${src}`))
      img.src = src
    })
  }

  const preloadCriticalImages = async (imageList) => {
    const promises = imageList.map(src => preloadImage(src))
    try {
      await Promise.all(promises)
      console.log('Critical images preloaded successfully')
    } catch (error) {
      console.error('Error preloading images:', error)
    }
  }

  return {
    preloadImage,
    preloadCriticalImages
  }
} 