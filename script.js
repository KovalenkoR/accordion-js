var div_none = document.querySelectorAll('div') 
// Ищем все дивы. И полученный массив присваиваем в переменную div_none

console.log(div_none);
// просто проверка, есть ли массив

 for ( var i= 1; i < div_none.length; i++) {
 	div_none[i].style.display = 'none'
 }
// с помощью этого цикла перебираем весь полученный массив. и каждому диву
// с классом div_none применяем display: none!!!


  var Parag = document.querySelectorAll('h3');
  // Ищем все h3. И полученный массив присваиваем в переменную parag

  	for (var i = 0; i < Parag.length; i++) {
  		// цикл перебирает массив Parag и ищет событие click
  		Parag[i].addEventListener('click',function(e) {
  		// при событии click вызывается функция e
		    let li = e.target.parentElement;
// срабатывает событие click делегируем его на родительский элемент(parentElement)
// 			и записываем все в переменную li
		    div = li.querySelector('div')
 // обьявляем переменную div  и присваиваем ей массив всех div внутри li


			var div_none = document.querySelectorAll('div')
			for ( var i= 0; i < div_none.length; i++){
	 			div_none[i].style.display = 'none'
// этот блок кода скрывае все div_none которые не кликнуты
			 }


    div.style.display = 'block'
    // элементу по которому совершили click присваиваем display:block

  });

  	}
 
