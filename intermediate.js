// https://www.youtube.com/watch?v=NhYMlbKgQzU

window
// Note that any global thing  is attached to window. e.g.:

myName = "Chris";
window.myName	// Returns "Chris"

{function(){
	// Runs on open, but is not global.
}}();

// this refers to whatever it's contained in
this === window //Returns true

function person () {							
	this.firstName = prompt('First name:');			
	this.lastName = prompt('Last name:');			
	this.name= [this.firstName,this.lastName];			
	this.age= prompt('How old are they?');		
	this.gender = prompt('Do they identify as male, female, or something else?');
	
}

person.prototype.greet = function () {
	console.log('Hello, '+ this.firstName + "!");
}

chris = new person;
chris.greet();

// In javascript es6, a function can be defined like this:

person = () => {								
	this.firstName = prompt('First name:');			
	this.lastName = prompt('Last name:');			
	this.name= [firstName,lastName];			
	this.age= prompt('How old are they?');		
	this.gender = prompt('Do they identify as male, female, or something else?');
}

var cat = function() {
	this.name = prompt('Name:');
	this.age = prompt('Age:');
}

cat.prototype.name = 'John';
cat.prototype.age = '1';

// Call
var myObject = {
	num:2,
};
var myFunc = function(add) {
	return this.num + add;
};
myFunc.call(myObject,4);

// Bind
var addTwo = function(){
		return this.num + 2;
}
var added = addTwo.bind(myObject);

// Classes
class customer {
	constructor(name,age){
		this.name = name,
		this.age = age,
	}
	greet(){
		return "Hello, " + this.name + "!");
	}
}

karen = new customer("Karen",35);
karen.greet()

/* http://www.babeljs.io/repl/
 To change es6 into es5 et vice versa*/

// Closure : A function that returns a function
var add = function(num1) {
	return function(num2) {
			return num1 + num2;
	}
};

var addTwo = add(2);
var addTen = add(10);

addTwo(2);
addTen(5);

//Promise : for asynchronous . . . something? (It's not well explained in this video.)
var myPromise = new Promise(function(resolved,rejected) {
	
});

myPromise.then(function(){
	// What to do if resolved
}).catch(function() {
	// What to do if rejected
	console.log('Promise was broken :-(');
}

// Callbacks
function calc(num,callback){return callbakc(num);};
var addTen = function(num){
		return num + 10;
};
calc(3,addTen);

/* HTTP requests
There are JQuery ways to do this, but this is the base Javascript way.*/
var request = new XMLHttpRequest();
 
request.onreadystatechange = function(){
	console.log(request.response);
}

request.open('get','url',true);		//asking for data
									//third argument is whether to run asnyc
request.open('post','url',true); 	//sending data

request.send();

// Bringing Promise and HTTP request together
var aPromise = new Promise(function(res,rej){
	var request = new XMLHttpRequest();
	request.open('get','https://randomuser.me/api/');
	request.onload = res;
	request.onerror = rej;
	request.send();
});
aPromise.then(function(){
	data = data.target.response;
	console.log(data);
}).catch(function(){
	console.log('Something went wrong :-(');
});