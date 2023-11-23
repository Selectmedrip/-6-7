//Практическая №7
//
//#1
var a = 5;
var b = 2;

var sum = a + b;
var diff = a - b;
var prod = a * b;
var quot = a / b;

alert("Сумма: " + sum + ", Разность: " + diff + ", Произведение: " + prod + ", Частное: " + quot);
//#2
var a = Number(prompt("Введите первое число"));
var b = Number(prompt("Введите второе число"));

var sum = a + b;
var diff = a - b;
var prod = a * b;
var quot = a / b;

alert("Сумма: " + sum + ", Разность: " + diff + ", Произведение: " + prod + ", Частное: " + quot);
//#3
var str = '52';
var convertedNum = Number(str);
alert("Сконвертировано : " + convertedNum + " YEEI " + " Да здравстуйет Санкт-Петербург! " + " И это город наш! ");

//#4
var userAge = prompt("Введите ваш возраст");
if(userAge <= 18){
    alert("Вам " + userAge + " полных лет. " + " Вы молодняк! ");

}
else{
    alert("Вам " + userAge + " полных лет. " + " Вы старый! ");
}

//#5
var isAgreed = confirm("Вы согласны на получение уведомлений?");
if (isAgreed) {
    alert("Пользователь согласен на получение уведомлений.");
} else {
    alert("Пользователь не согласен на получение уведомлений.");
}
//#6
var radius = prompt("Введите радиус круга");
var area = 3.14 * radius * radius;
alert("Площадь круга: " + area);
//#7
var num1 = Number(prompt("Введите первое число"));
var num2 = Number(prompt("Введите второе число"));
var num3 = Number(prompt("Введите третье число"));

var average = (num1 + num2 + num3) / 3;
average = average.toFixed(2);
alert("Среднее арифметическое: " + average);

//#8
var num1 = Number(prompt("Введите первое число"));
var num2 = Number(prompt("Введите второе число"));

var diff = num1 - num2;

if (diff < 0) {
    alert("Разность отрицательна: " + diff);
} else {
    alert("Разность: " + diff);
}

//#9
var quote = prompt("Введите вашу любимую цитату или поговорку");
var length = quote.length;
alert("Длина строки: " + length);

//#10
var num = Number(prompt("Введите начальное значение"));
num += 10;
alert("Результат: " + num);

//#11

/*a будет равно 2, потому что оператор ++ перед переменной (++a) увеличивает значение a на 1 до того, как оно будет использовано.
b будет равно 2, потому что оператор ++ после переменной (b++) увеличивает значение b на 1 после того, как оно было использовано.
c будет равно 2, потому что c присваивается значение a после того, как a было увеличено на 1.
d будет равно 1, потому что d присваивается значение b до того, как b было увеличено на 1.*/

var a = 1;
var b = 1;
var c = ++a; 
var d = b++; 
alert("A Равно: "+ a + " B равно: " + b + " C равно: " +  c + " D равно: " + d);
//#12x





 
