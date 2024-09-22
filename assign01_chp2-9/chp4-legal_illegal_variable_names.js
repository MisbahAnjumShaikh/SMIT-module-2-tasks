// _________________________chapter4 = VARIABLE NAMES : LEGAL & ILLEGAL________________________________

// ___________________TASK # 1________________________
// Declare 3 variables in one statement.
var var1, var2, var3;


// ___________________TASK # 2________________________
// Declare 5 legal & 5 illegal variable names.

// legal variable names
var count;
var count1;
var count$;  //only letters, numbers, dollar signs, and underscores are allowed
var _count;
var my_count;

// illegal variable names
// var my count;  // spaces not allowed 
// var 2count;   // numbers in start are not allowed
// var my#count; // all special characters and signs are not allowed
// var &mycount;
// var var;      // reserved keywords are not allowed


// ___________________TASK # 3________________________
// Display this in your browser
/*a) A heading stating “Rules for naming JS variables”
b) Variable names can only contain ______, ______, ______ and ______. For example $my_1stVariable
c) Variables must begin with a ______, ______ or _____. For example $name, _name or name
d) Variable names are case _________
e) Variable names should not be JS _________*/

document.write("<h2>Rules for naming JS variables</h2>");

document.write("Variable names can only contain letters, numbers, $ and _ . " + " For example: $my_1stVariable" + "<br/>");
document.write("Variables must begin with a letter, $ or_. For example: $name, _name or name" + "<br/>");
document.write("Variable names are case sensitive" + "<br/>");
document.write("Variable names should not be JS keywords" + "<br/>" + "<br/>");


