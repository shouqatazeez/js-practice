//IIFE --> Immediately Invoked function expression

// it is used to overcome the pollution of the global scope the variables declarations can occured this is the reason we use IIFE

(function name() {// this is how we use the IIFE we use the () before the function this ia also called as the named IIFE
    console.log("hello");

})();

((name) => {//this is an example of the how the arrow functions are used in the with IIFE
    console.log(`used with the arrow function ${name}`);

})("shouqat") 