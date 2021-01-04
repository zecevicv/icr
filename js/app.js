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

/* #Collapses
    ======================================================= */
document.querySelector('.project .project-block-1 p span').addEventListener('click', (e) => {
  document.querySelector('.project .project-block-1 .collapse').classList.add('show');
})

document.querySelectorAll('.company-block-3 .company-info p span').forEach((collapseToggler) => {
  collapseToggler.addEventListener('click', (e) => {
    collapseToggler.closest('.text-block').querySelector('.collapse').classList.add('show');
  })
});

/* #Youtube Popup
  ======================================================= */
const youtubePopupLink = document.querySelector('.hero-youtube');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal-close');

modal.style.display = 'none';
setTimeout(() => {
  modal.style.display = 'block';
}, 250);

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

window.addEventListener('load', () => {
  /* #Appartments Sliders
    ======================================================= */
  document.querySelectorAll('.the-appartments .swiper-container').forEach((slider) => {
    new Swiper(slider, {
      slidesPerView: 1.22,
      breakpoints: {
        0: {
          slidesPerView: 1.1
        },
        1024: {
          slidesPerView: 1.22
        },
      },
      pagination: {
        el: slider.closest('.tab-pane').querySelector('.swiper-pagination'),
      },
      navigation: {
        nextEl: slider.closest('.tab-pane').querySelector('.swiper-button-next'),
        prevEl: slider.closest('.tab-pane').querySelector('.swiper-button-prev'),
      },
    });
  });

  

  document.querySelectorAll('.typical-appartments .swiper-container').forEach((slider) => {
    new Swiper(slider, {
      allowTouchMove: false,
      slidesPerView: 5,
      slidesPerColumn: 2,
      slidesPerGroup: 5,
      slidesPerColumnFill: 'row',
      direction: 'horizontal',
      uniqueNavElements: true,
      breakpoints: {
        0: {
          allowTouchMove: true,
          slidesPerView: 2,
          slidesPerColumn: 2,
          slidesPerGroup: 2,
        },
        1024: {
          allowTouchMove: false,
          slidesPerView: 5,
          slidesPerColumn: 2,
          slidesPerGroup: 5,
        },
      },
      pagination: {
        el: slider.closest('.appartment-types').querySelector('.swiper-pagination'),
      },
      navigation: {
        nextEl: slider.closest('.appartment-types').querySelector('.swiper-button-next'),
        prevEl: slider.closest('.appartment-types').querySelector('.swiper-button-prev'),
      },
    });
  });

  /* #Environment Sliders
    ======================================================= */
  new Swiper('.environment-slider .swiper-container', {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: '.environment-slider .swiper-pagination',
    },
    navigation: {
      nextEl: '.environment-slider .swiper-button-next',
      prevEl: '.environment-slider .swiper-button-prev',
    },
  });

  /* #Company Sliders
    ======================================================= */
  new Swiper('.company-block-2 .swiper-container', {
    allowTouchMove: false,
    slidesPerView: 2,
    slidesPerColumn: 2,
    slidesPerGroup: 2,
    slidesPerColumnFill: 'row',
    direction: 'horizontal',
    pagination: {
      el: '.company-block-2 .swiper-pagination',
    },
    navigation: {
      nextEl: '.company-block-2 .swiper-button-next',
      prevEl: '.company-block-2 .swiper-button-prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 2.5,
        slidesPerColumn: 1,
        slidesPerGroup: 1,
        allowTouchMove: true,
        centeredSlides: true,
        loop: true
      },
      1024: {
        slidesPerView: 2,
        slidesPerColumn: 2,
        slidesPerGroup: 2,
        allowTouchMove: false
      }
    }
  });

  new Swiper('.company-block-3 .swiper-container', {
    allowTouchMove: false,
    slidesPerView: 3,
    pagination: {
      el: '.company-block-3 .swiper-pagination',
    },
    navigation: {
      nextEl: '.company-block-3 .swiper-button-next',
      prevEl: '.company-block-3 .swiper-button-prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        allowTouchMove: true,
        loop: true
      },
      1024: {
        slidesPerView: 3,
        allowTouchMove: false,
      }
    }
  });
});

/* #AOS Animations
    ======================================================= */
AOS.init({
  startEvent: 'load',
  once: true,
  duration: 800,
  offset: 300
});