import $ from "jquery";

$(function () {
  $.getJSON("rooms.json", function (rooms) {
    var $track = $(".rooms-carousel__track");
    if (!$track.length) return;
    var cardsHtml = rooms
      .map(function (room) {
        return `
        <div class="room-card">
          <div class="room-card__image-wrapper">
            <img src="${room.image}" alt="${room.title}" class="room-card__image" />
            <span class="room-card__tag">${room.tag}</span>
          </div>
          <div class="room-card__body">
            <h3 class="room-card__title">${room.title}</h3>
            <div class="room-card__info">
              <div class="room-card__info-item">
                <svg class="room-card__info-icon icon">
                  <use href="images/symbol-defs.svg#time"></use>
                </svg>
                <span>${room.duration}</span>
              </div>
              <div class="room-card__info-item">
                <svg class="room-card__info-icon icon">
                  <use href="images/symbol-defs.svg#key"></use>
                </svg>
                <span>Difficulty</span>
              </div>
              <div class="room-card__info-item">
                <svg class="room-card__info-icon icon">
                  <use href="images/symbol-defs.svg#players"></use>
                </svg>
                <span>${room.players}</span>
              </div>
            </div>
            <p class="room-card__desc">${room.desc}</p>
            <div class="room-card__btn-wrapper">
              <a href="#" class="room-card__btn">Select game</a>
            </div>
          </div>
        </div>
      `;
      })
      .join("");
    $track.html(cardsHtml);
  });
});
