/*
1. Прив'яжіть усім інпутам наступну подію - втрата фокусу, кожен інпут виводить своє value в параграф з id="test"

2. Дано інпути. Зробіть так, щоб усі інпути втрати фокусу перевіряли свій вміст на правильну кількість символів. 
Скільки символів має бути в інпуті, зазначається в атрибуті data-length. Якщо вбито правильну кількість, 
то межа інпуту стає зеленою, якщо неправильна – червоною.

3.Використовуючи бібліотеку bootstrap створіть форму у якій запитати у користувача данні.
Ім'я, Прізвище (Українською)
Список з містами України 
Номер телефону у форматі +380XX XXX XX XX - Визначити код оператора та підтягувати логотип оператора. 
Пошта 
Якщо поле має помилку показати червоний хрестик  біля поля ❌,  якщо помилки немає показати зелену галочку ✅
Перевіряти данні на етапі втрати фокуса та коли йде натискання кнопки відправити дані 

4.
- При завантаженні сторінки показати користувачеві поле введення (`input`) з написом `Price`. Це поле буде служити для введення числових значень
- Поведінка поля має бути такою:
- При фокусі на полі введення – у нього має з'явитися рамка зеленого кольору. При втраті фокусу вона пропадає.
- Коли забрали фокус з поля - його значення зчитується, над полем створюється `span`, в якому має бути виведений текст: 

Поруч із ним має бути кнопка з хрестиком (`X`). Значення всередині поля введення фарбується зеленим.
- При натисканні на `Х` - `span` з текстом та кнопка `X` повинні бути видалені.
- Якщо користувач ввів число менше 0 - при втраті фокусу підсвічувати поле введення червоною рамкою, 
під полем виводити фразу - `Please enter correct price`. `span` зі значенням при цьому не створюється.
*/
document.addEventListener('DOMContentLoaded',()=>{
	let [...animationInput] = document.forms[0],
	inputs = {
		login: '',
		password: '',
	};
	animationInput.forEach((el)=>{
		el.addEventListener('focus', ()=>{
			if(el.type === 'text')
				document.getElementById('login').style.animation = 'toUp 1s ease-in forwards';
			if(el.type === 'password')
				document.getElementById('pass').style.animation = 'toUp 1s ease-in forwards';
		})

		el.addEventListener('blur', ()=>{
			if(el.type === 'text' && el.value != ''){
				inputs.login = el.value;
			}
			if(el.type === 'password' && el.value != ''){
				inputs.password = el.value;
			}

			let inVal = el.value;

			if(inVal.length.toString() !== el.dataset.length){
				el.style.border = '3px solid red';
			}
			else el.style.border = '3px solid greenyellow';

			document.getElementById('for_login').textContent = `Login: ${inputs.login}`;
			document.getElementById('for_pass').textContent = `Password: ${inputs.password}`;
		})
	})
	/*========================================================================================*/
	let [...form1] = document.forms[1], [...form2] = document.forms[2], [...form3] = document.forms[3], validName = /^[А-я 'єїґіІ-]/g, validTel = /^[\+]?[(]?[380]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/, validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	form1.forEach((item)=>{
		item.addEventListener('blur', ()=>{
			if(validName.test(item.value))
				document.getElementById('validName').textContent = '✅';
			else	document.getElementById('validName').textContent = '❌';
		})
	})
	data.forEach((el) => {
		const option = document.createElement('option');
		option.innerText = el.city;
		document.getElementById('select').append(option);
	})
	form2.forEach((item)=>{
		item.addEventListener('blur', ()=>{
			if(validTel.test(item.value)){
				document.getElementById('validTel').textContent = '✅';
				let operator = item.value.slice(3,6);
				let kyivstar = ['039', '067', '068', '096', '097', '098'],
						vodafone = ['050', '066', '095', '099'],
						lifecell = ['063', '073', '093'];
		
				for(let i = 0; i < kyivstar.length; i++){
					if(operator == kyivstar[i]) document.getElementById('img').style.backgroundImage = "url('./img/kyivstar.png')";
				}
				for(let i = 0; i < vodafone.length; i++){
					if(operator == vodafone[i]) document.getElementById('img').style.backgroundImage = "url('./img/vodafone.png')";
				}
				for(let i = 0; i < lifecell.length; i++){
					if(operator == lifecell[i]) document.getElementById('img').style.backgroundImage = "url('./img/lifecell.png')";
				}
			}
			else{
				document.getElementById('img').style.backgroundImage = null;
				document.getElementById('validTel').textContent = '❌';
			}
		})
	})
	form3.forEach((item)=>{
		item.addEventListener('blur', ()=>{
			if(validEmail.test(item.value))
				document.getElementById('validEmail').textContent = '✅';
			else	document.getElementById('validEmail').textContent = '❌';
		})
	})
	/*========================================================================================*/
		let [...lastInput] = document.forms[4], inputik =  document.getElementById('price');
		lastInput.forEach((el)=>{
			el.addEventListener('focus', ()=>{
					document.getElementById('price').style.animation = 'toUp 1s ease-in forwards';
					el.style.border = '3px solid greenyellow';
					/*var span = document.createElement('span');
					span.setAttribute('id', 'span');
					span.prepend('forth_form');   <--таким чином не виходить створити span*/
			})
	
			el.addEventListener('blur', ()=>{
				el.style.border = '3px solid black';
				if(el.value < 0){
					el.style.border = '3px solid red';
					document.getElementById('error').textContent = `Please enter correct price`;
				}else{
					document.getElementById('span').textContent = el.value;
					document.getElementById('span').style.backgroundColor = 'greenyellow';
					document.getElementById('butt').textContent = '❌';
					document.getElementById('error').textContent = ``;
				}
			})
		})
		document.getElementById('butt').addEventListener('click',()=>{
			//document.getElementById('span').remove(); <-- має бути так, але через проблему вище не можу
			//document.getElementById('butt').remove(); <-- має бути так, але через проблему вище не можу
			document.getElementById('span').textContent = null;
			document.getElementById('butt').textContent = null;
		})
})