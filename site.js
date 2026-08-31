/* WorkFractional — mobile nav + sticky CTA bar. No other behaviour. */
(function () {
  'use strict';

  // ---- Mobile hamburger menu -------------------------------------------
  var toggle = document.getElementById('nav-toggle');
  var menu = document.getElementById('nav-menu');

  function closeMenu() {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
    menu.classList.remove('is-open');
  }

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      if (toggle.getAttribute('aria-expanded') === 'true') {
        closeMenu();
      } else {
        toggle.setAttribute('aria-expanded', 'true');
        toggle.setAttribute('aria-label', 'Close menu');
        menu.classList.add('is-open');
      }
    });

    Array.prototype.forEach.call(menu.querySelectorAll('a'), function (link) {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });
  }

  // ---- Sticky bottom CTA bar: shows once the hero scrolls out of view ---
  var bar = document.getElementById('stickybar');
  var hero = document.getElementById('top');

  if (bar && hero && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        bar.classList.toggle('is-visible', !entry.isIntersecting);
      });
    }, { rootMargin: '-40px 0px 0px 0px' });
    io.observe(hero);
  } else if (bar) {
    bar.classList.add('is-visible');
  }
})();
