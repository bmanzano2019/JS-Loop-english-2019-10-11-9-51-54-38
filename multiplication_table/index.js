
for (let x = 1; x <= 9; x++) {
	let outputStr = '';
	for (let y = 1; y <= x; y++) {
		outputStr += x + '*' + y + '=' + (x * y) + ' ';
	}
	console.log(outputStr);
}