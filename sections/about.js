export function AboutSection() {
  return `
    <section id="about" class="py-20 max-w-6xl mx-auto px-6">
    <div class="flex flex-col md:flex-row items-center justify-center gap-10" data-aos="fade-right">
      <div class="flex-shrink-0">
        <img src="assets/img/foto.jpg" alt="Profile"
          class="rounded-full neon-border w-36 h-36 md:w-48 md:h-48 object-cover mx-auto md:mx-0" />
      </div>
      <div class="flex-1 text-gray-300 text-center md:text-left">
        <h1 data-lang="EN" class="text-2xl md:text-4xl neon-text font-bold mb-3">
          Hello, I'm <span class="text-cyan-400">Akmal Najib</span>
        </h1>
        <h1 data-lang="ID" class="text-2xl md:text-4xl neon-text font-bold mb-3 hidden">
          Hallo, Saya <span class="text-cyan-400">Akmal Najib</span>
        </h1>
        <p class="text-cyan-300 text-base md:text-lg mb-4">
          <span id="typed"></span>
        </p>
        <div class="relative text-gray-300 text-sm md:text-base">
          <!-- Tombol toggle bahasa -->

          <!-- Versi Bahasa Inggris -->
          <p data-lang="EN" class="leading-relaxed mb-5">
            I hold a Bachelor's degree in <span class="text-cyan-400">Computer Science</span> from
            <span class="text-cyan-400">Universitas Bhayangkara Jakarta Raya</span>, with a GPA of
            <span class="text-cyan-400">3.50/4.00</span>.
            I am currently undertaking an internship at <span class="text-cyan-400">PT Pegadaian</span> as a
            <span class="text-cyan-400">Digital Representative</span>, where I engage in digital product promotion and
            customer assistance.
            I have also gained experience as a <span class="text-cyan-400">Junior Warehouse Analyst</span> at
            <span class="text-cyan-400">PT Shopee International Indonesia</span>.
            Additionally, I have completed certifications in <span class="text-cyan-400">Google Advanced Data
              Analytics</span>,
            <span class="text-cyan-400">Occupational Health and Safety</span>, and
            <span class="text-cyan-400">Software Development and Programming</span>.
            I am skilled in <span class="text-cyan-400">Python, PHP, MySQL, JavaScript, Laravel, CodeIgniter,
              Tableau,</span> and
            <span class="text-cyan-400">Figma</span>, with strong analytical, communication, teamwork, and
            problem-solving abilities.
            I am eager to continue growing and contributing effectively in a <span class="text-cyan-400">dynamic work
              environment</span>.
          </p>

          <!-- Versi Bahasa Indonesia -->
          <p data-lang="ID" class="leading-relaxed hidden mb-5">
            Saya merupakan lulusan <span class="text-cyan-400">S1 Informatika</span> dari
            <span class="text-cyan-400">Universitas Bhayangkara Jakarta Raya</span> dengan IPK
            <span class="text-cyan-400">3.50/4.00</span>.
            Saat ini saya sedang melaksanakan magang di <span class="text-cyan-400">PT Pegadaian</span> sebagai
            <span class="text-cyan-400">Digital Representative</span>, berfokus pada promosi produk digital dan
            pendampingan nasabah.
            Sebelumnya saya memiliki pengalaman sebagai <span class="text-cyan-400">Junior Warehouse Analyst</span> di
            <span class="text-cyan-400">PT Shopee International Indonesia</span>.
            Saya juga telah menyelesaikan beberapa pelatihan dan sertifikasi, antara lain
            <span class="text-cyan-400">Google Advanced Data Analytics</span>,
            <span class="text-cyan-400">Kesehatan dan Keselamatan Kerja (K3)</span>, serta
            <span class="text-cyan-400">Software Development and Programming</span>.
            Saya menguasai <span class="text-cyan-400">Python, PHP, MySQL, JavaScript, Laravel, CodeIgniter,
              Tableau,</span> dan
            <span class="text-cyan-400">Figma</span>, serta memiliki kemampuan analisis, komunikasi, kerja tim, dan
            pemecahan masalah yang baik.
            Saya siap berkembang dan memberikan kontribusi terbaik di lingkungan kerja yang <span
              class="text-cyan-400">dinamis</span>.
          </p>
        </div>
          <a href="https://github.com/akmlnajib" target="_blank"
          class="group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm md:text-base font-semibold text-white border border-cyan-400 shadow-[0_0_10px_#00ffff80] transition-all duration-300 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_20px_#00ffffcc]">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"
            class="w-5 h-5 group-hover:rotate-[360deg] transition-transform duration-500">
            <path
              d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.17.08 1.78 1.21 1.78 1.21 1.03 1.77 2.69 1.26 3.35.97.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.27-5.23-5.64 0-1.25.45-2.27 1.2-3.07-.12-.29-.52-1.45.12-3.03 0 0 .98-.31 3.2 1.18a10.9 10.9 0 0 1 5.82 0c2.22-1.49 3.2-1.18 3.2-1.18.64 1.58.24 2.74.12 3.03.75.8 1.2 1.82 1.2 3.07 0 4.38-2.68 5.34-5.24 5.62.42.36.8 1.08.8 2.18v3.24c0 .31.21.68.8.56A10.53 10.53 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
          </svg>
          <span>GitHub</span>
        </a>

        <a href="https://linkedin.com/in/akmalnajib" target="_blank"
          class="group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm md:text-base font-semibold text-white border border-blue-400 shadow-[0_0_10px_#3b82f680] transition-all duration-300 hover:bg-blue-400 hover:text-black hover:shadow-[0_0_20px_#3b82f6cc]">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"
            class="w-5 h-5 group-hover:scale-110 transition-transform duration-500">
            <path
              d="M20.45 20.45h-3.55v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.07 1.4-2.07 2.85v5.5H9.48v-11h3.4v1.5h.05c.47-.9 1.62-1.84 3.33-1.84 3.56 0 4.22 2.34 4.22 5.38v5.96ZM5.34 8.93a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13Zm1.78 11.52H3.56v-11h3.56v11ZM22.22 0H1.78C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.78 24h20.44c.97 0 1.78-.78 1.78-1.75V1.75C24 .78 23.19 0 22.22 0Z" />
          </svg>
          <span>LinkedIn</span>
        </a>
      </div>
    </div>
  </section>
  `;
}
