$(document).ready(function () {
  // nav

  var nav_offset = $("nav").offset().top;
  // nav 처음위치, nav가 fixed되있어서 스크롤하면 위치가 바뀌기 때문에 스크롤 선언 밖에 적음
  var menu_offset = $(".menu_icon").offset().top;

  $(window).scroll(function () {
    var scrollTop = $(this).scrollTop(); // 스크롤 위치

    // nav 스크롤 효과
    if (nav_offset < scrollTop) {
      $("nav").addClass("header_scroll");
    } else {
      $("nav").removeClass("header_scroll");
    }

    // menu 스크롤 효과
    if (menu_offset < scrollTop) {
      $(".menu_wrap").addClass("header_scroll");
    } else {
      $(".menu_wrap").removeClass("header_scroll");
    }
  });

  // 메뉴

  $(".menu_icon").click(function () {
    $(".search_icon p:nth-child(1)").toggleClass("on");
    $(".search_icon p:nth-child(2)").toggleClass("on");
    $(".login").toggleClass("on");
    $(".menu_icon p:nth-child(1)").toggleClass("on");
    $(".menu_icon p:nth-child(2)").toggleClass("on");
    $(".menu_icon p:nth-child(3)").toggleClass("on");
    $(".menu").toggleClass("on");
  });

/*   var menu_1_height = document.querySelector(".menu_1").offsetHeight;
  function changeStyle() {
    document.querySelector(".menu_2").style.height = menu_1_height + "px";
  }
  changeStyle(); */

  // line 배너

  $(".line_tab:nth-child(1)").click(function () {
    $(".line_bn li:nth-child(1)").css("display", "block");
    $(".line_bn li:nth-child(2)").css("display", "none");
    $(".line_bn li:nth-child(3)").css("display", "none");
  });
  $(".line_tab:nth-child(2)").click(function () {
    $(".line_bn li:nth-child(1)").css("display", "none");
    $(".line_bn li:nth-child(2)").css("display", "block");
    $(".line_bn li:nth-child(3)").css("display", "none");
  });
  $(".line_tab:nth-child(3)").click(function () {
    $(".line_bn li:nth-child(1)").css("display", "none");
    $(".line_bn li:nth-child(2)").css("display", "none");
    $(".line_bn li:nth-child(3)").css("display", "block");
  });

  // line 탭

  $(".line_tab").click(function () {
    var tab_id = $(this).attr("data-tab");

    $(".line_tab").removeClass("line_tab_current");
    $(".line_tab-content").removeClass("line_tab-content_current");

    $(this).addClass("line_tab_current");
    $("#" + tab_id).addClass("line_tab-content_current");
  });

  // line 슬라이드

  $(".line_tab li:nth-child(1)").click(function () {
    $(".line_blemish").css("z-index", "12");
    $(".line_intensive").css("z-index", "11");
    $(".line_tightening").css("z-index", "11");
  });
  $(".line_tab li:nth-child(2)").click(function () {
    $(".line_blemish").css("z-index", "11");
    $(".line_intensive").css("z-index", "12");
    $(".line_tightening").css("z-index", "11");
  });
  $(".line_tab li:nth-child(3)").click(function () {
    $(".line_blemish").css("z-index", "11");
    $(".line_intensive").css("z-index", "11");
    $(".line_tightening").css("z-index", "12");
  });

  // 하위메뉴 화살표

  $(".icon_arrow_text")
    .parent()
    .click(function () {
      $(this).children(".icon_arrow_text").toggleClass("on");
    });

  // 아코디언

  $(".accordion-click_footer").click(function () {
    $(".accordion-block_footer").slideToggle();
  });
  $(".menu h2").click(function () {
    $(this).siblings().slideToggle();
    $(this).parent().siblings().children(".menu_sub").slideUp();
    $(this).parent().siblings().find(".icon_arrow_text").removeClass("on");
  });
});

// to-top

var btt = document.getElementById("to-top"),
  docElem = document.documentElement,
  offset,
  scrollPos,
  docHeight;

docHeight = Math.max(docElem.scrollHeight, docElem.offsetHeight);
// console.log(docHeight);

if (docHeight != "undefined") {
  offset = docHeight / 8;
}

window.addEventListener("scroll", function () {
  scrollPos = docElem.scrollTop;
  // console.log(scrollPos);

  btt.className = scrollPos > offset ? "show" : "";
});

btt.addEventListener("click", function (ev) {
  ev.preventDefault();

  scrollToTop();
});

function scrollToTop() {
  var scrollInterval = setInterval(function () {
    if (scrollPos != 0) {
      window.scrollBy(0, -55);
    } else {
      clearInterval(scrollInterval);
    }
  }, 15);
}

console.log(document.querySelector(".menu_wrap").offsetHeight);
