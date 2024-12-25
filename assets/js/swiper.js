var swiper = new Swiper('.swiper-container', {
    slidesPerView: 5,  // Adjust the number of slides visible at once
    spaceBetween: 5,   // Adjust the space between slides
    loop: true,        // Enable looping
    autoplay: {
      delay: 2500,     // Delay between transitions (in ms)
      disableOnInteraction: false,
    },
    allowTouchMove: true,  // Enable touch/swipe movement
    simulateTouch: true,   // Enable touch simulation
    breakpoints: {
      320: {
        slidesPerView: 3,  // 3 slides visible on smaller screens
      },
      576: {
        slidesPerView: 4,  // 4 slides visible on medium screens
      },
      768: {
        slidesPerView: 5,  // 5 slides visible on large screens
      },
      1024: {
        slidesPerView: 6,  // 6 slides visible on extra large screens
      },
    }
  });
  