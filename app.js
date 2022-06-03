console.log("before");

$(document).ready(function () {
    $('.rounded-container').click(function (e) {
        var $card = $(this);
        if ($card.hasClass("flipped")) {
            $card.removeClass('flipped');
        } else {
            $card.addClass('flipped');
        }
    });    })



console.log("after");
