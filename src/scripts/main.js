import $ from "jquery";
import "../styles/style.css";
import "./rooms-carousel.js";
import logo from "../images/logo-nwo.svg";

$(document).ready(function () {
  console.log("✅ jQuery is working!");
});

const logoImg = $(".logo-img");
if (logoImg) {
  logoImg.attr("src", logo);
  logoImg.attr("alt", "logo");
}

// City selection functionality using jQuery
$(document).ready(function () {
  const $location = $(".location");
  const $currentCity = $location.find(".location__current");
  const $locationItems = $location.find(".location__item");

  $locationItems.on("click", function (e) {
    e.preventDefault();

    // Update selected city text
    $currentCity.text($(this).text().trim());

    // Update active state
    $locationItems.removeClass("location__item--active");
    $(this).addClass("location__item--active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const langOptions = document.querySelectorAll(".lang__option");
  langOptions.forEach((option) => {
    option.addEventListener("click", function (e) {
      e.preventDefault();
      langOptions.forEach((opt) =>
        opt.classList.remove("lang__option--active")
      );
      this.classList.add("lang__option--active");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  var burger = document.querySelector(".menu-toggle");
  var mobileMenu = document.querySelector(".mobile-menu");
  var body = document.body;
  var menuOpenedByBurger = false;

  function closeMenu() {
    mobileMenu.classList.remove("mobile-menu--open");
    body.classList.remove("no-scroll");
    menuOpenedByBurger = false;
  }

  if (burger && mobileMenu) {
    burger.addEventListener("click", function (e) {
      e.stopPropagation();
      var isOpen = mobileMenu.classList.toggle("mobile-menu--open");
      body.classList.toggle("no-scroll");
      menuOpenedByBurger = isOpen;
    });
    // Close menu when clicking outside, only if opened by burger
    document.addEventListener("click", function (e) {
      if (
        menuOpenedByBurger &&
        mobileMenu.classList.contains("mobile-menu--open") &&
        !mobileMenu.contains(e.target) &&
        !burger.contains(e.target)
      ) {
        closeMenu();
      }
    });
    // Close menu on nav link click
    mobileMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });
  }

  // City modal logic
  var cityModalOverlay = document.getElementById("city-modal-overlay");
  var cityModal = document.getElementById("city-modal");
  var cityModalClose = document.getElementById("city-modal-close");
  var btnBook = document.querySelector(".btn-book");

  function openCityModal() {
    cityModalOverlay.classList.add("active");
    document.body.classList.add("no-scroll");
  }
  function closeCityModal() {
    cityModalOverlay.classList.remove("active");
    document.body.classList.remove("no-scroll");
  }

  if (btnBook && cityModalOverlay && cityModalClose) {
    btnBook.addEventListener("click", function (e) {
      e.preventDefault();
      openCityModal();
    });
    cityModalClose.addEventListener("click", closeCityModal);
    cityModalOverlay.addEventListener("click", function (e) {
      if (e.target === cityModalOverlay) closeCityModal();
    });
  }

  // City selection active state
  var cityItems = document.querySelectorAll(".city-modal__item");
  cityItems.forEach(function (item) {
    item.addEventListener("click", function () {
      cityItems.forEach(function (i) {
        i.classList.remove("city-modal__item--active");
      });
      this.classList.add("city-modal__item--active");
    });
  });
});
