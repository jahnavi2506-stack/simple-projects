const age = 15;
const drinkingAge = 19; 
if(age >= drinkingAge) {
    console.log('I can drink juice!!');
}
else {
    console.log('I cannot drink juice.');
}

const passwordTypedIn = 'somepassword';
const actual = 'somepassword';
 if(passwordTypedIn === actualPassword) {
    console.log('correct password,logging you in.');
}
else {
    console.log('password incorrect.Please try again.');
}

const month = 'June' ;
const day = 29;
if(mont === 'June' && day === 29) {
    console.log('It is Halloween');
}
else {
    console.log('It is NOT Halloween.');
}

const grade = 72;
if(grade >= 80) {
    console.log('Letter Grade: A');
}
else if(grade >= 70) {
    console.log('Letter Grade: B');
}
else if(grade >= 60) {
    console.log('Letter Grade: C');
}
else if(grade >= 50) {
    console.log('Letter Grade: D');
} else {
 console.log('Letter Grade: F');
}

 //Ternary
 age >= drinkingAge ? console.log('I can drink juice!!') : console.log('I cannot drink juice');
 
 let canIDrinkMessage;

 if(age >= drinkingAge) {
    canIDrinkMessage = 'I can drink juice'; 
 } else {
    canIDrinkMessage = 'I cannot drink juice';
 }
 console.log(canIDrinkMessage);

 // another way 
 //let canIDrinkMessage = age >= drinkingAge
 //? 'I can drink juice'
 //:  'I cannot drink juice'
  //console.log(canIDrinkMessage);
