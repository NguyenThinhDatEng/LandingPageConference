<template>
  <section class="our-services-section" id="our-services-section">
    <h2 class="section-title">DỊCH VỤ CỦA CHÚNG TÔI</h2>
    <div class="services-grid">
      <div class="services-left">
        <div class="big-card" v-for="(item, idx) in bigCards" :key="idx">
          <div class="big-card-img" :style="{ backgroundImage: `url(${item.img})` }">
            <div class="big-card-overlay">
              <div class="big-card-title">{{ item.title }}</div>
              <div class="big-card-caption">{{ item.caption }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="services-right">
        <div class="small-card" v-for="(item, idx) in smallCards" :key="idx">
          <img :src="item.img" alt="service" />
          <div class="small-card-content">
            <div class="small-card-title">{{ item.title }}</div>
            <div class="small-card-desc">{{ item.desc }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import cauVang from '@/assets/imgs/myServices/cau_vang.png'
import bridgeEvening from '@/assets/imgs/myServices/bridge_in_evening.jpg'

export default {
  name: 'OurServicesSection',
  data() {
    return {
      bigCards: [
        {
          img: cauVang,
          title: 'CẦU VÀNG',
          caption: 'QUY ĐỊNH VỀ HALAL INDONESIA'
        },
        {
          img: cauVang,
          title: 'CẦU VÀNG',
          caption: 'DANH SÁCH CÁC ĐƠN VỊ CHỨNG NHẬN HALAL INDONESIA'
        }
      ],
      smallCards: [
        {
          img: bridgeEvening,
          title: 'INDONESIA: THỊ TRƯỜNG ĐẦY TIỀM NĂNG CỦA DOANH NGHIỆP VIỆT',
          desc: 'Là Thị Trường Có Quy Mô Dân Số Đứng Thứ 4 Trên Thế Giới, Indonesia Có Nhu Cầu Lớn Về Một Hàng Nông Sản'
        },
        {
          img: bridgeEvening,
          title: 'DOANH NGHIỆP VIỆT NAM TỪNG BƯỚC CHINH PHỤC THỊ TRƯỜNG "KHÓ TÍNH" INDONESIA',
          desc: 'Là Thị Trường Có Quy Mô Dân Số Đứng Thứ 4 Trên Thế Giới, Indonesia Có Nhu Cầu Lớn Về Một Hàng Nông Sản'
        },
        {
          img: bridgeEvening,
          title: 'MỞ ĐƯỜNG CHO DOANH NGHIỆP XUẤT KHẨU SANG THỊ TRƯỜNG INDONESIA',
          desc: 'Là Thị Trường Có Quy Mô Dân Số Đứng Thứ 4 Trên Thế Giới, Indonesia Có Nhu Cầu Lớn Về Một Hàng Nông Sản'
        },
        {
          img: bridgeEvening,
          title: 'THỊ TRƯỜNG INDONESIA - CƠ HỘI NÀO CHO NÔNG SẢN VIỆT',
          desc: 'Là Thị Trường Có Quy Mô Dân Số Đứng Thứ 4 Trên Thế Giới, Indonesia Có Nhu Cầu Lớn Về Một Hàng Nông Sản'
        }
      ]
    }
  }
}
</script>

<style scoped>
.our-services-section {
  background: #fff;
  padding: 48px 0 48px 0;
}
.section-title {
  font-size: 2.6rem;
  font-weight: 900;
  color: #111;
  margin-bottom: 32px;
  letter-spacing: 1px;
  text-align: left;
  margin-left: 5vw;
}
.services-grid {
  display: flex;
  gap: 40px;
  max-width: 1400px;
  margin: 0 auto;
  align-items: flex-start;
  justify-content: center;
}
.services-left {
  flex: 1.2;
  display: flex;
  flex-direction: column;
  gap: 32px;
}
.big-card-img {
  position: relative;
  width: 600px;
  max-width: 90vw;
  height: 220px;
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
}
.big-card-overlay {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 0 0 24px 28px;
  background: linear-gradient(180deg, rgba(0,0,0,0.10) 40%, rgba(0,0,0,0.55) 100%);
}
.big-card-title {
  font-size: 3.2rem;
  font-weight: 900;
  color: #fff;
  letter-spacing: 2px;
  text-shadow: 0 4px 16px rgba(0,0,0,0.25);
  margin-bottom: 12px;
}
.big-card-caption {
  font-size: 1.1rem;
  color: #fff;
  font-weight: 400;
  text-shadow: 0 2px 8px rgba(0,0,0,0.18);
}
.services-right {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.small-card {
  display: flex;
  align-items: flex-start;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
  border: 1.5px solid #e0e0e0;
  padding: 12px 16px;
  gap: 18px;
  min-height: 90px;
}
.small-card img {
  width: 110px;
  height: 70px;
  object-fit: cover;
  border-radius: 6px;
}
.small-card-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
}
.small-card-title {
  font-size: 1.08rem;
  font-weight: 700;
  color: #111;
  margin-bottom: 2px;
}
.small-card-desc {
  font-size: 0.98rem;
  color: #444;
  font-weight: 400;
}
@media (max-width: 1200px) {
  .services-grid {
    flex-direction: column;
    gap: 32px;
    align-items: center;
  }
  .services-left, .services-right {
    width: 100%;
    max-width: 700px;
  }
  .big-card-img {
    width: 100%;
    min-width: 0;
  }
}
@media (max-width: 700px) {
  .section-title {
    font-size: 2rem;
    margin-left: 2vw;
  }
  .big-card-title {
    font-size: 2rem;
  }
  .big-card-img {
    height: 140px;
  }
  .small-card img {
    width: 70px;
    height: 48px;
  }
}
</style> 