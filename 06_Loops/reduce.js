// The reduce() method processes each element in an array to combine them
// into a single value based on the function provided, like summing all elements




const values = [1, 3, 6, 7, 3];



const summm = values.reduce(function (acc, val) { //using normal function

    console.log(`accum : ${acc} and  val : ${val}`);

    return acc + val

}, 0)

console.log(summm);




const sum = values.reduce((summ, bumm) => {// by using arrow function

    return summ + bumm;

}, 2)
console.log(sum);

// let us try to understand in depth and in detailed about the reduce 


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const totalprice = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(totalprice);





