/*
Створіть на сторінці div і дайте йому зовнішній відступ 150 пікселів. Використовуючи JS виведіть у консоль відступ
*/
let number = 150;
let div = document.createElement('div');
div.classList.add('div');
div.textContent = `div is here with margin: ${number}px`;
div.style.height = number + 'px';
div.style.margin = number + 'px';
document.body.prepend(div);
/*
Створіть програму секундомір.
* Секундомір матиме 3 кнопки "Старт, Стоп, Скидання"
* При натисканні на кнопку стоп фон секундоміра має бути червоним, старт - зелений, скидання - сірий * Виведення лічильників у форматі ЧЧ:ММ:СС
* Реалізуйте Завдання використовуючи синтаксис ES6 та стрілочні функції
*/
let start = document.getElementById('start'),stop = document.getElementById('stop'),reset = document.getElementById('reset'),
		screen = document.getElementById('screen'), minutes = 1, seconds = 1, miliseconds = 1, iterM = 2, iterS = 2, iterMs = 2,
		get = id => document.getElementById(id), counter = 0, intervalM, intervalS, intervalMs, flag = false;

const countMinutes = () => {
	get("minutes").innerHTML = minutes;
	if(minutes >= 59) { minutes = 0; iterM = 0; }
	if(minutes <= 8) minutes = '0' + iterM++;
	else minutes++;
}
const countSeconds = () => {
	get("seconds").innerHTML = seconds;
	if(seconds >= 59) { seconds = 0; iterS = 0; }
	if(seconds <= 8) seconds = '0' + iterS++;
	else seconds++;
}
const countMiliseconds = () => {
	get("miliseconds").innerHTML = miliseconds;
	if(miliseconds >= 99) { miliseconds = 0; iterMs = 0; }
	if(miliseconds <= 8) miliseconds = '0' + iterMs++;
	else miliseconds++;
}

start.addEventListener('click', () => {
	screen.style.background = `rgba(30, 255, 0, 0.5)`;
	intervalM = setInterval(countMinutes, 60000);
	intervalS = setInterval(countSeconds, 1000);
	intervalMs = setInterval(countMiliseconds, 7); 
})
stop.addEventListener('click', () => {
	screen.style.background = `rgba(255, 1, 1, 0.5)`;
	clearInterval(intervalM);	clearInterval(intervalS);	clearInterval(intervalMs);
})
reset.addEventListener('click', () => {
	screen.style.background = `rgba(22, 97, 12, 0.5)`;
	get("minutes").innerHTML = '00';			minutes = 1;
	get("seconds").innerHTML = '00';			seconds = 1;
	get("miliseconds").innerHTML = '00';	miliseconds = 1;
})
/*
Реалізуйте програму перевірки телефону
* Використовуючи JS Створіть поле для введення телефону та кнопку збереження
* Користувач повинен ввести номер телефону у форматі 000-000-00-00
* Після того як користувач натискає кнопку зберегти перевірте правильність введення номера,
	якщо номер правильний зробіть зелене тло і використовуючи document.location переведіть 
	користувача на сторінку https://risovach.ru/upload/2013/03/mem/toni-stark_13447470_big_.jpeg 
	яkщо буде помилка, відобразіть її в діві до input.
*/
var label = document.createElement("label"), input = document.createElement("input"), button = document.getElementById("button_for_phone"),
		timer = document.getElementById('timer'), tmp;

label.textContent = "Enter phone number: ";
get("timer").after(label);
input.setAttribute('id', "input");
input.placeholder = "000-000-00-00";
label.append(input);

document.getElementById('button_for_phone').addEventListener('click',()=>{
	tmp = document.getElementById("input").value;
	var unValid = /[^0-9-'-']/g, valid = /[^A-Z-a-z]/g; 
  if(unValid.test(tmp)){
    alert("You can enter only numbers and '-'");
  }
  else if(tmp.length < 12){
    alert("Length of phone too short");
  }
  else if(tmp.length > 13){
    alert("Length of phone too long");
  }
	else if(valid.test(tmp)){
		div.style.background = 'rgb(82, 182, 0)';
		div.textContent = 'Phone number is true'
		setTimeout(() => {
			document.location = 'https://risovach.ru/upload/2013/03/mem/toni-stark_13447470_big_.jpeg';
		}, 2000);
	}
	else{
		div.style.background = 'rgba(255, 1, 1, 0.5)';
		div.textContent = 'Phone number is NOT true'
		setTimeout(() => {
			document.location = 'https://risovach.ru/upload/2013/03/mem/toni-stark_13447470_big_.jpeg';
		}, 2000);
	}
})

/*Слайдер
Створіть слайдер кожні 3 сек змінюватиме зображення*/
var img = document.createElement("img");
img.setAttribute('id', "img");
var image = document.getElementById('img');
var images = ['./img/firstMeme.png', './img/secondMeme.png', './img/thirddMeme.png'];
var i = -1;

function SetImage() {
	i++;
	if(i === images.length) i = 0;
	img.src = images[i];
}
setInterval(SetImage, 3000);
document.body.append(img);