// This function receives a parameter and adds all numbers from 0 → parameter
// MUST check if the parameter is an integer WITHOUT using Number.isInteger() or regex

function sum(n) {
  // Check if n is a number AND an integer
  if (typeof n !== "number" || n % 1 !== 0) {
    return "The value passed is not a number";
  }

  let total = 0;

  // Add all numbers from 0 to n
  for (let i = 0; i <= n; i++) {
    total += i;
  }

  return total;
}

// factorial(4) → 4 * 3 * 2 * 1 = 24

function factorial(num) {
  if (num < 0) {
    return "Factorial does not exist for negative numbers.";
  }

  let result = 1;

  for (let i = num; i >= 1; i--) {
    result *= i;
  }

  return result;
}

// 2 arguments → subtract first from second
// 3 arguments → add all 3
// 4 arguments → (arg1 + arg2) / (arg3 + arg4)

function funkyMath(a, b, c, d) {
  // 2 arguments
  if (arguments.length === 2) {
    return b - a;
  }

  // 3 arguments
  if (arguments.length === 3) {
    return a + b + c;
  }

  // 4 arguments
  if (arguments.length === 4) {
    let left = a + b;
    let right = c + d;
    return left / right;
  }

  return "Invalid number of arguments";
}

let numbers = [1, 2, 33, 45, 6, 44];
let oddNumbers = [];

// Loop through and pull out odd numbers
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    oddNumbers.push(numbers[i]);
  }
}

// Simple bubble sort:
for (let i = 0; i < oddNumbers.length; i++) {
  for (let j = 0; j < oddNumbers.length - 1; j++) {
    if (oddNumbers[j] > oddNumbers[j + 1]) {
      let temp = oddNumbers[j];
      oddNumbers[j] = oddNumbers[j + 1];
      oddNumbers[j + 1] = temp;
    }
  }
}

let me = {
  firstName: "Mihle",
  lastName: "Dudumashe",
  age: 20,
  favouriteColour: "Black",
  dreamCar: "BMW M4"
};

me.favouriteFood = "Pizza";

delete me.age;



console.log("Sum(5):", sum(5));                
console.log("factorial(4):", factorial(4));
console.log("funkyMath(8,2,3,5:", funkyMath(8,2,3,5));
console.log("Odd numbers sorted:", oddNumbers);
console.log("Object me:", me);