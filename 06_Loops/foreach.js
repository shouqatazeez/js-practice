const values = ["shouqat", "Mohammad", "Al-Azeez"]
values.forEach(function (a) {// this is how we use the function
    console.log(a); // here 'a' we considered as the values in the arrays

})

values.forEach((b) => { // this is how we use the foreach with the arrow functions
    console.log(b);

})


function printme(c) {// this is also one of the method
    console.log(c);
}

values.forEach(printme)


const objectsinarrays = [
    {
        shortform: "js",
        fullform: "javascript"
    },

    {
        shortform: "py",
        fullform: "python"
    },
    {
        shortform: "java",
        fullform: "java"
    }
]

objectsinarrays.forEach(function (item) {
    console.log(item.fullform);

})