/*
	Створіть функцію-конструктор Calculator, який створює об'єкти з трьома методами:
	read() запитує два значення за допомогою prompt та зберігає їх значення у властивостях об'єкта.
	sum() повертає суму введених властивостей.
	mul() повертає добуток введених властивостей.
*/
let firstValue, secondValue;
function Calculator(){
	this.read = function(){//метод об'єкту
		this.firstNum = +prompt(`Enter please first number`);
		this.secondNum = +prompt(`Enter please second number`);
	}
	this.sum = function(){//метод об'єкту
		return document.write(`Sum is: ${this.firstNum + this.secondNum}`);
	}
	this.mul = function(){//метод об'єкту
		return document.write(`Multiply is: ${this.firstNum * this.secondNum}`);
	}
}
const toCalc = new Calculator();
toCalc.read();

let question = prompt("Enter '+' if you want to sum numbers else if multiply enter '*'");
if(question == "+") toCalc.sum();
else if(question == "*") toCalc.mul();
else document.write("Something wrong, try to enter '+' or '*'");