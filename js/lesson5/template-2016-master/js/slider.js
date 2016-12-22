(function() {
console.log('sdgdsf');
    var h4 = document.createElement('h4');
    var p = document.createElement('p');
    var li1 = document.createElement('li');
    var li2 = document.createElement('li');
    var li3 = document.createElement('li');
    var ul = document.createElement('ul');
    var t1 = document.createTextNode('slide1');
    var t2 = document.createTextNode('slide2');
    var t3 = document.createTextNode('slide3');
    var span1 = document.createElement('span');
    var span2 = document.createElement('span');

    span1.classList.add('fa');
    span1.classList.add('fa-angle-left');
    span1.classList.add('arrow-prev');
       
    span2.classList.add('fa');
    span2.classList.add('fa-angle-right');
    span2.classList.add('arrow-next');
     

    li1.classList.add('slide-1');
    li1.classList.add('active');

    li2.classList.add('slide-2');
    li2.classList.add('active');
    
    li3.classList.add('slide-3');
    li3.classList.add('active');

        li1.appendChild(h4);
            li1.appendChild(t1)
        li1.appendChild(p);

        li2.appendChild(h4);
            li2.appendChild(t2)
        li2.appendChild(p);

        li3.appendChild(h4);
            li3.appendChild(t3)
        li3.appendChild(p);

    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);

    var elem = document.getElementById('slider');
    elem.classList.add('slider');
    elem.appendChild(ul);
    elem.appendChild(span1);
    elem.appendChild(span2);
    



console.log('sdgdsf');
} 
())