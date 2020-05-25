// Some web coding stuff from the following url:
// https://www.youtube.com/watch?v=Qqx_wzMmFeA

function greeting() {
	var name = prompt('What is your name?');
	var result = 'Hello ' + name;
	console.log(result);
}

//Data Types

yourAge= 30; //number
yourName = 'Chris'; //string
name = {first: 'Chris', last:'Main'}; //object (no particular order, called by properties)
religion = false; //boolean
groceries = ['bread','milk','eggs','beer']; //array (lists in a certain order)
nothing = null; // value null


// Common Methods for strings
str = 'Here are some words and stuff.';
strbrk = 'Here are some \nwords and stuff.';
csv = 'eggs, bread, beer, milk, juice';
console.log(str.length);
console.log(str.indexOf('me'));
console.log(str.slice(14,19));
console.log(str.replace('some','a few'));
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.charAt(19));
console.log(str[19]);
grocery = csv.split(',');

// Array common methods
grocery[2];										// show item 2
grocery.toString();								// opposite of split
grocery.join('.');								// toString, but with different separators
lastItem = grocery.pop();						// pop off the last item
grocery.push(lastItem);							// push it back on
grocery.length;									// how many items?
grocery[grocery.length] = "coffee";				// Same as push
firstItem = grocery.shift();					// pop off the first item
grocery.unshift(firstItem);						// push it back on
alcohol = [
	'malibu',
	'tequila',
	'triple sec'
	];
shoppingList = groceries.concat(alcohol);		// Put both arrays into one
grocery.slice(1,5);
shoppingList.reverse();
