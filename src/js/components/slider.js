// import Swiper JS
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
// import Swiper styles
import 'swiper/css';

export const useSlider = () => {
  new Swiper('.insight__slider', {
    slidesPerView: 1.2,
    spaceBetween: 15,
    loop: true,
    centeredSlides: true,
    // Configure Swiper to use modules
    modules: [Navigation],
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      577: {
        slidesPerView: 1.5,
        spaceBetween: 25,
        centeredSlides: false,
      },

      769: {
        slidesPerView: 2,
        spaceBetween: 32,
      },
    },
  });
};
