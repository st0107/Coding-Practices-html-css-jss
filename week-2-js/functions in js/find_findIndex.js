// find() and findIndex() are used to search for an element in an array based on a condition.

// find() returns the first element that satisfies the condition,
// while findIndex() returns the index of the first element that satisfies the condition.

const numbers = [1, 2, 3, 4, 5];

// Using find() to get the first even number
const firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven); // Output: 2

// Using findIndex() to get the index of the first even number
const firstEvenIndex = numbers.findIndex(num => num % 2 === 0);
console.log(firstEvenIndex); // Output: 1


// If no element satisfies the condition, find() returns undefined and findIndex() returns -1.
const firstGreaterThanTen = numbers.find(num => num > 10);
console.log(firstGreaterThanTen); // Output: undefined

const firstGreaterThanTenIndex = numbers.findIndex(num => num > 10);
console.log(firstGreaterThanTenIndex); // Output: -1