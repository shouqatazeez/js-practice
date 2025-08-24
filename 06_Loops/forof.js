const number = [1, 4, 3, 2, 5, 6, 7]
for (const num of number) {// it is the type of loop like num is the variable decalration and the number is the set of arrays 
    console.log(num);

}

const greetings = "shouqatAzeez";
for (const greet of greetings) {
    console.log(`The character in the greetings is ${greet}`);

}

const num = new Map();
num.set('IN', "India");
num.set('UN', "United States of America");
// console.log(num);


for (const key of num) {// this and the above down are the types to iterate the value in the maps but it is not iterate in the objects for the objects there is differnt method for the process of the iteration
    console.log(key);

}

for (const [key, value] of num) {
    console.log(key, "-:", value);

}
