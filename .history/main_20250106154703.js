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