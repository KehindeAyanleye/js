//Accessor Property
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
