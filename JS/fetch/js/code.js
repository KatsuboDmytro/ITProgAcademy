/*
Створіть сайт з коментарями. Коментарі тут : https://jsonplaceholder.typicode.com/
На сторінку виводити по 10 коментарів, у низу сторінки зробити поле пагінації (перемикання сторінок) при перемиканні
сторінок показувати нові коментарі. 
з коментарів виводити : 
"id":
"name":
"email":
"body":
<!-- додаткове вивчення. Почитати про 
https://uk.javascript.info/async
https://uk.javascript.info/error-handling
https://uk.javascript.info/network -->
*/
window.addEventListener('DOMContentLoaded',()=>{
	var newComments = document.getElementById('sent'), head = document.getElementById('head');
	var commenta = `
	<div id="comment">
	<div class="comment_wrapp">
		<div id="comment_header"></div>
		<p id='paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi tempore, dignissimos enim ea magni voluptatibus expedita fugit. Odio aliquam excepturi culpa eum soluta porro tenetur ducimus, vitae maxime consequuntur quod!</p>
		<button id="answer">Відповісти</button>
	</div>
	</div>`,
	answerArea = `
	<div id="input_answer'>
		<label for="comment-text" class="form__label"> Коментар </label>
		<textarea id="comment-text" rows="5" spellcheck="false"> </textarea>
	</div>`;

	function show(){
		document.getElementById('spin').style.display = 'block';
	}
	function hide(){
		document.getElementById('spin').style.display = 'none';
	}

	newComments.addEventListener('click', ()=>{
		show();
		const data = fetch('https://jsonplaceholder.typicode.com/users');
		data.then((info) => {
			return info.json();
		}).then((info) => {
			for(let i = 0; i < 10; i++){
				head.insertAdjacentHTML("afterend", commenta);
				var commentHeader = document.getElementById("comment_header"), paragraph = document.getElementById("paragraph");
				commentHeader.insertAdjacentHTML("beforeend", `
				<div id="name">${info[i].name}</div>
				<div id="username">${info[i].username}</div>
				<div id="id">${info[i].id}</div>`);
				paragraph.insertAdjacentHTML("afterend", `<div id='email'>${info[i].email}</div>`);
				hide();
			}
			document.getElementById('answer').addEventListener('click',()=>{
				document.getElementById(`email`).insertAdjacentHTML("afterend", answerArea);
			})
		}).catch((error) => {
				console.error(error);
		})
	})
})