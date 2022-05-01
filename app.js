//********** initiate AnimatedHeadline plugin (for clip banner text)
$(".container").animatedHeadline({
  animationType: "clip",
});

//********** change navbar background-color when user scroll down ( code with jQuery)
$(window).on("scroll", function () {
  var navbarMenu = $(".mynavbar");

  if ($(window).scrollTop() > 200) {
    navbarMenu.addClass("navbar-on-scroll");
  } else {
    navbarMenu.removeClass("navbar-on-scroll");
  }
});

//********** initiate wow js (for contact items animation)
new WOW().init();
