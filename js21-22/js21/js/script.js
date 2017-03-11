function pow (x, n) {
	var result = 1;

	for (var i = 0; i < n; i++) {
		result *= x;
	}

	return result;
}

/*var x = prompt ('Укажите число x?', '');
var n = prompt ('Укажите степень n?', '');

if (x%1 != 0 || n%1 != 0) {
	alert ('Число не поддерживается, введите целое число');
	console.log ('Не правильная цифра');
} else {
	console.log (pow (x, n));
	alert (pow (x, n));
}*/

module.exports.pow = pow;