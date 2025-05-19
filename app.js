// app.js


const {capitalize, reverse, contains} = require('./stringUtils');

console.log(capitalize("test"));
console.log(capitalize(""));
console.log(capitalize(undefined));

console.log(reverse("test"));
console.log(reverse(""));
console.log(reverse(undefined));

console.log(contains("test"))
console.log(contains(""));
console.log(contains(undefined));
