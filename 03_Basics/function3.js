function cart (num1){
    return num1
}
console.log(cart(12));

function cartt(num1){
    return num1
}
console.log(cartt(100,200,300));// here we want to add the multiple values as arguments to print the values but it only print only one value to over come from this we use rest operator

function cart1(...num1){//this is how the rest opertor will work
    return num1
}
console.log(cart1(100,200,300));

function cart2(val1,val2,...num1){ // here the output is prints only 300,400 because the val1,val2 store in the memory and it wont return  because if won't mention in the return statement 
    return num1
}
console.log(cart2(100,200,300,400));



const details = {// this is how we use the functions in objects 
    name:"shouqat Azeez Mohammad",
    course:"Btech"
}

function detailsstudent(){
    return `${details.name} is my name and I am pursuing ${details.course}`
}
console.log(detailsstudent(details));


const arr = [100,200,300]// this is how we use the function in arrays 
function returnsecondvalue (value){
return value[1];
}
console.log(returnsecondvalue(arr));
