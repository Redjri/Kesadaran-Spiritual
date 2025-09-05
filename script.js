 // Navigation menu toggle
    const menu = document.getElementById('menu');
    const openBtn = document.querySelector('.menuBtn');
    const closeBtn = document.querySelector('.closeBtn');

    openBtn.addEventListener('click', () => {
      menu.classList.add('open');
    });
    closeBtn.addEventListener('click', () => {
      menu.classList.remove('open');
    });

    // Accessibility: allow keyboard toggle
    openBtn.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        menu.classList.add('open');
      }
    });
    closeBtn.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        menu.classList.remove('open');
      }
    });
