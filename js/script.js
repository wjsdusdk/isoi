$(document).ready(function () {
  // 메뉴

  $(".menu_icon").click(function () {
    $(".menu_icon p:nth-child(1)").toggleClass("on");
    $(".menu_icon p:nth-child(2)").toggleClass("on");
    $(".menu_icon p:nth-child(3)").toggleClass("on");
    $("#menu").toggleClass("on");
    $(".search_icon p:nth-child(1)").toggleClass("on");
    $(".search_icon p:nth-child(2)").toggleClass("on");
  });

  // 푸터 - 하위메뉴 화살표

  $(".icon_arrow_text")
    .parent()
    .click(function () {
      $(this).children(".icon_arrow_text").toggleClass("on");
    });

  // 푸터 - 아코디언

  $(".accordion-click").click(function () {
    $(".accordion-block").slideToggle();
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
  offset = docHeight / 4;
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
