(() => {
  $(document).ready(() => {
    $('.carousel').slick({
      infinite: true,
      slidesToShow: 8,
      slidesToScroll: 5,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 1600,
      arrows: false,
    });

    $('.projects_carousel').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 4000,
      speed: 1600,
      arrows: false,
    });

    $('.services_carousel').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 1600,
      arrows: false,
    });
  });
})();