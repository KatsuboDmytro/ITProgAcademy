/*
Написати функцію createNewUser(), яка буде створювати та повертати об'єкт newUser.
При виклику функція повинна запитати у імені, що викликає, її прізвище.
Використовуючи дані, введені користувачем, створити об'єкт newUser з властивостями firstName та lastName.
Додати в об'єкт newUser метод getLogin(), який повертатиме першу літеру імені користувача, з'єднану з прізвищем 
користувача, все в нижньому регістрі (наприклад, Ivan Kravchenko → ikravchenko).
Створити користувача за допомогою функції createNewUser(). Викликати користувача функцію getLogin(). 
Вивести у консоль результат виконання функції.

Доповнити функцію createNewUser() методами підрахунку віку користувача та його паролем.
Візьміть виконане завдання вище (створена вами функція createNewUser()) та доповніть її наступним функціоналом:

При виклику функція повинна запитати у дату народження, що викликає, (текст у форматі dd.mm.yyyy) і зберегти її в полі birthday.
Створити метод getAge() який повертатиме скільки користувачеві років.
Створити метод getPassword(), який повертатиме першу літеру імені користувача у верхньому регістрі,
поєднану з прізвищем (у нижньому регістрі) та роком народження. (Наприклад, Ivan Kravchenko 13.03.1992 → Ikravchenko1992).

Вивести в консоль результат роботи функції createNewUser(), а також функцій getAge() та getPassword() створеного об'єкта.
*/
class createNewUser{
	constructor(firstName){
		this.firstName = firstName;
		this.lastName = prompt(`Hello ${this.firstName}, tell me your lastName...`);//запитати у імені, що викликає, її прізвище
		this.birthday = prompt(`Enter your birthday "example: dd.mm.yyyy"`);
	}
	getLogin(){
		var firstLetter = this.firstName.charAt(0);//перша буква імені
		let login = firstLetter + this.lastName;//з'єднану з прізвищем користувача, *все в нижньому регістрі
		return login.toLowerCase();
	}
	getAge(){
		let age = this.birthday.slice(6);
		return parseInt(age);
	}
	getPassword(login,age){
		let password = login.slice(0,1).toUpperCase() + login.slice(1) + age;
		return password;
	}
}
let Ivan = "Ivan";
const newUser = new createNewUser(Ivan);
console.log(newUser);
console.log(`Login: ${newUser.getLogin()}`);
console.log(`Age: ${newUser.getAge()}`);
console.log(`Password: ${newUser.getPassword(newUser.getLogin(),newUser.getAge())}`);
/*
Реалізувати функцію фільтру масиву за вказаним типом даних.
Написати функцію filterBy(), яка прийматиме 2 аргументи. Перший аргумент - масив, який міститиме будь-які дані, другий аргумент - тип даних.
Функція повинна повернути новий масив, який міститиме всі дані, які були передані в аргумент, 
за винятком тих, тип яких був переданий другим аргументом. 
Input: ['hello', 'world', 23, '23', null], 'string'
Output: [23, null].
*/
let array = ['hello', 'world', 23, '23', null];
let type = 'string';
let tmpArr = [];
function filterBy(array, type){
	for(let i = 0; i < array.length; i++)
		if(typeof(array[i]) === typeof(type)) { array.splice(i,1); i--; }
	return array;
}
console.log(filterBy(array, type));