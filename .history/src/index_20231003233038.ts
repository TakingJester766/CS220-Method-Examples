import fs from 'fs';

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//filter filers out numbers based on a condition

const filteredNumbers: number[] = numbers.filter((num: number): boolean => {
  return num % 2 !== 0;
});

console.log(filteredNumbers); // Output: [1, 3, 5, 7, 9]


//transforms array elements based on a function
const mapNumbers: number[] = [1, 2, 3, 4, 5];

const doubledNumbers: number[] = mapNumbers.map((num: number): number => {
  return num * 2;
});

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

//reduce
const reduceNumbers: number[] = [1, 2, 3, 4, 5];

const reducedNumbers: number = reduceNumbers.reduce((accumulator: number, currentValue: number): number => {
  return accumulator + currentValue;
});

console.log(reducedNumbers); // Output: 15


//let's kill this exam!!!

