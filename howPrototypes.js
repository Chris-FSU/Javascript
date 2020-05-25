function actor (name, species) {
	this.name = name;
	this.species = species;
	this.seat = "";
	if (species == 'human') {
		this.Priority = 1
		this.lap = {}
		this.lap.occupant = "standing";
		this.lap.name = this.name + "/'s lap";
	} else {
		this.Priority = 2
	}
}

function seat(name) {
	this.name = name;
	this.occupant = "";
}

actor.prototype.sit = function (seat) {
	if (seat.occupant != ""){
		if (this.Priority < seat.occupant.Priority) {
		seat.occupant.getUp(seat)
		} else {
			message = seat.name + " is occupied.";
			console.log(message);
		}
	} 
	if (seat.occupant == ""){
		message = this.name + " sits on " + seat.name + ".";
		console.log(message);
		seat.occupant = this;
		this.seat = seat;
		if (this.species == 'human') {
			this.lap.occupant = "";
		}
	}
}

actor.prototype.getUp = function (seat) {
	if (this.seat == seat) {
		message = this.name + " left " + this.seat.name + ".";
		console.log(message);
		seat.occupant = "";
		this.seat = "";
		if (this.species == 'human') {
			this.lap.occupant.seat = "";
			this.lap.occupant = "standing";
		}
	} else {
		message = this.name + " is not in " + seat.name + ".";
		console.log(message);
	}
} 

actor.prototype.replace = function (seat) {
	seat.occupant.getUp;
	this.sit(seat);
} 

var chris = new actor('Chris','human');
var christa = new actor('Christa','human');
var freya = new actor('Freya','cat');
var chairkitty = new actor('Chairman Mao','cat');
var chair1 = new seat('chair1');