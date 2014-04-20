
/**
 * Module dependencies.
 * @api private
 */
var events = require('sewer');
var Store = require('datastore');


/**
 * Expose 'wired'
 */

module.exports = wired;


/**
 * Double bind node element (input type).
 *
 * If data's attribute is not specified, 
 * wired will automatically look for a name
 * attribute.
 * 
 * Examples:
 *
 *   wired(el);
 *   wired(el, 'label');
 *   wired(el, 'label', data);
 *   
 * @param  {Element} node 
 * @param  {String} name 
 * @param  {Object | Datastore} data 
 * @return {Datastore}
 * @api public
 */

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

	var value = store.get(name);
	if(value) node.value = value;

	return store;
}

