// At start
tilling = false;
planting = false;
weeding = false;
harvesting = false;
watering = false;
maxEndurance = 10;
endurance = maxEndurance;
overworked = 0;
dayNumber = 0;

function tile (num) {
	this.id = String(num);
	this.grass = 4;				// This will count the days since grass was last killed. 
	this.plant = 0;				// Plant levels: 0 = no plant, 1 = seed, 2 = sprout, 3 = growing, 4 = producing, 5 = barren,
	this.water = 2;				// Water levels: 0 = arid, 1 = dry, 2 = moderate, 3 = moist, 4 = flooded
}

tile.prototype.growGrass = function () {
	if (this.grass < 4) {
		this.grass ++;
	}
	// Add a conditional branch which adjusts the image according to grass and plant.
}

// Generate all 25 tiles as objects.
tile1 = new tile(1)
tile2 = new tile(2)
tile3 = new tile(3)
tile4 = new tile(4)
tile5 = new tile(5)
tile6 = new tile(6)
tile7 = new tile(7)
tile8 = new tile(8)
tile9 = new tile(9)
tile10 = new tile(10)
tile11 = new tile(11)
tile12 = new tile(12)
tile13 = new tile(13)
tile14 = new tile(14)
tile15 = new tile(15)
tile16 = new tile(16)
tile17 = new tile(17)
tile18 = new tile(18)
tile19 = new tile(19)
tile20 = new tile(20)
tile21 = new tile(21)
tile22 = new tile(22)
tile23 = new tile(23)
tile24 = new tile(24)
tile25 = new tile(25)

// Turn off all modes before switching to another
function modesOff() {
	tilling = false;
	planting = false;
	weeding = false;
	harvesting = false;
	watering = false;
}

// Start tilling
function tillMode() {
	modesOff(); 													// Turn off other modes
	try {															// Clear last action message
		document.getElementById('action-message').remove();
	} catch (error) {												// If there wasn't a last action message,
	}																// I don't care. Just don't bother me about it.
	message = document.createTextNode("You put everything else away and pulled out the tiller.");
	tilling = true;													// Active till mode
	h3 = document.createElement('h3');								// The next 4 lines post the message
	h3.appendChild(message);
	h3.setAttribute('id','action-message');
	document.getElementById('message-box').appendChild(h3);
}

// Start planting
function plantMode() {
	modesOff();
	try {
		document.getElementById('action-message').remove();
	} catch (error) {
	}
	message = document.createTextNode("You put everything else away and pulled out the seeds and spade.");
	planting = true;
	h3 = document.createElement('h3');
	h3.appendChild(message);
	h3.setAttribute('id','action-message');
	document.getElementById('message-box').appendChild(h3);
}

// Start weeding
function weedMode() {
	modesOff();
	try {
		document.getElementById('action-message').remove();
	} catch (error) {
	}
	message = document.createTextNode("You put everything else away and got ready to pick weeds.");
	weeding = true;
	h3 = document.createElement('h3');
	h3.appendChild(message);
	h3.setAttribute('id','action-message');
	document.getElementById('message-box').appendChild(h3);
}

// Start harvesting
function harvestMode() {
	modesOff();
	try {
		document.getElementById('action-message').remove();
	} catch (error) {
	}
	message = document.createTextNode("You put everything else away and got ready to pick weeds.");
	harvesting = true;
	h3 = document.createElement('h3');
	h3.appendChild(message);
	h3.setAttribute('id','action-message');
	document.getElementById('message-box').appendChild(h3);
}

// Start watering
function waterMode() {
	modesOff();
	try {
		document.getElementById('action-message').remove();
	} catch (error) {
	}
	message = document.createTextNode("You put everything else away and pulled out the watering hose.");
	watering = true;
	h3 = document.createElement('h3');
	h3.appendChild(message);
	h3.setAttribute('id','action-message');
	document.getElementById('message-box').appendChild(h3);
}

// End Day
function newDay(){
	modesOff();
	try {
		document.getElementById('endurance-message').remove();
		document.getElementById('action-message').remove();
		document.getElementById('overexertion-message').remove();
	} catch (error) {
	}
	message = document.createTextNode("You decide to call it a day.");
	h3 = document.createElement('h3');
	h3.appendChild(message);
	h3.setAttribute('id','action-message');
	document.getElementById('message-box').appendChild(h3);
	if (overworked == 2) {
		message = document.createTextNode("Due to overexertion, you are injured and can not work today.");
		h3 = document.createElement('h3');
		h3.appendChild(message);
		h3.setAttribute('id','overexertion-message');
		document.getElementById('message-box').appendChild(h3);
		overworked --;
	} else if (overworked == 1) {
		message = document.createTextNode("Due to overexertion, you are sore and can not work as hard today.");
		h3 = document.createElement('h3');
		h3.appendChild(message);
		h3.setAttribute('id','overexertion-message');
		document.getElementById('message-box').appendChild(h3);
		endurance = maxEndurance/2;
		overworked --;
	} else {
		maxEndurance ++;
		endurance = maxEndurance;
	}
	dayNumber ++;
}

// Process button click
function action(tileID) {
	try {
		document.getElementById('action-message').remove();
		document.getElementById('endurance-message').remove();
	} catch (error) {
	}
	if (endurance == 0) {
		h3 = document.createElement('h3');
		h3.appendChild(document.createTextNode('You have collapsed from exhaustion!'));
		h3.setAttribute('id','endurance-message');
		document.getElementById('message-box').appendChild(h3);
		overworked = 2;
	} else {
		if (tilling) {
			document.getElementById(String(tileID)).src = 'static/images/soil.jpg';
			endurance -= 1;
			h3 = document.createElement('h3');
			h3.appendChild(document.createTextNode('You have tilled a plot.'));
			h3.setAttribute('id','action-message');
			document.getElementById('message-box').appendChild(h3);
			h3 = document.createElement('h3');
			h3.appendChild(describeEndurance());
			h3.setAttribute('id','endurance-message');
			document.getElementById('message-box').appendChild(h3);
		}
		if (planting) {
		}
		if (watering) {
		}
		if (harvesting) {
		}
		if (weeding) {
		}
	}
}

function describeEndurance() {
	switch (Math.ceil((endurance/maxEndurance)*5)){
		case 5:
			state = 'bright-eyed and bushy tailed!';
		break;
		case 4:
			state = 'alright.';
		break;
		case 3:
			state = 'a little tired.';
		break;
		case 2:
			state = 'pretty tired!';
		break;
		case 1:
			state = 'completely wiped!';
			if (overworked <2){
			overworked ++;
			}
		break;
	}
	message = document.createTextNode('You feel ' + state);
	return message;
}