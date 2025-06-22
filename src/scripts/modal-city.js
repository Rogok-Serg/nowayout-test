import $ from "jquery";

$(document).ready(function () {
  const $location = $(".location");
  const $currentCity = $location.find(".location__current");
  const $locationItems = $location.find(".location__item");
  const $locationDropdown = $location.find(".location__dropdown");

  $locationItems.on("click", function (e) {
    e.preventDefault();

    // Update selected city text
    $currentCity.text($(this).text().trim());

    // Update active state
    $locationItems.removeClass("location__item--active");
    $(this).addClass("location__item--active");

    // Close the dropdown after selection
    $locationDropdown.css({
      opacity: "0",
      visibility: "hidden",
    });

    // Remove inline styles after a short delay to restore hover functionality
    setTimeout(function () {
      $locationDropdown.removeAttr("style");
    }, 300);
  });
});

// City modal logic
var $body = $("body");
var $cityModalOverlay = $("#city-modal-overlay");
var $cityModal = $("#city-modal");
var $cityModalClose = $("#city-modal-close");
var $btnBook = $(".btn-book");

function openCityModal() {
  $cityModalOverlay.addClass("active");
  $body.addClass("no-scroll");
}
function closeCityModal() {
  $cityModalOverlay.removeClass("active");
  $body.removeClass("no-scroll");
}

if ($btnBook.length && $cityModalOverlay.length && $cityModalClose.length) {
  $btnBook.on("click", function (e) {
    e.preventDefault();
    openCityModal();
  });
  $cityModalClose.on("click", closeCityModal);
  $cityModalOverlay.on("click", function (e) {
    if (e.target === this) closeCityModal();
  });
}

// City selection active state
var $cityItems = $(".city-modal__item");
$cityItems.on("click", function () {
  $cityItems.removeClass("city-modal__item--active");
  $(this).addClass("city-modal__item--active");

  // Update the header location display
  const selectedCity = $(this).find(".city-modal__city").text().trim();
  $(".location__current").text(selectedCity);

  // Close the modal after selection
  closeCityModal();
});
