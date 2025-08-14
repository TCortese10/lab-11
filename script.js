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

}

// subclass of productProperties
class PerishableProductProperties extends ProductProperties {
    constructor(name, price, quantity, expirationDate) {
        super(name, price, quantity);
        this.expirationDate = expirationDate;
    }

    toString () {
        console.log(`Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}, Expiration Date: ${this.expirationDate}`);
    }

}

let item1 = new PerishableProductProperties("Banana", 25, 5, "2025-05-10");
item1.toString();