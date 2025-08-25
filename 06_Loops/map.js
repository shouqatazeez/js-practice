// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // const addnum = numbers.map((nums) => nums + 10)// this is how we use maps in the js this is one method without return let us understand the same example with return so that we can get an idea how we can write the code with return
// const addnum = numbers.map((nums) => { // this is how we use the map function with return
//     return nums + 10
// })
// console.log(addnum);



const numss = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];// this is how we use chaining at a tym using map and filter

const finalnums = numss
    .map((num) => num + 10) // map transforms each element in the array to a new value
    .map((num) => num + 1)
    .filter((sum) => sum > 15) //filter selects elements from the array based on a condition and excludes the ones that don’t satisfy it



console.log(finalnums);


