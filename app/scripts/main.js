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

  let hambuger = document.querySelector(".hambuger");
  let navMenu = document.querySelector(".navMenu");
  let closeMenu   = document.querySelector(".close");
  let overLay = document.querySelector(".overlay")
  let menuInner = document.querySelector(".inner")
  hambuger.addEventListener("click", ()=>{
    navMenu.style.display = "block";
  })
  
  closeMenu.addEventListener("click", ()=>{
    navMenu.style.display = "none";
  })

  overLay.addEventListener("click", ()=>{
    navMenu.style.display = "none";
  })

  menuInner.addEventListener("click", (e) => {
    e.stopPropagation();
  });
  
  const shutdownMenu = () =>{
    let body = document.querySelector("body");

    let width = body.offsetWidth;

    console.log(width)
    if(width > 768)
    {
      navMenu.style.display = "none";
    }
  }
  $(window).resize(function(){
 
   coc();
 
});
