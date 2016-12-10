'use strict'
//функция - это подпрограмма. Все функции это объекты

/*
function имя_функции([аргумент1....аргументN_функции]) {  
тело функции - код, который будет выполняться при обращении к функция
return;
}
одна функци - одно действие.
*/

function printSelf() {
    console.log(printSelf);
}
printSelf();  //вызов функции. В данном случае выведет весь текст функции
//если функцию не вызывать ничего не произойдет

function printName(name) {
    console.log('привет ' + name);
}

printName('Василий');


function sum(a, b) {
    var checkTypeRes = checkType(a,b);
    console.log(checkTypeRes);
    if (checkTypeRes) {
        console.log(a+b);
    } else {
        return 'gbpl';
    }
   // checkType(a,b);     //эту функцию мы создали позже и хотим здесь ей воспользоваться - чтобы были только числы
   // return;             // заканчивает работу функции.Прервать работу функици в нужном нам месте
                        // по умолчанию return выдает undefined
    //console.log(a + b);  
}
sum('sdf' , 3);


// аргументы можно перебрать циклом for. если Юзер положит не 1 аргмент а несколько, то функции будет все равно.
//никакой ошибки не будет. 

function printName(name, surname) {
    for (var i = 0; i < arguments.length; i++) {
        console.log('Hello', arguments[i] ); //это использовано просто для того чтобы вывести аргументы
        console.log('1Hello '+ name + surname ); // если использовать + то все содержимое пребразуется в строку (при наличии хотя бы одного строчно элемента)
        //Если все переменные в числовом формате, то они будут складываться
        //через arguments[i] можно обратиться к любым значениям аргументов функции
    }
    //console.log('привет ' + name);
}

printName('Василий', 'Ivan', 'Gnoy');  //все значения пойдут в аргументы. Первые два значние будут соответствовать аргументам функции
//а все остальное будет запомнено, но не использовано.

function printName2(name, surname) {  // если при объявлении функции одно из значний отсутствует -  то они undefined по умолчанию.
        name = name || 'имя не известно'; // это будет параметр по умолчанию
        surname = surname || 'укажи фамилию. Жалко что ле?';
        console.log('2Hello '+ name + surname );
}
printName2('shekolda_');

// Бывает, что вместо строчного значения приходит число, то это может вызвать неправильную работу функции.
// Для этого необходимо уметь определять тип данных


function checkType (a,b) {  
        if  (typeof a == 'number' && typeof b == 'number') {
            console.log('числа')
            return true;
        } else {
            console.log('не числа')
            return false;
        }
}


function calc (a,b,oper) {
    var checkTypeRes = checkType(a,b);
    if (checkTypeRes) {
        if (oper == '+') {
            console.log(a+b);
        }   else if (oper == "-") {
            console.log(a-b);
        }   else if (oper == "/") {
            console.log(a / b);
        }   else console.log(a * b);
                    } 
}

calc (10 ,2, '*');

