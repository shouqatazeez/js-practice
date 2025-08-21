function one() {
    let value = 27;
    function two() {
        const name = "shouqat Azeez";
        console.log(value);// here we are using the parent values inside the block scope or the child

    }

    // console.log(name); // but the parent cannot acces the values of the child out side the scope it can be acces inside the block scope only 
    two();


} one();

console.log(sum(3)); // We can call the function before its definition because of hoisting, so this prints the output

function sum(num1) {
    return num1 + 3;
}


function sum(num1) {
    return num1 + 3
}

// console.log(expression(10));  // Error: expression is not defined yet

const expression = function sum(num1) {
    return num1 + 3;
}






