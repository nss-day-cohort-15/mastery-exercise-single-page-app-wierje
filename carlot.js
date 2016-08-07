var Carlot = (function() {
    var carInventory = [];

    return {
        getCarInventory: function(callback) {
            // create an xhr to load carInventory
            var carLoader = new XMLHttpRequest();

// Listen for when the load event is broadcast
// and execute an anonymous callback.
            carLoader.open("GET", 'inventory.json');
            carLoader.addEventListener("load", function(event) {
                // Set the value of the private array
                // List the cars in the DOM
                // Parse JSON objects into a native JavaScript Object
                carInventory = JSON.parse(event.target.responseText).cars;
                // carInventory = JSON.parse(this.responseText);

                console.log(carInventory);
                callback(carInventory);
            });
            carLoader.send();
        }
    }
}) ();

// Carlot.getCarInventory();