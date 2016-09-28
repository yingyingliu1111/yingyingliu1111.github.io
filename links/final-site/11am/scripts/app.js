$(document).ready(function(){     
	// $("body").html(timer.month + '/' + timer.date + '/' + timer.year + ' ' + timer.hour + ':' + timer.minutes + ':' + timer.seconds + ' ' + timer.meridiem + ' ' + timer.day);
  setInterval(function() {
    $("#timer").html( + timer.hour + ':' + timer.minutes + ':' + timer.seconds  );
  }, 1000);
});
