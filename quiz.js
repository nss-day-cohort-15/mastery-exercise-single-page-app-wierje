function populatePage(carInventory) {
      // console.log()
var row = document.querySelector('#firstRow');
      carInventory.forEach(function (car) {
        row.innerHTML +=

      `
      <div class = 'col-md-4 carCard'>
           <img>img: ${car.img}</img>;
           <p>Make: ${car.make}</p>;
           <p>Year: ${car.year}</p>;
           <p>Model: ${car.model}</p>;
           <p>Price: $${car.price}</p>;
           <p>Color: ${car.color}</p>;
           <p>${car.description}</p>;
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