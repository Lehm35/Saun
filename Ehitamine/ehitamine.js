const menuIcon = document.querySelector('.menu-toggle-icon');
const buttonOpen = document.querySelector('[data-toggle="open"]');
const buttonClose = document.querySelector('[data-toggle="close"]');
const overlayEl = document.querySelector('.nav_overlay');
const menuEl = document.querySelector('.nav-mobile');
const heroImage = document.querySelector('.hero-img')
const headline = document.querySelector('.hero-headline');

const tl = new TimelineMax();

tl.fromTo(headline, 1, {opacity: "0"}, {opacity: "1", ease: Power2.easeInOut});

const sr = ScrollReveal({
  distance: '25px',
  duration: 2300
});

sr.reveal(`.footer-text, .footer-description, hr, .copyright, section`, {
  origin: 'bottom'
})


const toggleMenu = () => {
  menuEl.classList.toggle('active');
  overlayEl.classList.toggle('active');
  document.body.classList.toggle('scroll-false');
}

buttonOpen.addEventListener('click', toggleMenu);
buttonClose.addEventListener('click', toggleMenu);
overlayEl.addEventListener('click', toggleMenu);