import $ from "jquery";
import "../styles/style.css";
import "./mobile-menu.js";
import "./rooms-carousel.js";
import "./modal-city.js";
import "./lang-switcher.js";
import "./to-top.js";
import logo from "../images/logo-nwo.svg";

$(document).ready(function () {
  console.log("✅ jQuery is working!");
});

const logoImg = $(".logo-img");
if (logoImg) {
  logoImg.attr("src", logo);
  logoImg.attr("alt", "logo");
}
