(function(global) {
    'use strict'

    var slider = {
        init: function(id) {
            this.elem = document.getElementById(id); // = var elem
            this.slides =[],
        },
        add: function (imagePath, text) {
            this.image = document.createElement('img');
            image.setAttribute('src', imagePath);
            //создать img и добавить аттрибуты
            //добавление элементу атрибута src="img/"
            //добавление элементу аттрибута alt со значением 'text'
            //добавление стиля

            this.elem.appendChild(image);
            this.slides.push(image);
            this.elem.appendChild(image);
        },
        runSlideShow: function () {
            setInterval(nextSlide , 1500)             //стандартная функция, время в мс
        },
        nextSlide: function () {
            //сделать перебор массива с картинками. Проверять количество картинок
            //сделать 
        }
    };

slider.init('slider')//обращаемся к div slider
slider.add('img/pic1.jpg', 'Pictures');


    }(window))
