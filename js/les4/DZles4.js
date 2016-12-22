(function () {
'use strict'

//задача 2.

var city1 = {
    name: 'Peterburg',
    population: 101,
    mayor: 'Poltavchenko',
    M1: function (people) {
        this.population = city2.population - people + this.population;
    }
};


var city2 = {
    name: 'Moscow',
    population: 202,
    mayor: 'Sobyanin',
};
city1.M1(300);
   console.log(city1.population , city2.population);   

function cityInfo (city) {
    console.log(city.name, city.population, city.mayor);
}

cityInfo(city1);

var president = {
    changePresident: function (president) {
        city1.mayor = president;
    },
};
 president.changePresident('Putin');
 console.log(city1.mayor);



}())