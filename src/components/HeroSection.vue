<template>
  <section class="hero scroll-mt-[var(--top-scroll)]" id="banner">
    <div class="hero-content">
      <h1>{{ $t('hero.title') }}<br />{{ $t('hero.subtitle') }}</h1>
      <div class="subtitle">
        {{ $t('hero.description') }}<br />
        {{ $t('hero.description2') }}<br />
        {{ $t('hero.description3') }}
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection'
}
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 440px;
  width: 100%;
  display: flex;
  align-items: center;
  background: linear-gradient(90deg, rgba(0,63,145,0.6) 60%, rgba(0,63,145,0.1) 100%), url('@/assets/imgs/Banner.jpg') center/cover no-repeat;
  color: #fff;
  padding: 0 0 0 5vw;
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
  .hero {
    min-height: 320px;
    padding-left: 2vw;
  }
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
