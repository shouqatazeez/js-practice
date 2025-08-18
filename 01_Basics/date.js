const Dater = Date();// when you just want a quick human-readable string
const Datee = new Date();// when you want to work with dates/times programmatically

console.log(Dater);
console.log(Datee);

console.log(Datee.toLocaleString());
console.log(Datee.toDateString());
console.log(Datee.toTimeString());
console.log(Datee.toJSON());

// The type of date is object

console.log(typeof Datee);


let date = new Date();
console.log(date.getFullYear());
console.log(date.getMonth()+1);
console.log(date.getDate());
console.log(date.getHours())
console.log(date.getMinutes());





