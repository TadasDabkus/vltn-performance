document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener('click', e => {

    const href = link.getAttribute('href');

    if (!href || href === "#") {
      return;
    }

    const target = document.querySelector(href);

    if (target) {

      e.preventDefault();

      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

    }

  });

});


const bag = document.querySelector('.header-actions b');


document.querySelectorAll('.product').forEach(card => {

  card.addEventListener('click', () => {

    if (bag) {

      bag.textContent =
        String(Number(bag.textContent) + 1);

    }

    card.animate(
      [
        { transform: 'scale(1)' },
        { transform: 'scale(.985)' },
        { transform: 'scale(1)' }
      ],
      {
        duration: 220,
        easing: 'ease-out'
      }
    );

  });

});
