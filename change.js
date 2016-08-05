//  When you click on one of the car elements, change the width of the border to a higher value, and change the background color to any other color of your choosing.
var cards = ['carCard0', 'carCard1', 'carCard2'];
var change = document.getElementById('cards[0]');
// var clickMe = document.getElementById('clickMe');
 //Keeping it unobstrusive
document.getElementById("carCard0").addEventListener("click", transform);
// document.getElementById("carCard1").addEventListener("click", transform1);
// document.getElementById("carCard2").addEventListener("click", transform2);

function transform() {

  carCard0.style.backgroundColor = '#ddd';
  carCard0.style.width = '300px';
  carCard0.style.borderColor = 'orange';
  carCard0.style.color = 'orange';
  document.getElementById('edit').focus();
  var input = document.getElementById('edit');
   if (input.value.length !== 0)
       input.value = '';
}

// function transform1() {

//   carCard0.style.backgroundColor = '#ddd';
//   carCard0.style.width = '300px';
//   carCard0.style.borderColor = 'orange';
//   carCard0.style.color = 'orange';
//   document.getElementById('edit').focus();
//   var input = document.getElementById('edit');
//    if (input.value.length !== 0)
//        input.value = '';


// }function transform2() {

//   carCard0.style.backgroundColor = '#ddd';
//   carCard0.style.width = '300px';
//   carCard0.style.borderColor = 'orange';
//   carCard0.style.color = 'orange';
//   document.getElementById('edit').focus();
//   var input = document.getElementById('edit');
//    if (input.value.length !== 0)
//        input.value = '';
// }







//  Also, on click of the car element, clear the value of the text input in the navbar, and put the [cursor in the text input](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus).
//  When you start typing into the navbar's text input, the description of the currently selected car should be bound to what you are typing in and match it exactly.
  // setTimeout(clearDemo, 2000, button);
  // button.setAttribute('disabled', true);