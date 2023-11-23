//#1
alert("Я JavaScript!");

//#2
var admin; 
var name = "Валентина";
admin = name;
alert(admin);

//#3
var visitor = prompt("Введите ваше имя");
var Earth = "Земля";
alert("Текущий пользователь: " + visitor + " " + " Планета: " + Earth);

//#4

//let name = "Ilya"; 
alert( `hello ${1}` ); // hello 1
alert( `hello ${"name"}` ); // hello name- выводится значение заданной в кавычках строки
alert( `hello ${name}` ); // hello Валентина переменная которая заданна из скрипта #2

//#5
var str1 = "Привет";
var str2 = "Артур";
alert(str1+ ","+ " "+ str2);

//#6

var nickname = prompt("Введите ваше имя: ");
alert("Привет, " + nickname);

//#7
var cel = prompt("Введите температуру в Цельсия");
var far = (cel * 1.8) + 32;
alert("Температура в Фарренгейтах: " + far);
