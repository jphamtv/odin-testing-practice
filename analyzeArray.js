// analyzeArray.js

export function analyzeArray(array) {
  return {
    average: array.reduce((total, currentValue) => total + currentValue, 0) / array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length
  }
}

let array = [1,8,3,4,2,6];
let object = analyzeArray(array);
console.log(object);