// Create an Array

const hobbies = ['Oliver', 'Alex', 'Mark']
console.log(hobbies) // Output: ['Oliver', 'Alex', 'Mark']

// Accessing Elements

const hello = 'Hello World';
console.log(hello[6]); // Output: W
console.log(hello[100]); // Output: undefined

// Update Elements

let seasons = ['Winter', 'Spring', 'Summer', 'Fall'];

seasons[3] = 'Autumn';
console.log(seasons); //Output: ['Winter', 'Spring', 'Summer', 'Autumn']

// Arrays with let and const

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo'
condiments = ['Mayo']
console.log(condiments)
utensils[3] = 'Spoon' // Die länge des arrays ist nicht änderbar aber der inhalt schon
console.log(utensils)
// utensils = ['gsdfg', 'dsgsd'] TypeError: Assignment to constant variable.

// The .length property

const newYearsResolutions = ['Keep a journal', 'Take a falconry class'];

console.log(newYearsResolutions.length); // Output: 2

// The .push() Method

const itemTracker = ['item 0', 'item 1', 'item 2'];

itemTracker.push('item 3', 'item 4');

console.log(itemTracker); // Output: ['item 0', 'item 1', 'item 2', 'item 3', 'item 4'];

// The .pop() Method

const newItemTracker = ['item 0', 'item 1', 'item 2'];

const removed = newItemTracker.pop();

console.log(newItemTracker);
// Output: [ 'item 0', 'item 1' ]
console.log(removed);
// Output: item 2

// More Array Methods
// .join(), .slice(), .splice(), .shift(), .unshift(), .concat()

const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift() //  remove the first item
console.log(groceryList)

groceryList.unshift('popcorn') // add 'popcorn' to the beginning
console.log(groceryList)

console.log(groceryList.slice(1, 4)) // slice
console.log(groceryList)

const pastaIndex = groceryList.indexOf('pasta')
console.log(pastaIndex)

// Arrays and Functions

const flowers = ['peony', 'daffodil', 'marigold'];

function addFlower(arr) {
  arr.push('lily');
}

addFlower(flowers);

console.log(flowers); // Output: ['peony', 'daffodil', 'marigold', 'lily']

// Nested Arrays

const nestedArr = [[1], [2, 3]];

console.log(nestedArr[1]); // Output: [2, 3]
console.log(nestedArr[1][0]); // Output: 2