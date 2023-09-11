import Swiper from '../vendor/swiper.js';

let advantagesSwiper;

const breakpoint = window.matchMedia('(max-width: 1199px)');

const createAdvantagesSwiper = () => {
  if (document.querySelector('.advantages__swiper')) {
    advantagesSwiper = new Swiper('.advantages__swiper', {
      keyboard: true,
      loop: true,

      breakpoints: {
        1200: {
          slidesPerView: 3,
          spaceBetween: 30,
          allowTouchMove: false,
          centeredSlides: true,
          initialSlide: 2,
        },
      },

      navigation: {
        nextEl: '.advantages__button-next',
        prevEl: '.advantages__button-prev',
      },
    });
  }
};

const initAdvantagesSwiper = () => {
  if (document.body.clientWidth > 1199) {
    createAdvantagesSwiper();
  }
  const breakpointChecker = () => {

    if (breakpoint.matches && advantagesSwiper) {
      advantagesSwiper.destroy(true, true);
      // or/and do nothing
      return;

    } else if (breakpoint.matches === false) {
      createAdvantagesSwiper();
    }
  };

  breakpoint.addEventListener('change', breakpointChecker);

};

export { initAdvantagesSwiper };
