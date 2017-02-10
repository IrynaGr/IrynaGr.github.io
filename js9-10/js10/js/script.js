$(document).ready(function() {


  $('.dropdown').hover(function() {
     $('.submenu').slideDown('slow')
  },
    function() {
      $('.submenu').slideUp('slow');
  });

  $('.dropdown_sub').hover(function() {
     $('.sub_submenu').slideDown('slow');
  },
    function() {
     $('.sub_submenu').slideUp('slow');
  });

  $('.dropdown_sub_sub').hover(function() {
     $('.sub_sub_submenu').slideDown('slow');
  },
    function() {
     $('.sub_sub_submenu').slideUp('slow');
  });

$('.submenu_item').mouseenter(function() {
    $(this).animate(1000);
});

$('.submenu_item').mouseleave(function() {
   $(this).animate(1000);
});

})
