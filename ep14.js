for (let i = 0; i<10; i++) {
    console.log(`i is ${i}`); 
}
 
const people = ['Andre','Bob','Sally'];

 for(let i = 0;i < people.length; i++)  {
    console.log(people [i]);
 }
  
 // break and continue 
 for(let i = 0; i < 10; i++) {
    if (i === 4) {
        break;
        //continue;
    }
    console.log('i is ${i}');
 }


let j = 0;
 while (j < 10) {
    console.log(`j is ${j}`);
  //  j++;
  j = j + 2;
 }

 let k = 0;
 do{
    console.log(`k is ${k}`);
    k++;
 } while(k < 10);
 
 const person = {
    firstName: 'Andre',
    lastName: 'Madarang',
    job:'Web Developer',
 };

 for (const x in person) {
    console.log(person[x]);
 }

 const pupil = ['Alice','kinni','Rudved'];
  for( const y of pupil) {
//The for of loop iterates over iterable objects like arrays, giving direct access to values.
    console.log(y);
  }

 //forEach is a method on arrays that takes a callback function to execute for each item.
people.forEach((person, index) => {
  console.log(`index is ${index}, person is ${person}`);
});

//map is similar to forEach but returns a new array with the results of the callback.
const peopleMap = people.map((person, index) => {
  return `${index}: ${person}`;
});
console.log(peopleMap);// ["0: Andre", "1: Bob", "2: Sally"]


 