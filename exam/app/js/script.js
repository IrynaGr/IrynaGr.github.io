$(function() {

  function get_images(word) {
    var KEY = '4605776-47c196cdc28a189113ffa2b83';
    var URL = "https://pixabay.com/api/?key=" + KEY + "&q=" + encodeURIComponent(word);
    $.getJSON(URL, function(data){
      if (parseInt(data.totalHits) > 0) {
        var data_grid = tmpl($('#grid-template').html(), {grid: data});
        $('.grid').html(data_grid);
        $('.grid').css("height", "100%");
      } else {
        console.log('No hits');
      }
    });
  }
  function masonry_init() {
    $(".grid").masonry({
      itemSelector: ".grid-item",
      columnWidth: 25,
      percentPosition: true,
    });
  }
  get_images('holiday');
  masonry_init();

  $('.btn').click(function (event) {
    event.preventDefault();
    $('.grid').html('');
    get_images($('.input').val());
    console.log($('input').val());
  });

$( '.input').keypress(function enterText( e ) {
  if( e.keyCode === 13 ) {
    event.preventDefault();
    $('.grid').html('');
    get_images($('.input').val());
  };
})

});
