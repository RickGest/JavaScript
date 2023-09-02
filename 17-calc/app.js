'use strict';

function showNotification() {
	const delayInMilliseconds = 3000; //3 second
	document.querySelector('.notification').classList.remove('notification_hidden');
	setTimeout(function() {
		document.querySelector('.notification').classList.add('notification_hidden');
	}, delayInMilliseconds);
}

function submitForm() {
	const input = document.querySelector('.input').value;
	if (!input) {
		return;
	}
	//display input
	document.querySelector('.panel').innerText = input;
	//reset input
	document.querySelector('.input').value = '';
	showNotification();

	//save to local storage
	localStorage.setItem('value1', input);
}

function doPlus() {
	doCalculation('+');
}

function doMinus() {
	doCalculation('-');
}

function doTimes() {
	doCalculation('*');
}

function doDevide() {
	doCalculation('/');
}

function doCalculation(operation) {
	const input = document.querySelector('.input').value;
	let operSign = operation;
	let result;
	if (!input) {
		return;
	}
	switch(operation) {
		case '+':
			result = Number(localStorage.getItem('value1')) + Number(input);
			break;
		case '-':
			result = Number(localStorage.getItem('value1')) - Number(input);
			break;
		case '*':
			result = Number(localStorage.getItem('value1')) * Number(input);
			operSign = 'x';
			break;
		case '/':
			result = Number(localStorage.getItem('value1')) / Number(input);
			operSign = '÷';
			break;
	}
	
	document.querySelector('.panel').innerText = localStorage.getItem('value1')+operSign+input+' = '+result;
	document.querySelector('.input').value = '';
	localStorage.removeItem('value1');
}

function inputChanged(e) {
	if (e.code == 'Enter') {
		submitForm();
		showNotification();
	}
}
