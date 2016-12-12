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
days(7);
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
numSum(123);
