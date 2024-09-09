// Change the nav style on website scroll
window.addEventListener('scroll', () => {
  document.querySelector('.navbar').classList.toggle('nav-scrolled', window.scrollY > 0);
});

// CONTACT BUTTONS ANIMATION
const textButtons = document.querySelectorAll('.contact_btn');

textButtons.forEach((textButton) => { 
  let text = textButton.querySelector('p');

  text.innerHTML = text.innerHTML.split('').map((char, index) => '<span style="transform: rotate(${index * 12}deg)">${char}</span>').join('')
})