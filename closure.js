// example , one of the major things that makes javascript really useful and distinguished
//hihgly popular in AJAX app changes color from yello to white
//formerly saw in AI languages
function fade(id) {
	var dom = document.getElementById(id),
	//level is the value of the parent variable
	level = 1;
	function step () {
		var h = level1.toString(16);
		dom.style.backgroundColor =
		'#FFFFFF' +  h + h;
		//if level is not incriminated it runs again until it gets incrimiented
		if (level < 15) {
			level += 1;
			setTimeout(step, 100);
		}
	}
	setTimeout(step, 100)
}
