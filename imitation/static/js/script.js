function processTime (){
	time = prompt('Enter time in this format: "10:30 pm"');
	time1 = time.split(' ');
	time2 = time1[0].split(':');
	hour = Number(time2[0]);
	minute = Number(time2[1]);
	if (time1[1] == "pm"){
		hour += 12;
	} else if (time1[1] != "am"){
		return 'improper format';
	}
	minute += hour * 60;
	return minute;
}


/* This uses a case and switch to put a name 
to the time of day that was entered above.
*/
function timeOfDay (minute) {
	switch ((minute - (minute % 120))/120){
		case 0:									// This is not an accident. It applies the same
		case 1:									// result to cases 0 and 1.
		result = 'wee hours';
		break;
		case 2:
		result = 'crack of dawn';
		break;
		case 3:
		result = 'early morning';
		break;
		case 4:
		result = 'mid morning';
		break;
		case 5:
		result = 'late morning';
		break;
		case 6:
		result = 'early afternoon';
		break;
		case 7:
		result = 'late afternoon';
		break;
		case 8:
		result = 'early evening';
		break;
		case 9:
		result = 'late evening';
		break;
		case 10:
		result = 'early night';
		break;
		case 11:
		result = 'late night';
		break;
	}
	var h1 = document.createElement('h1');
	var textAnswer = "This time is at the " + result + ".";
	h1.setAttribute('id','result');
	h1.appendChild(textAnswer);
	document.getElementById('flex-box-result').appendChild(h1);
}