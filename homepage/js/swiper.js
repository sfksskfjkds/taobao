var mySwiper = new Swiper('.banner_top', {
    // autoplay: true,//可选选项，自动滑动
    autoplay: {
    delay: 2000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
    },
    loop : true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
    pagination: {
        el: '.swiper-pagination',
        clickable :true,
      },
})
var mySwiper1 = new Swiper('#banner_bottom', {
    // autoplay: true,//可选选项，自动滑动
    autoplay: {
    delay: 2000,
    stopOnLastSlide: false,
    disableOnInteraction: false
    },
    loop : true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    scrollbar: {
      el: '.swiper-scrollbar'
    }
})
var mySwiper2 = new Swiper('.subnav_bottom_right', {
  // autoplay: true,//可选选项，自动滑动
  autoplay: {
  delay: 2000,
  stopOnLastSlide: false,
  disableOnInteraction: false
  },
  loop : true,
  direction : 'vertical',
})