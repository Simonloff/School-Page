// Micro-interacciones del portafolio: sombra del navbar al hacer scroll
// y aparición suave de las secciones que están fuera de pantalla.
(function () {
  var header = document.querySelector('.site-header');

  function onScroll() {
    if (header) header.toggleAttribute('data-scrolled', window.scrollY > 8);
  }

  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion || !('IntersectionObserver' in window)) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });

  document.querySelectorAll('[data-reveal]').forEach(function (el) {
    // Lo que ya se ve al cargar se deja tal cual: solo se anima lo que está debajo del pliegue
    if (el.getBoundingClientRect().top < window.innerHeight) return;

    var index = Array.prototype.indexOf.call(el.parentElement.children, el);
    el.style.setProperty('--i', index % 4);
    el.classList.add('reveal');
    observer.observe(el);
  });
})();
