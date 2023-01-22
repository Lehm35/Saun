if ( $(window).width() > 800) {

const menuIcon = document.querySelector('.menu-toggle-icon');
const slider = document.querySelector('.slider');
const nav = document.querySelector('.nav');
const buttonOpen = document.querySelector('[data-toggle="open"]');
const buttonClose = document.querySelector('[data-toggle="close"]');
const overlayEl = document.querySelector('.nav_overlay');
const menuEl = document.querySelector('.nav-mobile');
const heroImage = document.querySelector('.hero-img')
const headline = document.querySelector('.hero-headline');
const heroDescription = document.querySelector('.hero-description');

const tl = new TimelineMax();

tl.fromTo(slider, 1, {x: "-100%"}, {x: "0%", ease: Power2.easeInOut})
.fromTo(nav, .8, {y: "-100%"}, {y: "0%", ease: Power2.easeInOut})
.fromTo(headline, 1, {x: "-150%"}, {x: "0%", ease: Power2.easeInOut})
.fromTo(heroImage, 1, {x: "150%"}, {x: "0%", ease: Power2.easeInOut}, "-=1")
.fromTo(heroDescription, 1, {x: "-150%"}, {x: "0%", ease: Power2.easeInOut}, "-=1");

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

  }

  else {

    const buttonOpen = document.querySelector('[data-toggle="open"]');
    const buttonClose = document.querySelector('[data-toggle="close"]');
    const overlayEl = document.querySelector('.nav_overlay');
    const menuEl = document.querySelector('.nav-mobile');

    const toggleMenu = () => {
        menuEl.classList.toggle('active');
        overlayEl.classList.toggle('active');
        document.body.classList.toggle('scroll-false');
    }
  
    buttonOpen.addEventListener('click', toggleMenu);
    buttonClose.addEventListener('click', toggleMenu);
    overlayEl.addEventListener('click', toggleMenu);

    const sr = ScrollReveal({
      distance: '25px',
      duration: 2300
    });
    
    sr.reveal(`.footer-text, .footer-description, hr, .copyright, section`, {
      origin: 'bottom'
    })

  }
