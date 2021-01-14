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
document.querySelector('.project .collapse-toggler').addEventListener('click', (e) => {
  const collapseToggler = document.querySelector('.project .collapse-toggler');
  const collapse = document.querySelector('.project .project-block-1 .collapse');
  collapse.classList.toggle('show');

  if (collapse.classList.contains('show')) {
    collapseToggler.innerHTML = 'סגור';
  } else {
    collapseToggler.innerHTML = '...קרא עוד';
  }
})

document.querySelectorAll('.company-block-3 .company-info .collapse-toggler').forEach((collapseToggler) => {
  collapseToggler.addEventListener('click', (e) => {
    const collapse = collapseToggler.closest('.text-block').querySelector('.collapse');
    collapse.classList.toggle('show');

    if (collapse.classList.contains('show')) {
      collapseToggler.innerHTML = 'סגור';
    } else {
      collapseToggler.innerHTML = '...קרא עוד';
    }
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

document.querySelectorAll('img')
    .forEach((img) =>
        img.addEventListener('load', () =>
            AOS.refresh()
        )
    );



function blockpage() {
  $(".blockpage").addClass('active');
}

function un_blockpage() {
  $(".blockpage").removeClass('active');
}


$(document).ready(function () {



  var sPageURL = decodeURIComponent(window.location.search.substring(1)),

    sURLVariables = sPageURL.split('&'),
    sParameterName,

    i;

  jQuery("form").append(jQuery("<input>").attr({

      type: 'hidden',
      name: 'platform',
      value: (window.innerWidth > 1024 ? 'desktop' : 'mobile')
    }

  ));



  for (i = 0; i < sURLVariables.length; i++) {

    sParameterName = sURLVariables[i].split('=');
    jQuery("form").append(jQuery("<input>").attr({

        type: 'hidden',
        name: sParameterName[0],
        value: sParameterName[1]
      }

    ));

  }


  $("._menu button").on("click", function () {

    $("body").toggleClass('open_menu');

  });



  $(document).on("click", ".scrollto", function (e) {

    e.preventDefault();

    var $e = $(this),
      $elem = $e.attr("href");

    $("body").removeClass('open_menu');

    $('html, body').animate({

      scrollTop: $($elem).offset().top

    }, 1000);

  });



  $(".swiper-slide").on("click", function () {

    var modal = $(this).attr('data-modal');

    $(".myModal").removeClass('active');

    $("#myModal" + modal).addClass('active');

  });

  $(".close_btn a").on("click", function (event) {

    event.preventDefault();

    $(".myModal").removeClass('active');

  });





  $(".send_event").on("click", function (event) {

    var category = $(this).attr('data-category');

    var action = $(this).attr('data-action');

    var label = $(this).attr('data-label');

    var data = {
      'event': 'tara_whiteAngels',
      'eventdata': {
        'category': category,
        'action': action,
        'label': label
      }
    };

    console.log(data);

    dataLayer.push(data);

  });



  $form = $("[name='myfrom']");

  $.validator.addMethod("custom_fullname", function (value, element) {
    return (value.trim().split(/\s+/).length >= 2);
  });


  $.validator.addMethod("isPhone", function (value, element) {
    var reg = /^0([50|51|52|53|54|55|56|57|58|59]{2})-{0,1}?[0-9]{7}$/;
    //   var reg = /^0([50|52|53|54|57|58|72|74|76|77]{2}|[2|3|4|8|9]{1})-{0,1}?[0-9]{7}$/;
    return reg.test(value);

  });


  $.validator.addMethod("custom_hasNumber", function (value, element) {

    var matches = value.match(/\d+/g);
    return !matches;

  });


  $.validator.addMethod("custom_hasEnglish", function (value, element) {

    var reg = /^[A-Za-z0-9]*$/;
    return true;

  });


  $.validator.addMethod("custom_onlyHebrew", function (value, element) {

    var reg = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?A-Za-z0-9]+/;
    return !reg.test(value);

  });



  $.validator.addMethod("custom_specialCharacters", function (value, element) {

    var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|<>\/?]+/;
    return !format.test(value);

  });



  $form.validate({

    rules: {

      firstname: {

        required: true,

        minlength: 2,

        custom_hasNumber: true,

        custom_specialCharacters: true,

        custom_fullname: true,

        number: false,

      },



      phone: {

        number: true,

        required: true,

        minlength: 9,

        maxlength: 10,

        isPhone: true

      },

      email: {

        required: true,

        email: true,

        minlength: 5

      },

      // privacy:{

      //   required:true,

      // },

      // divur:{

      //   required:false,

      // },

    },
    messages: {
      firstname: 'שם מלא הינו שדה חובה',
      phone: 'טלפון הינו שדה חובה',
      email: 'דוא"ל" הינו שדה חובה'
    },

    submitHandler: function (form) {


      blockpage();

      var data = $form.serializeObject();

      $.post('bamby.php', {
        action: 'submit',
        data: data
      }, function (data) {

        if (data.result == 'success') {
          $form[0].reset();
          swal("תודה", "פרטיך התקבלו בהצלחה!", "success");
        } else {
          swal("אופס..", "הפרטים שלך כבר רשומים אצלנו, נהיה בקשר...", "error");
        }

        un_blockpage();

      }, "json");



    },

    highlight: function (error, element) {



    },

  });

  // $("#form-part").css("display", "none");
  // $("#thank-pop").css("display", "initial");

  $.fn.serializeObject = function ()

  {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function () {

      if (o[this.name] !== undefined) {

        if (!o[this.name].push) {

          o[this.name] = [o[this.name]];
        }

        if (this.value != '') {

          o[this.name].push(this.value || '');

        }

      } else {

        if (this.value != '') {

          o[this.name] = this.value || '';

        }

      }

    });

    return o;

  };

});



function fb_share(argument) {

  event.preventDefault();

  window.open(argument.getAttribute('href'), 'fbShareWindow', 'height=450, width=550, top=' + (document.body.innerHeight / 2 - 275) + ', left=' + (document.body.innerWidth / 2 - 225) + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');

  return false;

}