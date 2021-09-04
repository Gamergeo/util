/**
 * Merge two method (A tester par rapport au contexte)
 */
$.mergeFunction = function(functionStart, functionEnd) {
	
	return () => {
		if (!$.isUndefined(functionStart)) {
			functionStart.call();
		} 
		
		if (!$.isUndefined(functionEnd)) {
			functionEnd.call();
		}
	}
}