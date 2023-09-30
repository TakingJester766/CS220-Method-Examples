import fs from 'fs';

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const filteredNumbers: number[] = numbers.filter((num: number): boolean => {
//   return num % 2 !== 0;
// });

// console.log(filteredNumbers); // Output: [1, 3, 5, 7, 9]


//map tests

const mapNumbers: number[] = [1, 2, 3, 4, 5];

const doubledNumbers: number[] = mapNumbers.map((num: number): number => {
  return num * 2;
});

// console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
