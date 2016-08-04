function showCarInventory(carInventory) {
      // console.log(list)
        carInventory.forEach(function (car, index) {
        var list = document.querySelector(`.car_${index}`);
        list.innerHTML += `<li>Make: ${car.make}</li>`;
        list.innerHTML += `<li>Year: ${car.year}</li>`;
        list.innerHTML += `<li>Model: ${car.model}</li>`;
        list.innerHTML += `<li>Price: $${car.price}</li>`;
        list.innerHTML += `<li>Color: ${car.color}</li>`;
        // list.innerHTML += `<li>${car.purchased}</li>`;
        list.innerHTML += `<li>${car.description}</li>`;
        console.log(car);
    })
}

Carlot.getCarInventory(showCarInventory);