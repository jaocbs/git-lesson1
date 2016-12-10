'use strict'  //чтобы работать с новыми стандартами используют эту надпись

var a = 1;
var b = 1;
console.log(a++);//постфиксная форма
console.log(a); //сначала возвращает значение а потом увеличивает его

console.log(++b); //префиксная форма,то есть сначала он прибавляет а потом выводит


//for (начало;условие;шаг) {
//}


/*switch var b > 5 {
    case b = 5:
        b++
        break;

    default:
        break;
}

/*NaN - ошибка вычислений 
"number" - строка
null - отдельний вид данных
*/
var arr = [1, 6, 5];
console.log(arr[1]);

//while (b > 9) { если условие true - код будет выполняться
// }

arr.push(8);// - добавить элемент в массив в конец

var arr = [1, 8, 5, 10];
console.log(arr);
console.log(arr.Lenght);
for (var i = 0; i < arr.Lenght; i++) {
    console.log(arr[i]);  
}
arr[0] = 2;

