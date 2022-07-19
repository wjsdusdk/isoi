const mb_swiper = new Swiper(".mb-section .swiper", {
  speed: 300, // 슬라이드 / 페이드 속도
  slidesPerView: 1,

  // Effects
  effect: "fade", // 전환 효과 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'

  centeredSlides: false, // 슬라이드 가운데 배치

  // Clicks
  slideToClickedSlide: false,

  // loop
  loop: true, // 무한반복

  // navigation (7183)
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // pagination (7715)
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar", // 'bullets' or 'progressbar' or 'fraction' or 'custom'
  },
});

const best_swiper = new Swiper(".best-section .swiper", {
  speed: 300, // 슬라이드 / 페이드 속도
  slidesPerView: 1,
  spaceBetween: 10,

  // Effects
  effect: "slide", // 전환 효과 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'

  centeredSlides: false, // 슬라이드 가운데 배치

  // Clicks
  slideToClickedSlide: false,

  // loop
  loop: true, // 무한반복

  // Cursor
  grabCursor: false,

  // navigation (7183)
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // pagination (7715)
  pagination: {
    el: ".swiper-pagination",
    bulletElement: "span",
    clickable: true, // 바 클릭 가능 여부
    hideOnClick: false,
    type: "bullets", // 'bullets' or 'progressbar' or 'fraction' or 'custom'
    dynamicBullets: true,
    dynamicMainBullets: 1,
  },

  // Breakpoints
  breakpoints: {
    768: {
      // when window width is >= 768px
      slidesPerView: 2,
    },
    992: {
      // when window width is >= 1024px
      slidesPerView: 3,
    },
    1200: {
      // when window width is >= 1200px
      slidesPerView: 3,
    },
    1400: {
      // when window width is >= 1400px
      slidesPerView: 4,
    },
  }, // 반응형 슬라이드
});

const line_swiper = new Swiper(".line-section .swiper", {
  speed: 300, // 슬라이드 / 페이드 속도
  slidesPerView: 2,
  spaceBetween: 0,

  // Effects
  effect: "slide", // 전환 효과 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'

  // loop
  loop: true, // 무한반복

  // navigation (7183)
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // pagination (7715)
  pagination: {
    el: ".swiper-pagination",
    bulletElement: "span",
    clickable: true, // 바 클릭 가능 여부
    hideOnClick: false,
    type: "bullets", // 'bullets' or 'progressbar' or 'fraction' or 'custom'
    dynamicBullets: true,
    dynamicMainBullets: 1,
  },

  // Breakpoints
  breakpoints: {
    768: {
      // when window width is >= 768px
    },
    992: {
      // when window width is >= 1024px
    },
    1200: {
      // when window width is >= 1200px
    },
    1400: {
      // when window width is >= 1400px
    },
  }, // 반응형 슬라이드
});

const sns_swiper = new Swiper(".sns-section .swiper", {
  speed: 300, // 슬라이드 / 페이드 속도
  slidesPerView: 2, // 한 화면에 보여질 슬라이드 갯수 "auto"
  spaceBetween: 10, // 슬라이드 사이 간격

  // Effects
  effect: "slide", // 전환 효과 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'

  // Slides grid
  slidesPerColumn: 1,
  slidesPerColumnFill: "column",

  centeredSlides: false, // 슬라이드 가운데 배치

  // Breakpoints
  breakpoints: {
    768: {
      // when window width is >= 768px
      slidesPerView: 2,
      spaceBetween: 10,
    },
    992: {
      // when window width is >= 1024px
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1200: {
      // when window width is >= 1200px
      slidesPerView: 4,
      spaceBetween: 10,
    },
    1400: {
      // when window width is >= 1200px
      slidesPerView: 5,
      spaceBetween: 10,
    },
  }, // 반응형 슬라이드

  // Clicks
  slideToClickedSlide: false,

  // loop
  loop: true, // 무한반복

  // navigation (7183)
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // pagination (7715)
  pagination: {
    el: ".swiper-pagination",
    bulletElement: "span",
    clickable: true, // 바 클릭 가능 여부
    hideOnClick: false,
    type: "bullets", // 'bullets' or 'progressbar' or 'fraction' or 'custom'
    dynamicBullets: true,
    dynamicMainBullets: 1,
  },

  // scrollbar (8204)
  scrollbar: {
    el: null,
    dragSize: "auto",
    hide: false,
    draggable: false,
    snapOnRelease: true,
    lockClass: "swiper-scrollbar-lock",
    dragClass: "swiper-scrollbar-drag",
  },

  // parallax (8385)
  parallax: {
    enabled: false,
  },

  // hashNavigation (10433)
  hashNavigation: {
    enabled: false,
    replaceState: false,
    watchState: false,
  },

  // autoplay (10594)
  autoplay: {
    enabled: false,
    delay: 3000, // 자동재생 지연시간
    waitForTransition: true,
    disableOnInteraction: true, // 사용자 상호 작용 후 해제
    stopOnLastSlide: false,
    reverseDirection: false,
  },
});

const cleansing_swiper = new Swiper(".cleansing-nav-sec .swiper", {
  slidesPerView: "auto",
  spaceBetween: 0,
  freeMode: true,
});
