'use strict';

$(function() {

  var testObj = {
    Title: 'Тест по программированию',
    questions: [
      {
      quest: 'Вопрос № 1',
      answers: [
            {answer:'Вариант ответа № 1', check: true}, 
            {answer:'Вариант ответа № 2', check: false},
            {answer:'Вариант ответа № 3', check: false}
           ]
      }, 
      {
      quest: 'Вопрос № 2',
      answers: [
            {answer:'Вариант ответа № 1', check: false}, 
            {answer:'Вариант ответа № 2', check: true},
            {answer:'Вариант ответа № 3', check: false}
           ]
      }, 
      {
      quest: 'Вопрос № 3',
      answers: [
            {answer:'Вариант ответа № 1', check: false}, 
            {answer:'Вариант ответа № 2', check: false},
            {answer:'Вариант ответа № 3', check: true}
           ]
      }
    ]
  };


var testStr = JSON.stringify(testObj);//преобразовываем js обьект в JSON строку(JSON формат передачи данных от браузера к серверу и обратно)
localStorage.setItem('progrtest', testStr);//записываем на жесткий диск информацию об обьекте

function createTest(){ // функция теста
var test = localStorage.getItem('progrtest');//получаем обратно наше значение по ключу с хранилища
test = JSON.parse(test);//превращаем в js обьект (распарсили)

var html = $('#progrtest').html();//обьявили переменную и записали html в нее по id все совпавшие элементы
var content = tmpl(html, test);//обьявили переменную и присвоили ей метод tmpl c аргументами html(теги) и распарсенный js обьект тем самым запускаю шаблон
$('body').append(content);//в боди добавляем наш сшаблонизированный html



  function goodResult(){ //функция отрабатывающая появление модального окна при правильном тесте
    $('.window_fon').css('display', 'block').click(function() {//по классу устанавливаем свойство стиля css и при клике запускаем функцию которая предшествует появлению модального окна
      //$('.modal_content').css('display', 'none');//по классу устанавливаем свойство
      $('.window_fon').css('display', 'none');//аналогично
      $('#form-test input:checked').removeAttr('checked');//по классу удаляем свойство выбранного элемента(кнопка активна и светится др цветом)
    });
    $('.modal_result').html('Тест пройден').css('color', 'green');//при включенной функции goodResult по классу в html добавляем текст и свойство
    $('.modal_content').fadeIn(1000);//делаем видимыми элементы эффектом прзрачности
  }

   function poorResult(){
    $('.window_fon').css('display' , 'block').click(function(){
      //$('.modal_content').css('display' , 'none');
      $('.window_fon').css('display' , 'none');
      $('#form-test input:checked').removeAttr('checked');
    });
    $('.modal_result').html('Тест не пройден').css('color' , 'red');
    $('.modal_content').fadeIn(1000);
  }

   $('#check_result').click(function(){//найденный элемент при клике запускает функцию проверки ответов
    var checkedAnswers = $('#form-test input:checked');//обьявляем переменную и присваеваем ей элемент из $коллекции с указаным атрибутом
    var correctAnswers = $('.correct');//в переменную правильных ответов добавляем элемент с классом из $коллекции
    if (checkedAnswers.length == correctAnswers.length) {//используем логический оператор для сравнения ответов на правильность
      var correctNum = 0;//переменная для правильных ответов
      
      for(var k =0; k < checkedAnswers.length; k++) {//циклом проходим по ответам
        if(checkedAnswers[k].getAttribute('class') == 'correct') {//если(к ответу[к] применяем метод который вернет значение атрибута) и сделаем сравнение этого значения с классом на правильность
          correctNum++;//правильные ответы увеличиваем на 1
          }
        }
      if(correctNum == correctAnswers.length) {//сравниваем правильные ответы с переменной в которую записаны правельные ответы
        goodResult();//если равно включается функция тест пройден
      } else {
        poorResult();//иначе тест не пройден
      }
    } else {
      poorResult();//при других вариантах тест не пройден
      
    }
});
}

createTest();

$(document).ready(function(){
  $('.window_fon').click(function(){
    $('#form-test').trigger('reset');
  })
})

});



