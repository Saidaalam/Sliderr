$(document).ready(function () {

    $(".slider").slick({
      slidesToShow: 3,
      arrows: true,
      prevArrow: ".leftArrows",
      nextArrow: ".rightArrows",
      dots: true,
      dotsClass: "slider-dots",
      centerMode: true,
      centerPadding: "0px",
    });  
  });