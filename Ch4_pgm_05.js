// Two more function definitions and assignments

var findTotal;
var displayMenu;
var number1, number2, result;

findTotal = function () {
	result = number1 + number2;
};

displayMenu = function () {
	console.log("Please choose an option:");
	console.log("(1) Print log");
	console.log("(2) Upload file");
	console.log("(9) Quit");
};

// 1) Declare number1, number2 and result variables.
// (Already declared above)

// 2) Assign values to the variables.
number1 = 5;
number2 = 10;

// 3) Run the findTotal function by writing its name followed by parentheses: findTotal();
findTotal();

// 4) Display the result on the console.
console.log("The total is: " + result);

// 5) Run the displayMenu function.
displayMenu();



/* Further Adventures
 *
 *
 * 1) Declare number1, number2 and result variables.
 *
 * 2) Assign values to the variables.
 *
 * 3) Run the findTotal function by writing its name
 *    followed by parentheses: findTotal();
 *
 * 4) Display the result on the console.
 *
 * 5) Run the displayMenu function.
 *
 */