<template>
  <section class="typical-activities-section" id="typical-activities-section">
    <h2 class="section-title">HÌNH ẢNH HOẠT ĐỘNG TIÊU BIỂU</h2>
    <div class="activities-grid">
      <div class="row row-1">
        <img :src="imgs[0]" alt="activity" />
      </div>
      <div class="row row-2">
        <img :src="imgs[1]" alt="activity" />
        <img :src="imgs[2]" alt="activity" />
        <img :src="imgs[3]" alt="activity" />
      </div>
      <div class="row row-3">
        <img :src="imgs[4]" alt="activity" />
        <img :src="imgs[5]" alt="activity" />
      </div>
    </div>
  </section>
</template>

<script>
import img01 from '@/assets/imgs/typicalActivities/img01.png'
import img02 from '@/assets/imgs/typicalActivities/img02.png'
import img03 from '@/assets/imgs/typicalActivities/img03.png'
import img04 from '@/assets/imgs/typicalActivities/img04.png'
import img05 from '@/assets/imgs/typicalActivities/img05.png'
import img06 from '@/assets/imgs/typicalActivities/img06.png'

export default {
  name: 'TypicalActivitiesSection',
  data() {
    return {
      imgs: [img01, img02, img03, img04, img05, img06]
    }
  }
}
</script>

<style scoped>
.typical-activities-section {
  background: #fff;
  padding: 48px 0 48px 0;
}
.section-title {
  font-size: 2.3rem;
  font-weight: 900;
  color: #111;
  margin-bottom: 32px;
  letter-spacing: 1px;
  text-align: left;
  margin-left: 5vw;
}
.activities-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.row {
  display: flex;
  gap: 18px;
  width: 100%;
  justify-content: center;
}
.row-1 img {
  width: 100%;
  max-width: 1000px;
  height: 260px;
  object-fit: cover;
  border-radius: 8px;
}
.row-2 img {
  flex: 1 1 0;
  min-width: 0;
  height: 140px;
  object-fit: cover;
  border-radius: 8px;
}
.row-3 img {
  flex: 1 1 0;
  min-width: 0;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
}
@media (max-width: 900px) {
  .row-1 img {
    height: 160px;
  }
  .row-2 img {
    height: 80px;
  }
  .row-3 img {
    height: 100px;
  }
  .section-title {
    font-size: 1.5rem;
    margin-left: 2vw;
  }
}
@media (max-width: 600px) {
  .activities-grid {
    gap: 10px;
  }
  .row {
    gap: 8px;
  }
  .row-1 img, .row-2 img, .row-3 img {
    border-radius: 4px;
  }
}
</style> 