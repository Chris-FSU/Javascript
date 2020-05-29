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
corn = 0;

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

map = [tile1,tile2,tile3,tile4,tile5,
	tile6,tile7,tile8,tile9,tile10,
	tile11,tile12,tile13,tile14,tile15,
	tile16,tile17,tile18,tile19,tile20,
	tile21,tile22,tile23,tile24,tile25]

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
	modesOff(); 													// Turn off other modes															// I don't care. Just don't bother me about it.
	actionMessage("You pulled out the tiller. ");
	tilling = true;													// Active till mode
}

// Start planting
function plantMode() {
	modesOff();
	actionMessage("You pulled out the seeds and spade. ");
	planting = true;
}

// Start weeding
function weedMode() {
	modesOff();
	actionMessage("You're ready to pick weeds. ");
	weeding = true;
}

// Start harvesting
function harvestMode() {
	modesOff();
	actionMessage("You're ready to harvest. ");
	harvesting = true;
}

// Start watering
function waterMode() {
	modesOff();
	actionMessage("You pulled out the watering hose. ");
	watering = true;
}

// End Day
function newDay(){
	modesOff();
	//Remove all previous-day messages
	actionMessage("You decide to call it a day. ");
	// Overworked effects
	try{ 	document.getElementById('overexertion-message').remove();
	} catch{
	}
	if (overworked == 2) { // Injured the next day
		exertionMessage("You're injured and can't work today. ");
		endurance = 0;
		overworked --;
	} else if (overworked == 1) { // Sore the next day
		exertionMessage("You're sore and can't work as hard today. ");
		endurance = maxEndurance/2;
		overworked --;
	} else if (endurance < maxEndurance * .6){ // Healthy the next day
		maxEndurance ++;
		endurance = maxEndurance;
	} else {
		endurance = maxEndurance;
	}
	// Increase 1 grass for every tile
	var i;
	for(i=0; i<map.length; i++){
		map[i].grass ++;
		// Increase 1 plant for every tile that has been planted (until rot @ plant == 7)
		if (map[i].plant > 0 && map[i].plant < 7) {
			map[i].plant ++;
		}
		// Update graphic
		if (map[i].grass > 4) { // Weeds choke out everything.
			document.getElementById(map[i].id).src = 'static/images/overgrown.png';
		} else if (map[i].grass > 2) {
			if (map[i].plant > 0) { // If weeds grow in planted area.
			document.getElementById(map[i].id).src = 'static/images/needsWeeding.png';
			} else {// If weeds grow in unplanted area.
			document.getElementById(map[i].id).src = 'static/images/lowGrass.jpg';
			}
			
		} else {
			if (map[i].plant > 6) { // rot
				document.getElementById(map[i].id).src = 'static/images/rot.jpg';
			} else if (map[i].plant > 4) { //yielding
				document.getElementById(map[i].id).src = 'static/images/yielding.jpg';
			} else if (map[i].plant > 2) { //growing
				document.getElementById(map[i].id).src = 'static/images/growing.png';
			} else if (map[i].plant > 0){
				document.getElementById(map[i].id).src = 'static/images/seedling.png';
			} else {
				document.getElementById(map[i].id).src = 'static/images/soil.jpg';
			}
		}
	}
	dayNumber ++;
	updateEndurance();
}

