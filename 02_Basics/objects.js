const mysym = Symbol()// this is how we declare the symbol

const me = {
    [mysym] :"hello", // this is how we declare the symbol in the objects in a square brackets
    myname:"shouqat Azeez",
    age:21,
    course:"B-tech",
    village:"pedapudi"

    
};

console.log(me);


console.log(me.myname);// compared to this one
console.log(me["myname"]); // this is the best way to print the objects values in js 

