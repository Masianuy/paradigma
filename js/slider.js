$('.slide').slick({
  slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: '<div class="portfolio-arrows__right"></div>',
      prevArrow: '<div class="portfolio-arrows__left"></div>',
      autoplay:true,
      autoplaySpeed: 3000,
      dots: false,
      infinite: true,
        responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 901,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 662,
          settings: {
            slidesToShow: 1,
            autoplay: false,
          }
        },
      ]
});

$('.objects__slide-inner').slick({
  lazyLoad: 'ondemand',
  arrows: true,
  nextArrow: '<div class="arrows__right"></div>',
  prevArrow: '<div class="arrows__left"></div>',
  slidesToShow: 1,
  slidesToScroll: 1
});

