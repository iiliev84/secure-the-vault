//You are building a vault that requires three mathematical calculations to generate the three codes in a combination. Use the JavaScript console or the script block within an HTML page to create three variables. Each variable will be the result of each calculation (three in total). The combination of the lock is 10 - 40 - 39. You must use three different arithmetic operators that will generate each individual number, then display the combination on the HTML page, or in an alert popup.

//STEPS TO COMPLETE - Pseudocode
//1. Create a string to display to the user You have received this message because you have been chosen to open an important vault. Here is the secret combination:
//2. Create 3 variables
//3. Store each variable as a calculation using a unique arithmetic operator(+-*/)
//4. Each variable must equal one of the three codes in the combination.
//5. Display the vault codes to the user


const str = "You have received this message because you have been chosen to open an important vault. Here is the secret combination: " // message to display to the user
const num1 = 70/7 // calculation of 1st number  using /
const num2 = 100 - 60 // calculation of 2nd number using -
const num3 = 13*3 // calculation of 3rd number 1 using *

alert(`${str} ${num1} - ${num2} - ${num3}`) // display the massage and the combination to the user as an alert pop up