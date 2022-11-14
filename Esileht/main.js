const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const navItems = document.querySelector('.list');
const headline = document.querySelector('.headline');
const saunColor = document.querySelector('.span');
const current = document.querySelector('.accent');
const ehitamine = document.querySelector('.ehitamine-btn');
const rohkemInfot = document.querySelector('.rohkem-infot-btn');
const menuIcon = document.querySelector('.menu-toggle-icon');
const buttonOpen = document.querySelector('[data-toggle="open"]');
const buttonClose = document.querySelector('[data-toggle="close"]');
const overlayEl = document.querySelector('.nav_overlay');
const menuEl = document.querySelector('.nav-mobile');

const tl = new TimelineMax();

tl.fromTo(hero, 1, { height: "0%" }, { height: "80%", ease: Power2.easeInOut })
.fromTo(hero, 1.2, { width: '100%'}, {width: '80%', ease: Power2.easeInOut})
.fromTo(saunColor, .5, { color: "#fff" }, {color: "#15DB7C"})
.fromTo(current, .5, { color: "#fff" }, {color: "#15DB7C"})
.fromTo(rohkemInfot, .5, { color: "#fff" }, {color: "#15DB7C"}, "-=1")
.fromTo(ehitamine, .5, { background: "#fff" }, {background: "#15DB7C"}, "-=1.5")
.fromTo(menuIcon, 1, { background: "#fff" }, {background: "#15DB7C"}, "-=1")
.fromTo(slider, 1.2, {x: "-100%"}, {x: "0%", ease: Power2.easeInOut}, "-=2")
.fromTo(headline, 1, {opacity: "0"}, {opacity: "1"}, "-=2");


const sr = ScrollReveal({
  distance: '25px',
  duration: 2000
});

sr.reveal(`.meist-title, .meist-img`, {
  origin: 'bottom'
})

sr.reveal(`.meist-description`, {
  origin: 'bottom'
})

sr.reveal(`.footer-text, .footer-description, hr, .copyright`, {
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