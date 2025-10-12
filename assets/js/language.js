document.addEventListener('DOMContentLoaded', () => {
  // Tombol toggle desktop & mobile (bisa 1 atau beberapa)
  const toggleBtns = document.querySelectorAll('[id^="toggleLang"]');

  // Semua elemen bilingual yang punya data-lang="EN" atau data-lang="ID"
  const langElements = document.querySelectorAll('[data-lang]');

  // Ambil bahasa terakhir atau default EN
  let currentLang = localStorage.getItem('lang') || 'EN';

  // Fungsi apply: tampilkan elemen sesuai bahasa currentLang
  function applyLang(lang) {
    langElements.forEach(el => {
      const elLang = el.dataset.lang;
      el.classList.toggle('hidden', elLang !== lang);
    });

    // update semua tombol toggle
    toggleBtns.forEach(b => {
      // tampilkan label yang akan di-switch saat diklik (opsional)
      // jika mau tombol menampilkan bahasa yang aktif, pakai: b.textContent = lang;
      // di sini kita set tombol menampilkan lawan bahasa (seperti desain awal)
      b.textContent = lang === 'EN' ? 'ID' : 'EN';
      b.dataset.lang = lang;
    });

    // simpan preferensi
    localStorage.setItem('lang', lang);
    currentLang = lang;
  }

  // Inisialisasi saat load
  applyLang(currentLang);

  // Event listener toggle
  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const nextLang = currentLang === 'EN' ? 'ID' : 'EN';
      applyLang(nextLang);
    });
  });
});
