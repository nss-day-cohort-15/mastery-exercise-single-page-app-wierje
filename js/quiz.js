(function() {


function populatePage(carInventory) {
  // console.log('2', carInventory)
  var populate = document.querySelector('#output');
  var results = "";
      carInventory.forEach(function (car, index) {
        if (index % 3 === 0) {
          results += `<div class='row'>`
        }

        results += `
        <div class = 'col-md-4 carCard' style="border-color: ${car.color}">
           <img src="${car.img}">
           <h5>Make: ${car.make}</h5>
           <h5>Year: ${car.year}</h5>
           <h5>Model: ${car.model}</h5>
           <h5>Price: $${car.price}</h5>
           <h5>Color: ${car.color}</h5>
           <p>${car.description}</p>
        </div>
      `
        if (index % 3 === 2) {
          results += `</div>`
        }
    })
      populate.innerHTML = results};
      // events.js
Carlot.getCarInventory(populatePage);
} () );






