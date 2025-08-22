if (2 == "2") {// here one 2 is numbere and another one is string thought is not equal it is printing exectued to avoid this or overcome 
    console.log("excuted");// from this we use "===" insted of this "==" so it will works

}

if (2 === "2") {// here === is used to check whether it is correct datatype it will works otherwise it won't work
    console.log("helloo ");
}

else {

    console.log("bye");
}


const score = 150;
if (score > 120) {
    const value = "Celebrate"
    console.log(`The score is greater than 120 so u can ${value}`);

}
else {
    console.log("The score value is smaller");

}

// Nested conditions 
const valuee = 1999;
if (valuee < 199) {
    console.log("hello buddy");

}
else if (valuee > 20000) {
    console.log("Hai buddy");

}
else {
    console.log("bye buddy");

}
