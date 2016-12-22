(function () {
	'use strict';

	console.log('вешаем обработчики');
// 2й способ повесить обрабтчик
	var button = document.getElementById('mouseEventsBut');
	button.onclick = hideList;

	function hideList () {
		var div = document.getElementById('mouseEvents');
		var ul = div.getElementsByTagName('ul');
		ul[0].classList.add('hideElem');
	};




// 3й способ повесить обрабтчик
	var text = document.getElementById('mouseEventsh1');
	text.addEventListener('mouseover', showList);

	function showList () {
		var div = document.getElementById('mouseEvents');
		var ul = div.getElementsByTagName('ul');
		ul[0].classList.remove('hideElem');
	};

// Удалить обработчик
	// elem.removeEventListener('click', showElem);

// Порядок событий
	// setTimeout(…,0)

// Объект события

	// Детали произошедшего события (координаты курсора, нажатая клавиша и тд) 
	// браузер записывает в «объект события», 
	// который передаётся первым аргументом в обработчик.
	// для того, чтобы посмотреть информацию о событии, надо обратиться к этому "объекту"



	var div = document.getElementById('mouseEvents');
	div.addEventListener('contextmenu', showEventObj);
	function showEventObj (event) {		  
			event.preventDefault();  // отмена действия браузера см.ниже 
									// (выделение текста по двойному клику и тд)
			console.log(event);  // посмотреть инфо о событии
	}



// Всплытие и перехват.
	// При наступлении события обработчики сначала срабатывают 
	// на самом вложенном элементе, затем на его родителе и тд
	
	div.addEventListener('dblclick', showDivInfo);
	function showDivInfo () {
		console.log('dbclick по DIV');
	};
	
	var ul = div.getElementsByTagName('ul');
	ul[0].addEventListener('dblclick', showUlInfo);
	function showUlInfo (event) {
		console.log('dbclick по UL');
		event.stopPropagation();   // остановка встплытия
	};


// Делегирование событий.
	// можно поставить один обработчик на их общего предка элементов. 
	// Из него можно получить элемент event.target, 
	// понять на каком именно потомке произошло событие и обработать его.

	
	function focusElem (event) {
		var atr, elem;
		atr = event.target.getAttribute('data-action');				
		elem = document.getElementById(atr);		
		elem.classList.add('focusElem');
	};

	var elem = document.getElementById('menu');
	elem.addEventListener('click', focusElem);


// про DOM элементы
	// document.addEventListener("DOMContentLoaded", ready);
	// function ready () {
	// 	alert('DOM построен');
	// }

	// window.onbeforeunload = askUser;
	// function askUser () {
	// 	return "Может быть останетесь";
	// }


	// var inp = document.getElementById('input');
	// inp.addEventListener('keydown', showScan);  // нажатие клавиш клавиатуры

	// function showScan(event) {
	// 	console.log(event.keyCode);
	// }

 
	




// 





}());