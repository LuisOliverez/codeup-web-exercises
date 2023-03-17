"use strict";
//2   Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)


var i = 1;
while (i < 10) {
    console.log('7 x ' + i + " = " + 7 * i);
    i++
 }
//establish var 'i' as 1
// loop as long as 'i' is < 10:stop once var is incremented to 10 and open scope
// log results
// incrementalize the var to be looped
// close scope



//3  Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even.
//


for (let i = 0; i < 10; i++) {
    var randomNumber = Math.floor(Math.random() * 181) + 20;
    if (randomNumber % 2 === 0) {
        console.log(randomNumber + ' is even');
    } else {
        console.log(randomNumber + ' is odd');

    }
}
//4  Create a for loop that uses console.log to create the output shown below.

for (var i = 1; i <= 9; i++) {//initialize, var 'i' as 1; conditionalize, repeat as long as 'i' is <= 9; incrementalize, i++ to incriment up by 1 each iteration
    var num = "";//assign var num to string value
    for (var j = 0; j < i; j++) {//create another for loop/initialize, var 'j' is 0; repeat as long as 'j' is less than 'i'; incriment up by 1 each iteration
        num = num * 10 + i;//call var num and multipy by 10 and concat with 'i' at each iteration
    }
    console.log(num);//log the results, 'j' will log until equal to 'i'
}

//5 Create a for loop that uses console.log to create the output shown below.

for (let i = 100; i >= 5; i -= 5){
    console.log(i)
}
// should log like this
// 100
// 95
// 90
// 85
// 80
// 75
// 70
// 65
// 60
// 55
// 50
// 45
// 40
// 35
// 30
// 25
// 20
// 15
// 10
// 5



