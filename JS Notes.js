//NOTES
//-------
//Argument is the value that a function is called with, and a parameter is part of the function's definition. A function is defined with zero or more parameters and called with zero or more arguments.


//SCOPE is a term that describes where a variable can be accessed. If a variable is in-scope, that means that it can be accessed from that location in the code. Conversely, if a variable is out-of-scope, that means it is not accessible.

//Global variables will remain present until the execution of the script ends. When running JavaScript in a web browser, this means the user has left the page or closed their browser.

//LOCAL VARIABLES
    //---------------
//Variables declared within a function are referred to as "local" variables. Local variables can be accessed within the scope they are declared in, or in any nested function scopes.

//Local variables have a lifetime related to that of the scope they are contained in. Local variables can only be referenced inside the scope they were created in, and once there are no more references to the variable, it will no longer exist.

//PERAMITERS VS ARGUMENTS - placeholders vs actual values

//function multiply(num1, num2, num3) {
//    var result = num1 * num2 * num3;
//    alert("My result is: " + result)
  //  return result;
}
//multiply(num1: 12, num2: 3, num3: 17);
//console.log(multiply())


function increment(x) {
    return x + 1;
}
var four = increment(x:3);
var six = increment(increment(x:3)));

console.log(four)

//if console.log after RETURN statement, will not console.log(timeing)