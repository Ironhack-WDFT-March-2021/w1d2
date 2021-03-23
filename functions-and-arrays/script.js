// console.log('hey');


// function declaration - they are hoisted
// function greet() {
//     console.log('hey');
// }

// function expression - they are not hoisted
// const greet = function () {
//     console.log('hey');
// }

function greet(name, greeting) {
    // we can only return one value
    return greeting + ' ' + name;
    // this line is unreachable
    const someVar = 45;
}

const user = 'hans';
const message = greet('hans', 'hello');
// console.log(message)

function sum(a, b) {
    // const result = a + b;
    // return result;
    return a + b
}

const result = sum(3, 5);
// console.log(result)


// Arrays - an ordered collection of different values

const numbers = [2, 4, 6, 8];
console.table(numbers)
// access one of the values
console.log(numbers[1])
// const ar = Array(10).fill('hans');
// console.log(ar)
const empty = [];
empty[0] = 'a';
empty[3] = 'b'
console.log(empty.length)
// we can have mixed types
const mixed = [1, 'hans', true, null, 23.99];
// multidimensional arrays
const multi = [['a', 'b'], ['c', 'd'], ['e', 'f']];
console.log(multi[1][0])

// more common way of adding elements to an array
// push adds to the end of the array
const names = [];
names.push('john');
names.push('paul');
names.push('george');
// push returns the new length of the array
const res = names.push('ringo');
console.log('result', res)
// pop() removes from the end
// const ringo = names.pop();
names.pop();
console.log(names)

// unshift() puts the element to the beginning
names.unshift('ringo');
console.log(names)
// shift() removes the element from the beginning
names.shift();
console.log(names)


const countries = ['usa', 'france', 'france', 'poland'];

// splice() (<start>, <deleteCount>, <elementsToAdd>)
countries.splice(1, 1, 'england');
console.log(countries)



// iterating over an array
const nums = [1, 2, 3, 4, 5, 6, 7];
// using a for loop
for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
}

// const countries = ['usa', 'france', 'poland'];
// using for of loop
// for (let <nameOfOneOfTheElements> of <nameOfTheArray>) {}
for (let country of countries) {
    console.log(country)
}
for (let number of nums) {
    console.log(number)
}
// forEach
// function log(element) {
//     console.log(element)
// }
// countries.forEach(function (country) {
//     console.log(country)
// })

// const countries = ['usa', 'france', 'poland'];
// write a function that get's an array as an argument 
// and returns a number which should be the index of the 
// string france in that array

// console.clear();
// console.log(countries)

function findFrance(countries) {
    // iterate over the array of countries
    for (let i = 0; i < countries.length; i++) {
        console.log(countries[i])
        // check if the string we are at is equal to 'france'
        if (countries[i] === 'france') {
            // then return the index
            return i;
        }
    }
}
const index = findFrance(countries);
console.log(index)

console.clear();

// const nums = [1, 2, 3, 4, 5, 6, 7];

console.log(nums)

// write a function that get's an array of numbers and returns an 
// array containing only the even numbers

function filterEvenNumbers(arr) {
    // create a new array
    let result = [];
    // iterate over the input array
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        // if the number i am currently at is even
        if (arr[i] % 2 === 0) {
            // we add it to te result array
            result.push(arr[i])
        }
    }
    // after the loop we return the result array
    return result;
}
console.log(filterEvenNumbers(nums))