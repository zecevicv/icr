/* #Tab Functionality
  ======================================================= */
const tabLinksGroup = document.querySelectorAll('.tab-links');
tabLinksGroup.forEach((tabLinkGroup) => {
  // Display only active tab panes
  tabLinkGroup.querySelectorAll('.tab-link').forEach((tabLink) => {
    if (tabLink.classList.contains('active')) {
      document.getElementById(tabLink.getAttribute("href")).classList.add('active');
    }
  });

  // Tab-link event listener
  tabLinkGroup.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.closest('.tab-link')) {
      if (!e.target.closest('.tab-link').classList.contains('active')) {
        // Remove all active classes from tab-links
        tabLinkGroup.querySelectorAll('.tab-link').forEach((tabLink) => {
          tabLink.classList.remove('active');
        });
        // Remove all active classes from tab-panes
        document.getElementById(e.target.getAttribute("href"))
        .closest('.tab-content')
        .querySelectorAll('.tab-pane').forEach((tabPane) => {
          tabPane.classList.remove('active');
        });

        // Add active class to the clicked tab-link
        e.target.closest('.tab-link').classList.add('active');
        // Add active class to the corresponding tab-pane
        document.getElementById(e.target.getAttribute("href")).classList.add('active');
      }
    }
  });
});

/* #Header Scroll
  ======================================================= */
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('header-dark');
  } else {
    header.classList.remove('header-dark');
  }
});
if (window.scrollY > 50) {
  header.classList.add('header-dark');
} else {
  header.classList.remove('header-dark');
}

/* #Appartments Sliders
  ======================================================= */
new Swiper('.the-appartments .swiper-container', {
  slidesPerView: 1.22,
  breakpoints: {
    0: {
      slidesPerView: 1.1
    },
    1024: {
      slidesPerView: 1.22
    },
  }
});

/* #Environment Sliders
  ======================================================= */
new Swiper('.environment-slider .swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.environment-slider .swiper-pagination',
  },
});

/* #Hamburger Menu
  ======================================================= */
const hamburgerIcon = document.querySelector('.header-hamburger');
const body = document.querySelector('body');

hamburgerIcon.addEventListener('click', (e) => {
  header.classList.toggle('menu-open');
  body.classList.toggle('no-scroll');
});

if (window.innerWidth < 1024) {
  document.querySelector('.header-links').style.display = 'none';
  setTimeout(() => {
    document.querySelector('.header-links').style.display = 'block';
  }, 250);
}

document.addEventListener('click', (e) => {
  if (header.classList.contains('menu-open') && !e.target.closest('.header')) {
    header.classList.remove('menu-open');
    body.classList.toggle('no-scroll');
  }
});

/* #Youtube Popup
  ======================================================= */
const youtubePopupLink = document.querySelector('.hero-youtube');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal-close');

youtubePopupLink.addEventListener('click', (e) => {
  e.preventDefault();
  modal.classList.add('show');
  body.classList.add('no-scroll');
});

modalClose.addEventListener('click', (e) => {
  e.preventDefault();
  modal.classList.remove('show');
  body.classList.remove('no-scroll');
});

document.addEventListener('click', (e) => {
  if (modal.classList.contains('show') && e.target.closest('.modal-overlay')) {
    modal.classList.remove('show');
    body.classList.remove('no-scroll');
  }
});