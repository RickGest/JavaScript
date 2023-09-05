'use strict';

let values = [];

document.querySelector('.calculator_buttons').addEventListener('click', function(event) {
	switch (event.target.innerText) {
		case '+':
			addOperation('+');
			break;
		case '-':
			addOperation('-');
			break;
		case 'x':
			addOperation('*');
			break;
		case '÷':
			addOperation('/');
			break;
	}
	document.querySelector('.input').value = '';
})

function calculate() {
	values.push(document.querySelector('.input').value);
	document.querySelector('.panel').innerText = values.join(' ');
	const res = eval(values.join(' '));
	document.querySelector('.panel').innerText = document.querySelector('.panel').innerText = values.join(' ') + ' = ' + res;
	console.log(values);
}

function clearArray() {
	document.querySelector('.panel').innerText = 'Enter new operation';
	document.querySelector('.input').value = '';
	values = [];
}

function addOperation(operation) {
	values.push(document.querySelector('.input').value);
	values.push(operation);
	document.querySelector('.panel').innerText = values.join(' ');
	console.log(values);
}