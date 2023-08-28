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
  });
})();