function kittyMake (size) {
	img = document.createElement('img');
		// I originially did it this way, which is also correct but less parsimonious.
		//img.setAttribute('src', 'http://thecatapi.com/api/images/get?format=src&type=gif&size=small');
	div = document.getElementById('kitty-box'); 
	img.src = 'http://thecatapi.com/api/images/get?format=src&type=gif&size=small';
	img.setAttribute('alt',"luggadat kitty!");
	img.setAttribute('width',size);
	img.setAttribute('height',size);
	img.setAttribute('id','007');
	document.getElementById('kitty-box').appendChild(img);
}

function byeKitty () {
	document.getElementById('007').remove();
}