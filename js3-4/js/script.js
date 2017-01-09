var test = {
    title: "Тест по программированию",
    lines: ['Вопрос №1', 'Вопрос №2', 'Вопрос №3'],
    answers: [
        ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'],
        ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'],
        ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3']
    ],
    createTest: function () {
        var wrapper = document.createElement('div');
        wrapper.classList.add('wrapper');
        var body = document.querySelector('body');
        body.appendChild(wrapper);

        var title = document.createElement('h3');
        title.classList.add('title');
        title.innerHTML = this.title;
        wrapper.appendChild(title);

        var list = document.createElement('ol');
        list.classList.add('list');
        wrapper.appendChild(list);

        for (var i = 0; i < this.lines.length; i++) {
            var listLi = document.createElement('li');
            listLi.innerHTML = this.lines[i];
            list.appendChild(listLi);
            listLi.classList.add('menu');

            var listUl = document.createElement('ul');
            listLi.appendChild(listUl);

            for (var j = 0; j < this.answers[i].length; j++) {
                var innerListLi = document.createElement('li');
                innerListLi.classList.add('menu__item');

                var liCheckbox = document.createElement('input');
                liCheckbox.classList.add('checkbox');
                liCheckbox.setAttribute("type", "checkbox");

                var labelCheckbox = document.createElement('label');
                labelCheckbox.classList.add('label');


                var spanCheckbox = document.createElement('span');
                spanCheckbox.classList.add('span');
                spanCheckbox.innerHTML = this.answers[i][j];

                innerListLi.appendChild(labelCheckbox);
                labelCheckbox.appendChild(liCheckbox);
                labelCheckbox.appendChild(spanCheckbox);

                listUl.appendChild(innerListLi);
            }

        }
        var submit = document.createElement('input');
        submit.setAttribute("type", "submit");
        submit.setAttribute("value", "Проверить мои результаты");
        submit.classList.add('submit');
        wrapper.appendChild(submit);

    }
};

test.createTest();










/*var test  =  {
  title: 'Тест по программированию',
  
      topic:  '1. Вопрос №1',
      answer:  'Вариант ответа №1',
      answer:  'Вариант ответа №2',
      answer:  'Вариант ответа №3',
  
  
      topic:  '2. Вопрос №2',
      answer:  'Вариант ответа №1',
      answer:  'Вариант ответа №2',
      answer:  'Вариант ответа №3',
  
  
      topic:  '3. Вопрос №3',
      answer:  'Вариант ответа №1',
      answer:  'Вариант ответа №2',
      answer:  'Вариант ответа №3',
  
}

createTest: function () {
        
        var wrapper = document.createElement('div');
        wrapper.classList.add('wrapper');
        var body = document.querySelector('body');
        body.appendChild(wrapper);

        var title = document.createElement('h1');
        title.classList.add('title');
        title.innerHTML = this.title;
        wrapper.appendChild(title);

        var list = document.createElement('ol');
        list.classList.add('list');
        wrapper.appendChild(list);

        for (var i = 0; i < this.topic.length; i++) {
            var listLi = document.createElement('li');
            listLi.innerHTML = this.topic[i];
            list.appendChild(listLi);
            var listUl = document.createElement('ul');
            listLi.appendChild(listUl);

              for (var k = 0; k < this.answer[i].length; k++) {
                var innerListLi = document.createElement('li');
                innerListLi.classList.add('menu__item');

                var liCheckbox = document.createElement('input');
                liCheckbox.classList.add('checkbox');
                liCheckbox.setAttribute("type", "checkbox");

                var labelCheckbox = document.createElement('label');
                labelCheckbox.classList.add('label');

                innerListLi.appendChild(labelCheckbox);
                labelCheckbox.appendChild(lineCheckbox);

                listUl.appendChild(innerListLi);
            }

        }

        var submit = document.createElement('input');
        submit.setAttribute("type", "submit");
        submit.setAttribute("value", "Проверить мои результаты");
        submit.classList.add('submit');
        wrapper.appendChild(submit);

}
       

    


test.createTest();*/

