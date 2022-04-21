$('.content2').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow:false,
    nextArrow:false,
    // centerMode: true,
  });

  // $('.features_slider').slick({
  //   dots: true,
  //   infinite: true,
  //   speed: 300,
  //   slidesToShow: 2,
  //   centerMode: true,
  //   variableWidth: true
  // });
  $('.features_slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    prevArrow: '<div class="slick-prev"><i class="fa-solid fa-angle-right"></i></div>',
    nextArrow: '<div class="slick-next"><i class="fa-solid fa-chevron-left"></i></div>',
    centerMode: true,
  });