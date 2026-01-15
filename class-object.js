var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Products = /** @class */ (function () {
    function Products(name, price) {
        this.name = name;
        this.price = price;
    }
    Products.prototype.displayProduct = function () {
        return "product: ".concat(this.name, " \n price: ").concat(this.price);
    };
    Products.prototype.getTotalPriceWithTax = function (tax) {
        return "total Price with tax: ".concat(this.price + this.price * tax);
    };
    return Products;
}());
var Discount = /** @class */ (function (_super) {
    __extends(Discount, _super);
    function Discount(name, price, discount) {
        var _this = _super.call(this, name, price) || this;
        _this.discount = discount;
        return _this;
    }
    Discount.prototype.getDiscount = function () {
        return "discount price ".concat(this.price - this.discount / 2);
    };
    return Discount;
}(Products));
var prod = new Products("pavilion", 70000);
console.log(prod.displayProduct());
// const taxPrice = prod.getTotalPriceWithTax(0.5);
// console.log(taxPrice);
var disDetails = new Discount("hp laptop", 70000, 10000);
console.log(disDetails.displayProduct());
console.log(disDetails.getTotalPriceWithTax(0.5));
console.log(disDetails.getDiscount());
console.log(disDetails instanceof Products);
console.log(prod instanceof Products);
