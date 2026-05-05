


class Holiday {
    #destination;
    constructor(destination,price){
        this.#destination = destination;
        this.price = price;
    }
}


const dest = new Holiday("Hawaii",5000);
dest.price = 4500; // can change price
console.log(dest);



class BankAccount {
  #balance; // 🔒 private property

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  debit(amount){
    if(amount > this.#balance){
        return `insufficient funds. Current balance: ${this.#balance}`;
    }
    this.#balance -= amount;
    return `Debit successful. Current balance: ${this.#balance}`;
  }

  getBalance() {
    return this.#balance;
  }
}

const acc = new BankAccount(1000);
console.log(acc);
console.log(acc.getBalance()); // 1000
acc.deposit(500);

console.log(acc.getBalance()); // 1500

console.log(acc.debit(1500))
console.log(acc.getBalance()); // 0
console.log(acc.debit(1500))
// // ❌ Not allowed
// console.log(acc.#balance); // Error





class User {
  #formatName(name) {
    return name.toUpperCase();
  }

  getName(name) {
    return this.#formatName(name);
  }
}

const u = new User();
console.log(u);
console.log(u.getName("manju")); // MANJU

// ❌ Error
// u.#formatName("manju");