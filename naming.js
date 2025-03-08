// 1.no keywords in variable name
var false = 45;
var var = 13;
// var,false is keyword that's why you cannot use them in variable name.


// 2. no space or gap in variable name
var is happy = false;
var ishappy = true;
// first variable is not correct bcoz you can't use gap is variable name


// 3.no quote
var "address" = "khocu kete";
// this one is wrong because you can't use  quotetion ("") in variable name


// 4. can not start with a number
var money = "45"; 
var money2 ="45";
var 3money = "45";
// 1st and 2nd variable is ok but 3rd one is not ok for variable name


//5. name is sensitive case
address
Address
ADDRESS
Address
addRess
// here is huge difference in above names java takes all of above name as a individual variable name


// 6. how to write a long variable name
 var my current home address = "AndorKilkl Bandorbon Sundorbon kata bon"; // we cannot write this thing in variable name we have to write below three case while writing variable name
 
 var my_current_home_address = "AndorKilkl Bandorbon Sundorbon kata bon"; // snake case
 var myCurrentHomeAddress = "AndorKilkl Bandorbon Sundorbon kata bon"; //camel case
 var MyCurrentHomeAddress = "AndorKilkl Bandorbon Sundorbon kata bon"; //pascal case
