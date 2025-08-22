
const isloggiedIN = true;
const username = true;
const loginwitheEmail = true;
const loginwithGoogle = false;

if (isloggiedIN && username === true) {// This is how we use logical AND both should be true it works otherwise it will give false 
    console.log("Hello Bhai dono bhi chalan chaiyeye");

}
else {
    console.log("wht Bhai");

}

if (loginwithGoogle || loginwitheEmail) {// This is how we use logical 'oR' only one should be true it will works it fails only if both are false or not eqaul
    console.log("Bhai Kuch aak bhi chalaga");


}
else {
    console.log("Hello Bhai");

}

