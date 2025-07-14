<template>
  <section class="hero min-h-[228px] scroll-mt-[var(--top-scroll)] px-2 md:pl-32" id="banner">
    <div class="hero-content">
      <!-- <h1>{{ $t('hero.title') }}<br />{{ $t('hero.subtitle') }}</h1>
      <div class="subtitle uppercase">
        {{ $t('hero.description') }}<br />
        {{ $t('hero.description2') }}
      </div> -->
    </div>
  </section>
</template>

<script>
export default {
  name: 'BannerSection'
}
</script>

<style scoped>
.hero {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  background-image: url('@/assets/imgs/Banner.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  aspect-ratio: 5 / 2;
  color: #fff;
}

.hero-content {
  z-index: 1;
  max-width: 700px;
  padding: 60px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.hero h1 {
  font-size: 2.6rem;
  font-weight: 800;
  margin-bottom: 32px;
  line-height: 1.2;
  letter-spacing: 1px;
}

.subtitle {
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.6;
  margin-bottom: 0;
}

@media (max-width: 900px) {
  .hero-content {
    padding: 32px 0;
  }

  .hero h1 {
    font-size: 1.5rem;
    margin-bottom: 18px;
  }

  .subtitle {
    font-size: 1rem;
  }
}
</style>
