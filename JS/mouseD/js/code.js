//1. Создай класс, который будет создавать пользователей с именем и фамилией. Добавить к классу метод для вывода имени и фамилии 
var userInfo = [{
	name: '',
	surname: '',
}]
class createUser{
	constructor(){
		this.name = prompt('Enter your name');
		this.surname = prompt('Enter your surname');
	}
	enterInfo(){
		userInfo.name = this.name; userInfo.surname = this.surname;
		this.show(this.name,this.surname);
	}
	show(name, surname){
		let firstDiv = document.createElement('div');
		firstDiv.classList.add('div');
		document.body.prepend(firstDiv);
		firstDiv.textContent = `Name: ${name}, Surname: ${surname}`;
	}
}
let user = new createUser();
user.enterInfo();
console.log(userInfo);

document.getElementById('create').addEventListener('click', ()=>{
	const user = new createUser();
	user.enterInfo();
	console.log(userInfo);
})
//2. Создай список состоящий из 4 листов. Используя джс обратись к 2 li и с использованием навигации 
//по DOM дай 1 элементу синий фон,а 3 красный
let li = `
<ul id='ulik'>
	<li>Coffee</li>
	<li>Tea</li>
	<li>Milk</li>
	<li>Cacao</li>
</ul>
`;
let position = document.getElementById('create').insertAdjacentHTML('afterend', li);
document.querySelector('ul :nth-child(1)').style.background = 'blue';
document.querySelector('ul :nth-child(3)').style.background = 'red';
//3. Создай див высотой 400 пикселей и добавь на него событие наведения мышки. При наведении мышки выведите текстом
//координаты, где находится курсор мышки
let box = document.createElement('div'), x_and_y = document.getElementById('x_and_y');
box.setAttribute('id', 'box');
document.querySelector('ul :nth-child(4)').append(box);
box.addEventListener('mousemove', (event)=>{
	box.innerHTML = `X:${event.screenX}, Y:${event.screenY}`;
})
box.addEventListener('mouseout',()=>{
	box.innerHTML = ``;
})
//4. Создай кнопки 1,2,3,4 и при нажатии на кнопку выведи информацию о том какая кнопка была нажата
const first = document.createElement('input');
first.setAttribute('type','button');
first.setAttribute('value','1');

const second = document.createElement('input');
second.setAttribute('type','button');
second.setAttribute('value','2');

const third = document.createElement('input');
third.setAttribute('type','button');
third.setAttribute('value','3');

const fourth = document.createElement('input');
fourth.setAttribute('type','button');
fourth.setAttribute('value','4');

box.insertAdjacentElement("afterend", first);
first.after(second);
second.after(third);
third.after(fourth);

const text = document.createElement('div');
fourth.after(text);

const button = document.querySelectorAll("[type='button']");
button.forEach(el => {
	el.addEventListener("click", (event) => {
		text.innerText=`Натиснув на: ${event.target.value}`;
	});
});
//5. Создай див и сделай так, чтобы при наведении на див, див изменял свое положение на странице
let positionChangeDiv = document.createElement('div');
positionChangeDiv.setAttribute('id', 'positionChangeDiv');
text.after(positionChangeDiv);

function randomPos(min, max){
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
positionChangeDiv.addEventListener('mousemove',()=>{
	positionChangeDiv.style.top = randomPos(-250,250) + 'px';
	positionChangeDiv.style.right = randomPos(-250,250) + 'px';
	positionChangeDiv.style.left = randomPos(0,250) + 'px';
});
//6. Создай поле для ввода цвета, когда пользователь выберет какой-то цвет сделай его фоном body
let color = document.createElement('input');
color.setAttribute("type","color");
positionChangeDiv.after(color);
color.addEventListener('input', ()=>{
	document.body.style.background = color.value;
})
//7. Создай инпут для ввода логина, когда пользователь начнет Вводить данные в инпут выводи их в консоль
let inputData = document.createElement('input');
inputData.setAttribute("type","text");
color.after(inputData);
inputData.addEventListener('input', ()=>{
	console.log(inputData.value);
})
//8. Создайте поле для ввода данных поле введения данных выведите текст под полем
let inputInfo = document.createElement('input');
inputInfo.setAttribute("type","text");
inputData.after(inputInfo);

let tttext = document.createElement('p');
inputInfo.after(tttext);

inputInfo.addEventListener('focus',()=>{
	tttext.textContent = 'Text from second input: ' + inputInfo.value;
})