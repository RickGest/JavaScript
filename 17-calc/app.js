'use strict';
const subElements = {
	input: document.querySelector('.input'),
	operatorsWrapper: document.querySelector('.operation'),
	panel: document.querySelector('.panel')
}
const values = {
	firstValue: 0,
	secondValue: 0,
	operator: null,
	result: 0,
}

subElements.operatorsWrapper.addEventListener('click', function(event) {
	values.operator = event.target.innerText;
	if (values.result !== 0) {
		values.firstValue = values.result;
		values.result = 0;
	} else {
		values.firstValue = Number(subElements.input.value);
	}
	subElements.input.value = '';
	subElements.panel.innerText = values.firstValue;
	subElements.input.focus();
})

function calculate() {
	if (values.firstValue ?? values.secondValue ?? values.operator) {
		values.secondValue = Number(subElements.input.value);
		switch (values.operator) {
			case '+':
				values.result = values.firstValue + values.secondValue;
				break;
			case '-':
				values.result = values.firstValue - values.secondValue;
				break;
			case 'x':
				values.result = values.firstValue * values.secondValue;
				break;
			case "/":
				values.result = values.firstValue / values.secondValue;
				break;
		}
		subElements.panel.innerText = values.result;
		values.firstValue = Number(values.result);
		subElements.input.value = '';
	}
}

function clearArray() {
	subElements.input.value = '';
	subElements.panel.innerText = '';
}

function inputChanged(e) {
	if (values.result !== 0) {
		values.result = 0;
	}
}