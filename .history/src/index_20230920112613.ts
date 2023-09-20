import fs from 'fs';

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filteredNumbers: number[] = numbers.filter((num: number): boolean => {
  return num % 2 !== 0;
});

console.log(filteredNumbers); // Output: [1, 3, 5, 7, 9]
