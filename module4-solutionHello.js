var speakHGB = (function ()  {
	
	return function (x) {
		for (var i = 0 ; i <= x.length -1 ; i++) {
			if (x[i].charAt(0)=='J' || x[i].charAt(0)=='j') {
				word = "GoodBye";
				speak(word,x[i]);
			}

			else { 
				word = "Hello";
				speak(word,x[i]);
			}
		}
	}
})();

speakHGB(names) ;