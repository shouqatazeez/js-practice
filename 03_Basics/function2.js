 function add (num1,num2){ // this is how we use the normal type we represent a functions

    console.log(num1+num2);
    

}

add(2,8)


 function add1 (num1,num2){ // this is how we use return type represent a functions

    return num1+num2;
    

}
console.log(add3(2,8));



 function add3 (num1,num2){ // this is how we use another methos of the return type to represent a functions

    return num1+num2;
    

}
const result = add3(2,8)
console.log( "The sum of the 2 values :",result);


function username (name) {
    if(name==undefined){
            // if(!name){// this is one of the type to represent this not equal to value

        console.log("please enter your name");
        return;
        
    }

    return `${name} is just logged in`
}

console.log(username());
