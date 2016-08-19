Carlot = (function (carlot) {
    'use strict';
  carlot.activateEvents = function () {
        var cards = document.querySelectorAll('.carCard');
        cards.forEach(function (card) {
            card.addEventListener('click', function () {
                var userInput = document.querySelector('#userInput');
                userInput.value = '';
                console.log(userInput);
                userInput.focus();
                Carlot.resetCards(cards);
                Carlot.styleCard(card, 'orange');
                Carlot.mirrorText(card, userInput);
            });
        });
    };
    return carlot;
})(Carlot);


