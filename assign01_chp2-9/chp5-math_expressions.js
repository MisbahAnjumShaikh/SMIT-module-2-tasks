// _________________________chapter5 = MATH EXPRESSIONS_______________________

// ___________________TASK # 1________________________
//  Write a program that take two numbers & add them in a new variable. Show the result in your browser:
// Sum of 3 and 5 is 8

var num1 = 2; 
var num2 = 7;
var sum = num1 + num2;
document.write("Sum of " + num1 + " and " + num2 + " is " + sum + "<br/>");


// ___________________TASK # 2________________________
// Repeat task1 for subtraction, multiplication, division & modulus.

// subtraction
var num3 = 4; 
var num4 = 1;
var subtraction = num3 - num4;
document.write("Subtraction of " + num3 + " and " + num4 + " is " + subtraction + "<br/>");

//multiplication
var num5 = 8;
var num6 = 9;
var multiplication = num5 * num6;
document.write("Multiplication of " + num5 + " and " + num6 + " is " + multiplication + "<br/>");

//division
var num7 = 6;
var num8 = 3;
var division = num7 / num8;
document.write("Division of " + num7 + " and " + num8 + " is " + division + "<br/>");

// modulus
var num9 = 5;
var num10 = 2;
var modulus = num9 % num10;
document.write("Modulus of " + num9 + " and " + num10 + " is " + modulus + "<br/>"  + "<br/>");


// ___________________TASK # 3________________________
// Do the following using JS Mathematic Expressions
/*a. Declare a variable.
b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
c. Initialize the variable with some number.
d. Show the value of variable in your browser like “Initial value: 5”.
e. Increment the variable.
f. Show the value of variable in your browser like “Value after increment is: 6”.
g. Add 7 to the variable.
h. Show the value of variable in your browser like “Value after addition is: 13”.
i. Decrement the variable.
j. Show the value of variable in your browser like “Value after decrement is: 12”.
k. Show the remainder after dividing the variable’s value by 3.
l. Output : “The remainder is : 0”. */

// a 
var operand;

//b
document.write("Value after Variable declaration is : " + operand + "<br/>");

//c 
operand = 8;

// d
document.write("Initial value : " + operand + "<br/>");

// e
var increment = ++operand;

//f
document.write("Value after increment is : " + increment + "<br/>");

//g
var add = increment + 7;

//h
document.write("Value after addition is : " + add + "<br/>");

//i
var decrement = --add;

//j
document.write("Value after decrement is : " + decrement + "<br/>");

//k
var remainder = decrement % 3;

//l
document.write("The remainder is : " + remainder + "<br/>" + "<br/>");


// ___________________TASK # 4________________________
// Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & 
// calculate the cost of buying 5 tickets to a movie. Example output:
// Total cost to buy 5 tickets to a movie is 3000PKR

var ticketPrice = 600;
var totalTickets = 5;
var ticketsTotalCost = ticketPrice * totalTickets;
document.write("Total cost to buy " + totalTickets + " tickets to a Movie is " + ticketsTotalCost + "PKR" + "<br/>" + "<br/>");


// ___________________TASK # 5________________________
// Write a script to display multiplication table of any number in your browser. E.g
// Table of 4
// 4 x 1 = 4
// 4 x 2 = 8
// 4 x 3 = 12 ......

var tableNum = 6;
var count = 1;
document.write(
    tableNum + " x " + count + " = " + tableNum*count + "<br/>" +
    tableNum + " x " + ++count + " = " + tableNum*count + "<br/>" +
    tableNum + " x " + ++count + " = " + tableNum*count + "<br/>" +
    tableNum + " x " + ++count + " = " + tableNum*count + "<br/>" +
    tableNum + " x " + ++count + " = " + tableNum*count + "<br/>" +
    tableNum + " x " + ++count + " = " + tableNum*count + "<br/>" +
    tableNum + " x " + ++count + " = " + tableNum*count + "<br/>" +
    tableNum + " x " + ++count + " = " + tableNum*count + "<br/>" +
    tableNum + " x " + ++count + " = " + tableNum*count + "<br/>" +
    tableNum + " x " + ++count + " = " + tableNum*count + "<br/>" + "<br/>"
);


// // ___________________TASK # 6________________________
// The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

// Conversion Formulae:
// C = (oF - 32) * 5/9
// F = (C * 9/5) + 32

// 25C is 77F
// 70F is 21.11111111111111C

// a
var celsiusTemp = 40;

// b
var celsiusTempInFahrenheit = (celsiusTemp * 9/5) + 32;
document.write(celsiusTemp + "oC is " + celsiusTempInFahrenheit + "oF" + "<br/>");

// c
var fahrenheitTemp = 74;

//d
var fahrenheitTempInCelsius = ((fahrenheitTemp - 32) * 5/9).toFixed(2);
document.write(fahrenheitTemp + "oF is " + fahrenheitTempInCelsius + "oC" + "<br/>" + "<br/>"); 


