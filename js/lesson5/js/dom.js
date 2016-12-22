(function () {
	'use strict'

// 1. DOM (Document Object Model) – объектная модель, используемая для XML/HTML-документов.

// 2. Узлы DOM дерева:
	//  Всё, что есть в HTML, находится и в DOM.	
		// Всего различают 12 типов узлов дерева, вот некоторыми из них:
		// 1. Документ.
		// 2. Узел с типом «элемент» - каждый HTML-тег образует такой узел дерева, 
		// 							вложенные в него теги - дочерние узлы.
		// 3. Узел с типом «текст» (текстовый узел) – содержит сам текст.
		// 						Текстовый узел содержит исключительно строку текста и 
		// 						не может иметь потомков.

// 3. Перемещение по DOM:
	// все нижеперечисленные навигационные свойства только для чтения!
	var doc = document;  // объект document, вход в DOM
	console.log(doc);

	// верхние элементы DOM доступны напрямую из document:
	var htmlView = document.documentElement;   // доступ к <html>
	console.log(htmlView);  

	var bodyView = document.body;  // доступ к <body>
	console.log(bodyView); 

	// В DOM доступна навигация по соседним узлам через ссылки:
		// 	1.По любым узлам.
		// 	2.Только по элементам.

	// если узел не найден, возвращают null

	// 1. Перемещение по любым узлам:
	// ДЕТИ
	// 1) childNodes хранит все дочерние узлы, включая текстовые
	for (var i = 0; i < document.body.childNodes.length; i++) {
      	console.log(i, 'дочерний узел <body> =', document.body.childNodes[i]); 
    }   

    // 2) firstChild возвращает ссылку на первый дочерний узел внутри указанного узла. 
    var bodyFirstChild = document.body.firstChild;
    console.log('Первый дочерний узел <body> =', bodyFirstChild);
    

    // 3) lastChild возвращает ссылку на последний дочерний узел в
	
	нутри указанного узла.
    var bodyLastChild = document.body.lastChild;
    console.log('Последний дочерний узел <body> =', bodyLastChild);  

    // РОДИТЕЛИ
    // 4) parentNode хранит все родительские узлы
    var bodyParent = document.body.parentNode;
    console.log('Родитель <body> =', bodyParent);

    // СОСЕДИ
    // 5) previousSibling - доступ к узлам слева
    var bodyPrevSib = document.body.previousSibling;
    console.log('Сосед узел <body> слева =', bodyPrevSib);   

    // 6) nextSibling - доступ к узлу справа
    var bodyNextSib = document.body.nextSibling;
    console.log('Сосед узел <body> справа =', bodyNextSib);   


    // 1. Перемещение только по узлам-элементам:
	// ДЕТИ
	// 1) children хранит только дочерние узлы-элементы, то есть соответствующие тегам.
    for (var i = 0; i < document.body.children.length; i++) {
        console.log(i, 'дочерний узел-элемент <body> = ', document.body.children[i]); 
    }
    
    // 2) firstElementChild возвращает ссылку на первый дочерний узел-элемент 
    	// (игнорируя узлы текст и комментарий).
    var bodyFirstElemChild = document.body.firstElementChild;
    console.log('Первый дочерний узел-элемент <body> =', bodyFirstElemChild);

    // 3) lastElementChild возвращает ссылку на последний дочерний узел-элемент 
    	// (игнорируя узлы текст и комментарий)
    var bodyLastElemChild = document.body.lastElementChild;
    console.log('Последний дочерний узел-элемент <body> =', bodyLastElemChild);

    // РОДИТЕЛИ
    // 4) parentElement хранит родительские узлы-элменты
    // parentElement равно parentNode во всех случаях, кроме:
    	console.log('Случай, когда parentElement не равен parentNode:\n',
    				'Родительский узел <html> =', document.documentElement.parentNode,
    				'а родительский узел-элемент <html> =', document.documentElement.parentElement);

    // СОСЕДИ
    // 5) previousElementSibling доступ к узлам-элементам слева
    var bodyPrevElemSib = document.body.previousElementSibling;
    console.log('Сосед узел-элемент <body> слева =', bodyPrevElemSib);

    // 6) nextElementSibling доступ к узлам-элементам справа
    var bodyNextElemSib = document.body.nextElementSibling;
    console.log('Сосед узел-элемент <body> справа =', bodyNextElemSib);


// 4. Поиск элементов в DOM

	// 1) getElementById('some_id') - поиск по id элемента		
		// (элементу должен быть назначен специальный атрибут id,
		// значение id должно быть уникально)
		// существует только в контексте document
	var elem = document.getElementById('findMebyId');
	console.log('getElementById("findMebyId") нашел элемент', elem, 'по его id');


	// 2) getElementsByName('some_name') - позволяет получить все элементы 
							// с одинаковыми значениями, заданные атрибутом name.
							// используется редко
	elem = document.getElementsByName("findMeByName");
	console.log('getElementsByName("findMeByName") нашел все элементы с' +  
				'name="findMeByName": ', elem);


	// 3) getElementsByTagName('tag_name') - ищет все элементы с заданным тегом внутри элемента 
							  // и возвращает их в виде списка.							
							  // Может искать внутри любого элемента,
							  // (не только в контексте document).
							  // Чтобы получить всех потомков, передать звездочку '*' вместо тега

	elem = document.getElementsByTagName('div');
	console.log('getElementsByTagName("div") нашел все элементы с тегом <div>\n' + 
				'(поиск осуществлялся в контекстесте document): ', elem);
	elem = document.getElementById('findMebyId');
	var h1InElem = elem.getElementsByTagName('h1');
	console.log('getElementsByTagName нашел все элементы с тегом <h1>\n' + 
				'(поиск осуществлялся в контекстесте elem): ', h1InElem);
	elem = document.body.getElementsByTagName('*');
	console.log('getElementsByTagName("*") нашел всех потомков с <body>\n' + 
				'(поиск осуществлялся с передачей "*" вместо тега): ', elem);


	// 4) getElementsByClassName('class_name') - возвращает коллекцию элементов 
											  // с классом class_name.
											  // Может искать внутри любого элемента,
							  				  // (не только в контексте document). 
	elem = document.getElementsByClassName('findMebyClassName');
	console.log('getElementsByClassName("findMebyClassName") нашел элементы' + 
				'с class="findMebyClassName"', elem);


	// 5) querySelector(селектор) - возвращает только первый элемент, 
							// соответствующий селектору CSS.
	elem = document.querySelector('ul>li');
	console.log('querySelector("ul>li") нашел 1й элемент по селектору "ul>li"', 
				elem);

	// 6) querySelectorAll() -  возвращает все элементы, 
							 // соответствующие селектору CSS
	elem = document.querySelectorAll('ul>li');
	console.log('querySelectorAll("ul>li") нашел все элементы по селектору "ul>li"', 
				elem);


// 5. Создание элементов DOM
	// 1) document.createElement('tag') - cоздает новый узел-элемент с указанным тегом
	var newP = document.createElement('p');
	console.log('createElement("p") создал новый узел-элемент <p>', newP);

	// 2) document.createTextNode('text') - cоздает новый текстовый узел с текстом text
	var newText = document.createTextNode('createTextNode("txt") создал новый текстовый узел');
	console.log(newText);

	// 3) innerHTML - свойство позволяет получить HTML-содержимое элемента в виде строки. 
					// В innerHTML можно и читать и писать.
	var div = document.getElementById('forInnerHtml');
	console.log('innerHTML прочитал содержимое div', div);
	div.innerHTML = '<div><h1>Динамически созданные элементы</h1></div>';

	// 4) Атрибуты HTML и свойства DOM
		// Атрибуты – это то, что написано в HTML, они должны быть строкой, видны в innerHTML
		// Работа с атрибутами осуществляетмя при помощт следующих методов:
			var a = document.getElementById('goToNextPage');

			var hasHref = a.hasAttribute('href'); // проверяет наличие атрибута
			console.log(a, 'hasAttribute("href"):', hasHref);

			a.setAttribute('type', 'button'); // устанавливает атрибут
			a.removeAttribute('type'); // удаляет атрибут

			var hrefValue = a.getAttribute('href'); // получает значение атрибута
			console.log('значение атрибута "href" = ', hrefValue);

		// Свойства DOM-объекттов принимают любые значения, регистрозависимы, не видны в innerHTML			
		// Узел DOM – это объект
			console.log('свойство href объекта DOM <a> =', a.href);


	// 5) свойство style
		// элемент.style.width="100px";
		elem = document.getElementById('forInnerHtml');
		elem.style.backgroundColor = '#9370DB';


	// 6) classlist
		// атрибуту "class" соответствует свойство classList – это объект для работы с классами.
		// методы classList:
			// 1. elem.classList.contains('class') - возвращает true/false, 
											// в зависимости от того, есть ли у элемента класс
			// 2. elem.classList.add("class") - добавляет класс
			// 3. elem.classList.remove("class") - удаляет класс
			// 4. elem.classList.toggle("class") // если класса class нет, 
												// добавляет его, если есть – удаляет.

// 6. Добавление элемента в DOM
	// Чтобы DOM-узел был показан на странице, его необходимо вставить в document.
	// Созданные элементы вставляются в родительские:
		// 1) элемент_родитель.appendChild(элемент) - добавляет элемент 
									// в конец дочерних элементов элемент_родитель
		var input = document.createElement('input'); // создали узел-элемент <input>
		input.setAttribute('type', 'button'); // добавили атрибут type="button"
		input.setAttribute('value', 'Кнопка'); // добавили атрибут value="Кнопка"
		input.classList.add('btnStyle'); // добавили class="btnStyle"

		var image = document.createElement('img'); // создали элемент <img>
		image.setAttribute('src', 'img/flowers.jpg'); // добавили атрибут src="img/flowers.jpg"
		image.setAttribute('alt', 'flowers'); // добавили атрибут alt="forest"
		image.classList.add('img'); // добавили class="img"

		var div = document.createElement('div');
		div.setAttribute('id', 'btnImg'); // добавили атрибут id="btnImg"
		div.classList.add('findMebyClassName');

		div.appendChild(input); // добавили в созданный <div>, также созданный <input>
		div.appendChild(image); // добавили в созданный <div>, также созданный <image>

		var elemForDiv = document.getElementById('forJs'); // получили доступ к элементу, 
												// в который будем вставлять все остальные
		elemForDiv.appendChild(div); // вставили в него созданный <div>
									// всместе с <input> и <image>

		// 2) элемент_родитель.insertBefore(элемент, сосед_справа) - вставляет элемент 
										// в родительский перед элементом сосед_справа
			// если ходим вставить первым, нужно указать firstChild вторым аргументом


// 7. Элементы можно удалять из родительских:
		// 1) элемент_родитель.removeChild(элемент) - удаляет элемент из элемент_родитель


// 8. Замена элементов:
		// элемент_родитель.replaceChild(новый_элемент, элемент) - среди детей элемента_родителя
						// удаляет элемент и вставляет на его место новый_элемент
	
}());