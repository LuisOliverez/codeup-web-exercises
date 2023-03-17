//Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)


var i = 1;//establis var 'i' as 1
while (i < 10) {//loop as long as 'i' is < 10:stop once var is incremented to 10 and open scope
    console.log('7 x ' + i + " = " + 7 * i);//log results
    i++//incrementalize the var to be looped
}//close scope

//Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:

for (var i = Math.floor(Math.random() * (200 - 20 + 1) + 20) {
    console.log(i + "")
}
