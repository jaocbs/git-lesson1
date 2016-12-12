'use strict'
//Задача 1. Есть три вершины. Координаты X, Y, Z заданы как целые числа. Нужно определить - является ли треугольник с заданными координатами прямоугольным.
//В решении использовать только математические и логические операторы. Результат в консоль.
//Обязательное условие: все вычисления производить только с целыми числами. Любой переход в дробные числа запрещен!
var x = [0, 0];
var y = [5, 0];
var z = [5, 5];
//опредляем длины сторон Треугольника
var xy = Math.sqrt(Math.pow((x[1] - y[1]),2) + Math.pow((x[0]-y[0]),2));
var xz = Math.sqrt(Math.pow((x[1] - z[1]),2) + Math.pow((x[0]-z[0]),2));
var yz = Math.sqrt(Math.pow((z[1] - y[1]),2) + Math.pow((z[0]-y[0]),2)); 
console.log(xy, xz, yz);

//считаем квадраты (для простоты)
var xy2 = Math.pow(xy, 2);
var xz2 = Math.pow(xz, 2);
var yz2 = Math.pow(yz, 2);

//вывод теоремы пифагора числами для контроля. Используем округление, иначе он считатет дробями. 
//при извлечении корня получаем дробь (если не делится без остатка), и при возведении ее в квадрат целого числа не получается. 
console.log(Math.pow(xy, 2), Math.pow(xz, 2) + Math.pow(yz, 2));
console.log(Math.pow(xz, 2), Math.pow(xy, 2) + Math.pow(yz, 2));
console.log(Math.pow(yz, 2), Math.pow(xy, 2) + Math.pow(xz, 2));

//метод tofixed возвращает строку, он не подходит. Хотя это более точное решение.
console.log(xy2.toFixed(3), xz2.toFixed(3), yz2.toFixed(3));
console.log(Math.round(xz2), Math.round(xy2) + Math.round(yz2));

if (Math.round(xy2) == Math.round(xz2) + Math.round(yz2)) {
    console.log('Треугольник является прямоугльным (почти)');
} else if (Math.round(xz2) == Math.round(xy2) + Math.round(yz2)) {
    console.log('Треугольник является прямоугльным (почти)');
} else if (Math.round(yz2) == Math.round(xy2) + Math.round(xz2)) {
    console.log('Треугольник является прямоугльным (почти)');
} else console.log('Треугольник НЕ является прямоугльным');


//Задача 2. Создать массив из чисел. 
//Выполнить сортировку массива по возрастанию методом пузырька. Запрещено использовать стандартные методы.

var arr = [100, 4, 10, 3, 16, 8, 549, 234, 22];
var emptyArr = [];

console.log(n);
var n = arr.length;
console.log(arr);
for (var i = 0; i < n-1; i++) {

    for (var j = 0; j < n-i-1; j++) {//j < n-i-1 - так должно быть быстрее чем j<n, правильно?:)

    if (arr[j+1] > arr[j]) {
       var max = arr[j];
       arr[j] = arr[j+1];
       arr[j+1] = max;
        }
    }
}
 console.log(arr);   
// 3. Написать программу для перевода числа из десятичной системы счисления в двоичную и наоборот. Вам понадобится метод 
// Math.floor(), чтобы отбросить дробную часть и метод pow() объекта Math, он возводит число в степень

var num10 = 54;
var num2 = [];


console.log('dec number', num10);
 if (num10 == 0) {
        num2.push(0);
    }
while (num10 >= 1) {
    if (num10 == 0) {
        num2.push(0);
    } else if (num10 % 2 == 0) {
        num10 = num10 / 2;
        num2.push(0);
        } else   {
            num10 = Math.floor(num10/2);
            num2.push(1);
        }
}
console.log('binary number', num2.reverse());
var num22 = num2.reverse();

var t = [];
var numDec = 0;
for (i = 0; i < num2.length; i++) {
    if (num22[i] == 1) {  
        t[i] = Math.pow(2, i);
    } else t[i] = 0;
    numDec = numDec +t[i]; 
}
console.log('десятичное число = ', numDec);







