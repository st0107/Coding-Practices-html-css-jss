// prototype chain

// Defination : The prototype chain is JavaScript’s inheritance lookup system, where property access travels upward through linked prototypes until the property is found or the chain ends at null.

function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function() {
    console.log(`${this.name} makes a sound.`);
}

function Dog(name, breed) {
    Animal.call(this, name); // Call the parent constructor to initialize the name property
    this.breed = breed; // Initialize the breed property specific to Dog
}

Dog.prototype = Object.create(Animal.prototype); // Set up the prototype chain
Dog.prototype.constructor = Dog; // Set the constructor property to Dog
Dog.prototype.bark = function() {
    console.log(`${this.name} barks.`);
}

const dog1 = new Dog('Buddy', 'Golden Retriever');
dog1.speak(); // Output: Buddy makes a sound.
dog1.bark(); // Output: Buddy barks.

const dog2 = new Dog('Max', 'Labrador');
dog2.speak(); // Output: Max makes a sound.
dog2.bark(); // Output: Max barks.

// In this example, we have an Animal constructor function with a speak method defined on its prototype. The Dog constructor function inherits from Animal using Object.create to set up the prototype chain. This allows instances of Dog to access the speak method from Animal, as well as their own bark method.

// QnA

// Conceptual Questions

// Q1: What is the prototype chain in JavaScript?
// A1: The prototype chain in JavaScript is a mechanism that allows objects to inherit properties and methods from other objects. When you access a property or method on an object, JavaScript first looks for it on the object itself. If it doesn't find it there, it looks up the prototype chain to find it on the object's prototype, and so on, until it reaches the end of the chain (null). This allows for efficient code reuse and inheritance in JavaScript.

// Q2: How does JavaScript use the prototype chain for inheritance?
// A2: JavaScript uses the prototype chain for inheritance by allowing objects to inherit properties and methods from their prototypes. When you create a new object using a constructor function, it inherits properties and methods from the constructor's prototype. If you want to create a new constructor function that inherits from another constructor function, you can set up the prototype chain using Object.create. This allows instances of the child constructor to access properties and methods defined on the parent constructor's prototype, enabling code reuse and efficient memory usage.

// Q3: Can you give an example of how to set up a prototype chain for inheritance in JavaScript?
// A3: Yes, here is an example of how to set up a prototype chain for inheritance in JavaScript:
function Vehicle(make, model) {
    this.make = make;
    this.model = model;
}

Vehicle.prototype.getInfo = function() {
    return `This vehicle is a ${this.make} ${this.model}.`;
}
function Car(make, model, year) {
    Vehicle.call(this, make, model); // Call the parent constructor to initialize make and model
    this.year = year; // Initialize the year property specific to Car
}

Car.prototype = Object.create(Vehicle.prototype); // Set up the prototype chain
Car.prototype.constructor = Car; // Set the constructor property to Car
Car.prototype.getCarInfo = function() {
    return `${this.year} ${this.make} ${this.model}`;
}

const car1 = new Car('Toyota', 'Corolla', 2020);
console.log(car1.getInfo()); // Output: This vehicle is a Toyota Corolla.
console.log(car1.getCarInfo()); // Output: 2020 Toyota Corolla
// In this example, we have a Vehicle constructor function with a getInfo method defined on its prototype. The Car constructor function inherits from Vehicle using Object.create to set up the prototype chain. This allows instances of Car to access the getInfo method from Vehicle, as well as their own getCarInfo method.

// Q4: What happens if you try to access a property or method that does not exist on an object or its prototype chain?
// A4: If you try to access a property or method that does not exist on an object or its prototype chain, JavaScript will return undefined. This is because JavaScript will look for the property or method on the object itself and then up the prototype chain, but if it cannot find it anywhere, it will return undefined. For example:
console.log(car1.nonExistentProperty); // Output: undefined
console.log(car1.nonExistentMethod); // Output: undefined

