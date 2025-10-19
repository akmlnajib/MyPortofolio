document.addEventListener("DOMContentLoaded", () => {
  // =========================
  // 🧩 DATA PROJECT DUA BAHASA
  // =========================
  const projectsData = [
    {
      titleEN: "Kenangan Rentcar",
      titleID: "Kenangan Rentcar",
      descEN: "Car rental management system with Laravel 11 and WhatsApp booking integration.",
      descID: "Sistem manajemen penyewaan mobil dengan Laravel 11 dan integrasi pemesanan melalui WhatsApp.",
      img: "assets/img/project/project-3.png",
      tech: ["Laravel", "Blade", "WhatsApp API", "MySQL"],
      github: "https://github.com/akmlnajib/Kenangan-RentalCar",
      figma: null,
      tableau: null
    },
    {
      titleEN: "Absensi Geolocation",
      titleID: "Absensi Geolocation",
      descEN: "Employee attendance system based on geolocation using PHP Native (version 8.3.4), featuring a Tabler UI interface and utilizing the Haversine algorithm and Leaflet.js for mapping.",
      descID: "Sistem absensi karyawan berbasis geolokasi menggunakan PHP Native (versi 8.3.4), dengan antarmuka Tabler UI serta algoritma Haversine dan Leaflet.js untuk pemetaan.",
      img: "assets/img/project/project-1.png",
      tech: ["PHP", "MySQL", "Haversine", "Tabler UI"],
      github: "https://github.com/akmlnajib/Absensi-Geolocation",
      figma: null,
      tableau: null
    },
    {
      titleEN: "Dukcapil Online",
      titleID: "Dukcapil Online",
      descEN: "Web & Android population administration service design.",
      descID: "Desain layanan administrasi kependudukan berbasis Web & Android.",
      img: "assets/img/project/project-9.png",
      tech: ["Figma"],
      github: null,
      figma: "https://www.figma.com/design/jJE5xtafA4pY8IVH0GyfVt/Android-E-Dukcapil?node-id=0-1&t=gtfG8Xn31rO5B5cs-1",
      tableau: null
    },
    {
      titleEN: "SMART DSS",
      titleID: "SMART DSS",
      descEN: "Decision Support System applying the SMART algorithm for selecting the best employee.",
      descID: "Sistem Pendukung Keputusan dengan penerapan algoritma SMART untuk menentukan karyawan terbaik.",
      img: "assets/img/project/project-5.png",
      tech: ["PHP", "MySQL", "SMART"],
      github: "https://github.com/akmlnajib/RJM",
      figma: null,
      tableau: null
    },
    {
      titleEN: "MicroBooks",
      titleID: "MicroBooks",
      descEN: "A digital book reading app with a chat feature for user discussions.",
      descID: "Aplikasi baca buku digital dengan fitur obrolan untuk diskusi antar pengguna.",
      img: "assets/img/project/project-2.png",
      tech: ["Laravel", "TypeScript", "Blade", "JavaScript", "MySQL"],
      github: "https://github.com/akmlnajib/Microbooks",
      figma: null,
      tableau: null
    },
    {
      titleEN: "Ubhara Scholarship",
      titleID: "Beasiswa Ubhara",
      descEN: "A web-based scholarship management system for Universitas Bhayangkara Jakarta Raya, enabling students to apply and track scholarship status easily.",
      descID: "Sistem manajemen beasiswa berbasis web untuk Universitas Bhayangkara Jakarta Raya, memungkinkan mahasiswa mengajukan dan memantau status beasiswa dengan mudah.",
      img: "assets/img/project/project-4.png",
      tech: ["PHP", "MySQL"],
      github: "https://github.com/akmlnajib/Beasiswa",
      figma: null,
      tableau: null
    }
  ];

  // =========================
  // 🌐 TOGGLE BAHASA (GLOBAL)
  // =========================
  const toggleLangBtn = document.getElementById("toggleLang");
  let currentLang = localStorage.getItem("lang") || "EN"; // default EN

  // Set label awal tombol
  toggleLangBtn.textContent = currentLang === "EN" ? "ID" : "EN";

  toggleLangBtn.addEventListener("click", () => {
    currentLang = currentLang === "EN" ? "ID" : "EN";
    toggleLangBtn.textContent = currentLang === "EN" ? "ID" : "EN";
    localStorage.setItem("lang", currentLang);
  });

  // =========================
  // 🎨 MODAL PROJECT
  // =========================
  const modal = document.getElementById("projectModal");
  if (!modal) return;

  const modalCard = modal.querySelector(".modal-card");
  const modalImg = document.getElementById("modalImg");
  const modalTitle = document.getElementById("modalTitle");
  const modalDesc = document.getElementById("modalDesc");
  const modalTech = document.getElementById("modalTech");
  const modalLinks = document.getElementById("modalLinks");
  const closeModal = document.getElementById("closeModal");

  if (!modalCard || !modalImg || !modalTitle || !modalDesc || !modalTech || !modalLinks || !closeModal) {
    console.warn("⚠️ Elemen modal tidak lengkap di HTML.");
    return;
  }

  // tombol view-detail
  document.querySelectorAll(".view-detail-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = Number(btn.getAttribute("data-project")) || 0;
      const p = projectsData[idx];
      if (!p) return;

      // Ambil bahasa terkini (langsung dari localStorage agar selalu sinkron)
const lang = localStorage.getItem("lang") || "EN";

modalImg.src = p.img || "";
modalTitle.textContent = lang === "EN" ? p.titleEN : p.titleID;
modalDesc.textContent = lang === "EN" ? p.descEN : p.descID;
modalTech.innerHTML = (p.tech || [])
  .map(t => `<span class="text-xs bg-cyan-900 px-3 py-1 rounded-full text-cyan-300">${t}</span>`)
  .join(" ");


      modalLinks.innerHTML = "";

      if (p.github) {
        modalLinks.innerHTML += `
          <a href="${p.github}" target="_blank"
            class="inline-flex items-center gap-2 px-4 py-2 border border-cyan-400 rounded-lg text-cyan-300 hover:bg-cyan-400 hover:text-black transition font-medium text-sm md:text-base">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd"
                d="M12 .5C5.648.5.5 5.648.5 12c0 5.094 3.293 9.406 7.864 10.938.575.1.787-.25.787-.562 0-.281-.012-1.219-.012-2.219-3.2.688-3.875-1.375-3.875-1.375-.525-1.313-1.287-1.662-1.287-1.662-1.05-.713.075-.7.075-.7 1.162.087 1.775 1.2 1.775 1.2 1.031 1.762 2.7 1.25 3.362.962.1-.744.4-1.25.725-1.537-2.55-.287-5.237-1.287-5.237-5.737 0-1.263.45-2.3 1.2-3.112-.125-.288-.525-1.462.112-3.05 0 0 .975-.312 3.2 1.188A11.1 11.1 0 0 1 12 6.9c.987.012 1.987.137 2.925.4 2.225-1.5 3.2-1.188 3.2-1.188.637 1.588.237 2.762.112 3.05.75.812 1.2 1.85 1.2 3.112 0 4.463-2.7 5.437-5.262 5.712.412.35.775 1.037.775 2.1 0 1.512-.013 2.737-.013 3.112 0 .3.212.65.787.55A10.99 10.99 0 0 0 23.5 12c0-6.352-5.148-11.5-11.5-11.5Z"
                clip-rule="evenodd" />
            </svg>
             GitHub
          </a>`;
      }

      if (p.figma) {
        modalLinks.innerHTML += `
          <a href="${p.figma}" target="_blank"
            class="inline-flex items-center gap-2 px-4 py-2 border border-cyan-400 rounded-lg text-cyan-300 hover:bg-cyan-400 hover:text-black transition font-medium text-sm md:text-base">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 384" class="w-4 h-4">
              <path fill="#0ACF83" d="M128 192c0-35.3 28.7-64 64-64h64v64c0 35.3-28.7 64-64 64s-64-28.7-64-64Z"/>
              <path fill="#A259FF" d="M0 320c0-35.3 28.7-64 64-64h64v64c0 35.3-28.7 64-64 64S0 355.3 0 320Z"/>
              <path fill="#F24E1E" d="M0 192v-64h128v64H0Z"/>
              <path fill="#FF7262" d="M0 64C0 28.7 28.7 0 64 0h64v128H0V64Z"/>
              <path fill="#1ABCFE" d="M128 0h64c35.3 0 64 28.7 64 64s-28.7 64-64 64h-64V0Z"/>
            </svg> Figma
          </a>`;
      }

      if (p.tableau) {
        modalLinks.innerHTML += `
          <a href="${p.tableau}" target="_blank"
            class="inline-flex items-center gap-2 px-4 py-2 border border-cyan-400 rounded-lg text-cyan-300 hover:bg-cyan-400 hover:text-black transition font-medium text-sm md:text-base">
            <img src="https://cdn.worldvectorlogo.com/logos/tableau-software.svg" class="w-5 h-5" alt=""> Tableau
          </a>`;
      }

      modal.classList.remove("hidden");
      modalCard.classList.remove("scale-95", "opacity-0");
      document.body.classList.add("overflow-hidden");
    });
  });

  // fungsi sembunyikan modal
  function hideModal() {
    modalCard.classList.add("scale-95", "opacity-0");
    setTimeout(() => {
      modal.classList.add("hidden");
      document.body.classList.remove("overflow-hidden");
    }, 200);
  }

  closeModal.addEventListener("click", hideModal);
  modal.addEventListener("click", e => { if (e.target === modal) hideModal(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") hideModal(); });
});
