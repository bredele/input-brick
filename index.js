var ev = require('event');

/**
 * Expose 'input-brick'
 */

module.exports = model;

function model(node, expr) {
	var view = this;
	ev(node, 'input', function(node) {
		view.set(expr, node.value);
	});
};


//WE should destroy the listener
// model.destroy = function() {

// };