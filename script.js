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


}