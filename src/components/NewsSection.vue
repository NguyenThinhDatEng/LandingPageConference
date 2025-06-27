<template>
  <section class="event-list-section" id="event-list-section">
    <h2>CHƯƠNG TRÌNH SỰ KIỆN NỔI BẬT</h2>
    <div class="event-list-bg">
      <div class="event-list">
        <div class="event-card" v-for="(item, idx) in events" :key="idx">
          <img :src="item.img" alt="event" />
          <div class="event-title">{{ item.title }}</div>
          <button class="event-btn">Chi Tiết</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import cityWithBeach from '@/assets/imgs/outstandingEvent/city_with_beach.png'

export default {
  name: 'EventListSection',
  data() {
    return {
      events: [
        {
          img: cityWithBeach,
          title: 'Danh Bạ Doanh Nghiệp Xuất Khẩu Indonesia'
        },
        {
          img: cityWithBeach,
          title: 'Danh Bạ Doanh Nghiệp Nhập Khẩu Indonesia'
        },
        {
          img: cityWithBeach,
          title: 'Danh Bạ Doanh Nghiệp Xuất Khẩu Việt Nam'
        },
        {
          img: cityWithBeach,
          title: 'Danh Bạ Doanh Nghiệp Nhập Khẩu Việt Nam'
        }
      ]
    }
  }
}
</script>

<style scoped>
.event-list-section {
  background: #4a6a7b url('@/assets/imgs/outstandingEvent/background.png') left top/cover no-repeat;
}

.event-list-section h2 {
  text-align: center;
  font-size: 2.3rem;
  font-weight: 900;
  color: #111;
  margin-bottom: 32px;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.event-list-bg {
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 16px;
}

.event-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  justify-items: center;
}

.event-card {
  background: #fff;
  border-radius: 10px;
  border: 1.5px solid #e0e0e0;
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
  width: 292px;
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
  transition: box-shadow 0.2s, transform 0.2s;
}

.event-card:hover {
  box-shadow: 0 8px 32px rgba(0,63,145,0.13);
  transform: translateY(-6px) scale(1.03);
}

.event-card img {
  width: 100%;
  height: 194px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
  border-bottom: 1px solid #e0e0e0;
}

.event-title {
  font-size: 1.08rem;
  font-weight: 700;
  color: #222;
  margin: 18px 0 16px 0;
  text-align: left;
  min-height: 48px;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.event-btn {
  background: #e0e0e0;
  color: #222;
  border: none;
  border-radius: 6px;
  padding: 6px 22px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 4px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.04);
  transition: background 0.2s, color 0.2s;
}

.event-btn:hover {
  background: #003F91;
  color: #fff;
}

@media (max-width: 1200px) {
  .event-list {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 700px) {
  .event-list {
    grid-template-columns: 1fr;
  }

  .event-card {
    width: 98vw;
    max-width: 340px;
  }
}
</style>
