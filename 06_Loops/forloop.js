for (let i = 0; i <= 10; i++) {// this is the way we decalre and use the forloop
    console.log(i);


}

for (let i = 0; i <= 10; i++) {// this is how we use the nested loops
    console.log(`outer loop is ${i}`);
    for (let j = 0; j <= 12; j++) {
        console.log(`Inner loop is ${j}`);

    }
}

let number = ["shouqat", "Azeez", "Mohammad"]//this is how we print the arrays values using loops
for (let i = 0; i < number.length; i++) {
    if (number[i] == "shouqat") {
        console.log(number[i]);
        break;
    }

}


