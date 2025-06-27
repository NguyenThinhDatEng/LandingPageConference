<template>
  <footer class="footer">
    <div class="footer-content">
      <div>© 2024 Hội nghị Công nghệ. All rights reserved.</div>
      <div class="socials">
        <a href="#" aria-label="Facebook"><svg width="20" height="20" fill="#fff"><circle cx="10" cy="10" r="10" opacity="0.2"/><text x="5" y="15" font-size="10" fill="#fff">f</text></svg></a>
        <a href="#" aria-label="Twitter"><svg width="20" height="20" fill="#fff"><circle cx="10" cy="10" r="10" opacity="0.2"/><text x="5" y="15" font-size="10" fill="#fff">t</text></svg></a>
        <a href="#" aria-label="LinkedIn"><svg width="20" height="20" fill="#fff"><circle cx="10" cy="10" r="10" opacity="0.2"/><text x="3" y="15" font-size="10" fill="#fff">in</text></svg></a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer {
  background: #222b45;
  color: #fff;
  padding: 32px 0 20px 0;
  text-align: center;
}
.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}
.socials {
  display: flex;
  gap: 18px;
}
.socials a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(255,255,255,0.08);
  transition: background 0.2s;
}
.socials a:hover {
  background: #007bff;
}
</style>
