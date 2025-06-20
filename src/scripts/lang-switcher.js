import $ from "jquery";

var $langOptions = $(".lang__option");
$langOptions.on("click", function (e) {
  e.preventDefault();
  $langOptions.removeClass("lang__option--active");
  $(this).addClass("lang__option--active");
});
