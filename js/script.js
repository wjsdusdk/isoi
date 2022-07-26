$(document).ready(function () {
  // .menu

  $(".menu_icon").click(function () {
    $(".search_icon p:nth-child(1)").toggleClass("on");
    $(".search_icon p:nth-child(2)").toggleClass("on");
    $(".login").toggleClass("on");
    $(".menu_icon p:nth-child(1)").toggleClass("on");
    $(".menu_icon p:nth-child(2)").toggleClass("on");
    $(".menu_icon p:nth-child(3)").toggleClass("on");
    $(".menu").toggleClass("on");
  });

  // line banner

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

  // line tab

  $(".line_tab").click(function () {
    var tab_id = $(this).attr("data-tab");

    $(".line_tab").removeClass("line_tab_current");
    $(".line_tab-content").removeClass("line_tab-content_current");

    $(this).addClass("line_tab_current");
    $("#" + tab_id).addClass("line_tab-content_current");
  });

  // line slide

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

  // submenu arrow

  $(".icon_arrow_text")
    .parent()
    .click(function () {
      $(this).children(".icon_arrow_text").toggleClass("on");
    });

  // accordion

  $(".accordion-click_footer").click(function () {
    $(".accordion-block_footer").slideToggle();
  });
  $(".menu h2").click(function () {
    $(this).siblings().slideToggle();
    $(this).parent().siblings().children(".menu_sub").slideUp();
    $(this).parent().siblings().find(".icon_arrow_text").removeClass("on");
  });
});

// scroll - header

const header = document.querySelector("header");
const headerHeight = header.offsetHeight;

function scrollHeader() {
  if (scrollY >= headerHeight) {
    header.classList.add("on");
  } else {
    header.classList.remove("on");
  }
}

window.addEventListener("scroll", scrollHeader);

// line
/* 
const lineH4 = document.querySelector(".line-section h4");
const lineHeight1 = document.querySelector(".line-section h4").offsetHeight;
const lineHeight2 = parseInt(window.getComputedStyle(lineH4).getPropertyValue("margin-bottom"));
const lineHeight3 = document.querySelector(".line_tabs").offsetHeight;
const lineHeight4 = document.querySelector(".line-section .text").offsetHeight;
const lineSum = lineHeight1 + lineHeight2 + lineHeight3 + lineHeight4;
const lineContent = document.querySelector(".line_tab-content");


window.onload = function(){
  lineContent.style.position = absolute;
  lineContent.style.top = lineSum + "px";
}

console.log(lineSum + "px");

console.log(document.querySelector(".line-section .text").offsetHeight);
console.log(window.getComputedStyle(lineH4).getPropertyValue("margin-bottom"));
 */
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

// resize

window.onresize = function () {
  document.location.reload();
};

// 나중에 지우기

/* console.log(document.querySelector(".line_tab-content").offsetHeight); */
/* 
if (matchMedia("screen and (max-width: 575px)").matches) {
  console.log("mobile1");
} else if (matchMedia("screen and (max-width: 767px)").matches) {
  console.log("mobile2");
} else if (matchMedia("screen and (max-width: 991px)").matches) {
  console.log("tablet1");
} else if (matchMedia("screen and (max-width: 1199px)").matches) {
  console.log("tablet2");
} else if (matchMedia("screen and (max-width: 1399px)").matches) {
  console.log("desktop1");
} else {
  console.log("desktop2");
} */
