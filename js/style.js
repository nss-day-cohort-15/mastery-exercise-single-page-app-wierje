Carlot = (function(carlot) {
  carlot.resetCards = function (cards) {
    cards.forEach (function(card) {
      card.classList.remove('orange');

    })
    console.log(cards);
  }
  carlot.styleCard = function (card, orange) {
    car.classList.add(orange);
  }

  carlot.mirrorText = function (card, userInput) {
    userInput.addEventListener('keyup', function() {
      if (card.class.contains('orange')){
        card.querySelector('p').innerHTML = userInput.value
      }
    })
  }

  return carlot
}(Carlot));