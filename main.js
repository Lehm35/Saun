const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const navItems = document.querySelector('.list');
const headline = document.querySelector('.headline');
const saunColor = document.querySelector('.span');
const current = document.querySelector('.accent');

const tl = new TimelineMax();

tl.fromTo(hero, 1, { height: "0%" }, { height: "80%", ease: Power2.easeInOut })
.fromTo(hero, 1.2, { width: '100%'}, {width: '80%', ease: Power2.easeInOut})
.fromTo(saunColor, .5, { color: "#fff" }, {color: "#15DB7C"})
.fromTo(current, .5, { color: "#fff" }, {color: "#15DB7C"})
.fromTo(slider, 1.2, {x: "-100%"}, {x: "0%", ease: Power2.easeInOut}, "-=1.5")
.fromTo(headline, 1, {opacity: "0"}, {opacity: "1"}, "-=1");


const sr = ScrollReveal({
  distance: '25px',
  duration: 2500
});

sr.reveal(`.meist-title, .meist-img`, {
  origin: 'left'
})

sr.reveal(`.meist-description`, {
  origin: 'right'
})

sr.reveal(`.footer-text, .footer-description, hr, .copyright`, {
  origin: 'bottom'
})
