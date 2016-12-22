'use strict'

console.log('strings')
var str = 'string';
str = 'very\nlong\nstring';// \n - перенос
console.log(str);
// \ обратный слэш - экранирование символов
// то есть в примере ниже n будет выводиться на экран
str ='use \\n';
console.log(str);

str = 'String \'String\''; // в данном примере ковычки нужно экранировать иначе будет выдаваться ошибка
console.log(str);

console.log('методы и свойства строк');

str = 'String';
console.log(str.length);// метод length показывает длину строки

console.log(str.charAt(2)); //для доступа к символу по позиции 
//позиции начинаются с 0. Выведет 
console.log(str[3]); // делает тоже самое, альтернативный

console.log(str.indexOf('n', 1));//возвращает позицию указанного символа в строке  
//второе значение - позиция с которой начинается поиск
//возвращает -1 если ничего не нашел

str = 'String';
console.log(str.toUpperCase());  //приведение к верхнему регистру и нижнему
console.log(str.toLowerCase());  //приведение к верхнему регистру и нижнему
console.log(str.substr(1,2));  //возвращает подстроку начиная с 1 позиции и 2 симовола

console.log(str.slice(0,4)); //возвращает подсторку от начальной до конечной позиции НЕВКЛЮЧИТЕЛЬНО

str = 'String';
console.log(str.localeCompare('Stri'))// в скобках указываем строку с которой мы хотим сравнить нашу строку
//если строки равны метод возвращает 0. Это строгое равенство.

//-1 если str1>str2
//+1 если str2>str1

var height = '12.6 sm';
var width = '35 sm';

console.log(parseInt(height));//перестает работать как только доходит до Не числа. ВОспринимает только если оно первое сстроке
console.log(parseInt(width));//возвращает число, отбрасывает дробную часть

console.log(parseFloat(height));//возвращает число с точкой
console.log(parseFloat(width));
//то есть из строки делает число