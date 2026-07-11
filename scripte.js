const person = {
    firstName:'Andre',
    'lastName':'Madarang',
    age:19,
    howOldAmI() {
        console.log(`I am ${this.age} years old`);
    }
};
person.howOldAmI();

const button = document.querySelector('button');
 const greeting = function() { //const greeting = () => both are same
 console.log('Hello there!');
 }
button.addEventListener('click',() => {
    console.log('Anon function called');
});