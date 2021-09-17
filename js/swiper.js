const mb_swiper = new Swiper(".mb-section .swiper", {
  speed: 300, // 슬라이드 / 페이드 속도

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
  
  // Breakpoints
  breakpoints: {
    768: {
      // when window width is >= 768px
      
    },
    1024: {
      // when window width is >= 1024px
      
    },
    1200: {
      // when window width is >= 1200px
      
    },
  }, // 반응형 슬라이드
});

const sns_swiper = new Swiper(".sns-section .swiper", {
  speed: 300, // 슬라이드 / 페이드 속도

  // Effects
  effect: "slide", // 전환 효과 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'

  // Slides grid
  spaceBetween: 0, // 슬라이드 사이 간격
  slidesPerView: 1, // 한 화면에 보여질 슬라이드 갯수 "auto"
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
    1024: {
      // when window width is >= 1024px
      slidesPerView: 3,
    },
    1200: {
      // when window width is >= 1200px
      slidesPerView: 4,
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
    dynamicBullets: false,
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
