<script>
	console.log("hello world");
	var number = 5;
	/*
	DATA TYPES:
	undefined,
	null,
	boolean,
	string,
	symbol,
	number,
	object
	*/
	
	// Ways to assign variables
	
	var myName = "Chris"; // Can manipulate
	
	var berry; // Same as berry = NULL
	
	var berry = 2;
	
	let ourName = "Christafur"; // Only for a tiny seciton of the code
	
	const pi = 3.1415; // This can't change through the whole code. It will make an error if you try.
	
	console.log(assignedVariable)
	
	// Initializing variables
	var a = 10;
	var b = 3;
	var c = "I am ";
	var d = 4;
	var e = 7;
	
	// Operations
	a = a + 1;
	a += 12; // These are equivalent.
	
	b = b - 5;
	b -= 5; //These are equivalent.
	
	d = d * 5;
	d *= 5; //These are equivalent.
	
	e = e / 3;
	e /= 3; // These are equivalent.
	
	c = c + " Groot!";
	
	// Add/subtract one to a variable
	berry++;
	berry--;
	
	var theString = "I am a \"double quoted\" string inside \"double quotes\""
	console.log(theString);
	var theString = 'I am a "double quoted" string inside "double quotes"';
	console.log(theString);
	
	/* Things you can backslash out of:
	\'
	\"
	\\
	\n
	\r
	\t
	\b
	\f
	*/
	
	var multilineString = "First Line\n\t\\Second Line \n Third Line";
	
	var concatenatedString = "This is the start. " + "This is the end.";
	
	concatenatedString += " No, that wasn't! THIS is!";
	
	var introduction = "Our ship name is " +  ourName + ". What's yours?";
	
	// Find length of string
	var introLength = 0;
	introLength = introduction.length;
	
	// Finding specific letters
	var firstLetterOfMyName = "";
	firstLetterOfMyName = myName[0]; //Returns "C" because C is the first letter of Chris
	var secondLetterOfMyName = "";
	secondLetterOfMyName = myName[1]; // "h"
	var thirdLetterOfMyName = "";
	thirdLetterOfMyName = myName[2]; // "r"
	var lastLetterOfMyName = "";
	lastLetterOfMyName = [myName.length - 1]; //"s"
	
	function madLibs(noun, adjective, verb, adverb) {
		var result = "";
		result += "The " + adjective + " " + noun + " " + verb + " " + adverb + "!";
		return result;
	}
	console.log(wordBlanks("cat", "fat", "sat", "like that"));
	
	var anArray = [["Chris",30,68],["Christa",25,63]];
	var chrisAge = anArray [0][1];
	console.log(chrisAge);
</script>