;{
var p = document.getElementById('field');
var	a = 0,
	b = 0,
	valueButton = "",
	operationSymbol = "";

function start(button) {
	valueButton = button.innerHTML;
};


var calculator = {
	a: 0,
	b: 0,

	get firstArg() {return this.a;},
	set firstArg(value) {this.a = value;},

	get secondArg() {return this.b;},
	set secondArg(value) {this.b = value;},

	count: function (a, b, operationSymbol) {
		a = this.firstArg;
		b = this.secondArg;
		switch (operationSymbol) {
			case '+': return a + b; break;
			case '-': return a - b; break;
			case '*': return a * b; break;
			case "/": return a / b;
		};
	},

	writeValue: function() {
		
	}
};
};