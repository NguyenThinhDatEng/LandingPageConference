<template>
  <section class="partners-contact-section" id="partners-contact-section">
    <h2 class="section-title">ĐỐI TÁC KHÁCH HÀNG</h2>
    <div class="partners-row">
      <div class="partner-logo" v-for="n in 5" :key="n"></div>
    </div>
    <div class="contact-form-box">
      <h3 class="form-title">ĐĂNG KÝ THÔNG TIN LIÊN HỆ</h3>
      <form class="contact-form">
        <div class="form-row">
          <input type="text" placeholder="QUÝ DANH" required />
          <input type="email" placeholder="EMAIL" required />
        </div>
        <div class="form-row">
          <input type="text" placeholder="ĐIỆN THOẠI" required />
          <input type="text" placeholder="NỘI DUNG" required />
        </div>
        <textarea placeholder="CHI TIẾT" rows="3"></textarea>
        <button type="submit">GỬI THÔNG TIN</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PartnersAndContactSection'
}
</script>

<style scoped>
.partners-contact-section {
  background: #fff;
  padding: 48px 0 0 0;
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
.partners-row {
  display: flex;
  justify-content: center;
  gap: 32px;
  margin-bottom: 38px;
}
.partner-logo {
  width: 120px;
  height: 60px;
  background: #e0e0e0;
  border-radius: 8px;
}
.contact-form-box {
  background: #EEAA2C;
  max-width: 900px;
  margin: 0 auto 0 auto;
  border-radius: 0;
  padding: 36px 32px 32px 32px;
  box-sizing: border-box;
  margin-bottom: -80px;
  position: relative;
  z-index: 2;
}
.form-title {
  text-align: center;
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 28px;
  letter-spacing: 1px;
}
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.form-row {
  display: flex;
  gap: 18px;
}
.contact-form input {
  flex: 1 1 0;
  padding: 12px 18px;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  margin-bottom: 0;
}
.contact-form textarea {
  width: 100%;
  border: none;
  border-radius: 6px;
  padding: 12px 18px;
  font-size: 1rem;
  resize: vertical;
  min-height: 48px;
}
.contact-form button {
  margin: 0 auto;
  margin-top: 8px;
  background: #fff;
  color: #222;
  border: none;
  border-radius: 6px;
  padding: 10px 32px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}
.contact-form button:hover {
  background: #003F91;
  color: #fff;
}
@media (max-width: 900px) {
  .partners-row {
    gap: 12px;
  }
  .partner-logo {
    width: 70px;
    height: 38px;
  }
  .contact-form-box {
    padding: 18px 6vw 18px 6vw;
  }
  .form-row {
    flex-direction: column;
    gap: 10px;
  }
}
</style> 