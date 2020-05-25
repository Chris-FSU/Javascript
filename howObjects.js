var chris = {
	name: ["Chris","Main"],
	age: 29,
	height: 68,
	weight: 180,
	politics: "Socialist",
	gender: "Male",
	info: function(){
		fullName = this.name.join(" ");
		inches = this.height % 12;
		feet = (this.height - inches) / 12;
		message = fullName + " is a " + this.age + " year old, " + feet + "\'" + inches + "\" tall, " + this.weight + " lbs " + this.politics.toLowerCase() + " " + this.gender.toLowerCase() + ".";
		console.log(message)
	}
}	

chris.age ++; //birthday

chris.info()

// Use a prototype for the info function

function person () {
	firstName = prompt('First name:');
	lastName = prompt('Last name:');
	this.name= [firstName,lastName];
	this.age= prompt('How old are they?');
	this.height = prompt('How tall are they in inches?');
	this.weight =  prompt('How many lbs do they weigh?');
	this.politics = prompt('What is their political affiliation?');
	this.gender = prompt('Do they identify as male, female, or something else?');
}

person.prototype.info = function() {
		fullName = this.name.join(" ");
		inches = this.height % 12;
		feet = (this.height - inches) / 12;
		message = fullName + " is a " + this.age + " year old, " + feet + "\'" + inches + "\" tall, " + this.weight + " lbs " + this.politics.toLowerCase() + " " + this.gender.toLowerCase() + ".";
		console.log(message)
} 

person.prototype.canVote = function () {
	this.age >= 18;
}

chris = new person();
christa = new person();

chris.info
christa.info