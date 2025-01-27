

$(document).ready(function() {
// Pricing carousel
$(".pricing-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    margin: 30,
    loop: true,
    dots: false,
    nav: true,
    navText: [
      `<i class="fa fa-arrow-left"></i>`,  // Left arrow
      `<i class="fa fa-arrow-right"></i>`  // Right arrow
    ],
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });
$(".gallery-b-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    margin: 30,
    loop: true,
    dots: true,
    nav: true,
    navText: [
      `<i class="fa fa-arrow-left"></i>`,  // Left arrow
      `<i class="fa fa-arrow-right"></i>`  // Right arrow
    ],
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1200: {
        items: 3,
      },
    },
  });
$(".testi-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    margin: 30,
    loop: true,
    dots: true,
    nav: true,
    navText: [
      `<i class="fa fa-arrow-left"></i>`,  // Left arrow
      `<i class="fa fa-arrow-right"></i>`  // Right arrow
    ],
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1200: {
        items: 3,
      },
    },
  });
  
 $(".services").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    margin: 30,
    loop: true,
    dots: false,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });

})