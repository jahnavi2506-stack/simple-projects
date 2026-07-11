function convertMinutesIntoSeconds(minutes) {
    const seconds = minutes * 60;//return minutes 60-also works
    return seconds;
}
console.log(convertMinutesIntoSeconds(2));
console.log(convertMinutesIntoSeconds(3));
function ensureQuestion(str) {
   const lastChar = str.charAt(str.length - 1);
    if(lastChar === '?') {
        return str;
    }  else {
        return `${str}?`;//works even without else
    }
    //without if and else return lastChar === '?' ? str : `${str}?`: works
    function maxOfNumbers(numbers) {
        let maxNumber = numbers[0];
        for(let i = 0;i<numbers.length;i++) {
          if(numbers[i]> maxNumber) {
            maxNumber = numbers[i];
          }
        }
        //using foreach loop
        //numbers.forEach(number => {
          //  if(number > maxNumber) {
            //    maxNumber = number;
            //}
    //})
        return maxNumber;//return Math.max(1,2,3);return(...numbers);also works
    }
    console.log(maxOfNumbers(1,2,3));
    console.log(maxOfNumbers(1,2,3,10,100));
}
console.log(ensureQuestion('Yes'));
console.log(ensureQuestion('No'));
console.log(ensureQuestion('Hello'));
function sarcasticCase(str) {
    const newAtring='';
    for(let i =0;i<str.length;i++)
}