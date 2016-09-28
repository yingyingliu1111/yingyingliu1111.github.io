$(document).ready(function(){
	$("#blue").one("click", function() {
	  	$("#five-pm-six").animate({"left": "+=810px"}, 600);
	  	$("#five-pm-seven").animate({"left": "+=810px"}, 1000);
	  	$("#five-pm-eight").animate({"left": "+=810px"}, 1500);
	  	$("#five-pm-css").animate({"left": "+=810px"}, 1000);
	});
	
	$("#red").one("click", function() {
	  	$("#five-pm-one").animate({"left": "+=810px"}, 600);
	  	$("#five-pm-two").animate({"left": "+=810px"}, 1300);
	  	$("#five-pm-three").animate({"left": "+=810px"}, 1800);
	  	$("#five-pm-four").animate({"left": "+=810px"}, 1600);
	  	$("#five-pm-five").animate({"left": "+=810px"}, 1000);
	  	$("#five-pm-html").animate({"left": "+=810px"}, 1300);
	});
});


