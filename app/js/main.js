const mask = document.querySelector('.mask')
window.addEventListener('DOMContentLoaded',() => {
  mask.classList.toggle('hide');
  const restourantsSlider = new Swiper(".restourants__slider",{
    loop: true,
  })
  
  const headerSlider = new Swiper(".header__slider", {
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
  
  const questItems = document.querySelectorAll('.questions__item');
  
  console.log(questItems)
  
  questItems.forEach(item => item.addEventListener('click',(e) => {
    console.log(e.target.parentNode);
    if(item == e.target && item == e.target.parentNode){
        item.classList.remove('__active');
      }else{
    item.classList.toggle('__active');}
  }));
  
  
  const burger = document.querySelector('.burger');
  const burgerMenu = document.querySelector('.header__mobile-menu');
  
  burger.addEventListener('click',() => {
    burger.classList.toggle('__active');
    burgerMenu.classList.toggle('__active');
  })
  
  async function initMap() {
    await ymaps3.ready;
  
    const {YMap, YMapDefaultSchemeLayer} = ymaps3;
  
    const map = new YMap(
        document.querySelector('.contacts-info__map'),
        {
            location: {
                center: [41.37785307413559,69.32162499999995],
                zoom: 10
            }
        }
    );
  
    map.addChild(new YMapDefaultSchemeLayer());
  }
  
  initMap();
  
  
  gsap.registerPlugin(ScrollTrigger);
  
  const t1 = gsap.timeline({
    scrollTrigger: 'body',
  })
  
  t1.from('.header',{
    opacity: 0,
  },0,1)
  .from('.navbar',{
    opacity:0
  },0,1)
  .from('.logo',{
    x:-250,
    opacity:0
  },0.2)
  .from('.header__menu-item',{
    stagger: 0.1,
    x:250,
    opacity:0
  },0.2)
  .from('.header__title',{
    y: 250,
    opacity:0
  },0,3)
  .from('.header__subtitle',{
    y: 250,
    opacity:0
  },0.4)
  .from('.header__workingTime',{
    y: -250,
    opacity:0
  },0.5)
  .from('.pricing',{
    y: 250,
    opacity:0
  },0.6)
  
  
//   const t2 = gsap.timeline({
//     scrollTrigger: '.what-do',
//   })
  
//   t2.from('.what-do .block__title',{
//     y:-250,
//     opacity:0
//   },0.1)
//   .from('.what-do .block__item:first-child',{
//     x: -250,
//     opacity:0
//   },0,2)
//   .from('.what-do .block__item:last-child',{
//     x: 250,
//     opacity:0
//   },0.3)
//   .from('.what-do .block__item:not(:last-child):not(:first-child)',{
//     y: -250,
//     opacity:0
//   },0.5)
// })