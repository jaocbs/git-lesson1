(function (global) {
    'use strict';

    function Person(firstname, lastname) {     //все функции конструкторы именутся с большой буквы
            this.firstname = firstname;         //все данные добавлять в функцию конструктор, а все методы в прототип
            this.lastname = lastname;
           
    }

Person.prototype.getFullNmane =  function () {  //любой метод нужно класть в прототип
                return this.firstname + ' ' + this.lastname;
            }; // добавили в функцию прототип


    var person1 = new Person('Петя', 'Ручкин'),  //new выделяет память под создаваемый объект
        person2 = new Person ('Руперт', 'АлычОвый');

console.log(person1,person2, person1 === person2);
console.log(person1.getFullNmane(),
                '     ',
            person2.getFullNmane()
    );

    console.log(person1.getFullNmane, person2.getFullNmane, person1.getFullNmane === person2.getFullNmane);
    //сравнивает 2 разные области памяти, то есть если значения person1 person2 будут одинаковые, то все равно выдаст false
    //можно добавть в прототип и будет true.


    






}(window));