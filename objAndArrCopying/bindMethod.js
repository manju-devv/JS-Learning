// bind() : The bind() method creates a new function that, when called, has its this keyword
// set to the provided value, with a given sequence of arguments preceding any provided when the function is called.

// What is bind() in JavaScript?

// bind() is a method used to fix (bind) the value of this to a specific object.

// 👉 It belongs to all functions via Function.prototype.bind

// 🔥 Definition (simple)

// bind() creates a new function where this is permanently set to the given object.

// const newFunction = originalFunction.bind(thisArg, arg1, arg2);

const product = {
  name: "Vanilla Lip Gloss",
  sku: "w234fg",
  stock: 276,
  getProductInfo: function () {
    // console.log(this)
    console.log(
      `Stock level for ${this.name} (SKU: ${this.sku}): ${this.stock}`,
    );
  },
};

// product.getProductInfo()

const productDetails = product.getProductInfo.bind(product);

productDetails();





const user = {
  name: "Manju",
};

function greet() {
  console.log(this.name);
}

const boundGreet = greet.bind(user);

boundGreet(); // "Manju"





function greet1(age) {
  console.log(this.name, age);
}

const user1 = { name: "Manju" };

const bound = greet1.bind(user1, 22);

bound(); // Manju 22





const user3 = {
  name: "Manju",
  greet() {
    console.log(this.name);
  }
};

setTimeout(user3.greet.bind(user3), 1000);