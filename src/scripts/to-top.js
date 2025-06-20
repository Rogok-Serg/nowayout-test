import $ from "jquery";

$(document).ready(function () {
  $("#footer-to-top").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 600);
  });
});
