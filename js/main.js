$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    center: true,
    autoplay: true,
    autoplayTimeout: 6000,
    responsiveClass: true,
    dots: false,
    responsive: {
        0: {
            nav: true,
            items: 1
        },
        768: {
            nav: true,
            items: 2.2
        },
        1000: {
            nav: true,
            items: 3.5
        }
    }
});