// ___________________TASK # 7________________________
// Write a program to implement checkout process of a shopping cart system for an e-commerce website. 
// Store the following in variables
/* a. Price of item 1
b. Price of item 2
c. Ordered quantity of item 1
d. Ordered Quantity of item 2
e. Shipping charges
Compute the total cost & show the receipt in your browser.*/

document.write("<h2>Shopping Cart</h2>");

// a
var item1Price = 250;
document.write("Price of Item 1 = " + item1Price + "<br/>");

//b
var item2Price = 400;
document.write("Price of Item 2 = " + item2Price + "<br/>");

// c
var item1Quantity = 5;
document.write("Quantity of Item 1 = " + item1Quantity + "<br/>");

// d
var item2Quantity = 2;
document.write("Quantity of Item 2 = " + item2Quantity + "<br/>");

var item1Cost = item1Price * item1Quantity;
document.write("Cost of Item 1 = " + item1Cost + "<br/>");

var item2Cost = item2Price * item2Quantity;
document.write("Cost of Item 2 = " + item2Cost + "<br/>");

// e
var shippingCharges = 150;
document.write("Shipping Charges = " + shippingCharges + "<br/>");
document.write("_________________________" + "<br/>");

var itemsTotalCost = item1Cost + item2Cost + shippingCharges;
document.write("Total cost of your Order = " + itemsTotalCost + "<br/>" + "<br/>");


// ___________________TASK # 8________________________
// Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show 
// the result in your browser:
// Marks Sheet
// Total marks = 980
// Marks obtained = 804
// Percentage = 82.040816325306%

document.write("<h2>Marks Sheet</h2>");

var totalMarks = 1100;
document.write("Total Marks = " + totalMarks + "<br/>");

var marksObtained = 960;
document.write("Marks Obtained = " + marksObtained + "<br/>");

var percentage = ((marksObtained / totalMarks) * 100).toFixed(2);
document.write("Percentage = " + percentage + "%" + "<br/>" + "<br/>");


// ___________________TASK # 9________________________
// Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)
// Currency in PKR
// Total Currency in PKR : 1748

document.write("<h2>Currency in PKR</h2>");

var totalCurrencyInPKR = (10 * 104.80) + (25 * 28);
document.write("Total Currency in PKR : " + totalCurrencyInPKR + "<br/>" + "<br/>"+ "<br/>");


// ___________________TASK # 10________________________
// Write a program to initialize a variable with some number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

var arithmetic = 5;
var arithmeticResult = (((arithmetic + 5) * 10) / 2);
document.write(arithmeticResult+ "<br/>" + "<br/>");


// ___________________TASK # 11________________________
// The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate age based on the stored values.
// Age Calculator
// Current year = 2016
// Birth Year = 1992
// Your Age is = 24

document.write("<h2>Age Calculator</h2>");

var currentYear = 2024;
document.write("Current Year = " + currentYear + "<br/>");

var birthYear = 2004;
document.write("Birth Year = " + birthYear + "<br/>");

var age1 = currentYear - birthYear;
document.write("Your Age = " + age1 + "<br/>" + "<br/>");


// ___________________TASK # 12________________________
// The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and output “The circumference is NN”.
//  (Hint : Circumference of a circle = 2 π r , π = 3.142)
// c. Calculate the area based on the radius, and output “The area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

// The Geometrizer
// Radius of a Circle : 20
// The circumference is : 125.67999999999999
// The area is : 1256.8

document.write("<h2>The Geometrizer</h2>");

var radius = 15;
document.write("Radius of a Circle : " + radius + "<br/>");

var circumference = (2 * 3.142 * 15).toFixed(2);
document.write("The circumference is : " + circumference + "<br/>");

var area = (3.142 * (15 ** 2)).toFixed(2);
document.write("The area is : " + area + "<br/>" + "<br/>");


// ___________________TASK # 13________________________
// The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated snack per day (as a number).
// e. Calculate how many would you eat total for the rest of your life.
// Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.

// The Lifetime Supply Calculator
// Favourite Snack : Chocolate Ship
// Current Age : 15
// Estimated Maximum Age : 65
// Estimated Snacks per Day : 3
// You will need 150 Chocolate Ships to last you until the ripe Old Age of 65

document.write("<h2>The Lifetime Supply Calculator</h2>");

var favoriteSnack = "Cocomo";
document.write("Favourite Snack : " + favoriteSnack + "<br/>");

var currentAge = 20;
document.write("Current Age : " + currentAge + "<br/>");

var estimatedMaxAge = 72;
document.write("Estimated Maximum Age : " + estimatedMaxAge + "<br/>");

var snacksPerDay = 2;
document.write("Estimated Snacks per Day : " + snacksPerDay + "<br/>");

var estimatedSnacks = (estimatedMaxAge - currentAge) * snacksPerDay;
document.write("You will need " + estimatedSnacks + " " + favoriteSnack + " to last you until the ripe Old Age of " 
+ estimatedMaxAge + "<br/>" + "<br/>");

