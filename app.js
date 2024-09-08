// Change the nav style on website scroll
window.addEventListener('scroll', () => {
  document.querySelector('.navbar').classList.toggle('nav-scrolled', window.scrollY > 0);
});