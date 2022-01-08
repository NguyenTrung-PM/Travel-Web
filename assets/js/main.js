// TODO: SHOW MENU
const navMenu = document.getElementById('nav-menu'),
     navToggle = document.getElementById('nav-toggle'),
     navClose = document.getElementById('nav-close');

if (navToggle && navMenu) {
     navToggle.addEventListener('click', () => {
          navMenu.classList.add('show-menu');
     });
}

if (navClose && navMenu) {
     navClose.addEventListener('click', () => {
          navMenu.classList.remove('show-menu');
     });
}

// TODO: REMOVE MOBILE MENU WHEN CLICK ITEM
const navLink = document.querySelectorAll('.nav__link');

navLink.forEach((link) =>
     link.addEventListener('click', () => {
          const navMenu = document.getElementById('nav-menu');
          navMenu.classList.remove('show-menu');
          console.log(navLink);
     })
);

// TODO: CHANGE BACKGROUND COLOR AND SHOW SCROLL UP
window.addEventListener('scroll', () => {
     const header = document.getElementById('header');
     if (this.scrollY >= 200) {
          header.classList.add('scroll-header');
     } else {
          header.classList.remove('scroll-header');
     }

     const scrollUp = document.getElementById('scroll-up');
     if (this.scrollY >= 560) {
          scrollUp.classList.add('show-scroll');
     } else {
          scrollUp.classList.remove('show-scroll');
     }

     const sections = document.querySelectorAll('section[id]');
     const scrollY = window.pageYOffset;

     sections.forEach((section) => {
          const sectionHeight = section.offsetHeight;
          const sectionTop = section.offsetTop - 50;
          let sectionId = section.getAttribute('id');

          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
               document
                    .querySelector('.nav__menu a[href*=' + sectionId + ']')
                    .classList.add('active-link');
          } else {
               document
                    .querySelector('.nav__menu a[href*=' + sectionId + ']')
                    .classList.remove('active-link');
          }
     });
});

// TODO: SWIPER JS
let swiper = new Swiper('.discover__container', {
     effect: 'coverflow',
     grabCursor: true,
     centeredSlides: true,
     slidesPerView: 'auto',
     loop: true,
     spaceBetween: 32,
     coverflowEffect: {
          rotate: 0,
     },
});

// TODO: VIDEO
const videoFile = document.getElementById('video-file'),
     videoButton = document.getElementById('video-button'),
     videoIcon = document.getElementById('video-icon');

videoButton.addEventListener('click', () => {
     if (videoFile.paused) {
          videoFile.play();
          videoIcon.classList.remove('ri-play-line');
          videoIcon.classList.add('ri-pause-line');
     } else {
          videoFile.pause();
          videoIcon.classList.remove('ri-pause-line');
          videoIcon.classList.add('ri-play-line');
     }
});

videoFile.addEventListener('ended', () => {
     videoIcon.classList.remove('ri-pause-line');
     videoIcon.classList.add('ri-play-line');
});

// TODO: DARK LIGHT THEME
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})