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
      alert('jopa');
    }else{
  item.classList.toggle('__active');}
}));