// In this example, we are trying to access a property and a method that do not exist on the car1 object or its prototype chain. As a result, JavaScript returns undefined for both cases.

// Q5: How can you check if an object is an instance of a particular constructor function in JavaScript?
// A5: You can check if an object is an instance of a particular constructor function in JavaScript using the instanceof operator. The instanceof operator tests whether the prototype property of a constructor appears anywhere in the prototype chain of an object. For example:
console.log(car1 instanceof Car); // Output: true
console.log(car1 instanceof Vehicle); // Output: true
console.log(car1 instanceof Object); // Output: true
console.log(car1 instanceof Array); // Output: false    
// In this example, we are checking if car1 is an instance of Car, Vehicle, Object, and Array. The instanceof operator returns true for Car, Vehicle, and Object because car1 is an instance of Car and inherits from Vehicle and Object through the prototype chain. It returns false for Array because car1 is not an instance of Array.

// Q6: Can you explain the difference between a constructor function and a class in JavaScript?
// A6: In JavaScript, a constructor function is a regular function that is used to create objects. It is typically defined with a capitalized name and is called using the new keyword. A class, on the other hand, is a syntactical sugar over constructor functions introduced in ES6. It provides a more concise and clearer syntax for creating objects and handling inheritance. Classes in JavaScript are essentially special functions that can have methods defined within them, and they use the prototype chain for inheritance just like constructor functions. The main difference is that classes provide a more modern and cleaner syntax for defining object-oriented code in JavaScript.

// Interview Questions

// Q1: Can you explain how the prototype chain works in JavaScript and how it enables inheritance?
// A1: The prototype chain in JavaScript is a mechanism that allows objects to inherit properties and methods from other objects. When you access a property or method on an object, JavaScript first looks for it on the object itself. If it doesn't find it there, it looks up the prototype chain to find it on the object's prototype, and so on, until it reaches the end of the chain (null). This allows for efficient code reuse and inheritance in JavaScript. By setting up the prototype chain using Object.create or by using constructor functions, you can create a hierarchy of objects that share properties and methods, enabling inheritance and promoting code reuse.

// Q2: How can you create a new object that inherits from an existing object in JavaScript?

// A2: You can create a new object that inherits from an existing object in JavaScript using the Object.create method. This method creates a new object with the specified prototype object and properties. For example:
const parentObject = {
    greet() {
        console.log('Hello from the parent object!');
    }
};
const childObject = Object.create(parentObject);
childObject.greet(); // Output: Hello from the parent object!

// In this example, we have a parentObject with a greet method. We create a childObject that inherits from parentObject using Object.create. As a result, childObject can access the greet method defined on parentObject through the prototype chain.

// Q3: Can you explain the difference between prototypal inheritance and classical inheritance?
// A3: Prototypal inheritance is a type of inheritance in JavaScript where objects can directly inherit from other objects. In prototypal inheritance, an object can serve as a prototype for another object, allowing the child object to access properties and methods defined on the parent object. Classical inheritance, on the other hand, is a more traditional form of inheritance found in languages like Java or C++, where classes are defined and objects are created as instances of those classes. In classical inheritance, a class can inherit from another class, and objects are created based on the class definition. JavaScript primarily uses prototypal inheritance, but with the introduction of classes in ES6, it provides a syntax that resembles classical inheritance while still utilizing the underlying prototypal inheritance mechanism.

// Q4: How can you check if an object has a specific property or method in its prototype chain in JavaScript?
// A4: You can check if an object has a specific property or method in its prototype chain using the hasOwnProperty method or the in operator. The hasOwnProperty method checks if the property exists directly on the object, while the in operator checks if the property exists anywhere in the object's prototype chain. For example:
console.log(childObject.hasOwnProperty('greet')); // Output: false
console.log('greet' in childObject); // Output: true

// In this example, we are checking if the childObject has the greet method. The hasOwnProperty method returns false because greet is not a direct property of childObject, while the in operator returns true because greet exists in the prototype chain of childObject through parentObject.


