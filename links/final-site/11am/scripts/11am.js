$(document).ready(function(){
	$("#black").one("click", function() {
	  	$("#elevenpm-line").animate({"left": "+=110%"}, 600);
	});

	$("#yellow").one("click", function() {
	  	$("#elevenpm-one").animate({"left": "+=110%"}, 600);
	  	$("#elevenpm-three").animate({"left": "+=110%"}, 1000);
	  	$("#elevenpm-four").animate({"left": "+=110%"}, 1500);
	  	$("#elevenpm-eight").animate({"left": "+=110%"}, 1000);
	  	$("#elevenpm-eleven").animate({"left": "+=110%"}, 1000);
	});
	
	$("#blue").one("click", function() {
	  	$("#elevenpm-two").animate({"left": "+=110%"}, 600);
	  	$("#elevenpm-six").animate({"left": "+=110%"}, 1300);
	  	$("#elevenpm-seven").animate({"left": "+=110%"}, 1800);
	  	$("#elevenpm-nine").animate({"left": "+=110%"}, 1600);
	  	$("#elevenpm-ten").animate({"left": "+=110%"}, 1000);
	  	$("#elevenpm-tewlf").animate({"left": "+=110%"}, 1300);
	  	$("#elevenpm-fourteen").animate({"left": "+=110%"}, 2300);
	  	$("#elevenpm-fifteen").animate({"left": "+=110%"}, 1300);
	  	$("#elevenpm-seventeen").animate({"left": "+=110%"}, 1300);
	  	$("#elevenpm-eighteen").animate({"left": "+=110%"}, 1700);
	  	$("#elevenpm-nighteen").animate({"left": "+=110%"}, 1300);
	});
/*
	$( "#light-yellow" ).mouseenter(function() {
	      $( "#scanner" ).dequeue().stop();
	      $("#scanner").animate({left: '100%'}, 1500);
	  })
	  .mouseleave(function() {
	      $("#scanner").animate({left:-200}, 500);
	  });
*/
});


