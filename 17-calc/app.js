'use strict';

let values = [];

function doPlus() {
	addOperation('+');
}

function doMinus() {
	addOperation('-');
}

function doMultiply() {
	addOperation('*');
}

function doDevide() {
	addOperation('/');
}

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

function inputChanged(e) {
	if (e.code === 'Enter') {
		submitForm();
		showNotification();
	}
}