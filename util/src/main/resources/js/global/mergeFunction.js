/**
 * Merge two method (A tester par rapport au contexte)
 */
$.mergeFunction = function(functionStart, functionEnd) {
	
	return () => {
		if (!Util.isUndefined(functionStart)) {
			functionStart.call();
		} 
		
		if (!Util.isUndefined(functionEnd)) {
			functionEnd.call();
		}
		
	}
}