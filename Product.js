class Product {
    name;
    price;
    number;

    constructor(name, price, number) {
        this.name = name;
        this.price = price;
        this.number = number;
    }


    get name() {
        return this.name;
    }

    set name(value) {
        this.name = value;
    }

    get price() {
        return this.price;
    }

    set price(value) {
        this.price = value;
    }

    get number() {
        return this.number;
    }

    set number(value) {
        this.number = value;
    }
}
