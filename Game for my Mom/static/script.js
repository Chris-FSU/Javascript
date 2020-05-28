// At start
tilling = false;
planting = false;
weeding = false;
harvesting = false;
watering = false;
maxEndurance = 10;
endurance = maxEndurance;
overworked = 0;


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
	modesOff();
	try {
		document.getElementById('action-message').remove();
	} catch (error) {
	}
	message = document.createTextNode("You put everything else away and pulled out the tiller.");
	tilling = true;
	h3 = document.createElement('h3');
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

// Start picking weeds
function pickMode() {
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
}

// Process button click
function action(tileID) {
	try {
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
			h3.appendChild(describeEndurance());
			h3.setAttribute('id','endurance-message');
			document.getElementById('message-box').appendChild(h3);
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