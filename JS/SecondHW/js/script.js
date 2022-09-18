for(var i = 0; i < 10; i++){ //прямокутник
	for(var j = 0; j < 50; j++){
		document.write("&#8727;");
	}
	document.write("<br>");
}

var height = 15;
for(var i = 0; i < height; i++){ //прямокутний трикутник
	for(var j = 0; j < 15; j++){
		document.write("&nbsp;");
	}
	for(var star = 1 + i; star > 0; star--){
		document.write("&#8727;");
	}
	document.write("<br>");
}

for(var i = 0; i < height; i++){ //рівносторонній трикутник
	for(var j = (0 + i + 1); j < 15; j++){
		document.write("&nbsp;");
	}
	for(var star = 1 + i; star > 0; star--){
		document.write("&#8727;");
	}
	document.write("<br>");
}

var height = 10, width = 10, center = height / 2;//ромб
for (var i = 0; i < height; i++)
{
	for (var j = 0; j < width; j++)
	{
		if (i <= center)
		{
			if (j >= (center - i) && j <= (center + i))
				document.write("&#8727;");
			else document.write("&nbsp;");
		}
		else
		{
			if (j >= (center + i - width + 1) && j <= (center - i + width - 1))
				document.write("&#8727;");
			else document.write("&nbsp;");
		}
	}
	document.write("<br>");
}