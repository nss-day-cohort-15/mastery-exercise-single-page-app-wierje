


function populatePage(carInventory) {
  console.log('2', carInventory)
var populate = document.querySelector('#output');
      carInventory.forEach(function (car, index) {
        populate.innerHTML +=

      `
      <div class = 'col-md-4 carCard'>
           <img src="${car.img}">
           <p>Make: ${car.make}</p>
           <p>Year: ${car.year}</p>
           <p>Model: ${car.model}</p>
           <p>Price: $${car.price}</p>
           <p>Color: ${car.color}</p>
           <p>${car.description}</p>
      </div>
      `
        // console.log(car);
    })
}

Carlot.getCarInventory(populatePage);




// var newDiv = document.createElement('div');
        //     newDiv.className ='col-md-4 carCard';
        //     console.log('newDiv', newDiv);
        // var newArticle = document.createElement('article');
        // var newUl = document.createElement('ul');
      // newDiv = document.querySelector(.car_${index});

       // document.addEventListener("DOMContentLoaded", function(event) {
 //    console.log("DOM fully loaded and parsed");
 //  });
