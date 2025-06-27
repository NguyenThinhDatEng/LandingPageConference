<template>
  <section class="accommodation-info-section" id="accommodation-info-section">
    <h2 class="section-title">THÔNG TIN LƯU TRÚ</h2>
    <div class="info-grid">
      <div class="info-col" v-for="(col, colIdx) in columns" :key="colIdx">
        <div class="col-title">{{ col.title }}</div>
        <div class="info-item" v-for="(item, idx) in col.items" :key="idx">
          <img :src="item.img" alt="info" />
          <div class="item-title">{{ item.title }}</div>
        </div>
        <div class="see-more">Xem Thêm</div>
      </div>
    </div>
  </section>
</template>

<script>
import bridgeMorning from '@/assets/imgs/accommodationInfo/bridget_in_morning.png'

export default {
  name: 'AccommodationInfoSection',
  data() {
    return {
      columns: [
        {
          title: 'CHÍNH SÁCH LIÊN QUAN TỚI ĐẦU TƯ VIỆT NAM',
          items: [
            { img: bridgeMorning, title: 'ĐỀ XUẤT CẢI CÁCH CHÍNH SÁCH ƯU ĐÃI ĐẦU TƯ' },
            { img: bridgeMorning, title: 'BÀN VỀ CHÍNH SÁCH ƯU ĐÃI ĐẦU TƯ CỦA VIỆT NAM ĐỐI VỚI DOANH NGHIỆP FDI' }
          ]
        },
        {
          title: 'THỦ TỤC ĐẦU TƯ TẠI VIỆT NAM',
          items: [
            { img: bridgeMorning, title: 'CÁC LĨNH VỰC ĐƯỢC ÁP DỤNG THỦ TỤC ĐẦU TƯ ĐẶC BIỆT THEO NGHỊ ĐỊNH 19' },
            { img: bridgeMorning, title: 'THỦ TỤC ĐẦU TƯ ĐẶC BIỆT TỪ NGÀY 15/01/2025' }
          ]
        },
        {
          title: 'TIN TỨC ĐẦU TƯ',
          items: [
            { img: bridgeMorning, title: 'ĐẦU TƯ TRỰC TIẾP NƯỚC NGOÀI VÀO VIỆT NAM VÀ TRIỂN VỌNG' },
            { img: bridgeMorning, title: 'VỐN FDI ĐĂNG KÝ VÀO VIỆT NAM TRONG QUÝ 1/2025 ĐẠT GẦN 11 TỶ USD, TĂNG 34,7%' }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.accommodation-info-section {
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
.info-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  max-width: 1400px;
  margin: 0 auto;
  align-items: flex-start;
  justify-content: center;
}
.info-col {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 18px;
}
.col-title {
  font-size: 1.18rem;
  font-weight: 700;
  color: #111;
  margin-bottom: 10px;
}
.info-item {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 8px;
}
.info-item img {
  width: 120px;
  height: 70px;
  object-fit: cover;
  border-radius: 6px;
}
.item-title {
  font-size: 1.02rem;
  font-weight: 500;
  color: #111;
  line-height: 1.4;
}
.see-more {
  margin-top: 8px;
  font-size: 1rem;
  color: #222;
  font-style: italic;
  text-align: left;
  cursor: pointer;
  text-decoration: underline;
  transition: color 0.2s;
}
.see-more:hover {
  color: #003F91;
}
@media (max-width: 1100px) {
  .info-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  .info-col {
    align-items: flex-start;
  }
}
@media (max-width: 700px) {
  .section-title {
    font-size: 2rem;
    margin-left: 2vw;
  }
  .info-item img {
    width: 80px;
    height: 48px;
  }
}
</style>