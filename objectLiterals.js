//object Literals
//An expressive notation for creating objects

var my_object = {foo: bar};

var my_object = Object.defineProperties (
Object.create(Object.prototype), {
	foo: {
		value:bar,
		writeable: true,
		enumerable: true,
		configurable: true
	}
});
