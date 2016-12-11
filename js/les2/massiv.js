'use strict';

console.log('массивы');
// Массив – разновидность объекта, которая предназначена для хранения пронумерованных значений 


var emptyArr = []; // объявление массива

var pictures = ['forest', 'river', 'sky', 'ocean'];

var usersId = [1, 2, 4 , 7];

var difArr = ['String', 65, null, true, undefined];

// Элементы нумеруются, начиная с нуля.
// Чтобы получить нужный элемент из массива – указывается его номер в квадратных скобках:
var picturesForSite = pictures[2];
console.log(picturesForSite);
console.log(usersId[0]);
console.log(difArr[8]);

// Элемент можно заменить:
console.log(pictures);

pictures[2] = 'rain';
console.log(pictures);

// Или добавить
pictures[4] = 'winter';
console.log(pictures);

// length:
var userIdLenth = usersId.length;
console.log(userIdLenth);

// МЕТОДЫ МАССИВОВ

console.log(pictures.pop()); // pop() удалиляет последний элемент и возвращает его
console.log(pictures);

pictures.push('spring'); // push() добавляет новый элемент или несколько элементов к конец
console.log(pictures);

console.log(pictures.shift()); // shift() удаляет первый элемент массива и возвращает его
console.log(pictures);

pictures.unshift('flowers', 'night_city') //unshift() добавляет элемент или несколько элементов в начало массива
console.log(pictures);
// Методы push/pop выполняются быстро, а shift/unshift – медленно.

// перебор массива
for (var i = 0; i < pictures.length; i++) {
	console.log('Элемент массива №', i,  pictures[i]);  
}

pictures.length = 0 // очистить массив

var lessons = 'История, Химия, Физика, Литература';

var lessonsArr = lessons.split(', '); // split(', ') превратит строку в массив, разбив ее по запятой!
console.log(lessonsArr, typeof lessonsArr);


// Метод splice 
    // arr.splice(index[, deleteCount, elem1, ..., elemN])
pictures = ['forest', 'river', 'sky', 'ocean'];
// pictures.splice(1, 2);  // удалил два элемента, начиная с первого
console.log('SPLICE - удалил - ', pictures.splice(1, 2));  // возвращает удал элементы
console.log(pictures);

pictures.push('sunny_day', 'night_sky');
console.log(pictures);
pictures.splice(2, 1, 'NEW_PICTURE');
console.log(pictures);
// вставка без удаления -  deleteCount в 0



var arr = [1, 2, 3];
console.log(arr); 
arr.reverse();  // reverse() изменили порядок массива на обратный
console.log(arr);


// многомерные массивы

var asr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];


