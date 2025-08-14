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
    
}