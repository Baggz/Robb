// Load ‘Robb.js’
var Robb = require('../src/robb.js');

/**
 * Test ‘isLowercase’
 *
 * @param {object} test
 */
exports.isLowercase = function(test) {
  
  var lowercase = [
    ['a'],
    ['abc'],
    ['defgh'],
    ['a', 'b', 'c']
  ];
  
  lowercase.forEach(function(letter) {
    var result = Robb.isLowercase.apply( Robb, letter );
    test.strictEqual( result, true );
  });
  
  test.done();

};