// Process button click
function action(tileID) {
	if (endurance == 0) {
		actionMessage('You have collapsed from exhaustion! ');
		overworked = 2;
	} else {
		if (tilling) {
			document.getElementById(String(tileID)).src = 'static/images/soil.jpg';
			map[tileID-1].grass = 0;
			endurance -= 1;
			actionMessage('You have tilled a plot. ');
			//enduranceMessage(describeEndurance());
		}
		if (planting) {
			if (map[tileID-1].grass <= 2){
			document.getElementById(String(tileID)).src = 'static/images/seedling.png';
			map[tileID-1].plant = 1;
			endurance -= 1;
			actionMessage('You have planted a new seed. ');
			//enduranceMessage(describeEndurance());
			} else {
			actionMessage('You must till before you can plant here. ');
			}
		}
		if (watering) {
		}
		if (harvesting) {
			if (map[tileID-1].plant > 6) {
				actionMessage('This corn is no good. It\'s rotten. ');
			} else if (map[tileID-1].plant > 4) {
				corn ++;
				endurance -= 1;
				map[tileID-1].plant = 0;
				actionMessage('You have harvested corn! ');
				//enduranceMessage(describeEndurance());
				cornCount();
				if (map[tileID-1].grass > 2) {
					document.getElementById(map[tileID-1].id).src = 'static/images/lowGrass.jpg';
				} else {
					document.getElementById(map[tileID-1].id).src = 'static/images/soil.jpg';
				}
			
			} else {
			actionMessage('This isn\'t ready to be harvested yet! ');
			}
		}
		if (weeding) {
			if (map[tileID-1].grass > 4){
			actionMessage('This is too overgrown! You must till here. ');
			} else if (map[tileID-1].grass > 2){
			map[tileID-1].grass = 0;
			endurance -= 1;
			actionMessage('You have pulled the weeds! ');
			//enduranceMessage(describeEndurance());
			if (map[tileID-1].plant > 6) { // rot
				document.getElementById(String(tileID)).src = 'static/images/rot.jpg';
			} else if (map[tileID-1].plant > 4) { //yielding
				document.getElementById(String(tileID)).src = 'static/images/yielding.jpg';
			} else if (map[tileID-1].plant > 2) { //growing
				document.getElementById(String(tileID)).src = 'static/images/growing.png';
			} else if (map[tileID-1].plant > 0){
				document.getElementById(String(tileID)).src = 'static/images/seedling.png';
			} else {
				document.getElementById(String(tileID)).src = 'static/images/soil.jpg';
			}
			} else {
			actionMessage('There are no weeds to pick here. ');
			}
		}
	}
	updateEndurance();
	if (endurance < 4){
		if (overworked <2){
			overworked ++;
		}
	}
}

/*function describeEndurance() {
	switch (Math.ceil((endurance/maxEndurance)*5)){
		case 5:
			state = 'very energetic! ';
		break;
		case 4:
			state = 'alright. ';
		break;
		case 3:
			state = 'a little tired. ';
		break;
		case 2:
			state = 'pretty tired! ';
		break;
		case 1:
			state = 'completely wiped! ';
			
		break;
	}
	message = 'You feel ' + state;
	return message;
} */

function updateEndurance() {
	try{ 	document.getElementById('energy-meter').remove();
	} catch{
	}
	message = "\n Energy: " + String(endurance);
	h3 = document.createElement('h3');
	h3.appendChild(document.createTextNode(message));
	h3.setAttribute('id','energy-meter');
	document.getElementById('meter-box').appendChild(h3);
	
}

function cornCount () {
	try{ 	document.getElementById('corn-count').remove();
	} catch{
	}
	message = "Corn Harvested: " + String(corn);
	h3 = document.createElement('h3');
	h3.appendChild(document.createTextNode(message));
	h3.setAttribute('id','corn-count');
	document.getElementById('meter-box').appendChild(h3);
}

function actionMessage (message) {
	try{ 	document.getElementById('action-message').remove();
	} catch{
	}
	h3 = document.createElement('h3');
	h3.appendChild(document.createTextNode(message));
	h3.setAttribute('id','action-message');
	document.getElementById('message-box').appendChild(h3);
}

/* function enduranceMessage (message) {
	try{ 	document.getElementById('endurance-message').remove();
	} catch{
	}
	h3 = document.createElement('h3');
	h3.appendChild(document.createTextNode(message));
	h3.setAttribute('id','endurance-message');
	document.getElementById('message-box').appendChild(h3);
} */

function exertionMessage (message) {
	try{ 	document.getElementById('overexertion-message').remove();
	} catch{
	}
	h3 = document.createElement('h3');
	h3.appendChild(document.createTextNode(message));
	h3.setAttribute('id','overexertion-message');
	document.getElementById('message-box').appendChild(h3);
}