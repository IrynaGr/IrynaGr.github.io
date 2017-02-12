$(document).ready(function() {
        $( '.dropdown' ).hover(
            function(){
                $(this).children('.submenu').stop().slideDown('slow');
            },
            function(){
                $(this).children('.submenu').stop().slideUp('slow');
            }
        );
    });


