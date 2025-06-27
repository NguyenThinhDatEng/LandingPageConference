<template>
  <section class="contact" id="contact">
    <h2>Liên hệ với chúng tôi</h2>
    <form class="contact-form">
      <input type="text" placeholder="Họ và tên" required />
      <input type="email" placeholder="Email" required />
      <textarea placeholder="Nội dung liên hệ" rows="4" required></textarea>
      <button type="submit">Gửi liên hệ</button>
    </form>
  </section>
</template>

<script>
export default {
  name: 'ContactForm'
}
</script>

<style scoped>
.contact {
  background: #f8fafc;
  padding: 60px 20px;
}
.contact h2 {
  text-align: center;
  font-size: 2.2rem;
  margin-bottom: 32px;
  color: #2c3e50;
}
.contact-form {
  max-width: 420px;
  margin: 0 auto;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.07);
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.contact-form input,
.contact-form textarea {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 1rem;
  outline: none;
  transition: border 0.2s;
}
.contact-form input:focus,
.contact-form textarea:focus {
  border: 1.5px solid #007bff;
}
.contact-form button {
  background: linear-gradient(120deg, #007bff 0%, #00c6ff 100%);
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 14px 0;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 8px;
  transition: background 0.2s;
}
.contact-form button:hover {
  background: #007bff;
}
</style>
