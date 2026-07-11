let message = 'hello';
var greeting = 'hi';
console.log (message);
console.log(greeting);
//function scope
function sayHye() {
let message = 'hello';
var greeting = 'hi';
console.log (message);
console.log(greeting);
return message;
}
console.log(greeting);
let hello = sayHye();
//Blocks like if statements or loops create block scope for variables declared with let or const.
//  However, var ignores block scope and leaks outside the block.
if (true) {
    let message = 'hello';
    var greeting = 'hi';
    console.log(message); // 'hello'
    console.log(greeting); // 'hi'
}

//console.log(message);  ReferenceError
console.log(greeting); // 'hi'
//recommended to always use let or const instead of var.


for (let i = 0; i < 5; i++) {
    console.log(`i is :${i}`); // 0 to 4
}
//console.log(i);  ReferenceError

for (var j = 0; j < 5; j++) {
    console.log(j); // 0 to 4
}
console.log(j); // 5


// const alert = 'error';
//alert('Hi');  Error: alert is not a function
//To avoid this, encapsulate variables inside objects 
//or use Immediately Invoked Function Expressions (IIFEs):
//Avoid global scope when possible to prevent bugs.
const myAlert = 'error';
alert('Hi');
const myObj ={
    alert:'error'
}


