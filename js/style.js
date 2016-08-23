Carlot = (function (carlot) {
    'use strict';
    carlot.resetCards = function (cards) {
        cards.forEach(function (card) {
            card.classList.remove('orange');
        });
    };
    carlot.styleCard = function (card, orange) {
    card.classList.add('orange');
  };

  carlot.mirrorText = function (card, userInput) {
    userInput.value = card.querySelector("p").innerHTML;
    userInput.addEventListener('keyup', function() {
      if (card.classList.contains('orange')){
        card.querySelector('p').innerHTML = userInput.value;
      }
    });
  };

    return carlot;
}(Carlot));