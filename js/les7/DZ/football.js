(function (global) {//создает самовызывающуюся функцию - обертку, чтобы не гадить ГЛОБАЛЬНО
    'use strict';   //насколько я понял - использование строго общепринятой 5 версии JS 


    function randomInt(min, max) { //явно задает функцию для рандомайзера
        if (arguments.length < 2) { //если аргументов у функции меньше 2 то мин = макс, то есть рандомайзер от 0 до макс, вместо от мин до макс
            max = min;
            min = 0;
        }
        return Math.floor(Math.random() * (max - min + 1)) + min;//возвращает случайное ЦЕЛОЕ число либо от 0 до макс либо от мин от мин до макс
    }


    function Person(firstname, lastname) { //функция конструктор для класса людей (для задания имени и фамилии)
        this.firstname = firstname;//создаем контекст конструктора
        this.lastname = lastname;
    }

    Person.prototype.getFullName = function () {//в прототипе функции создаем метод для функции конструктора 
        return this.firstname + ' ' + this.lastname;//при задании через прототип мы экономим память - все что ссылается на этот метод будет вызывать прототип
    };//возвращает имя и фамилию через пробел

    
    function Fan(firstname, lastname) {//создаем функцию - конструктор для ввода фанатов  
        Person.call(this, firstname, lastname);// копируем нужный контекст из конструктора, т.е. в функции fan будут переменные firstname и lastname из person
    }

    Fan.prototype = Object.create(Person.prototype);//используем метода конструктора, присваивая прототипы
    Fan.prototype.constructor = Fan;// НЕ ПОНЯЛ ЗАЧЕМ ЭТО. ОБЪЯНИТЕ, ПОЖАЛУЙСТА  :*(  предполагаю, что строкой выше мы назвали прототип Fan как Person. А этой строкой вернули обратно.

    Fan.prototype.onGoal = function () {//в прототипе функции Fan добавили метод для реакции фанатов на гол
        var reaction = ['скандирует речевку', 'палит фаер', 'машет флагом'],//создали массив с реакциями
            i = randomInt(reaction.length - 1);//рандомная переменная на основе ранее созданной функции
        return this.getFullName() + ' ' + reaction[i];//возвращаем имя фаната и его реакцию
    };

    Fan.prototype.onFail = function () { //реакция на гол своей команде, тоже самое что и onGoal
        var reaction = ['хватается за голову', 'кричит судью на мыло', 'зачиняет драку'],
            i = randomInt(reaction.length - 1);
        return this.getFullName() + ' ' + reaction[i];
    };


    function Footballer(firstname, lastname) {  //функция для учета футболистов, то же что с фанатом
        Person.call(this, firstname, lastname); // копируем нужный контекст из конструктора, т.е. в функции Footballer будут переменные firstname и lastname из person
    }

    Footballer.prototype = Object.create(Person.prototype);// то же, что и у фанатов
    Footballer.prototype.constructor = Footballer;// то же, что и у фанатов

    Footballer.prototype.goal = function () {//добавили метод goal в прототип. Добавляет счет нужной команде
        this.team.goals += 1;//не понял, что мы тут сделали? у нас же нет переменных team и goals...
    };//team и goals будут добавлены позже. team - объект (задается в 64 и 69 строках). Хотя это же не метод а свойство объекта...
//получается goals - это свойство объекта team, а this в данном случае (при обащении к Footballer.prototype.goal) присвоет название команды
        console.log(this);

    function Team(name) {//фунция для создания команды
        this.name = name;//переменная для названия команды 
        this.footballers = [];//массив для футболистов
        this.fans = [];//массив для фанатов
        this.goals = 0;//по умолчанию 0 голов
    }

    Team.prototype.addFootballer = function (footballer) {//создаем метод в прототипе для добавления футболистов
        this.footballers.push(footballer);//добавляем в массив футболистов
        footballer.team = this;// обозначаем, что свойству объекта footballer team (принадлежность команде) 
        //будет присвоевоено значение переменной, через которуб мы обращаемся Team.prototype.addFootballer
        //плохо понял эту конструкцию


    };

    Team.prototype.addFan = function (fan) {
        this.fans.push(fan);
        fan.team = this;

    };


    function Scoreboard(elemId, team1, team2) {//фунция конструктор для табло
        this.elem = document.getElementById(elemId);//что то я не понял нихрена... не вижу в index.html элемента с id. Там вообще мало что есть
        this.elem.classList.add('scoreboard');//создает класс к элементу elem
  /*прописываем данный код в HTML "\" это просто перенос строки  */ 
      this.elem.innerHTML = '\
            <div>\
                <div class="team"></div>\
                <div class="score">\
                    <span>0</span>\
                    <span>:</span>\
                    <span>0</span>\
                </div>\
                <div class="team"></div>\
            </div>\
            <div class="messages"></div>'

        this.messages = this.elem.querySelector('.messages');  //создаем переменную messages и присваеваем ей значение селектора .messages??? как так?:)
        this.team1Score = this.elem.querySelector('.score span:first-child');/
        this.team2Score = this.elem.querySelector('.score span:last-child');

        this.elem.querySelector('.team:first-child').appendChild(document.createTextNode(team1.name));
        this.elem.querySelector('.team:last-child').appendChild(document.createTextNode(team2.name));

        this.team1 = team1;
        this.team2 = team2;
    }

    Scoreboard.prototype.showMessage = function (msg) {
        var p = document.createElement('p');
        p.appendChild(document.createTextNode(msg));

        this.messages.insertBefore(p, this.messages.firstChild );
    };

    Scoreboard.prototype.updateScore = function () {
        this.team1Score.replaceChild(
            document.createTextNode(team1.goals),
            this.team1Score.firstChild
        );

        this.team2Score.replaceChild(
            document.createTextNode(team2.goals),
            this.team2Score.firstChild
        );
    };


    function Game(elemId, team1, team2) {//функция конструктор для игры. 
        this.team1 = team1;
        this.team2 = team2;
        this.scoreboard = new Scoreboard(elemId, team1, team2);//вызваем Scoreboard и вносим туда значения из Game. Не понял что такое elemId, откуда вообщемы его берем?
    }

    Game.prototype.start = function (matchTime) {
        var that = this;
        console.log(this);
        matchTime = matchTime || 10;

        function timeout() {
            var team = randomInt(1) ? that.team1 : that.team2,
                opponents = team === that.team1 ? that.team2 : that.team1,
                footballer = team.footballers[randomInt(team.footballers.length - 1)],
                success = randomInt(1),
                i,
                msg;

            if (success) {
                footballer.goal();
                that.scoreboard.showMessage(footballer.getFullName() + ' забил гол!');
            }

            i = team.fans.length;

            while (i--) {
                msg = success ? team.fans[i].onGoal() : team.fans[i].onFail();
                that.scoreboard.showMessage(msg);
            }

            i = opponents.fans.length;

            while (i--) {
                msg = success ? opponents.fans[i].onFail() : opponents.fans[i].onGoal();
                that.scoreboard.showMessage(msg);
            }

            that.scoreboard.updateScore();

            matchTime -= 1;
            
            if (matchTime) {
                setTimeout(timeout, 1000);
            }
        }
        
        setTimeout(timeout, 1000);
    };


    var team1, team2,
        footballer1, footballer2, footballer3, footballer4,
        fan1, fan2, fan3, fan4,
        game;

    team1 = new Team('Питерские Гризли');
    team2 = new Team('Гламурные Ёжики');

    footballer1 = new Footballer('Дмитрий', 'Иванов');
    footballer2 = new Footballer('Михаил', 'Иванов');
    footballer3 = new Footballer('Игорь', 'Смирнов');
    footballer4 = new Footballer('Юрий', 'Васильев');

    fan1 = new Fan('Кирилл', 'Версетти');
    fan2 = new Fan('Виталий', 'Чертков');
    fan3 = new Fan('Дарья', 'Буртова');
    fan4 = new Fan('Сергей', 'Хоружа');

    team1.addFootballer(footballer1);
    team1.addFootballer(footballer2);
    team1.addFan(fan1);
    team1.addFan(fan2);

    team2.addFootballer(footballer3);
    team2.addFootballer(footballer4);
    team2.addFan(fan3);
    team2.addFan(fan4);

    game = new Game('football-wrapper', team1, team2);
    game.start();
}());