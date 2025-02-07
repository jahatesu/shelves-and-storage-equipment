$(document).ready(function() {
  $(window).bind('scroll', function(){
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
  const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
  const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
  const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

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
      slideButtons[1].computedStyleMap.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
  }

  //update scroll bar position
  const updateScrollThumbPosition = () => {
      const scrollPosition = imageList.scrollLeft;
      const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb .offsetWidth); 
      scrollbarThumb.style.left = `${thumbPosition}px`;
  }

  imageList.addEventListener("scroll", () => {
      handleSlideButtons();
      updateScrollThumbPosition();
  });
};

window.addEventListener("load", initSlider);

// JavaScript to handle scroll-triggered animations
document.addEventListener('DOMContentLoaded', () => {
  const observerOptions = {
      threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
          }
      });
  }, observerOptions);

  const elementsToAnimate = document.querySelectorAll('.about_data, .about_description, .about_list-item, .about_img1, .about_img2');
  elementsToAnimate.forEach(element => {
      observer.observe(element);
  });
});

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}


