'use strict;'
$(function(){
	
	$('.news__accordion h4:first').addClass('active');
	$('.news__accordion p:not(:first)').hide();

	$('.news__accordion h4').click(function(){
		$(this).next('p').slideToggle('slow')
		.siblings('p:visible').slideUp('slow');
		$(this).toggleClass('active');
		$(this).siblings('h4').removeClass('active');
	});

});


	