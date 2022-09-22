document.write(`<h1>Завдання №1.1</h1><br>`);

const styles = ["Джаз", "Блюз"];
styles.push("Рок-н-рол");
document.write(styles.join(", "), "<br>");

let arrayLength = styles.length;
for(let i = 0; i < arrayLength; i++){
	if(i == Math.floor((arrayLength-1) / 2)){
		styles[i] = "Класика";
	}
}
document.write(styles.join(", "), "<br>");

document.write("Видаляємо перший елемент масиву: ", styles.shift(), "<br>");

styles.unshift("Реп", "Реггі");
document.write("Додали два ел. на початок масиву: ", styles.join(", "), "<br>");


document.write(`<h1>Завдання №1</h1><br>`);
let abcArray = ["a", "b", "c"];
let numbArray = [1, 2, 3];
let unitedArray = abcArray.concat(numbArray);
document.write(unitedArray);


document.write(`<h1>Завдання №2</h1><br>`);
abcArray.push(1);
abcArray.push(2);
abcArray.push(3);
document.write(abcArray);


document.write(`<h1>Завдання №3</h1><br>`);
document.write("До: ", numbArray, "<br>");
numbArray.reverse();
document.write("Після: ", numbArray);


document.write(`<h1>Завдання №4</h1><br>`);
numbArray.reverse();
numbArray.push(4);
numbArray.push(5);
numbArray.push(6);
document.write(numbArray);


document.write(`<h1>Завдання №5</h1><br>`);
numbArray.pop();
numbArray.pop();
numbArray.pop();
numbArray.unshift(4);
numbArray.unshift(5);
numbArray.unshift(6);
document.write(numbArray);


document.write(`<h1>Завдання №6</h1><br>`);
let languageArr = ["js", "css", "jq"];
document.write(languageArr[0]);


document.write(`<h1>Завдання №7</h1><br>`);
let moreNumbArray = [1, 2, 3, 4, 5];
document.write(moreNumbArray.slice(0, 3));


document.write(`<h1>Завдання №8</h1><br>`);
moreNumbArray.splice((moreNumbArray.length - 4), 2) //???????????
document.write(moreNumbArray);


document.write(`<h1>Завдання №9</h1><br>`);
moreNumbArray = [1, 2, 3, 4, 5];
moreNumbArray.splice(2, 0, 10)
document.write(moreNumbArray);


document.write(`<h1>Завдання №10</h1><br>`);
let unsortedArr = [3, 4, 1, 2, 7];
document.write(unsortedArr.sort());


document.write(`<h1>Завдання №11</h1><br>`);
let unsortedAlphabeticArr = ["світ", "Привіт", "!"];
unsortedAlphabeticArr[0] = "мир"
document.write(unsortedAlphabeticArr[1] + ", " + unsortedAlphabeticArr[0] + unsortedAlphabeticArr[2]);


document.write(`<h1>Завдання №12</h1><br>`);
unsortedAlphabeticArr = ["Привіт", "світ", "!"];
unsortedAlphabeticArr[0] = "Поки";
document.write(unsortedAlphabeticArr[0] + ", " + unsortedAlphabeticArr[1] +  unsortedAlphabeticArr[2]);

let list1 = [1,2,4], list2 = [1,3,4];
var mergeTwoLists = function(list1, list2) {
  return unitedArray.sort(list1.push(list2));
};
document.write("<br>"+ mergeTwoLists(list1, list2));