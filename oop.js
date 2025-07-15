//Object Orhented Programing
class student {
    constructor(name, age) {//if we want to pass any parameter into our class then pass the variable the amout which is require then store their value by this keyword now you can use these variable anywhere by keyword this.variableName
        this.namee = name
        this.agee = age
        console.log('this is constructor');

    }


    methodOne() {
        console.log('Method One is here');

    }
    methodTwo() {
        console.log(`this is Method Two Name is ${this.namee} and age is ${this.agee}`);

    }
    static thisIStaticMethod() {//this method can not be access by converting it into object it can be easily excess by class name and then static method name
        /*
        
        student.thisISaticMrhtod()
        */
        console.log('this method cannot be access by converting into object');

    }
}
let ThisObject = new student('ALI HAIDER', 38429834)//here we are passing values into our object which was a class before 
ThisObject('ali',29923)
ThisObject.methodTwo()
student.thisIStaticMethod()
// this is a class and in this way a class is created in Object orihanted progrming 
/*
 for creating a class the class keyword is use after the keyword write the class name and then write different method which are basically functions without function keyword in this way different function or mehtods are created and 


 for calling any method or function we will firstly convert the class into Object by new keyword and wrap it into a veriable 

after then it will behave like the object and we can find out the value of it or find out the method inti 


*/

//============================ Inheritance ================================
class ClassOne {
    constructor(Name) {
        console.log('This is Class ONe');
    }
    myFunk() {
        console.log('this is Funk');
    }
    methodOne() {
    console.log('Method One is here');

    }
}
// let kkk = new ClassOne()
class inhert extends ClassOne {
constructor(){
    
    console.log('EXTENDED CONSTRUCTURE');
    
    super().methodOne()//super is use to gain the mehtod for inhertance
}
methodTwo() {
    
    console.log('THIS NEWWWW');
}

}
let hhh = new inhert
hhh.methodTwo()
//hhh.myFunk()//in this way we can inhert any class into an other class it mean we can access the all properties of other class by inheritance by the keyWord of extends
// ================================ four pilors of oops ======================
// 1) Polymorphism =>Polymorphism allows methods to behave differently based on the object calling them, even if they have the same name
class Animal {
  speak() {
    console.log("Animal speaks");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Meow");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Woof");
  }
}
/* Animal speaks
Meow
Woof */
const animals = [new Animal(), new Cat(), new Dog()];
animals.forEach(animal => animal.speak());
// 2)  Inheritance =>  Inheritance allows a class (child) to inherit properties and methods from another class (parent). why use ? Reduces code duplication
//Encourages reuse and organization 
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

const d = new Dog("Tommy");
d.speak(); // From Animal
d.bark();  // From Dog
// 3) Abstraction => Abstraction hides complex implementation and exposes only essential parts. Why ?Simplifies usage Reduces complexity Protects users from internal logic
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
// 4) Encapsulation  =>  Encapsulation means bundling data (properties) and behavior (methods) inside one unit (class) and restricting direct access to some data.
class BankAccount {
  #balance = 0;

  constructor(owner) {
    this.owner = owner;
  }      // # is use to make it private /* Normally in JavaScript, all properties and methods of a class are public — they can be accessed and modified from outside the class.

But with #, you can make them private, so they cannot be accessed or modified directly from outside the class */

  deposit(amount) {
    if (amount > 0) this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}
