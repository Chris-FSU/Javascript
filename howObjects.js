// Make a chris
var chris = {
	name: ["Chris","Main"],
	age: 29,
	height: 68,
	weight: 180,
	politics: "Socialist",
	gender: "Male",
	info: function(){							// When chris.info(), this write details about chris.
		fullName = this.name.join(" ");
		inches = this.height % 12;
		feet = (this.height - inches) / 12;
		message = fullName + " is a " + this.age + " year old, " + feet + "\'" + inches + "\" tall, " + this.weight + " lbs " + this.politics.toLowerCase() + " " + this.gender.toLowerCase() + ".";
		console.log(message)
	}
}	

chris.age ++; //birthday

chris.info()

// Use prototypes instead.

function person () {											// Make a person class.
	firstName = prompt('First name:');							// Ask their first name
	lastName = prompt('Last name:');							// and their last.
	this.name= [firstName,lastName];							// Turn them into one name.
	this.age= prompt('How old are they?');						// Ask other demographic/biometric info.
	this.height = prompt('How tall are they in inches?');
	this.weight =  prompt('How many lbs do they weigh?');
	this.politics = prompt('What is their political affiliation?');
	this.gender = prompt('Do they identify as male, female, or something else?');
}

person.prototype.info = function() {							// Every person will be able to call this function.
		fullName = this.name.join(" ");							// It writes out their info all at once.
		inches = this.height % 12;
		feet = (this.height - inches) / 12;
		message = fullName + " is a " + this.age + " year old, " + feet + "\'" + inches + "\" tall, " + this.weight + " lbs " + this.politics.toLowerCase() + " " + this.gender.toLowerCase() + ".";
		console.log(message)
} 

person.prototype.canVote = function () {						// Every person will be able to call this function too.
	return this.age >= 18;										// It checks to see whether the person is at least 18 years old.
}

chris = new person();
christa = new person();
charlotte = new person();

chris.info;
christa.info;
charlotte.info;

chris.canVote();
christa.canVote();
charlotte.canVote();