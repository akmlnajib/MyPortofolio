document.addEventListener('DOMContentLoaded', () => {
    // FILTER
    const filterBtns = document.querySelectorAll('#projects .filter-btn');
    const projectCards = document.querySelectorAll('#projectsGrid .project-card');

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('filter-active'));
        btn.classList.add('filter-active');

        const filter = btn.getAttribute('data-filter'); // "*" atau ".filter-web"
        projectCards.forEach(card => {
          if (filter === '*' || card.classList.contains(filter.slice(1))) {
            // show
            card.style.display = 'flex';
            // small delay to allow display change before transition
            requestAnimationFrame(() => {
              card.style.opacity = '1';
              card.style.transform = 'scale(1)';
            });
          } else {
            // hide with transition then display none
            card.style.opacity = '0';
            card.style.transform = 'scale(.97)';
            setTimeout(() => { card.style.display = 'none'; }, 300);
          }
        });
      });
    });
    });