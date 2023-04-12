const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  
  // automatically loops through slides
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  speed: 2000,
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }, 
});
