(function () {          //скобки в конце делают функцию самовызывающейся
    'use strict'        //это обертка позволяет не писать в главном окне.
                            // это называется модуль. весь урок написан в модуле.
    console.log('Objects');

    var obj = {};// создать объект
    //obj= new Object; это старая форма задавани объекта


    console.log(obj);

    var user = {} //задаем объект
    user.id = 2//к свойствам объектов обращаются через точку
    user.login = 'qwerty';
    user.email = 'qwerty@mail.ru'

    console.log(user.email);
    delete user.email
    console.log(user.email);//будет вывожиться undefined если ничего нет. нужно проверять


    //доступ к свойств амобъекта  через переменную
    var loginKey = 'login';
    console.log(user[loginKey])

    if ('login' in user) { //проверка если ли что то в объекте
        console.log('login');
    } else console.log('no');

        user = {
            id: 3, //то же, что и user.id = 3
            login: 'qwerty', // всегда нужно ставить запятые
        };

        var het = {
            hat: {
                    hit: 505,
                }, // можно задать объект в объекте
            hut: 123,
            hot: 666,
            gat: ['f', 2, 4],
        };

var horseSize = 'big';
var ponySize = horseSize;
//эти две переменные храняться в разных ячейках памяти.
ponySize = 'small';

console.log('horseSize = ' + horseSize + '; ' + 'ponySize = ' + ponySize);
//изменение ponySize не влечет за собой изменения horseSize

var horse = {
    size: 'big',
};
var pony = horse; //это ссылка на объект, он объявляется один раз.

pony.size = 'small';// при изменении этого свойства меняется ВСЕ
// то есть var pony = horse - это ссылка и pony.size = 'small' объявляет весь объект small

console.log('horseSize = ' + horse.size + '; ' + 'ponySize = ' + pony.size);

//через цикл for можно перебиривать свойства объекта
// for (var key in 'имя объекта') {
//     console.log('имя свойства' + key + 'значение')
// }

for (var i in het ) {// в данном случае цикл for рабоет по другому
    //мы просто пишем var i и оно само будет перебирать свойства объекта
    // in указывает что мы хотим войти в объект. И далее указываем его имя
    console.log('имя свойства ' + i + 'значение ' + het[i]);
}

for (var key in het) {
    var x = het[key];
    console.log();
    if (typeof x == 'object') {  //проверяем является ли свойтво объекта массивом.
        for (var i = 0; i < x.length; i++) {// если да, то хотим вывести его значения по очереди
            console.log(x[i]);
        }
    }
    if (typeof x == 'object') {// делает то же самое что и сверху
        for (var i in x) {
            console.log(x[i]);
        }
    }
}

user = {
    id: 3,
    login: 'qwerty',
    changeLogin: function (newLogin) {//это называется метод объекта. обычно функция в объекте и есть метод объекта
        user.login = newLogin;
    //this.login - так нужно писать вместо user.login 
    //то есть через this мы обращаемся к данному объекту 
    },
};

user.changeLogin('Fill');
console.log(user.login);

//через новый объект admin и его метод addUserRating добавили новое свойтво и его значение
var admin = {
    addUserRating: function (rating) {
        user.rating = rating;
    },
};

admin.addUserRating(5);
console.log(user);







} ()) 