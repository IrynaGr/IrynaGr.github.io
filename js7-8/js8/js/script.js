	var tooltip = $(".tooltip");
	tooltip.hide();

	$("input").focus(function() {
		tooltip.hide();
		$(this).next(".tooltip").show().delay(3000).fadeOut(1000);
	});

    $("input").hover(function() {
         $(this).next(".tooltip").animate({opacity: "show"}, "slow");
    }, function() {
        $(this).next(".tooltip").stop().animate({opacity: "hide"}, "fast");
    });

    $(".help").on("click", function(e) {
        e.preventDefault();
        tooltip.show().delay(1000).fadeOut(1000);
    });

       





