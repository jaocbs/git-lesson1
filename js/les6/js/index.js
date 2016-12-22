(function () {
console.log('grg')
	var mouseEvents,
		keyboardEvents,
		documentEvents,
		elementsEvents;

	mouseEvents = [
		'События мыши',
		'mousedown - кнопка мыши нажата над элементом',
		'mouseup - к нопка мыши отпущена над элементом',
		'mouseover - мышь появилась над элементом',
		'mouseout - мышь ушла с элемента',
		'mousemove - каждое движение мыши над элементом генерирует это событие',
		'click - вызывается при клике мышью',
		'contextmenu - вызывается при клике правой кнопкой мыши на элементе',
		'dblclick - вызывается при двойном клике по элементу',
	];

	keyboardEvents = [
		'События клавиатуры',
		'keydown – когда посетитель нажимает клавишу',
		'keyup – когда посетитель отпускает клавишу',
		'keypress',
	];

	documentEvents = [
		'События документа',
		'DOMContentLoaded – когда HTML загружен и обработан, DOM документа доступен',
		'load – браузер загрузил все ресурсы',
		'beforeunload/unload – уход со страницы',
	];

	elementsEvents = [
		'События на элементах управления',
		'submit – посетитель отправил форму <form>',
		'focus – посетитель фокусируется на элементе (нажимает на <input>)',
	];

	function divCreator (id, textArr) {
		var div = document.getElementById(id);
		var ul = document.createElement('ul');
		var h1 = document.createElement('h1');
		var input = document.createElement('input');
		var p, li;
		input.setAttribute('type', 'button');
		input.setAttribute('value', 'Скрыть');
		input.id = id + 'But';
		h1.id = id + 'h1';
		ul.id = id + 'Ul';
		h1.appendChild(document.createTextNode(textArr[0]));
		div.appendChild(h1);
		for (var i = 1; i < textArr.length; i++) {
			p = document.createElement('p');
			p.appendChild(document.createTextNode(textArr[i]));	
			li = document.createElement('li');
			li.appendChild(p);		
			ul.appendChild(li);	
		}
		div.appendChild(ul);
		div.appendChild(input);
		return div;
	};

	divCreator('mouseEvents', mouseEvents);
	divCreator('keyboardEvents', keyboardEvents);
	divCreator('documentEvents', documentEvents);
	divCreator('elementsEvents', elementsEvents);





}());