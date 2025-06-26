class Product {
    constructor(productId, name, price) {
        this.productId = productId;
        this.name = name;
        this.price = price;
    }

    calculateTotalPrice(quantity) {
        return this.price * quantity;
    }
}

class PersonalCareProduct extends Product {
    constructor(productId, name, price, warrantyPeriod) {
        super(productId, name, price);
        this.warrantyPeriod = warrantyPeriod;
    }

    calculateTotalPrice(quantity) {
        const total = super.calculateTotalPrice(quantity);
        return `${total} USD (Warranty: ${this.warrantyPeriod} months)`;
    }
}

const item = new PersonalCareProduct(201, "Hair Dryer", 40, 18);
console.log(item.calculateTotalPrice(2));
