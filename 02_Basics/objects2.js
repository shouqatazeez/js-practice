const user = new Object()// this is an example of the non single ton object
user.name = "shouqat";
const user1 = new Object();
user1.name = "shouqat Azeez Mohammad";
console.log(user===user1);



const user2 = {//this is an example of the singleton object and it is the best approch
    name:"shouqat",
    age:21,
    village:"pedapudi"
}

console.log(user2["name"]);



const userdetails = {// this is how the we declare object in object
    fullname: {
        value: "Mohammad Shouqat Azeez",
        firstname: {
            value: "Shouqat Azeez",
            lastname: {
                value: "Mohammad"
            }
        }
    }
};
console.log(userdetails)
console.log(userdetails.fullname.firstname.value);

