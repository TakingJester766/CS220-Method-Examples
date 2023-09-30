const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//filter filers out numbers based on a condition
const filteredNumbers = numbers.filter((num) => {
    return num % 2 !== 0;
});
console.log(filteredNumbers); // Output: [1, 3, 5, 7, 9]
//transforms array elements based on a function
const mapNumbers = [1, 2, 3, 4, 5];
const doubledNumbers = mapNumbers.map((num) => {
    return num * 2;
});
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
//reduce
const reduceNumbers = [1, 2, 3, 4, 5];
const reducedNumbers = reduceNumbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});
console.log(reducedNumbers); // Output: 15
export {};
//# sourceMappingURL=index.js.map