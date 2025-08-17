const Dater = Date();// when you just want a quick human-readable string
const Datee = new Date();// when you want to work with dates/times programmatically

console.log(Dater);
console.log(Datee);



console.log(Datee.toDateString());
console.log(Datee.toTimeString());
console.log(Datee.toJSON());


