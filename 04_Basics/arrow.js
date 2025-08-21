function sum() {
    let username = "shouqat Azeez"
    console.log(this.username);// here the this keyword will not print the output due to it wont work in the function it work only on objects 
    // console.log(username); here it only print in the undefined


}
sum()

const sumone = () => {// here when we use the this keyword in it won't print the user it will print the undefined
    let user = "shouqat Azeez Mohammad";
    console.log(this.user);

}
sumone()

const arrow = (num1, num2) => {// this is how the arrow function is used

    return num1 + num2;

}
console.log(arrow(2, 18));

// const name = (nm1, nm2) => nm1 + nm2; these are the 2 methods that we print with out the return 
const name = (nm1, nm2) => (nm1 + nm2);

console.log(name(1, 6));
