// Conditionals


/* This is just to process input for the conditionals below.
It will take a time like "2:30 pm", break it into 2, 30, and 
pm, and process each part to output minutes since midnight 
of that day.
*/
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

/* This uses a mess of if, else if, and else to put 
a name to the time of day that was entered above.
*/
function timeOfDay1 (minute) {
	if (minute < 240) {
		return 'the wee hours';
	} else if (minute < 360) {
		return 'crack of dawn';
	} else if (minute < 480) {
		return 'early morning';
	} else if (minute < 600) {
		return 'mid morning';
	} else if (minute < 720) {
		return 'late morning';
	} else if (minute < 840) {
		return 'early afternoon';
	} else if (minute < 960) {
		return 'late afternoon';
	} else if (minute < 1080) {
		return 'early evening';
	} else if (minute < 1200) {
		return 'late evening';
	} else if (minute < 1320) {
		return 'early night';
	} else {
		return 'late night';
	}
}

/* This uses a case and switch to put a name 
to the time of day that was entered above.
*/
function timeOfDay2 (minute) {
	switch ((minute - (minute % 120))/120){
		case 0:									// This is not an accident. It applies the same
		case 1:									// result to cases 0 and 1.
		return 'the wee hours';
		break;
		case 2:
		return 'crack of dawn';
		break;
		case 3:
		return 'early morning';
		break;
		case 4:
		return 'mid morning';
		break;
		case 5:
		return 'late morning';
		break;
		case 6:
		return 'early afternoon';
		break;
		case 7:
		return 'late afternoon';
		break;
		case 8:
		return 'early evening';
		break;
		case 9:
		return 'late evening';
		break;
		case 10:
		return 'early night';
		break;
		case 11:
		return 'late night';
		break;
	}
}

/* Run these to see it all work together.
Both should function identically.
*/
timeOfDay1(processTime());
timeOfDay2(processTime());
