$(function () {
  /*fixed header
  ===================== */

  const header = $("#header");
  const intro = $("#intro");
  let introHeight = intro.innerHeight();
  let scrollPos = $(window).scrollTop();
  checkScroll(scrollPos, introHeight);

  $(window).on("scroll resize", () => {
    introHeight = intro.innerHeight();
    scrollPos = $(window).scrollTop();
    checkScroll(scrollPos, introHeight);
  });

  function checkScroll(scrollPos, introHeight) {
    if (scrollPos > introHeight) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  }
  /*smooth scroll 
  ======================*/
  let nav = $("#nav");
  const navToggle = $("#navToggle");
  var checkClick = true;
  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();
    let elemId = $(this).data("scroll");
    let elemOffset = $(elemId).offset().top;
    nav.removeClass("show");
    navToggle.removeClass("focused");
    checkClick = !checkClick;
    $("html, body").animate(
      {
        scrollTop: elemOffset - 70,
      },
      1000
    );
  });

  /*Nav Toggle*/
  navToggle.on("click", function () {
    nav.toggleClass("show");
    if (checkClick) {
      navToggle.addClass("focused");
      checkClick = !checkClick;
    } else {
      navToggle.removeClass("focused");
      checkClick = !checkClick;
    }
  });

  /*Feedbacks slider*/
  let slider = $("#feedbacksSlider");
  slider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    dots: true,
  });

  AOS.init();
});
