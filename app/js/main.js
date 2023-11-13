const headerSlider = new Swiper(".header__slider-slider", {
    loop: true,
    fade: true,
    autoplay: {
        delay: 3000,
    }
 });

 Fancybox.bind('[data-fancybox="photo-gallery"]', {
    Carousel : {
      infinite: false
    }
  });