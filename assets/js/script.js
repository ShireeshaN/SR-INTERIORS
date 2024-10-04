// *************////////////////////////////////////////////////////////////******************************* */
//banner slide
const slides = document.querySelectorAll(".slider-container .slide"); // get all the slides
const eraser = document.querySelector(".eraser"); // the eraser
const prev = document.getElementById("previous"); // previous button
const next = document.getElementById("next"); // next button
const intervalTime = 6000; // time until nextSlide triggers in miliseconds
const eraserActiveTime = 500; // time to wait until the .eraser goes all the way
let sliderInterval; // variable used to save the setInterval and clear it when needed

const nextSlide = () => {
  // Step 1. Add the .active class to the eraser - this will trigger the eraser to move to the left.
  eraser.classList.add("active");
  // Step 2. Set a timeout that will allow the eraser to move all the way to the left. This is where we'll use the eraserActiveTime - it has to be the same as the CSS value we mentioned above.
  setTimeout(() => {
    // Step 3. Get the active .slide and toggle the .active class on it (in this case, remove it).
    const active = document.querySelector(".slide.active");
    active.classList.toggle("active");
    // Step 4. Check to see if the .slide has a next element sibling available. If it has, add the .active class to it.
    if (active.nextElementSibling) {
      active.nextElementSibling.classList.toggle("active");
    } else {
      // Step 5. If it's the last element in the list, add the .active class to the first slide (the one with index 0).
      slides[0].classList.toggle("active");
    }
    // Step 6.Remove the .active class from the eraser - this will trigger the eraser to move back to the right. It also waits 200 ms before doing this (just to give enough time for the next .slide to move in place).
    setTimeout(() => {
      eraser.classList.remove("active");
    }, 180);
  }, eraserActiveTime);
};

//Button functionality
const prevSlide = () => {
  eraser.classList.add("active");
  setTimeout(() => {
    const active = document.querySelector(".slide.active");
    active.classList.toggle("active");
    // The *changed* part from the nextSlide code
    if (active.previousElementSibling) {
      active.previousElementSibling.classList.toggle("active");
    } else {
      slides[slides.length - 1].classList.toggle("active");
    }
    // End of the changed part
    setTimeout(() => {
      eraser.classList.remove("active");
    }, 180);
  }, eraserActiveTime);
};

next.addEventListener("click", () => {
  nextSlide();
  clearInterval(sliderInterval);
  sliderInterval = setInterval(nextSlide, intervalTime);
});

prev.addEventListener("click", () => {
  prevSlide();
  clearInterval(sliderInterval);
  sliderInterval = setInterval(nextSlide, intervalTime);
});

sliderInterval = setInterval(nextSlide, intervalTime);

// Initial slide
setTimeout(nextSlide, 500);

/****************/ /////////////////////////////////////////////////////////////////////////////*************/

// service card slide
const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildrens = [...carousel.children];

let isDragging = false,
  isAutoPlay = true,
  startX,
  startScrollLeft,
  timeoutId;

// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens
  .slice(-cardPerView)
  .reverse()
  .forEach((card) => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
  });

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach((card) => {
  carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
  });
});

const dragStart = (e) => {
  isDragging = true;
  carousel.classList.add("dragging");
  // Records the initial cursor and scroll position of the carousel
  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  if (!isDragging) return; // if isDragging is false return from here
  // Updates the scroll position of the carousel based on the cursor movement
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
};

const dragStop = () => {
  isDragging = false;
  carousel.classList.remove("dragging");
};

const infiniteScroll = () => {
  // If the carousel is at the beginning, scroll to the end
  if (carousel.scrollLeft === 0) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
    carousel.classList.remove("no-transition");
  }
  // If the carousel is at the end, scroll to the beginning
  else if (
    Math.ceil(carousel.scrollLeft) ===
    carousel.scrollWidth - carousel.offsetWidth
  ) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");
  }

  // Clear existing timeout & start autoplay if mouse is not hovering over carousel
  clearTimeout(timeoutId);
  if (!wrapper.matches(":hover")) autoPlay();
};

const autoPlay = () => {
  if (window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
  // Autoplay the carousel after every 2500 ms
  timeoutId = setTimeout(() => (carousel.scrollLeft += firstCardWidth), 2500);
};
autoPlay();

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);

// *************************///////////////////////////////////////////////////////////////////************** */

// bar
const stepButtons = document.querySelectorAll(".step-button");
const progress = document.querySelector("#progress");

Array.from(stepButtons).forEach((button, index) => {
  button.addEventListener("click", () => {
    progress.setAttribute("value", (index * 100) / (stepButtons.length - 1)); //there are 3 buttons. 2 spaces.

    stepButtons.forEach((item, secindex) => {
      if (index > secindex) {
        item.classList.add("done");
      }
      if (index < secindex) {
        item.classList.remove("done");
      }
    });
  });
});

// ***********//////////////////////////////////////////////////////////********************* */
// toggle
// (function ($) {
//   var toggle = $(".nav-toggle");

//   toggle.on("click", function (e) {
//     $(this).toggleClass("opened");
//   });
// })(jQuery);

// *********************////////////////////////////////////////////////////////////////////////************* */

// back to top
// $(document).ready(function () {
//   var btn = $("#backToTop");
//   $(window).on("scroll", function () {
//     if ($(window).scrollTop() > 1000) {
//       btn.addClass("show");
//     } else {
//       btn.removeClass("show");
//     }
//   });
//   btn.on("click", function (e) {
//     e.preventDefault();
//     $("html, body").animate(
//       {
//         scrollTop: 0,
//       },
//       "1000"
//     );
//   });
// });

// *********/////////////////////////////////////////////////////////////////////////********************* */

// spinner
// $(window).on("load", function () {
//   setTimeout(function () {
//     $(".page-loader").fadeOut("slow");
//     $("html body.page-loader").css("overflow", "hidden");
//   }, 500);
// });

// $(function () {
//   setTimeout(function () {
//     $("html, body")
//       .css({
//         overflow: "auto",
//       })
//       .animate(
//         {
//           scrollTop: $(".myDiv").offset().top,
//         },
//         500
//       );
//   }, 500);
// });
////////////////////////////////////////////////////////////////////////////////////////////

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
window.onload = function () {
  setInterval(function () {
    plusSlides(1);
  }, 3000);
};




///////////////////////////////////////////////////////////////////////////// 

