$(function () {
   $('.search__button').on('click', pixabaySearch);

    $('.search__input').on('keypress', function (key) {
        if (key.which == 13) {
            pixabaySearch();
        }
    });
});

function pixabaySearch() {
	
    var searchText = $('.search__input').val();
    var key = "4605776-47c196cdc28a189113ffa2b83";
    
    $.ajax({
            url: "https://pixabay.com/api/?key=" + key + "&q=" + searchText + "s&image_type=photo",
            dataType: "jsonp",
            success: function (data) {
                var resultList = $('.result__list');
                resultList.empty();
                if (data.hits.length == 0) {
                    var resultItem = $('<li class="result__item">Ничего не найдено</li>');
                    resultList.append(resultItem);
                } else {
                    $.each(data.hits, function (i, val) {
                        var resultItem = $('<li class="result__item"></li>');
                        var resultItemImg = $("<img src =" + val.previewURL + ">");
                        resultItem.append(resultItemImg);
                        resultList.append(resultItem);
                    });
                }
            },
            
        }
    );
}

function Human() {
    this.name = "Peter";
    this.age = 31;
    this.sex = "male";
    this.height = 175;
    this.weight = 73;
};

function Worker() {
    this.job = 'Company "Shell"';
    this.salary = '800$';
 }

function Student() {
    this.placestuding = 'University';
    this.scholarship = '250 uah';
}

Worker.prototype = new Human();

Worker.prototype.sayWork = function (){
	console.log('I work');
}

Student.prototype = new Human();

Student.prototype.sayWatch = function() {
	console.log ('I watch TV serials');
}

var newWokerAlex = new Worker();
newWokerAlex.name = "Alexandr";

console.log("My name is " + newWokerAlex.name + ".I'm " + newWokerAlex.sex + ". I'm " + newWokerAlex.age + ". I work in " + newWokerAlex.job + " and have " + newWokerAlex.salary + ". " + " My height is " + newWokerAlex.height + ". My weight is " + newWokerAlex.weight + ". ");
newWokerAlex.sayWork();

var newWokerAnn = new Worker();
newWokerAnn.name = "Anna";
newWokerAnn.sex = "female";
newWokerAnn.height = 165;
newWokerAnn.weight = 58;

console.log("My name is " + newWokerAnn.name + ".I'm " + newWokerAnn.sex + ". I'm " + newWokerAnn.age + ". I work in " + newWokerAnn.job + " and have " + newWokerAnn.salary + ". "  + " My height is " + newWokerAnn.height + ". My weight is " + newWokerAnn.weight + ". ");
newWokerAnn.sayWork();

var newStudentVeron = new Student();
newStudentVeron.name = "Veron";
newStudentVeron.age = 21;

console.log("My name is " + newStudentVeron.name + ".I'm " + newStudentVeron.sex + ". I'm " + newStudentVeron.age + ". I study in " + newStudentVeron.placestuding + " and have " + newStudentVeron.scholarship + ". " + " My height is " + newStudentVeron.height + ". My weight is " + newStudentVeron.weight + ". ");
newStudentVeron.sayWatch();

var newStudentTamara = new Student();
newStudentTamara.name = "Tamara";
newStudentTamara.sex = "female";
newStudentTamara.height = 171;
newStudentTamara.weight = 67;
newStudentTamara.age = 19;

console.log("My name is " + newStudentTamara.name + ".I'm " + newStudentTamara.sex + ". I'm " + newStudentTamara.age + ". I study in " + newStudentTamara.placestuding + " and have " + newStudentTamara.scholarship + ". "  + " My height is " + newStudentTamara.height + ". My weight is " + newStudentTamara.weight + ". ");
newStudentTamara.sayWatch();