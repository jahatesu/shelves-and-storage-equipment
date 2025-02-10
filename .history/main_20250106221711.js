$(document).ready(function() {
    $(window).bind('scroll', function() {
      var gap = 50;
      if ($(window).scrollTop() > gap) {
        $('header').addClass('active');
      } else {
        $('header').removeClass('active');
      }
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    navToggle.addEventListener('click', function () {
        navMenu.classList.toggle('show-menu');
    });
});

const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
    const maxScrollLeft = imageList.

    // Slide images according to the slide button clicks
    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });

    const handleSlideButtons = () =>{
        slideButtons[0].computedStyleMap.display = imageList.scrollLeft <= 0 ? "none" : "block";
        slideButtons[1].computedStyleMap.display = imageList.scrollLeft >= 0 ? "none" : "block";
    }

    imageList.addEventListener("scroll", () => {
        handleSlideButtons();
    });
};

window.addEventListener("load", initSlider);
