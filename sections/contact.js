  export function ContactSection() {
  return `
  <section id="contact" class="py-20 text-center px-6">
    <h2 class="text-3xl font-bold neon-text mb-8" data-lang="EN" data-aos="fade-up">Contact Me</h2>
    <h2 class="text-3xl font-bold neon-text mb-8 hidden" data-lang="ID" data-aos="fade-up">Kontak</h2>

    <form id="contactForm" class="max-w-md mx-auto space-y-6" data-aos="fade-up" data-aos-delay="200">
      <!-- Name -->
      <input type="text" name="from_name" placeholder="Your Name"
        class="w-full p-3 rounded-lg bg-[#1A1A25] text-gray-200 border border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        data-lang="EN">
      <input type="text" name="from_name" placeholder="Masukkan nama anda"
        class="w-full p-3 rounded-lg bg-[#1A1A25] text-gray-200 border border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 hidden"
        data-lang="ID">

      <!-- Email -->
      <input type="email" name="from_email" placeholder="Your Email"
        class="w-full p-3 rounded-lg bg-[#1A1A25] text-gray-200 border border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        data-lang="EN">
      <input type="email" name="from_email" placeholder="Masukkan email anda"
        class="w-full p-3 rounded-lg bg-[#1A1A25] text-gray-200 border border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 hidden"
        data-lang="ID">

      <!-- Message -->
      <textarea name="message" placeholder="Your Message" rows="4"
        class="w-full p-3 rounded-lg bg-[#1A1A25] text-gray-200 border border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        data-lang="EN"></textarea>
      <textarea name="message" placeholder="Masukkan Pesan Anda" rows="4"
        class="w-full p-3 rounded-lg bg-[#1A1A25] text-gray-200 border border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 hidden"
        data-lang="ID"></textarea>

      <!-- Button -->
      <button type="submit" class="btn-neon w-full py-3 rounded-lg" data-lang="EN">Send Message</button>
      <button type="submit" class="btn-neon w-full py-3 rounded-lg hidden" data-lang="ID">Kirim Pesan</button>
    </form>
  </section>
  `;
}