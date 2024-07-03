// Initialize Swiper
  var swiper = new Swiper(".visualSlide", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });




  // mobile navigation toggle
  const navToggle = document.querySelector(".nav_btn");
  const navMenu = document.querySelector(".nav_menu");

  navToggle.addEventListener("click",function(){
    navMenu.classList.toggle("open");
  });