// Change the nav style on website scroll
window.addEventListener('scroll', () => {
  document.querySelector('.navbar').classList.toggle('nav-scrolled', window.scrollY > 0);
});

// CONTACT BUTTONS ANIMATION
document.addEventListener('DOMContentLoaded', () => {
  const textButtons = document.querySelectorAll('.contact_btn');

  textButtons.forEach((textButton) => {
    let text = textButton.querySelector('p'); // Select the <p> tag inside .contact_btn

    if (text) { // Ensure the <p> element exists
      text.innerHTML = text.innerHTML.split('').map((character, index) =>
        `<span style="transform: rotate(${index * 12}deg)">${character}</span>`
      ).join('');
    }
  });
});
