//Object Literals
var myObject = {name: "JackB. Nimble",
'goto': 'Jail', grade: 'A', level: 3};

var theName = myObject.name;
var destination = myObject['goto'];


//Marker Function
function maker(name, where, grade,level1) {
	var it = {};
	it.name = name;
	it['goto'] = name;
	it.grade = grade;
	it.level = level;
	return it;
}

myObject = maker("Jack B.Nimble",
	'Jail', 'A', 3);

//Object Literals with a format field
var myObjects = {
	name: "JackB. Nimble",
	'goto':'Jail',
	grade: 'A',
	format:
	{
		type:'rect',
		width:1920,
		height:1080,
		interlace: false,
		framerate:24
	}
};

//This API could have been better done by using an object instead of params
function SuperDiv(width, height,left, top, zIndex, position,color, visibility, html, cssClass)

function superDic(spec)
