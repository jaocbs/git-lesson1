'use strict'
function days(x) {
        switch (x) {
            case x=1:
                console.log(x + ' день ');
                break;
            case x=2:
                console.log(x +' дня');
                break;
            case x=3:
                console.log(x +' дня');
                break;
            case x=4:
                console.log(x +' дня');
                break;                                
            case x=5:
                console.log(x +' дней');
                break;
            case x=6:
                console.log(x +' дней');
                break;
            case x=7:
                console.log(x +' дней');
                break;                                
            default: console.log ('проверетье правильность данных'); 
        }
    
}
days(5);
console.log(1%10);

function numSum (n) {
    var t = [];
    var i = 0; 
    while (n > 0) {
        var t1 = n % 10;
        n = Math.floor(n / 10);
        t.unshift(t1);
        i++;
    }
        console.log(t);
    }
numSum(9);
 
 //карирование. Очень странная фигня, для чего это вообще? почему нельзя просто задать 2 переменные в 1 функции?
 //не хватает конкретных примеров применения, наглядно демонстрирующих что мы делаем и для чего/в каких случаях
 //в будущем можно/следует применять эти приемы (все, что мы делаем). Это пожелание для лекций:) 
function kare(x) {
    
 return function (step) {
    x = x + step;
    console.log(x)
}
}
kare(1)(10);