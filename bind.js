function funk(nam, arrr) {
    console.log(`Name: ${this.name}, Age: ${this.age} :: ${nam} :: ${arrr}`);
}

const obj = {
    name: 'John Smith',
    age: 29,
    ag: 29, // (extra property, not used here)
};

// Using `call()` – calls the function and allows individual arguments
// funk.call(obj, 'Developer', 'Engineer');

// Using `apply()` – same as call, but arguments are passed in an array
// funk.apply(obj, ['Designer', 'Remote']);

// The difference:
// `call(obj, arg1, arg2)` uses normal arguments
// `apply(obj, [arg1, arg2])` uses an array of arguments

// Using `bind()` – returns a new function with `this` bound to `obj`
let bindedFunc = funk.bind(obj, '9393', 'oiuio');
// bind does NOT call the function immediately
bindedFunc(); // now we call it — useful for reuse

// ++++++++++++++++ Gatter and Setter ++++++++++++++
class Product {
    constructor(proName, price) {
        this.proName = proName; // setter will be triggered
        this.price = price;
    }

    get proName() {
        return `This is Get: ${this._proName}`; // use _proName internally
    }

    set proName(value) {
        this._proName = value; // store in a private variable
    }
}

let MyClass = new Product('Ali');
console.log(MyClass.proName); // This will trigger the getter
