"use strict"

console.log ("Hello from external JavaScript.");

var userColor = prompt("What is your favorite color?");

alert("Great, " + userColor + " is my favorite color too!");
console.log(userColor)

//JS with HTML Exc.

//Exc 3.1
var littleMermaidDays = + (prompt("How many was Little Mermaid rented?"));
var brotherBearDays = + (prompt("How many days was Brother Bear rented?"));
var herculesDays = + (prompt("How many days was Hercules rented?"));
var rentalPrice = 3;
var totalCost = (littleMermaidDays + brotherBearDays + herculesDays) * rentalPrice;
alert("The total rental cost is $" + totalCost.toFixed(2));
console.log("$" + totalCost)

//Exc 3.2

var googleRate = 400;
var amazonRate = 380;
var faceBookRate = 350;

var googleHours = prompt("How many hours did you work for Google?");
var amazonHours = prompt("How many hours did you work for Amazon?");
var faceBooKHours = prompt("How many hours did you work for FaceBook?");

var googleHoursNum = Number(googleHours);
var amazonHoursNum = Number(amazonHours);
var facebookNum = Number(faceBooKHours);

var totalPayment = (googleHoursNum * googleRate) + (amazonHoursNum * amazonRate)
+ (facebookNum * faceBookRate);

alert('Total payment:$' + totalPayment);
console.log("$" + totalPayment)


//Exc 3.3

var isClassFull = prompt("Is the class full? (Answer 'yes' or 'no')");
var scheduleConflict = prompt("Does your current schedule conflict? (Answer 'yes' or 'no')");
var canEnroll = (isClassFull.toLocaleLowerCase() !== "yes")&&(scheduleConflict.toLocaleLowerCase() !== "yes");

if (canEnroll) {
   alert('You can enroll in this class!');
} else {
   alert('You cannot enroll in the class.');
}
console.log(canEnroll)


//Exc 3.4

var numItems = prompt('How many items are you purchasing?');
var isPremiumMember = prompt('Are you a premium member? ("Yes" or "No")');
var isOfferExpired = prompt('Has this offer expired? ("Yes" or "No")');

var canApplyOffer = (isPremiumMember.toLowerCase() ==="yes" &&  numItems >= 2) && (isOfferExpired.toLowerCase() !== "yes");

if (canApplyOffer) {
    alert("You qualify for this offer!!");
} else {
    alert("Sorry, you do not qualify for this offer.");
}


















