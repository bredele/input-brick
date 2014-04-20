var events = require('sewer');
var Store = require('datastore');

/**
 * Expose 'input-brick'
 */

module.exports = wired;



function wired(node, name, data) {
	var store = new Store(data);
	if(typeof name === 'object') {
		data = name;
		name = undefined;
	}
	var change = function(target) {
		name = name || target.getAttribute('name');
		store.set(name, target.value);
	};
	//NOTE: sewer should allow change | keydown | keyup
	events.attach(node, 'change', change);
	events.attach(node, 'keydown', change);
	events.attach(node, 'keyup', change);
	return store;
}


// function model(node, expr) {
// 	var view = this;
// 	ev(node, 'input', function(node) {
// 		view.set(expr, node.value);
// 	});
// };

