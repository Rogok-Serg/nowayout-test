import $ from "jquery";
import "../styles/style.css";
import logo from "../images/logo-nwo.svg";

$(document).ready(function () {
  console.log("✅ jQuery is working!");
  $("body").css("background-color", "rgb(60 135 201)");
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
