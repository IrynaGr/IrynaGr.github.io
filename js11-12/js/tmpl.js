(function(){
  var cache = {};

  this.tmpl = function tmpl(str, data){
    // Figure out if we're getting a template, or if we need to
    // load the template - and be sure to cache the result.
    var fn = !/\W/.test(str) ?
      cache[str] = cache[str] ||
        tmpl(document.getElementById(str).innerHTML) :

      // Generate a reusable function that will serve as a template
      // generator (and which will be cached).
      new Function("obj",
        "var p=[],print=function(){p.push.apply(p,arguments);};" +

        // Introduce the data as local variables using with(){}
        "with(obj){p.push('" +

        // Convert the template into pure JavaScript
        str
          .replace(/[\r\t\n]/g, " ")
          .split("<%").join("\t")
          .replace(/((^|%>)[^\t]*)'/g, "$1\r")
          .replace(/\t=(.*?)%>/g, "',$1,'")
          .split("\t").join("');")
          .split("%>").join("p.push('")
          .split("\r").join("\\'")
      + "');}return p.join('');");

    // Provide some basic currying to the user
    return data ? fn( data ) : fn;
  };
})();

$(function(){

  var template = $('#template').html();

  var articles = [
    {
      name: 'ГРИНЧАК ИРИНА ВЛАДИМИРОВНА',
      status: 'Государственный служащий (на данный момент в отпуске по уходу за ребенком)',
      reason1: 'надоела бумажная работа',
      reason2: 'хочу работать дома и сама устанавливать себе рабочий график',
      reason3: 'мне это интересно',
      tel: '+380662402878',
      vk: 'https://www.facebook.com/irina.dreshpan',
      feedback: 'Даже нечего предложить'
    }
  ];

  var content = tmpl(template, {
    data: articles
  });

  $('body').append(content);

});