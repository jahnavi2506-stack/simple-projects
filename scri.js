const firstName = 'Bob' ;
const lastName = "Alice";
const jobTitle =`Babu`;
 
const storeName = "Bob's Cookies";
const fullName = firstName + " " + lastName ;
 console.log(firstName,lastName,jobTitle);

 const html = '\n'
 +  '<div>\n'
 +  'Hi there\n'
 + '</div>\n' ;
const fullName2 = `${firstName} ${lastName}`;
const about = `Name: ${fullName2}, Job:${jobTitle}`;

const html2 = `
<div>
Hi there ${fullName2}
</div>
`;
console.log(firstName.length);
console.log(firstName[0]);
console.log(firstName.charAt(1));
console.log(firstName.toUpperCase());
console.log(firstName.tolowerCase());
console.log(firstName.substring(0,2));
console.log(firstName.includes('Bob'));
console.log(html2);
 console.log(html);