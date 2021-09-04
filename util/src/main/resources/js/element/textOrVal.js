/**
 * Return text or val depending of the element
 */
jQuery.fn.textOrVal = function(a) {

	if (element.is("input") || element.is("select")) {
		return $(this).val(a);
	}

	return $(this).text(a);
};