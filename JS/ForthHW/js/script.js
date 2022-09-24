var array = [];
for(let i = 0; i < 5; i++){
	array.push(Math.floor(Math.random() * (21 - 15 + 1)) + 15);
}
document.write(array, "<br>");

function map(fn, array){
	let newArray = [];
	for(let i = 0; i < array.length; i++){
		newArray[i] = fn(array[i]);
	}
	return newArray;
}

function fn(a){
	return a * 2;
}
document.write(map(fn, array));


//second
let age = 19;
let checkAge = function(age){
	return (age > 18) ? true : confirm("Батьки дозволили?");
}
document.write("<br>", checkAge(age));