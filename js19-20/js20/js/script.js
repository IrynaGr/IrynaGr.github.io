var _url = "https://rawgit.com/goit-fe/markup_fe2o/master/js_19-20/data.json";

// создать массив скилов
$.getJSON(_url, function(dataSkills){
		//dataSkills = _.union(_.flatten(_.map(dataSkills, 'skills')),_.toLower).sort();
		//var res = dataSkills;
		var skills = _.map(dataSkills, 'skills');
		var dataSkills = _.sortBy(_.uniq(_.flatten(skills)),_.toLower);
		console.log('Массив скиллов отсортированных по алфавиту', dataSkills);
	});

// создать массив имён с количесвом друзей
$.getJSON(_url, function(dataName){
		dataName = _.map(_.sortBy(dataName, function (obj){return obj.friends.length;}), 'name');
		//var res = dataName;
		console.log('Массив имен отсортированных по кол-ву друзей', dataName);
	});	

// Массив всех друзей всех пользователей	
$.getJSON(_url, function(dataFriends){
		dataFriends = _.uniq(_.map(_.flatten(_.map(dataFriends,'friends')),'name')).sort();
		//var res = dataFriends;
		console.log('Массив друзей пользователей', dataFriends);
	});		