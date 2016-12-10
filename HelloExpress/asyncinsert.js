/**
 * http://usejsdoc.org/
 */

var collection = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
var async = function(data, callback) {
	var timeOut = Math.ceil(Math.random);
	setTimeout(function() {
		callback(null, data);
	}, timeOut);
};
collection.forEach(function(elem) {
	console.log('element inserting ' + elem);
	async(elem, function(err, elem) {
		console.log('element inserted ' + elem);
	})
});
