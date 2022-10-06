/*
	Создать объект "Документ", в котором определить свойства "Заголовок, тело, футер, дата". 
	Создать в объекте вложенный объект - "Приложение". Создать в объекте "Приложение", вложенные объекты, "Заголовок, тело, футер, дата". 
	Создать методы для заполнения и отображения документа.
*/
const documentOfGame = {
	header : "",
	body : "",
	footer : "",
	date : "",
	app : {
		header : {appName : ""},
		body : {bodyText : ""},
		footer : {footerText : ""},
		date : {dateText: ""}
	},
	fillGapOfDoc : function(){
		for(doc in documentOfGame){
			if(doc == "header") documentOfGame[doc] = prompt("Enter header:");
			if(doc == "body") documentOfGame[doc] = prompt("Enter body:");
			if(doc == "footer") documentOfGame[doc] = prompt("Enter footer:");
			if(doc == "date") documentOfGame[doc] = prompt("Enter date:");
		}
	},
	fillGapOfApp : function(){
		for(app in documentOfGame.app.header)
			documentOfGame.app.header[app] = prompt("Enter header:");

		for(app in documentOfGame.app.body)
			documentOfGame.app.body[app] = prompt("Enter body:");

		for(app in documentOfGame.app.footer)
			documentOfGame.app.footer[app] = prompt("Enter footer:");

		for(app in documentOfGame.app.date)
			documentOfGame.app.date[app] = prompt("Enter date:");
	},
	print : function(){
		document.write(`Создать объект "documentOfGame", в котором определить свойства "${this.header}, ${this.body}, ${this.footer}, ${this.date}". 
		Создать в объекте вложенный объект - "app". Создать в объекте "app", вложенные объекты, "${this.app.header.appName}, 
		${this.app.body.bodyText}, ${this.app.footer.footerText}, ${this.app.date.dateText}". 
		Создать методы для заполнения и отображения документа.`);
	}
};
documentOfGame.fillGapOfDoc();
documentOfGame.fillGapOfApp();
documentOfGame.print()