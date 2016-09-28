$(document).ready(function(){
	$("#red").one("click", function() {
	  	$("tr td").animate({"left": "+=150%"}, 4600);
	  	$("tr th").animate({"left": "+=150%"}, 4600);
	});
	
	$("#black").click(function() {
	  	$("#css-typing").show("fast");
});
});


