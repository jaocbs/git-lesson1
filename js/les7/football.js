(function (global) {
    'use strict';

    function randomInt(min,max) {
        if (arguments.lenght < 2) {
            max = min;
            min = 0;
        }
        return Math.floor (Math.random() * (max-min+1)) + min;
    }

    function Person(firstname, lastname) {     //все функции конструкторы именутся с большой буквы
            this.firstname = firstname;         //все данные добавлять в функцию конструктор, а все методы в прототип
            this.lastname = lastname;
    }



Person.prototype.getFullNmane =  function () {  //любой метод нужно класть в прототип
                return this.firstname + ' ' + this.lastname;
            }; // добавили в функцию прототип


    var person1 = new Person('Петя', 'Ручкин'),  //new выделяет память под создаваемый объект
        person2 = new Person ('Руперт', 'АлычОвый');


        function Fan(firstname, lastname) {//call, apply, bind
            Person.call(this, firstname, lastname);
        }

        Fan.prototype = Object.create(Person.prototype); //скопировали прототип person и применили его к Fan. Связи между ними нет
        Fan.prototype.constructor = Fan; //вернули конструктор на Fan, вернули все до object.create

        Fan.prototype.onGoal = function () {
            var reaction = ['скандирует речевку', 'палит фаер', 'машет флагом'],
                i = randomInt(reaction.length);//позже напишем функцию генерации случайного числа (до максимального числа переменных в массиве);
            return this.getFullNmane() + ' ' + reaction[i];
        };


        function Footballer() {
            Person.call(this, firstname, lastname);
        }
        Footballer.prototype = Object.create(Person.prototype);
        Footballer.prototype.constructor = Footballer;



        function Team(name) {
            this.name = name;
            this.footballers = [];
            this.fans = [];
            this.goals = 0;
        }

        Team.prototype.addFootballer = function (footballer) {
            this.footballers.push(footballer);
            footballer.team = this;
        };
        
        Team.prototype.addFan = function (fan) {
            this.fans.push(fan);
            fan.team = this;
        };

        function Scoreboard() {}

        function Game(elemId, team1, team2) {
            this.team1 = team1;
            this.team2 = team2;
            this.scoreboard = new Scoreboard(elemId);
        }
    
        var fan1 = new Fan('Sid', 'Wishes'),
            fan2 = new Fan('Juy', 'Gotko'),
            footballer1 = new Footballer('Дмитрий','Иванов'),
            footballer2 = new Footballer('Михаил', 'Иванов'),
            team1 = new Team('Питерские Гризли');

            team.addFootballer(footballer1);
            team1.addFootballer(footballer2);
            team1.addFan(fan1);
            team1.addFan(fan2);


}(window));