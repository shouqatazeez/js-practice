// how the forIn loop will works in objects

const myobj = {
    js: "javascript",
    cpp: "c++",
    py: "python"
}

for (const key in myobj) {
    console.log(`${key} full form is ${myobj[key]}`);

}

const values = ["shouqat", "Mohammad", "Al-Azeez"]
for (const key in values) {
    console.log(values[key]);

}
