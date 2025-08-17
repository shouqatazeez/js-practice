let arr = [1,3,5,6,7,8]
console.log(arr);
console.log(arr[4]);

// array methods 

console.log(arr.push(2));
arr.pop();
console.log(arr);

arr.unshift(0)
console.log(arr);
arr.shift()
console.log(arr);
console.log(arr.indexOf(8));

let slice1 = arr.slice(1,4);
console.log(slice1);
console.log(arr);

// this is the main difference between the slice and the splice that is when we use the slice it will print [ 3, 5, 6 ] and then printed the arr then it will give the [ 1, 3, 5, 6, 7, 8 ] 
// when we use the splice it will print this [ 3, 5, 6, 7 ] then it when we try to print the arr it will give this as the orginal arr [ 1, 8 ] this value
let slice2 = arr.splice(1,4);
console.log(slice2);
console.log(arr);









