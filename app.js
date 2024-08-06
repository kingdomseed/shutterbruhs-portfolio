// Change the nav style on website scroll
window.addEventListener('scroll', function() {
  const nav = document.querySelector('nav');
  nav.classList.toggle('sticky', window.scrollY > 0);
});