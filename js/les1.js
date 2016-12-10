'use strict'
/*
многострочный комментарий
ВСЕ СМОТРИМ ЧЕРЕЗ БРАУЗЕР И les1.html
*/

var students; //объявление однотекстового комментария
students = 15; // присвоение значения переменной
console.log(students);

// В йава существует 6 типов данных
var str = 'студенты'; //строка 1
var num = 9; // число 2
var boo = true; // булева или логиеская переменная 3
var booTwo = false; //двойные названия пишут без пробелов, новое слово с большой буквы 4
var unknownValue = null; //значение не известно 5
var notSetValue; //значение не присвоено 6
var obj = {type:'Object'}; //объект
console.log(notSetValue);

//определить тип данных можно определить командой type.of
console.log(typeof(num))

var str = 'В JS';
var num = 6;
var str1 = 'типов данных - ';
var boo = true;
console.log(str, num, str1, boo);

var num1 = 2;
var num2 = 3;
var summ = num1 + num2;
var divide = num1/num2;
num1 = -num1; //унарный минус
console.log(summ, divide);

var str1 = 'dom';
var str2 = 'bra';
console.log(str1 + str2); //строки схлопываются

var num = 15;
console.log(num + str1); // сложение числа со строкой = строку
console.log(num/str1); //NaN - ошибка вычисления

console.log ('4' + '6'); // получаетс текстом 46
console.log(+'4'+ +'6')// получается 10 "+" преобразует строку в число
//оператор присваивания =  имеет низкий приортет
var n = 9;
n += 1; // n = n + 1
console.log(n);
n *= 5; // n = n * 5;
console.log(n);

//остаток от деления %
var x = 8, y = 3;
console.log(x%y);

var x = '10';
var y = 3;
var z;  // остаток от деления x на y,
        //z умножить на 3
        //разделить  на 5
        //к полученному результату прибавить 5


z = +x % y; //унарный + переводит строку в число
console.log('остаток от деления =', z);
//var result = (z*3)/5 + 5; - можно так, но еще и по другому
z *= 3;
console.log('умножили на 3 =', z);
z += 5;
console.log('прибавили 5 =', z);
var result = z;
console.log(result);

// ++ инкремен. Увеличивает число на 1
// -- декременет. Уменьшает число на 1
var i = 1;
i++; // i = i + 1
console.log(i);
var j = 6;
j--; // j = j - 1
console.log(j);

// операторы сравнения ('>' '<' '==' '!=') больше меньше равно "не равно"

console.log(5 > 'str'); //сравнение числа со строкой даст false
console.log(5 > '9'); //
console.log('number' < 'examle'); // сравнивает по 1ым буквам по алфавиту
console.log('a > b', 'a' > 'b');
console.log('A > a', 'A' > 'a');
console.log('! > _', '!' > '_');

console.log('0 == false',  0 == false); //равенство
console.log('0 === false', 0 === false); // строгое равенство

console.log(' == false',  '' == false); //равенство
console.log('0 === false', '' === false); // строгое равенство

//тернарный оператор ?
// (условие ? значение1 : значение2)
//проверяется условие
// если оно верно, возвращается значение1
//если нет - значение2

console.log(5 > 7 ? 'OK' : 'Not OK');

var x, y;
x = 5;
y = 7;
//если остаток от деления x на y меньше или равен 4 -> сложить x и y
// если нет - вывести остаток
console.log(x%y <= 4 ? x + y : x%y);

var z = 4 / 0; // результат - infinity, это тип данных число
console.log(z);

var n = 4, m = 6;
//если перимтр больше 14 -> найти диагональ
//если меньше -> найти площадь
var perimetr = (n + m)*2,
    diagonal = Math.sqrt(n*n + m*m),
    square = n * m;
console.log (perimetr > 14 ? diagonal : square); 
console.log (Math.PI);
