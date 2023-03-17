'use strict';
console.log('break_and_continue.js')
var num;
while (true) {
    num = +prompt("Please enter an odd number between 1 and 50: ");
    if (num >= 1 && num <= 50 && num % 2 !== 0) {
        break;
    }
}
console.log("Number to skip is: " + num);
for(let i =1; i <= 50; i += 2){
    if(i === num){
        console.log("Yikes! Skipping number: " + num);
        continue;
    }
    console.log("Here is an odd number: " + i);
}


