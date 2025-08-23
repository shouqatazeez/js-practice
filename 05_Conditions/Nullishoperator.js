// The nullish coalescing operator (??) returns the right value only if the left value is null or undefined; otherwise, it returns the left value.


let x = 0;         // Try with 0 (falsy, but not null/undefined)
let a = x || 10;   // returns 10 (because 0 is falsy)
let b = x ?? 10;   // returns 0   (because 0 is NOT null/undefined)
let value1 = null ?? 20 ?? 25
console.log(value1);

console.log(a);
console.log(b);


//Ternery Operator
const price = 100;
price >= 122 ? console.log("The value is greater than 122") : console.log("The value is lesser than 122");

