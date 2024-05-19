// import Swiper JS
import Swiper from 'swiper';
// import Swiper JS Modules
import { EffectFade, Navigation } from 'swiper/modules';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

export const useAboutSlider = () => {
  new Swiper('.testimonials__sliders', {
    // Swiper to use modules
    modules: [EffectFade, Navigation],
    // Configure Swiper
    slidesPerView: 'auto',
    spaceBetween: 22,
    effect: 'fade',
    // Navigation arrows
    navigation: {
      nextEl: '.testimonials__btn--next',
      prevEl: '.testimonials__btn--prev',
    },
  });
};
