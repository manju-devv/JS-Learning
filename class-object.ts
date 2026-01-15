class Products {
  name: string;
  price: number;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  displayProduct(): string {
    return `product: ${this.name} \n price: ${this.price}`;
  }
  getTotalPriceWithTax(tax: number): string {
    return `total Price with tax: ${this.price + this.price * tax}`;
  }
}

class Discount extends Products {
  discount: number;
  constructor(name: string, price: number, discount: number) {
    super(name, price);
    this.discount = discount;
  }
  getDiscount(): string {
    return `discount price ${this.price - this.discount / 2}`;
  }
}

const prod = new Products("pavilion", 70000);
console.log(prod.displayProduct());

// const taxPrice = prod.getTotalPriceWithTax(0.5);
// console.log(taxPrice);

const disDetails = new Discount("hp laptop", 70000, 10000);
console.log(disDetails.displayProduct());
console.log(disDetails.getTotalPriceWithTax(0.5));
console.log(disDetails.getDiscount());

console.log(disDetails instanceof Products);
console.log(prod instanceof Products);
