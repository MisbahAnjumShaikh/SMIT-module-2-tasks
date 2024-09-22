// ________________CHAPTER 06 - 09 : MATH EXPRESSIONS_________________ 


// ________________TASK # 1________________
// Write a program to take a number in a variable, do the required arithmetic to display the following
// result in your browser:

// The value of a is 10

// The value of ++a is : 11
// Now the value of a is : 11

// The value of a++ is : 11
// Now the value of a is : 12

// The value of --a is : 11
// Now the value of a is : 11

// The value of a-- is : 11
// Now the value of a is : 10

var a = 10;
document.write("The value of a is " + a + "<br/>" + "<br/>");

var preIncrement = ++a;
document.write("The value of ++a is : " + preIncrement + "<br/>");
document.write("Now the value of a is : " + a + "<br/>" + "<br/>");

var postIncrement = a++;
document.write("The value of a++ is : " + postIncrement + "<br/>");
document.write("Now the value of a is : " + a + "<br/>" + "<br/>");

var preDecrement = --a;
document.write("The value of --a is : " + preDecrement + "<br/>");
document.write("Now the value of a is : " + a + "<br/>" + "<br/>");

var postDecrement = a--;
document.write("The value of a-- is : " + postDecrement + "<br/>");
document.write("Now the value of a is : " + a + "<br/>" + "<br/>" + "<br/>");


// _____________________TASK # 2______________________
// What will be the output in variables x, y & result after execution of the following script:
// var x = 2, y = 1;
// var result = --x - --y + ++x + y--;
// Explain the output at each stage:
// --x;
// --x - --y;
// --x - --y + ++y;
// --x - --y + ++y + y--;

// x is ??
// y is ??
// result is ??

var x = 2, y = 1;


var stage1 = --x;
document.write("The value of --x is " + stage1 + "<br/>");

var stage2 = --x - --y;
document.write("The value of --x - --y is " + stage2 + "<br/>");

var stage3 = --x - --y + ++y;
document.write("The value of --x - --y + ++y is " + stage3+ "<br/>" + "<br/>");

// var stage4 = --x - --y + ++y + y--;
// document.write("The value of --x - --y + ++y + y-- is " + stage4);

document.write(x + "<br/>");
document.write(y + "<br/>");
var result = --x - --y + ++y + y--;
document.write(result+ "<br/>" + "<br/>");


// _____________________TASK # 3______________________
// Write a program that takes input a name from user & greet the user.

var userName = prompt("Enter your Name");
alert("Hello ! "+ userName);


// _____________________TASK # 4______________________
// Write a program to take input a number from user & display it’s multiplication table on your browser. 
// If user does not enter a number, multiplication table of 5 should be displayed by default.

var userTableNum = +prompt("Enter the Table Number");
var countNum = 1;               

if(userTableNum == " "){
    document.write(
        5 + " x " + countNum + " = " + 5*countNum++ + "<br/>" + 
        5 + " x " + countNum + " = " + 5*countNum++ + "<br/>" +
        5 + " x " + countNum + " = " + 5*countNum++ + "<br/>" +
        5 + " x " + countNum + " = " + 5*countNum++ + "<br/>" +
        5 + " x " + countNum + " = " + 5*countNum++ + "<br/>" +
        5 + " x " + countNum + " = " + 5*countNum++ + "<br/>" +
        5 + " x " + countNum + " = " + 5*countNum++ + "<br/>" +
        5 + " x " + countNum + " = " + 5*countNum++ + "<br/>" +
        5 + " x " + countNum + " = " + 5*countNum++ + "<br/>" +
        5 + " x " + countNum + " = " + 5*countNum++ + "<br/>" + "<br/>"
    );
}
else{
    document.write(
    userTableNum + " x " + countNum + " = " + userTableNum*countNum++ + "<br/>" + 
    userTableNum + " x " + countNum + " = " + userTableNum*countNum++ + "<br/>" +
    userTableNum + " x " + countNum + " = " + userTableNum*countNum++ + "<br/>" +
    userTableNum + " x " + countNum + " = " + userTableNum*countNum++ + "<br/>" +
    userTableNum + " x " + countNum + " = " + userTableNum*countNum++ + "<br/>" +
    userTableNum + " x " + countNum + " = " + userTableNum*countNum++ + "<br/>" +
    userTableNum + " x " + countNum + " = " + userTableNum*countNum++ + "<br/>" +
    userTableNum + " x " + countNum + " = " + userTableNum*countNum++ + "<br/>" +
    userTableNum + " x " + countNum + " = " + userTableNum*countNum++ + "<br/>" +
    userTableNum + " x " + countNum + " = " + userTableNum*countNum++ + "<br/>" + "<br/>"
);
}


// _____________________TASK # 5______________________
// Take
// a) Take three subjects name from user and store them in 3 different variables.
// b) Total marks for each subject is 100, store it in another variable.
// c) Take obtained marks for first subject from user and stored it in different variable
// d) Take obtained marks for remaining 2 subjects from user and store them in variables.
// e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)

// Subjects    Total Marks    Obtained Marks    Percentage

// English         100             54               54%
// Math            100             54               54%     
// Urdu            100             48               48%
                
// Total           300             156              52% 

// a
var subject1 = prompt("Enter your first Subject");
var subject2 = prompt("Enter your second Subject");
var subject3 = prompt("Enter your third Subject");

// b
var totalMarks = 100;

// c
var obtainedMarks1 = +prompt("Enter " + subject1 + " Obtained Marks");

// d
var obtainedMarks2 = +prompt("Enter " + subject2 + " Obtained Marks");
var obtainedMarks3 = +prompt("Enter " + subject3 + " Obtained Marks");

// e
var percentage1 = (obtainedMarks1 / totalMarks) * 100;
var percentage2 = (obtainedMarks2 / totalMarks) * 100;
var percentage3 = (obtainedMarks3 / totalMarks) * 100;

var grandTotalMarks = totalMarks * 3;
var grandObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
var averageOfPercentages = (percentage1 + percentage2 + percentage3) / 3;
var percentage = averageOfPercentages.toFixed(2);

document.write("<table border='2px'>" +
    "<tr>" +
       "<th>" + "Subjects" + "</th>" +
       "<th>" + "Total Marks" + "</th>" +
       "<th>" + "Obtained Marks" + "</th>" +
       "<th>" + "Percentage" + "</th>" +
     "</tr>" +

     "<tr>" +
     "<td>" + subject1 + "</td>" +
     "<td>" + totalMarks   + "</td>" +
     "<td>" + obtainedMarks1 + "</td>" +
     "<td>" + percentage1 + "%" + "</td>" +
     "</tr>" +

     "<tr>" +
     "<td>" + subject2 + "</td>" +
     "<td>" + totalMarks   + "</td>" +
     "<td>" + obtainedMarks2 + "</td>" +
     "<td>" + percentage2 + "%" + "</td>" +
     "</tr>" +
     
     "<tr>" +
     "<td>" + subject3 + "</td>" +
     "<td>" + totalMarks   + "</td>" +
     "<td>" + obtainedMarks3 + "</td>" +
     "<td>" + percentage3 + "%" + "</td>" +
     "</tr>" +
     
     "<tr>" +
     "<th>" + "Total" + "</th>" +
     "<th>" + grandTotalMarks   + "</th>" +
     "<th>" + grandObtainedMarks + "</th>" +
     "<th>" + percentage + "%" + "</th>" +
     "</tr>" +
    "</table>" + "<br/>");
m