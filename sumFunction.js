// say I want to write a sum function
function sum() {
	var i,
	n = arguments.length,
	total = 0;
	for (i = 0; i < n; i += 1) {
		total += arguments[i];
	}
	return total;
}
