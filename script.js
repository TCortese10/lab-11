class ProductProperties{
    // constructor method to set properties
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    // method to return the product in stock
    getTotalValue() {
        return this.price * this.quantity;
    }
    // displays product information
    toString () {
        console.log(`Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}`);
    }

    static applyDiscount(products, discount) {
        
    }

}

// subclass of productProperties
class PerishableProductProperties extends ProductProperties {
    constructor(name, price, quantity, expirationDate) {
        super(name, price, quantity); // calls the parent constructor
        this.expirationDate = expirationDate; // add expiration date
    }

    toString () { //overwrites and adds expiration date
        console.log(`Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}, Expiration Date: ${this.expirationDate}`);
    }

}

// two instances of the PerishableProcuts class
let item1 = new PerishableProductProperties("Banana", 25, 5, "2025-05-10");
item1.toString();

let item2 = new PerishableProductProperties("Canned Soup", 5, 108, "2032-03-21");
item2.toString();