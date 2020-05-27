var fieldElements = 0;

function psrGame (choice) {		//to run on click of a choice
	clearAll();
	humanChoice = Number(choice.id);	// 1: paper, 2: scissors, 3: rock
	switch (humanChoice){
		case 1:
			displayPaper();
		break;
		case 2:
			displayScissors();
		break;
		case 3:
			displayRock();
		break;
	};
	var botChoice = Math.ceil(Math.random() * 3);
	if (humanChoice - botChoice == 1 || humanChoice - botChoice == -2) {
		announce = document.createTextNode('Human wins!');
	} else if (humanChoice - botChoice == -1 || humanChoice - botChoice ==  2){
		announce = document.createTextNode('Human loses!');
	} else {
		announce = document.createTextNode('Draw!');
	};
	h1 = document.createElement('h1');
	h1.appendChild(announce);
	document.getElementById('announce-winner-box').appendChild(h1);
	switch (botChoice){
		case 1:
			displayPaper();
		break;
		case 2:
			displayScissors();
		break;
		case 3:
			displayRock();
		break;
	};
}

function displayPaper () {
	img = document.createElement('img');
	div = document.getElementById('results-box'); 
	img.src = 'http://images.clipartpanda.com/paper-clipart-nexxuz-Loose-Leaf-Paper.png';
	img.setAttribute('alt',"Paper");
	img.setAttribute('width','100');
	img.setAttribute('height','100');
	img.setAttribute('id','result-image');
	document.getElementById('results-box').appendChild(img);
	fieldElements ++;
}

function displayScissors () {
	img = document.createElement('img');
	div = document.getElementById('results-box'); 
	img.src = 'http://thumbs.dreamstime.com/b/female-hand-sign-victory-sign-peace-sign-scissors-vector-color-flat-illustration-isolated-white-background-web-83128345.jpg';
	img.setAttribute('alt',"Scissors");
	img.setAttribute('width','100');
	img.setAttribute('height','100');
	img.setAttribute('id','result-image');
	document.getElementById('results-box').appendChild(img);
	fieldElements ++;
}

function displayRock () {
	img = document.createElement('img');
	div = document.getElementById('results-box'); 
	img.src = 'http://images.clipartpanda.com/rock-clipart-clipart-harvestable-resources-rock.png';
	img.setAttribute('alt',"Rock");
	img.setAttribute('width','100');
	img.setAttribute('height','100');
	img.setAttribute('id','result-image');
	document.getElementById('results-box').appendChild(img);
	fieldElements ++;
}

function clearOne () {
	document.getElementById('result-image').remove();
	fieldElements --;
}

function clearAll () {
	while (fieldElements >0) {
		document.getElementById('result-image').remove();
		fieldElements --;
	}
}