var sampleArr = ['a','b','c','d','e','f','g','h'];

var loops,
	maxItems, // items before pause
	breakTime; // pause time [ms]

maxItems = 3;
breakTime = 3000;
loops = function(i) {
	for (m = i; m < sampleArr.length; m += 1) {
		if (m > i && m % maxItems == 0) {
			(function(ind) {
				console.log('break - ind: ' + ind);
				setTimeout(function() {
					loops(ind);
				}, breakTime);
			})(m);
			break;
		}
		//action for elements
		console.log(sampleArr[m]);
	}
}
loops(0);