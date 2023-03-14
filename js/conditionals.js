
"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
// function analyzeColor(colorName){
// if (colorName === "blue") {
//     return "blue is the color of the sky";
// } else if (colorName === 'red') {
//     return "Strawberries are red";
// }     else  {
//         return "I don't know anything about " + colorName;
// }
// }
// console.log(analyzeColor("blue"));
// console.log(analyzeColor("red"));
// console.log(analyzeColor("cyan"));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

// console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
// function analyzeColor(randomColor) {
//     switch (randomColor){
//         case "blue":
//             return "blue is the color of the sky";
//         case "red":
//             return "Strawberries are red";
//         default:
//             return "I don't know anything about " + randomColor;
//     }
// }
// console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
// var userColor =prompt("Enter a color");
// alert(analyzeColor(userColor))
// console.log(analyzeColor(userColor))

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
var luckyNumber = (Math.floor(Math.random() * 6));//creat the var=luckyNumber to store the random generated number as luckyNumber to call on later
alert ("Your number is: " + luckyNumber)//creat the alert to show user their luckyNumber
var yourNumber = luckyNumber;//call on luckyNumber to store in yourNumber also
var totalAmount =prompt("What is your current total?")//prompt user for totalAmount to be stored
function calculateTotal(yourNumber, totalAmount){//creat the function to calculateTotal, taking in users var=yourNumber(ie.var=luckyNumber) and var=totalAmount
    switch (luckyNumber) {//creat the switch conditional to take in luckyNumber and apply it to each succeeding case
        case 0://creat the case if luckyNumber matches case 0
            return totalAmount * 1;//if case matches, return case 0 product
        case 1://if case 0 does not match, compares to case 1
            return totalAmount * .9;//if case 1 matches, returns case 1 product
        case 2://if none of the above case matches, compares to case 2
            return totalAmount * .75;//if case 2 matches returns case 2 product
        case 3://if none of the above case matches, return the case 3 product
            return  totalAmount * .65;//if case 3 matches returns case 3 product
        case 4://if none of the above case matches, return case 4 product
            return totalAmount * .5;//if case 4 matches, returns case 4 product
        case 5://if none of the above case matches, runs case 5
            return 0;//if case 5 matches, return case 5 product
        default://if none of the above match run default
            return totalAmount//if none match luckyNumber will be default, var=totalAmount
    }
}
var newTotal = calculateTotal(yourNumber, totalAmount);//create a var=newTotal to store the calculated total from whichever case matched AND to call on function calculatedTotal outside the scope
console.log ("Your new total is: $" + newTotal.toFixed(2));//console.log(display) the newTotal at the end of the message with concatenate and use .toFixed to shorten the number to hundredths of a decimal


/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);

alert("You're total before discount is: $" + totalAmount + ". Your new total is: $" + newTotal);
//alert to display the var=totalAmount before disc, and var=newTotal
/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
//creat a confirm "Would you like to enter a number"(creat a var to store if they would like to enter a number)
    //if OK(true) -> prompt("enter a number")create a var to store the entered number, and to call on
//alert("number is odd/even")
//alert("number + 100")
//alert (isNegative or isPositive)
//if user entered not a number alert("Incorrect input data type")

var wantToEnterNumber = confirm("Would you like to enter a number?");//creat a var to store if they would like to enter a number or not
if (wantToEnterNumber){
    var userInput = prompt("Enter a number here:");//creat a var prompt to store the entered number
    if (isNaN(userInput)) {//isNaN to creat the conditional to apply the userInput if other than a number is entered as an if statement so if userInput = NaN, alert is triggered
        alert("Invalid data type. Please enter a number");//creat the alert to be triggered if userInput=NaN
    } else {//else statement to continue
        var number = Number(userInput);//creat a var to convert userInput from string to Number
        if (number % 2 === 0) {//creat if statement to use '% 2 === 0' to check if number is even or odd
            alert("The number is even");//trigger alert if even number is produced, if not continue
        } else {//continue if not even ^
            alert("The number is odd");//this alert is triggered if odd number
        }

        var numberPlus100 = number + 100;//creat the var numberPlus100 to add 100 the var=number
        alert("The number plus 100 is " + numberPlus100);//alert the user what their number+100 is

        if (number < 0){//creat the if statement to check if the var=number is <0(negative)
            alert("The number is negative.");//creat alert to display if the number is <0(negative)
        } else if (number > 0){//else if statement to continue IF number is <0(positive)
            alert("The number is positive.");//alert to display if number is 'positive'
        } else {//close the if/else statement with else(not else if/if) var=number is 0
            alert("The number is zero.");//alert to display that the number is 0
        }
    }
}

