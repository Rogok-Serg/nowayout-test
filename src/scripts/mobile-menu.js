import $ from "jquery";

$(function () {
  var $burger = $(".menu-toggle");
  var $mobileMenu = $(".mobile-menu");
  var $body = $("body");
  var menuOpenedByBurger = false;

  function closeMenu() {
    $mobileMenu.removeClass("mobile-menu--open");
    $body.removeClass("no-scroll");
    menuOpenedByBurger = false;
  }

  if ($burger.length && $mobileMenu.length) {
    $burger.on("click", function (e) {
      e.stopPropagation();
      var isOpen = $mobileMenu
        .toggleClass("mobile-menu--open")
        .hasClass("mobile-menu--open");
      $body.toggleClass("no-scroll");
      menuOpenedByBurger = isOpen;
    });
    $(document).on("click", function (e) {
      if (
        menuOpenedByBurger &&
        $mobileMenu.hasClass("mobile-menu--open") &&
        !$mobileMenu.is(e.target) &&
        $mobileMenu.has(e.target).length === 0 &&
        !$burger.is(e.target) &&
        $burger.has(e.target).length === 0
      ) {
        closeMenu();
      }
    });
    $mobileMenu.find("a").on("click", closeMenu);
  }
});
