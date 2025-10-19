window.addEventListener("load", () => {
  (function () {
    emailjs.init("RLYnzsC1yvYzq1P7K");
  })();

  const form = document.getElementById("contactForm");

  if (!form) {
    console.error("Form contact tidak ditemukan di DOM.");
    return;
  }

  // Elemen pesan status
  const statusMsg = document.createElement("p");
  statusMsg.className = "mt-4 text-sm text-center transition-opacity duration-500 opacity-0";
  form.appendChild(statusMsg);

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const button = form.querySelector("button[type='submit']");
    const originalText = button.textContent;

    // Spinner loading
    button.disabled = true;
    button.innerHTML = `
      <svg class="animate-spin h-5 w-5 inline mr-2 text-cyan-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8z"></path>
      </svg>
      Mengirim...
    `;

    // Reset pesan status
    statusMsg.textContent = "";
    statusMsg.style.opacity = 0;

    // Kirim data ke EmailJS
    emailjs.sendForm("service_0sk4jl1", "template_o25ql59", form)
      .then(() => {
        showMessage("Pesan berhasil dikirim! Terima kasih.", "text-green-400");
        form.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        showMessage("Gagal mengirim pesan. Silakan coba lagi nanti.", "text-red-400");
      })
      .finally(() => {
        button.disabled = false;
        button.textContent = originalText;
      });
  });

  function showMessage(text, colorClass) {
    statusMsg.textContent = text;
    statusMsg.className = `mt-4 text-sm text-center transition-opacity duration-500 ${colorClass}`;
    setTimeout(() => { statusMsg.style.opacity = 1; }, 100);
    setTimeout(() => { statusMsg.style.opacity = 0; }, 3000); 
  }
});
