$(document).ready(function(){
	$("#blue").one("click", function() {
  	$("#one-pm-blue-one").animate({"left": "+=810px"}, 600);
  	$("#one-pm-blue-two").animate({"left": "+=810px"}, 1000);
});

$("#red").one("click", function() {
  	$("#one-pm-red-one").animate({"left": "+=810px"}, 600);
  	$("#one-pm-red-two").animate({"left": "+=810px"}, 1300);
  	$("#one-pm-red-three").animate({"left": "+=810px"}, 1000);
});

$("#black").click(function() {
  $("#css-typing").show("fast");
});
});


