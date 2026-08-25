// Emily Gakii Portfolio — main.js
// Vanilla JS only, no dependencies. Keep this file small and readable.

document.addEventListener('DOMContentLoaded', function () {
  // --- Mobile nav toggle -------------------------------------------------
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var isOpen = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close the menu when a link is chosen (mobile)
    links.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // --- Mark the current page's nav link ----------------------------------
  var currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a[data-page]').forEach(function (link) {
    if (link.getAttribute('data-page') === currentPath) {
      link.setAttribute('aria-current', 'page');
    }
  });
});
