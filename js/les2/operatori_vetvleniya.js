'use strict';

// логические операторы || или, && и, ! не

// Преобразуют условие к логическому типу и возвращают либо true либо false

// В логическом контексте: число 0,  =>  false!!!
						   // пустая строка "",  =>  false!!!
						   // null  =>  false!!!
						   // undefined, =>  false!!!
						   // а также NaN =>  false!!!
var year = 2016;

// || - если хотя бы одно из условий верно, то возвращает true, иначе – false
var answer = (year < 2000 || year > 2008) ? 'одно из условий верно' : 'ни одно условие не является верным'; 
console.log(answer);

// && - если все условия верны, возвращает true, иначе - false 
answer = (year > 2000 && year < 2008) || (year == 2015) ? 'оба условия верны' : 'по крайней иере одно условие не является верным'
console.log(answer);
// Приоритет оператора И && больше, чем ИЛИ || - он выполняется раньше

// ! - не 
// приводит аргумент к логическому типу true/false.
// Затем возвращает противоположное значение.
console.log(!true);
// двойное !! используют для преобразования значений к логическому типу:
console.log('!!1 - ', !!1);




console.log('операторы ветвления');


// тернарный оператор "?"

console.log(5 > 7 ?  "OK" : "NOT OK");

// условие1             ? значение1 : 
// значение2 (условие2) ? значение1 :
// значение2 (условие3) ? значение1 : значение2

var date = new Date();
var month = date.getMonth();
console.log(month); // от 0 до 11, где 0 - январь


var yearTimes  = (month == 11 || month <= 1) ? 'winter' : 
				 (month >= 2 || month <= 4) ? 'spring' :
				 (month >= 5 || month <= 7) ? 'summer' : 'autumn'; 
console.log(yearTimes); 



// условный оператор


// if (условие) {
// 	конанда, которая выполнится, если условие верно;     
// } 

// Необязательный блок else 

// if (условие) {
// 	конанда, которая выполнится, если условие верно;     
// } else if () {
// конанда, которая выполнится, если условие верно;   
// } else {

// }

if (month == 11 || month <=1) {

	yearTimes = 'winter';
	console.log('На сайте зимний фон');
	
}  else if (month >=2 || month <= 4) {
	yearTimes = 'spring';
	console.log('На сайте весенний фон');
} else if (month >=5 || month <= 7) {
	yearTimes = 'summer';
	console.log('На сайте летний фон');
} else {
	yearTimes = 'autumn'
	console.log('На сайте осенний фон');
}
console.log(yearTimes);

// лучше не использовать тернарный оператор как if 

// task 2


// оператор выбора switch 
// 
// switch(переменная) {
//   case значение1 :  
//     команада, которую необходимо выполнить в данном случае
//     [break] 

//   case значение2 :  
//     команада, которую необходимо выполнить в данном случае
//     [break]
// ...
// ...
//   default :
//     команада, которую необходимо выполнить, если ни один case не совпал
//     [break]
// }
// Переменная проверяется на строгое равенство первому значению значение1, затем второму значение2 и так далее.
// Если break нет, то выполнение пойдёт ниже по следующим case, при этом остальные проверки игнорируются.
// Если ни один case не совпал – выполняется (если есть) вариант default.




switch(yearTimes) {
	case 'spring':
		console.log('На сайте весенний фон');	// if (userId === 5)		
		break;

	case 'summer':
		console.log('На сайте летний фон');   // if (userId === 7)
		break;

	case 'winter':
		console.log('На сайте зимний фон');   // if (userId === 6)
		break;

	case 5:
		console.log('Здесь число 5');  
		break;

	case 'autumn':
		console.log('На сайте осенний фон');

}


