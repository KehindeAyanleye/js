// augmenting built in types
String.prototype.trim = function () {
	return this.replace(
		/^\S*(\s+\S+)*)\s*$/, "$1");
};
