$(document).ready(function() {
  setInterval(function() {
		if (timer.hour >= 11 && timer.hour < 13) {    
		window.location.href="11am/index.html" 
		} else if (timer.hour >= 13 && timer.hour < 14) {    
		window.location.href="1pm/index.html" 
		} else if (timer.hour >= 14 && timer.hour < 17) {    
		window.location.href="2pm/index.html" 
		} else if (timer.hour >= 17 && timer.hour < 21) {    
		window.location.href="5pm/index.html" 
		} else if (timer.hour >= 21 && timer.hour < 23) {    
		window.location.href="9pm/index.html" 
		}
		}, 1000);
 });
