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

// TODO: CHANGE BACKGROUND COLOR
window.addEventListener('scroll', () => {
     const header = document.getElementById('header');
     if (this.scrollY >= 200) {
          header.classList.add('scroll-header');
     } else {
          header.classList.remove('scroll-header');
     }
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
