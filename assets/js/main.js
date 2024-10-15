

$(document).ready(function() {
$(".owl-carousel-section1").owlCarousel({
    loop: true,
    margin: 15,
    items: 2,
    lazyLoad: true,
    dots: false,
    itemsMobile: [320, 2],
    nav: true,
    navText: [
        '<img src="images/ic_previous_1.png"/>',
        '<img src="images/ic_next.png"/>',
    ],
    responsive: {
        0: {
            items: 1,
        },
        320: {
            items: 1,
            loop: true,
            autoHeight: false,
            nav: false,
            dots: true,
            margin: 5,
        },
        480: {
            items: 1,
            loop: true,
            autoHeight: false,
            nav: false,
            dots: true,
            margin: 0,
        },
        768: {
            items: 1,
            loop: true,
            autoHeight: false,
            nav: false,
            dots: true,
            margin: 5,
        },
        1000: {
            items: 3,
        },
    },
})
})