$(function () {
  // ハンバーガーメニュー
  $(".js-hamburger,.js-drawer,.js-drawer a").click(function () {
    $(".js-hamburger").toggleClass("is-active");
    $(".js-drawer").toggleClass("is-active");
    $(".js-hamburger span").toggleClass("is-active");
    $(".drawer-menu__inner,.drawer__header,.drawer-menu__sns").toggleClass(
      "is-active"
    );
    $(".circle-bg").toggleClass("is-active");
  });
});

//スワイパー
const swiper = new Swiper(".swiper", {
  direction: "vertical",
  loop: true,
  speed: 3000,
  allowTouchMove: false,
  autoplay: {
    delay: 3000,
  },
});

// ヘッダーの上下
$(function () {
  var pos = 0;
  var header = $(".js-header");

  $(window).on("scroll", function () {
    if ($(this).scrollTop() < pos) {
      header.removeClass("hide");
    } else {
      header.addClass("hide");
    }
    pos = $(this).scrollTop();
  });
});

// メガメニュー表示
const megamenu = $(".megamenu__content");
const serviceMenu = $(".header__megamenu");
const megamenuBox = $(".megamenu__box");

serviceMenu.mouseenter(function () {
  megamenu.addClass("is-hover");
});
megamenuBox.mouseleave(function () {
  megamenu.removeClass("is-hover");
});
serviceMenu.mouseleave(function () {
  megamenu.removeClass("is-hover");
});

// AOS
AOS.init();

// サービス - 背景切り替え

$(document).ready(function () {
  const serviceItem = $(".top-service__item");
  const serviceImages = $(".top-service__images img");

  function addHoverEvent() {
    serviceItem.each(function (i, item) {
      $(item).on("mouseenter", function () {
        serviceImages.removeClass("is-active");
        $(serviceImages[i]).addClass("is-active");
        serviceItem.removeClass("is-active");
        $(serviceItem[i]).addClass("is-active");
        serviceItem.not($(serviceItem[i])).addClass("not-active");
      });
      $(item).on("mouseleave", function () {
        serviceImages.removeClass("is-active");
        serviceItem.removeClass("is-active not-active");
      });
    });
  }

  function removeHoverEvent() {
    serviceItem.off("mouseenter");
    serviceItem.off("mouseleave");
    serviceImages.removeClass("is-active");
    serviceItem.removeClass("is-active not-active");
  }

  if ($(window).width() >= 769) {
    addHoverEvent();
  }

  $(window).resize(function () {
    if ($(window).width() >= 769) {
      addHoverEvent();
    } else {
      removeHoverEvent();
    }
  });
});
