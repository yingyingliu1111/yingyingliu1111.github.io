
$("#blue").one("click", function() {
  	$("#bblock").animate({"left": "+=580px"}, 600);
  	$("#lblock").animate({"left": "+=580px"}, 1000);
    $("#mblock").animate({"left": "+=790px"}, 1300);
});
	
$("#black").click(function() {
  $("#css-typing").show("fast");
});
     


// ---------------------------------------- timer--------------------------------------//   
$(document).ready(function() {
  setInterval(function() {
    $("#timer").html( + timer.hour + ':' + timer.minutes + ':' + timer.seconds  );
  }, 1000);
  
  
});
