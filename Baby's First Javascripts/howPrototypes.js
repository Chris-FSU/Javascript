// Make a class called "actor" that can sit.
function actor (name, species) {
	this.name = name;
	this.species = species;
	this.seat = "";
	if (species == 'human') {					// Humans have laps, which are also seats.
		this.Priority = 1
		this.lap = {}
		this.lap.occupant = "standing";
		this.lap.name = this.name + "/'s lap";
	} else {
		this.Priority = 2
	}
}

// Make a seat class
function seat(name) {
	this.name = name;
	this.occupant = "";
}

// What happens when you sit?
actor.prototype.sit = function (seat) {
	if (seat.occupant != ""){							// If the seat is occupied,
		if (this.Priority < seat.occupant.Priority) {	// and the actor has priority,
		seat.occupant.getUp(seat)						// make the current occupant get up.
		} else {										// Otherwise,
			message = seat.name + " is occupied.";		// tell the new actor 
			console.log(message);						// that it's occupied.
		}
	} 
	if (seat.occupant == ""){							// If no one is sitting here,
		message = this.name + " sits on " + seat.name + ".";
		console.log(message);
		seat.occupant = this;							// let this actor sit here.
		this.seat = seat;
		if (this.species == 'human') {					// If this is a human sitting down,
			this.lap.occupant = "";						// they now have a lap.
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