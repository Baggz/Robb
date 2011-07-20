// Load ‘Robb.js’
var Robb = require('../src/robb.js');

/**
 * Test ‘isDefined’
 *
 * @param {object} test
 */
exports.isDefined = function(test) {

  var defs = [
    [],
    {},
    function() {},
  ];
  
  defs.forEach(function(def) {
    var res = Robb.isDefined( def );
    test.strictEqual( res, true );
  });

  test.done();

};