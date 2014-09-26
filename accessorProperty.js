//Accessor Property
//accessor property uses get and or set
//here we are defining a property for an object called inch
//first we try get myObject.inch and the return would be a computation of this.mm divided by 25.4
Object.defineProperty(my_object,
	'inch', {
		get: funtion () {
			return this.mm / 25.4;
		},
		set: function (value) {
			this.mm = value * 25.4;
		},
		enumerable: true
  	})
