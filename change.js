//  When you click on one of the car elements, change the width of the border to a higher value, and change the background color to any other color of your choosing.
var cards = document.getElementsByClassName('carCard');
console.log(cards);
for (var i = 0; i < cards.length; i++) {
    console.log(cards[i]);
    cards[i].addEventListener('click', transform);
}


function transform(e) {
    console.log(e.currentTarget);
    console.log("transform running");
    var carCard = e.currentTarget;
    carCard.style.backgroundColor = '#ddd';
    carCard.style.width = '300px';
    carCard.style.borderColor = 'orange';
    carCard.style.color = 'orange';
    document.getElementById('edit').focus();
    var input = document.getElementById('edit');
    if (input.value.length !== 0)
        input.value = '';
}








//  Also, on click of the car element, clear the value of the text input in the navbar, and put the [cursor in the text input](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus).
//  When you start typing into the navbar's text input, the description of the currently selected car should be bound to what you are typing in and match it exactly.