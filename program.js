/*
process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
	var someDataFromAdam = process.stdin.read();
	if(someDataFromAdam !== null) {
		var istruction = someDataFromAdam.toString().trim();
		if (istruction === "exit") {
			process.stdout.write("...turning off the program!\n");
			process.exit();
		} else {
			process.stderr.write("to exit app write 'exit'! || for more informacion write 'info'\n");
		}
	}
});
*/
process.stdin.on('readable', function() {

	var someDataFromAdam = process.stdin.read();
	if (someDataFromAdam !== null) {
		var instruction = someDataFromAdam.toString().trim();
		switch (instruction) {
			case 'info':
				console.log(process.env);
				break;
			case 'exit':
				process.stdout.write("...turning off the program!\n");
				process.exit();
				break;
			default:
				process.stderr.write("to exit app write 'exit'! || for more informacion write 'info'\n");
		}
	}
});