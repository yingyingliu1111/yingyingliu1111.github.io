$(document).ready(function(){
$("#yellow").one("click", function() {
  	$("#box-one").animate({"left": "+=118%"}, 2500);
  	$("#box-two").animate({"left": "+=118%"}, 2000);
  	$("#box-three").animate({"left": "+=118%"}, 1500);
});

$("#red").click(function() {
  $("#redbar").show("slow");
});
});


