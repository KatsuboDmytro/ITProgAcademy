/*
* В папке calculator дана верстка макета калькулятора. Необходимо сделать этот калькулятор рабочим.
* При клике на клавиши с цифрами - набор введенных цифр должен быть показан на табло калькулятора.
* При клике на знаки операторов (`*`, `/`, `+`, `-`) на табло ничего не происходит - программа ждет 
* введения второго числа для выполнения операции.
* Если пользователь ввел одно число, выбрал оператор, и ввел второе число, то при нажатии как кнопки `=`, 
* так и любого из операторов, в табло должен появиться результат выполенния предыдущего выражения.
* При нажатии клавиш `M+` или `M-` в левой части табло необходимо показать маленькую букву `m` - это значит, 
* что в памяти хранится число. Нажатие на `MRC` покажет число из памяти на экране. Повторное нажатие `MRC` 
* должно очищать память.
*/

let get = id => document.getElementsByClassName(id);
let firstValue = '', secondValue = '', sign = '', m = '', saveIn, finish = false, flag = false;
const number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'],
			action = ['-', '+', '*', '/'],
			plusM = ['m+'], minusM = ['m-'],
			memory = ['mrc'];
			btn = document.querySelector(".keys"),
			display = document.querySelector(".display p");

document.getElementById('keys').addEventListener('click', (event) => {
	if(!event.target.classList.contains('button')) return;
	display.textContent = '';
	
	const key = event.target.value;
	if(number.includes(key)){
		if(secondValue === '' && sign === ''){
			firstValue += key;
			console.log(firstValue, sign, secondValue);
			display.textContent = firstValue;
		} else if(firstValue !== '' && secondValue !== '' && finish){
			secondValue = key;
			finish = false;
			display.textContent = secondValue;
		}else{
			secondValue += key;
			console.log(firstValue, sign, secondValue);
			display.textContent = secondValue;
		}
	}

	if(action.includes(key)){
		sign = key;
		console.log(firstValue, sign, secondValue);
		display.textContent = sign;
	}
	if(sign !== '' && firstValue === ''){
		display.textContent = 'Error.';
	}

	if(minusM.includes(key)){
		saveIn = 0;
		console.log('save: ' + saveIn);
		document.getElementById('memory').textContent = '';
	}
	if(plusM.includes(key)){
		saveIn = firstValue;
		if(firstValue === '') saveIn = 0;
		console.log('save: ' + saveIn);
		document.getElementById('memory').textContent = 'm';
		clear();
	}
	if(memory.includes(key)){
		display.textContent = saveIn;
		if(firstValue === '') firstValue = saveIn;
		else secondValue = saveIn;
		flag = true;
		if(flag === true){
			saveIn = 0;
			document.getElementById('memory').textContent = '';
			flag = false;
		}
	}

	if(key === '='){
		switch(sign){
			case('+'): firstValue = (+firstValue) + (+secondValue); break;
			case('-'): firstValue = (+firstValue) - (+secondValue); break;
			case('*'): firstValue = (+firstValue) * (+secondValue); break;
			case('/'): firstValue = (+firstValue) / (+secondValue); break;
		}
		if(secondValue === '') secondValue = firstValue;
		finish = true;
		display.textContent = firstValue;
		console.log(firstValue, sign, secondValue);
	}
	if(key === '=' && firstValue === '' && secondValue === ''){
		display.textContent = 0;
	}
})

function clear(){
	firstValue = '', secondValue = '', sign = '', finish = false;
	display.textContent = 0;
	console.log('clear');
}
document.getElementById('clear').addEventListener('click', clear);