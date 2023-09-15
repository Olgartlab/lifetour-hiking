import Swiper from '../vendor/swiper';
import {renderVideoCover} from './video';

const initSwipers = () => {
  let toursSwiper;
  let heroSwiper;
  let trainersSwiper;
  let reviewsSwiper;
  let gallerySwiper;

  if (document.querySelector('.tours__swiper')) {
    toursSwiper = new Swiper('.tours__swiper', {
      loop: false,

      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
          allowTouchMove: true,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 18,
          allowTouchMove: true,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 30,
          allowTouchMove: false,
        },
      },

      navigation: {
        nextEl: '.tours__button-next',
        prevEl: '.tours__button-prev',
      },
    });
  }

  if (document.querySelector('.hero__swiper')) {
    heroSwiper = new Swiper('.hero__swiper', {
      loop: true,

      pagination: {
        el: '.hero__swiper-pagination',
        bulletClass: 'hero__pagination-bullet',
        bulletActiveClass: 'hero__pagination-bullet--active',
        clickable: true,
      },

      breakpoints: {
        1200: {
          allowTouchMove: false,
        },
      },

      on: {
        slideChange() {
          if (document.querySelector('.hero__slide-video iframe')) {
            document.querySelector('.hero__slide-video iframe').remove();
            renderVideoCover();
          }
        },
      },
    });
  }

  if (document.querySelector('.trainers__swiper')) {
    trainersSwiper = new Swiper('.trainers__swiper', {
      loop: false,

      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
          allowTouchMove: true,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
          allowTouchMove: true,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 30,
          allowTouchMove: false,
        },
      },

      navigation: {
        nextEl: '.trainers__button-next',
        prevEl: '.trainers__button-prev',
      },
    });
  }

  if (document.querySelector('.reviews__swiper')) {
    reviewsSwiper = new Swiper('.reviews__swiper', {
      loop: false,

      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
          allowTouchMove: true,
        },
        768: {
          slidesPerView: 1.2,
          spaceBetween: 30,
          allowTouchMove: true,
        },
        1200: {
          slidesPerView: 1.5,
          spaceBetween: 30,
          allowTouchMove: false,
        },
      },

      navigation: {
        nextEl: '.reviews__button-next',
        prevEl: '.reviews__button-prev',
      },
    });
  }

  if (document.querySelector('.gallery__swiper')) {
    gallerySwiper = new Swiper('.gallery__swiper', {
      loop: false,

      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 4,
          allowTouchMove: true,
        },
        768: {
          slidesPerView: 'auto',
          spaceBetween: 6,
          allowTouchMove: true,
        },
        1200: {
          slidesPerView: 'auto',
          spaceBetween: 5,
          allowTouchMove: false,
        },
      },

      navigation: {
        nextEl: '.gallery__button-next',
        prevEl: '.gallery__button-prev',
      },
    });
  }

  return {
    toursSwiper,
    heroSwiper,
    trainersSwiper,
    reviewsSwiper,
    gallerySwiper,
  };
};
export { initSwipers };
