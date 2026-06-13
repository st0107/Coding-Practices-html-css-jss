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


// QnA
// Conceptual Questions

// Q1: What is the difference between find() and findIndex() in JavaScript?
// A1: find() returns the first element that satisfies the condition, while findIndex() returns the index of the first element that satisfies the condition. If no element satisfies the condition, find() returns undefined and findIndex() returns -1.

// Q2: Can find() and findIndex() be used on arrays of objects?
// A2: Yes, find() and findIndex() can be used on arrays of objects. You can specify a condition based on the properties of the objects to search for a specific object or its index in the array.

// Example of using find() and findIndex() on an array of objects
const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
];

const userNamedBob = users.find(user => user.name === 'Bob');
console.log(userNamedBob); // Output: { id: 2, name: 'Bob' }
const indexOfCharlie = users.findIndex(user => user.name === 'Charlie');
console.log(indexOfCharlie); // Output: 2

// Q3: What happens if there are multiple elements that satisfy the condition in find() and findIndex()?
// A3: If there are multiple elements that satisfy the condition, find() will return the first element that matches, and findIndex() will return the index of the first element that matches. The search is performed from left to right, so only the first match is returned.

// Interview Questions
// Q1: Can you explain how find() and findIndex() work under the hood in JavaScript?
// A1: Both find() and findIndex() iterate through the array from the beginning to the end, checking each element against the provided condition (a callback function). For find(), if an element satisfies the condition, it immediately returns that element. For findIndex(), if an element satisfies the condition, it returns the index of that element. If no elements satisfy the condition, find() returns undefined and findIndex() returns -1. The iteration stops as soon as a match is found, making these methods efficient for finding elements in an array.

// Q2: How would you use find() and findIndex() to search for an element in a large array efficiently?
// A2: To search for an element in a large array efficiently using find() and findIndex(), you can ensure that the condition you are checking is as specific as possible to minimize the number of iterations. Additionally, if the array is sorted based on the property you are searching for, you could consider using a more efficient search algorithm like binary search instead of find() or findIndex(), as these methods perform a linear search. However, if you need to use find() or findIndex(), you can also break out of the loop early if you have found the desired element to avoid unnecessary iterations.

// Q3: Can you give an example of a real-world scenario where find() and findIndex() would be useful?
// A3: A real-world scenario where find() and findIndex() would be useful is when working with a list of users in a web application. For example, if you have an array of user objects and you want to find a user by their username, you can use find() to get the user object or findIndex() to get the index of the user in the array. This can be particularly useful when you need to update or delete a user based on their username.

const userList = [
    { id: 1, username: 'alice' },
    { id: 2, username: 'bob' },
    { id: 3, username: 'charlie' }
];

const userAlice = userList.find(user => user.username === 'alice');
console.log(userAlice); // Output: { id: 1, username: 'alice' }

const indexOfBob = userList.findIndex(user => user.username === 'bob');
console.log(indexOfBob); // Output: 1

// You can then use the index to update or delete the user as needed. For example, to update Bob's username:
if (indexOfBob !== -1) {
    userList[indexOfBob].username = 'bobby';
}

// To delete Bob from the userList:
if (indexOfBob !== -1) {
    userList.splice(indexOfBob, 1);
}

// After the update and delete operations, the userList would be:
console.log(userList); // Output: [{ id: 1, username: 'alice' }, { id: 3, username: 'charlie' }]

// Q4: How do find() and findIndex() handle sparse arrays (arrays with empty slots)?
// A4: Both find() and findIndex() will skip over empty slots in a sparse array. They will only check the defined elements in the array. If an empty slot is encountered, it will not be considered as an element that satisfies the condition, and the search will continue to the next defined element. If no defined elements satisfy the condition, find() will return undefined and findIndex() will return -1, regardless of the presence of empty slots in the array.
const sparseArray = [1, , 3, , 5];
const foundElement = sparseArray.find(num => num === undefined);
console.log(foundElement); // Output: undefined
const foundIndex = sparseArray.findIndex(num => num === undefined);
console.log(foundIndex); // Output: -1

// In this example, both find() and findIndex() skip the empty slots in the sparse array and do not consider them as elements that satisfy the condition.

// Q5: Can you use find() and findIndex() on arrays of primitive values (like numbers or strings)?
// A5: Yes, you can use find() and findIndex() on arrays of primitive values such as numbers or strings. The condition in the callback function can be based on the value of the primitive type. For example:
const fruits = ['apple', 'banana', 'cherry'];
const foundFruit = fruits.find(fruit => fruit === 'banana');
console.log(foundFruit); // Output: banana
const foundFruitIndex = fruits.findIndex(fruit => fruit === 'cherry');
console.log(foundFruitIndex); // Output: 2

// In this example, find() is used to find the string 'banana' in the array of fruits, and findIndex() is used to find the index of the string 'cherry'. Both methods work effectively with arrays of primitive values.

// Q6: How do find() and findIndex() differ from filter() in JavaScript?
// A6: The main difference between find(), findIndex(), and filter() is in their return values and behavior. find() returns the first element that satisfies the condition, while findIndex() returns the index of the first element that satisfies the condition. In contrast, filter() returns a new array containing all elements that satisfy the condition. If no elements satisfy the condition, find() returns undefined, findIndex() returns -1, and filter() returns an empty array. Additionally, find() and findIndex() stop searching as soon as a match is found, while filter() continues to check all elements in the array.

