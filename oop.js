class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    console.log('Constructor called');
  }
  methodOne() {
    console.log('This is Method One');
  }
  methodTwo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
  static staticMethod() { 
    // A static method is a method that belongs to the class itself, not to the instances (objects) of the class it can be called without creating an instance of the class
    console.log('Called Static Method');
  }
}

// Creating object of Student class we can not access any method of class without creating an object of that class
let obj = new Student('Ali Haider', 24);
obj.methodOne()

// Calling static method using class name it can be called without creating an instance of the class
Student.staticMethod();


//============================ Inheritance ================================

class College {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

  displayInfo() {
    console.log(`College Name: ${this.name}, Location: ${this.location}`);
  }
}
class University extends College {
  universityTeacher() {
    console.log(`University Teacher: ${this.name}`);
  }
}

// Creating object and passing both name and location
const uni = new University('Harvard', 'USA');

uni.universityTeacher();  // Output: University Teacher: Harvard
uni.displayInfo();        // Output: College Name: Harvard, Location: USA


// ================================ four pilors of oops ======================
// 1)  Inheritance =>  Inheritance allows a class (child) to inherit properties and methods from another class (parent). why use ? Reduces code duplicationtion
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound`);
  }
}
class Dog extends Animal {
  bark() {
    console.log(`${this.name} barks`);
  }
}
const dog = new Dog("Tommy");
dog.speak();
dog.bark();
 //  Encapsulation (Private data
class BankAccount {
  #balance = 0; // Private property

  constructor(owner) {
    this.owner = owner;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
    }
  }

  getBalance() {
    return this.#balance;
  }
}

let account = new BankAccount("Ali");
account.deposit(1000);
console.log(account.getBalance()); // 1000
// account.#balance;  Not accessible directly
// Abstraction (Hide complex logic)
class Car {
  startEngine() {
    this.#injectFuel();
    this.#ignite();
    console.log("Car started");
  }
  #injectFuel() {
    console.log("Fuel injected");
  }
  #ignite() {
    console.log("Engine ignited");
  }
}
let car = new Car();
car.startEngine();
// car.#injectFuel();  Not accessible

/*             Interview
Inheritance

Q: What are the benefits of inheritance?
A: Code reuse, scalability, and organization.

Encapsulation

Q: How is encapsulation implemented in JavaScript?
A: By using private fields (e.g., #balance) and providing public getter/setter methods.

Abstraction

Q: What is abstraction in OOP?
A: It hides internal implementation details and shows only essential features.

Polymorphism

Q: What is polymorphism?
A: It allows methods to behave differently based on the object calling them (method overriding).
*/
