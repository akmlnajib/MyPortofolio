// Fetch project data and render
fetch('assets/data/projects.json')
  .then(res => res.json())
  .then(projects => {
    const container = document.getElementById('projectsGrid');
    if (!container) return;

    container.innerHTML = '';

    projects.forEach((p, index) => {
      const card = document.createElement('div');
      card.className = `project-card filter-${p.category} bg-[#111827] p-5 rounded-2xl border border-cyan-400 shadow-[0_0_20px_#00ffff60] hover:scale-105 hover:shadow-[0_0_30px_#00ffff] transition-transform duration-300`;
      card.setAttribute('data-aos', p.aos);
      card.innerHTML = `
        <img src="${p.img}" alt="${p.title}" class="rounded-xl mb-4 w-full h-48 object-cover border border-cyan-800 shadow-[0_0_10px_#00ffff40]">
        <h3 class="text-xl font-semibold text-cyan-300 mb-2">${p.title}</h3>
        <div class="flex justify-center gap-3 mt-4">
          <a href="${p.repo}" target="_blank" class="flex items-center gap-2 px-4 py-2 rounded-lg border border-cyan-400 text-cyan-300 text-sm hover:bg-cyan-400 hover:text-black font-medium transition">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M12 .5C5.648.5.5 5.648.5 12c0 5.094 3.293 9.406 7.864 10.938..." />
            </svg>
            GitHub
          </a>
        </div>
      `;
      container.appendChild(card);
    });
  })
  .catch(err => console.error('Error loading projects:', err));


// Filter function
document.addEventListener('click', e => {
  if (!e.target.classList.contains('filter-btn')) return;

  const filter = e.target.dataset.filter;
  document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('filter-active'));
  e.target.classList.add('filter-active');

  document.querySelectorAll('.project-card').forEach(card => {
    const isVisible = filter === 'all' || card.classList.contains(`filter-${filter}`);
    card.style.display = isVisible ? 'block' : 'none';
  });
});
