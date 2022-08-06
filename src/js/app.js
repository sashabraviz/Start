import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

const iconMenu =  document.querySelector('.header__burger');
const menuBody =  document.querySelector('.menu__body');
if (iconMenu) {
    iconMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}
 const navLinks = document.querySelectorAll('.nav__link[data-goto]');
if (navLinks.length > 0) {
    navLinks.forEach(navLink => {
        navLink.addEventListener("click", onnavLinkClick);
    });

    function onnavLinkClick(e) {
        const navLink = e.target;
        if (navLink.dataset.goto && document.querySelector(navLink.dataset.goto)){
            const gotoBlock = document.querySelector(navLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

            if (iconMenu.classList.contains('_active')) {
                 document.body.classList.remove('_lock');
                 iconMenu.classList.remove('_active');
                 menuBody.classList.remove('_active');               
            }
            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}

window.onscroll = function ShowHeader() {

    var header = document.querySelector('.header');

    if(window.pageYOffset > 89){
        header.classList.add('header__fixed');
    } else {
        header.classList.remove('header__fixed');
    }
}


const swiper = new Swiper('.swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    dynamicBulets: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
    draggabrle: true,
  },
  spaceBetween: 120,

  centeredSlides: true,

  initialSlide: 1,

  autoplay: {
      delay: 2500,
      disableOnInteraction: false
  }
});

