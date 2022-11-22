/*
ДЗ : Намалювати на сторінці коло за допомогою параметрів, які введе користувач.
При завантаженні сторінки – показати на ній кнопку з текстом "Намалювати коло". 
Дана кнопка повинна бути єдиним контентом у тілі HTML документа, решта контенту 
повинен бути створений і доданий на сторінку за допомогою Javascript
При натисканні кнопки "Намалювати коло" показувати одне поле введення - діаметр кола. 
При натисканні на кнопку "Намалювати" створити на сторінці 100 кіл (10*10) випадкового кольору. 
При натисканні на конкретне коло - це коло повинен зникати, при цьому порожнє місце заповнюватися, тобто всі інші кола зрушуються вліво.
*/

var label1 = document.createElement("label"), input = document.createElement("input"),
		label2 = document.createElement("label"), timesInput = document.createElement("input"),
		circle = document.createElement("div"), button = document.querySelector("button"),tmp;

label1.textContent = "Enter numb of circles: ";
document.body.prepend(label1);
timesInput.setAttribute('id', "timesInput");
timesInput.placeholder = "times";
label1.append(timesInput);

label2.textContent = "Enter diametr: ";
document.body.prepend(label2);
input.setAttribute('id', "input");
input.placeholder = "number";
label2.append(input);

circle.setAttribute('id','circle');
document.body.append(circle);

document.getElementById('button').addEventListener('click',()=>{
	let dataTimes = document.getElementById("timesInput").value;
	let dataInput = document.getElementById("input").value;
	for(let i = 0; i < dataTimes; i++){
		tmp = document.createElement('div');
		tmp.style.height = dataInput + 'px';
		tmp.style.minWidth = dataInput + 'px';
		tmp.style.background = `hsl(${Math.floor(Math.random() * 360)}, 100%, 40%)`;
		circle.appendChild(tmp);
		tmp.onclick = function () {
			this.remove();
	}
	}
})