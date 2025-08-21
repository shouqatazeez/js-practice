const name = {
    username: "shouqat",
    rollno: 24,

    naam: function () {            // method 'naam' that prints username using 'this'
        console.log(`My name is ${this.username}`);
        // 'this' refers to the object that calls this method

    }

}

name.naam();  // Calls naam on 'name' object

// Because 'this' refers to 'name', this.username is 'shouqat'

const user = {
    username: "shouqat Azeez",

    userrrr: name.naam            // assign the 'naam' function from 'name' object to 'userrrr'
    // Now user.userrr() uses the same function as name.naam()
}

user.username = "shouqat mohammad";

user.userrrr();  // Calls userrrr method on 'user' object
// Because 'this' refers to 'user', this.username is the updated value
