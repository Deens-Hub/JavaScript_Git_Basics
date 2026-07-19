
import multiply,{add, subtract} from './math.js';

// Destructuturing is a way to unpack values from arrays, or properties from objects, into distinct variables.

// Array destructuring allows us to extract values from an array and assign them to variables in a single line of code. For example, we can use array destructuring to extract the first and second elements of an array and assign them to variables like this:
const numbers = [1, 2, 3];
// usual way to access array elements
console.log(numbers[0]); // Output: 1
console.log(numbers[1]); // Output: 2

// using array destructuring
const [first, second] = numbers;
console.log(first); // Output: 1
console.log(second); // Output: 2   



// Object destructuring allows us to extract properties from an object and assign them to variables in a single line of code. For example, we can use object destructuring to extract the name and age properties of an object and assign them to variables like this:
const person = { name: 'John', age: 30, country: { name: "India", isd: "+91" } }; 

// usual way to access object properties
console.log(person.name); // Output: John
console.log(person.age); // Output: 30  
console.log(person.country.name); // Output: India
console.log(person.country.isd); // Output: +91

// using object destructuring
// When destructuring nested objects, we can use the same syntax as we would for a regular object, but we need to use the same property names as the nested object. For example, to destructure the country property of the person object, we can do it like this:
const { name, age, country:{ name: countryName, isd: countryIsd } } = person;
console.log(name); // Output: John
console.log(age); // Output: 30 
console.log(countryName); // Output: India
console.log(countryIsd); // Output: +91


//Spread and Rest Operators

// The spread operator allows us to expand an array or object into individual elements. For example, we can use the spread operator to create a new array that contains all the elements of an existing array, like this:
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // Output: [1, 2, 3, 4, 5]   

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
console.log(obj2); // Output: { a: 1, b: 2, c: 3 }  

// The rest operator allows us to collect the remaining elements of an array or object into a new array or object. For example, we can use the rest operator to collect all the remaining elements of an array into a new array, like this:
const [firstNum, secondNum, ...restNums] = arr1;
console.log(firstNum); // Output: 1
console.log(secondNum); // Output: 2
console.log(restNums); // Output: [3]       

function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}   //our sum function takes any number of arguments and uses the rest operator to collect them into an array called numbers. We can then use the reduce method to sum all the numbers in the array and return the result.    


//importing and exporting modules

// importing and exporting modules allows us to split our code into smaller, reusable pieces. We can export functions, objects, or variables from one module and import them into another module. For example, we can export the add and subtract functions from the math.js module and import them into the main.js module like this:  

console.log(add(2, 3)); // Output: 5
console.log(subtract(5, 2));    // Output: 3
console.log(multiply(2, 3)); // Output: 6   