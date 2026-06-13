// prototype in javascript

function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
}
const person1 = new Person('Alice', 30);
person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
const person2 = new Person('Bob', 25);
person2.greet(); // Output: Hello, my name is Bob and I am 25 years old.
// The greet method is shared between person1 and person2 through the prototype, which saves memory and allows for efficient method sharing.

console.log(person1.__proto__.__proto__)
console.log(person1.__proto__.__proto__.__proto__)

// QnA

// Conceptual Questions
// Q1: What is a prototype in JavaScript?
// A1: A prototype in JavaScript is an object that is associated with every function and object by default. It allows you to add properties and methods to all instances of a constructor function. When you create a new object using a constructor function, it inherits properties and methods from the constructor's prototype.

// Q2: How does JavaScript use prototypes for inheritance?
// A2: JavaScript uses prototypes for inheritance through a mechanism called prototype chaining. When you access a property or method on an object, JavaScript first looks for it on the object itself. If it doesn't find it there, it looks up the prototype chain to find it on the object's prototype, and so on, until it reaches the end of the chain (null). This allows objects to inherit properties and methods from their prototypes, enabling code reuse and efficient memory usage.

// Q3: Can you give an example of how to add a method to a constructor function's prototype?
// A3: Yes, you can add a method to a constructor function's prototype like this:
function Car(make, model) {
    this.make = make;
    this.model = model;
}
Car.prototype.getInfo = function() {
    return `This car is a ${this.make} ${this.model}.`;
}
const car1 = new Car('Toyota', 'Corolla');
console.log(car1.getInfo()); // Output: This car is a Toyota Corolla.
const car2 = new Car('Honda', 'Civic');
console.log(car2.getInfo()); // Output: This car is a Honda Civic.
// In this example, the getInfo method is added to the Car constructor's prototype, allowing all instances of Car to access it without having to define it on each instance.

// Q4: How can you check if an object has a specific property or method in its prototype chain in JavaScript?

// A4: You can check if an object has a specific property or method in its prototype chain using the hasOwnProperty method or the in operator. The hasOwnProperty method checks if the property exists directly on the object, while the in operator checks if the property exists anywhere in the object's prototype chain. For example:
console.log(car1.hasOwnProperty('getInfo')); // Output: false
console.log('getInfo' in car1); // Output: true
// In this example, we are checking if the car1 object has the getInfo method. The hasOwnProperty method returns false because getInfo is not a direct property of car1, while the in operator returns true because getInfo exists in the prototype chain of car1 through Car.prototype.

// Q5: What happens if you try to access a property or method that does not exist on an object or its prototype chain?
// A5: If you try to access a property or method that does not exist on an object or its prototype chain, JavaScript will return undefined. This is because JavaScript will look for the property or method on the object itself and then up the prototype chain, but if it cannot find it anywhere, it will return undefined. For example:
console.log(car1.nonExistentProperty); // Output: undefined
console.log(car1.nonExistentMethod); // Output: undefined
// In this example, we are trying to access a property and a method that do not exist on the car1 object or its prototype chain. As a result, JavaScript returns undefined for both cases.

// Q6: Can you explain the difference between prototypal inheritance and classical inheritance?
// A6: Prototypal inheritance is a type of inheritance in JavaScript where objects can directly inherit from other objects. In prototypal inheritance, an object can serve as a prototype for another object, allowing the child object to access properties and methods defined on the parent object. Classical inheritance, on the other hand, is a more traditional form of inheritance found in languages like Java or C++, where classes are defined and objects are created as instances of those classes. In classical inheritance, a class can inherit from another class, and objects are created based on the class definition. JavaScript primarily uses prototypal inheritance, but with the introduction of classes in ES6, it provides a syntax that resembles classical inheritance while still utilizing the underlying prototypal inheritance mechanism.

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
console.log(childObject.hasOwnProperty('greet'));

// Interview question

// Q1.